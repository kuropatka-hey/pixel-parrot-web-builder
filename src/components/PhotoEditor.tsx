import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";

/**
 * Режим замены фото: включает плавающую кнопку в углу экрана.
 * В этом режиме клик по любому фото открывает выбор файла —
 * новое фото сразу встаёт на место старого.
 * Замены хранятся в браузере (IndexedDB) и переживают перезагрузку страницы,
 * но видны только в этом браузере.
 */

const DB_NAME = "milana-photo-overrides";
const STORE = "images";
let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore(STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  return dbPromise;
}

async function idbGetAll(): Promise<Record<string, string>> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const keysReq = tx.objectStore(STORE).getAllKeys();
    const valsReq = tx.objectStore(STORE).getAll();
    tx.oncomplete = () => {
      const out: Record<string, string> = {};
      keysReq.result.forEach((k, i) => {
        out[String(k)] = String(valsReq.result[i]);
      });
      resolve(out);
    };
    tx.onerror = () => reject(tx.error);
  });
}

async function idbSet(key: string, value: string): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function idbClear(): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

type PhotoEditorContextValue = {
  editMode: boolean;
  toggleEditMode: () => void;
  overrides: Record<string, string>;
  replacePhoto: (src: string, file: File) => Promise<void>;
  resetAll: () => Promise<void>;
};

const PhotoEditorContext = createContext<PhotoEditorContextValue | null>(null);

export function PhotoOverridesProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    idbGetAll()
      .then((all) => {
        if (!cancelled) setOverrides(all);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const replacePhoto = useCallback(async (src: string, file: File) => {
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
    try {
      await idbSet(src, dataUrl);
    } catch {
      /* даже если хранилище недоступно — показываем замену до перезагрузки */
    }
    setOverrides((prev) => ({ ...prev, [src]: dataUrl }));
  }, []);

  const resetAll = useCallback(async () => {
    try {
      await idbClear();
    } catch {
      /* ignore */
    }
    setOverrides({});
  }, []);

  const toggleEditMode = useCallback(() => setEditMode((v) => !v), []);

  const value = useMemo(
    () => ({ editMode, toggleEditMode, overrides, replacePhoto, resetAll }),
    [editMode, toggleEditMode, overrides, replacePhoto, resetAll],
  );

  return <PhotoEditorContext.Provider value={value}>{children}</PhotoEditorContext.Provider>;
}

function usePhotoEditorContext(): PhotoEditorContextValue | null {
  return useContext(PhotoEditorContext);
}

/** Клик по фото в режиме замены открывает выбор файла. */
function pickFile(replacePhoto: (src: string, file: File) => Promise<void>, src: string) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = () => {
    const file = input.files?.[0];
    if (file) void replacePhoto(src, file);
  };
  input.click();
}

type EditableImageProps = Omit<ComponentProps<"img">, "src"> & { src: string };

/** Обычное <img>, которое в режиме замены кликается и подменяется выбранным файлом. */
export function EditableImage({ src, alt, className = "", title, ...rest }: EditableImageProps) {
  const ctx = usePhotoEditorContext();
  const current = ctx?.overrides[src] ?? src;
  const editable = Boolean(ctx?.editMode);
  const replacePhoto = ctx?.replacePhoto;

  return (
    <img
      {...rest}
      src={current}
      alt={alt}
      title={editable ? "Нажмите, чтобы заменить фото" : title}
      onClick={editable && replacePhoto ? () => pickFile(replacePhoto, src) : rest.onClick}
      className={
        editable
          ? `${className} cursor-pointer hover:outline hover:outline-2 hover:-outline-offset-4 hover:outline-primary`
          : className
      }
    />
  );
}

/** Плавающая кнопка режима замены фото. */
export function PhotoEditorToggle() {
  const maybeCtx = usePhotoEditorContext();
  if (!maybeCtx) return null;
  const ctx = maybeCtx;
  const hasOverrides = Object.keys(ctx.overrides).length > 0;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex gap-2">
      {ctx.editMode && hasOverrides ? (
        <button
          type="button"
          onClick={() => {
            if (window.confirm("Вернуть все оригинальные фото?")) void ctx.resetAll();
          }}
          className="border bg-background px-3 py-2 font-mono text-xs uppercase text-foreground transition-colors duration-150 hover:border-primary"
        >
          Сбросить фото
        </button>
      ) : null}
      <button
        type="button"
        onClick={ctx.toggleEditMode}
        className={
          ctx.editMode
            ? "bg-primary px-3 py-2 font-mono text-xs uppercase text-primary-foreground"
            : "border bg-background px-3 py-2 font-mono text-xs uppercase text-foreground transition-colors duration-150 hover:border-primary"
        }
      >
        {ctx.editMode ? "Готово" : "Заменить фото"}
      </button>
    </div>
  );
}
