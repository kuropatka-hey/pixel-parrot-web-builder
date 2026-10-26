import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import cover from "@/assets/zalesie/zalesie-cover.jpg.asset.json";
import d1 from "@/assets/zalesie/zalesie-d1.jpg.asset.json";
import d2 from "@/assets/zalesie/zalesie-d2.jpg.asset.json";
import main from "@/assets/zalesie/zalesie-main-orig.png.asset.json";
import paletteWide from "@/assets/zalesie/zalesie-palette-wide.webp.asset.json";
import notebooks from "@/assets/zalesie/zalesie-notebooks-orig.png.asset.json";
import badge from "@/assets/zalesie/zalesie-badge-orig.png.asset.json";
import cards from "@/assets/zalesie/zalesie-cards-orig.png.asset.json";
import pins from "@/assets/zalesie/zalesie-pins-hq.jpg.asset.json";
import hoodie from "@/assets/zalesie/zalesie-hoodie-hq.jpg.asset.json";
import shoppers from "@/assets/zalesie/zalesie-shoppers-hq.jpg.asset.json";
import textile from "@/assets/zalesie/zalesie-textile-hq.jpg.asset.json";
import envelope from "@/assets/zalesie/zalesie-envelope-hq.jpg.asset.json";
import bags from "@/assets/zalesie/zalesie-bags-hq.jpg.asset.json";
import expo from "@/assets/zalesie/zalesie-expo-hq.jpg.asset.json";
import set from "@/assets/zalesie/zalesie-set-orig.png.asset.json";

export const Route = createFileRoute("/cases/zalesie")({
  head: () => ({
    meta: [
      { title: "Залесье — кейс фирменной графики | Милана Землянская" },
      { name: "description", content: "Модульная система корпоративной графики для АПХ «Залесье»: конструктор из квадратов, иконки направлений, носители и выставки." },
      { property: "og:title", content: "ЗАЛЕСЬЕ — кейс фирменной графики" },
      { property: "og:description", content: "Как объединить пять направлений агрохолдинга в одну визуальную систему в рамках существующего стиля." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Zalesie,
});

const meta = [
  ["Проект", "АПХ «Залесье» — один из крупнейших агропромышленных холдингов в России (Калининградская область)."],
  ["Моя роль", "Graphic Designer — аудит стиля, разработка концепции, разработка и верстка графики, адаптация на носители, гайдлайны."],
  ["Сложность", "Рамки существующего стиля. Объединить пять разных направлений. Консервативная аудитория 38–43 года."],
  ["Результат", "Масштабируемая модульная дизайн-система для внутренней навигации и упрощения внешнего нетворкинга."],
];

const P = "text-lg md:text-xl text-muted-foreground";
const LABEL = "font-mono text-sm uppercase text-primary";

function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden border bg-placeholder transition-colors duration-150 hover:border-primary ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

function Chapter({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b p-6 py-16 md:p-16 md:py-24">
      <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">{title}</h2>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Divider({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="border-b">
      <img src={src} alt={alt} loading="lazy" className="h-56 w-full object-cover md:h-80" />
    </section>
  );
}

const icons = [
  ["Корова", "Животноводство"],
  ["Бутылка молока", "Переработка молока"],
  ["Яблоко", "Садоводство"],
  ["Колос", "Растениеводство"],
  ["ДНК", "Лаборатория и генетика"],
];

const directions = [
  ["5", "направлений холдинга собраны в одну систему"],
  ["4", "чистых цвета в расширенной палитре"],
  ["5", "смысловых иконок закреплены за секторами"],
];

const resultCards = [
  ["Модульность", "Система собирается из квадратов и масштабируется без переработки стиля."],
  ["Навигация", "Иконки подразделений считываются с первой секунды на визитках и бейджах."],
  ["Мерч", "Паттерны ложатся на блокноты, шопперы, худи и пакеты без изменений."],
  ["Выставки", "Модули собираются в объёмные фотозоны для отраслевых мероприятий."],
];

function Zalesie() {
  return (
    <div className="case-forest min-h-screen">
      <div className="mx-auto max-w-7xl border-x">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-6 py-6 md:px-16">
          <Link to="/" hash="cases" className="font-display font-bold hover:text-primary">← Назад к проектам</Link>
        </header>

        {/* Обложка */}
        <section className="grid border-b md:grid-cols-2">
          <div className="border-b p-6 py-16 md:border-b-0 md:border-r md:p-16 md:py-24">
            <h1 className="text-6xl font-bold leading-none tracking-tighter md:text-8xl">ЗАЛЕСЬЕ</h1>
          </div>
          <dl className="grid">
            {meta.map(([k, v]) => (
              <div key={k} className="grid gap-2 border-b p-6 last:border-b-0 md:grid-cols-[9rem_1fr] md:px-12 md:py-8">
                <dt className={LABEL}>{k}</dt>
                <dd className={P}>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-b p-6 md:p-16">
          <Img src={cover.url} alt="Центральная иллюстрация Залесья: сады, мельница, поля и иконки направлений" className="aspect-[1.28/1] shadow-brutal" />
        </section>

        <Chapter title="Контекст и бизнес-задача">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase text-muted-foreground">О КОМПАНИИ </p>
              <p className={P}>АПХ «Залесье» — один из крупнейших агропромышленных холдингов России. Компания включает пять секторов: животноводство, переработка молока, растениеводство, садоводство и лаборатория.</p>
            </div>
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase text-muted-foreground">ЗАДАЧА</p>
              <p className={P}>Нужна была универсальная система корпоративной графики, которая визуально объединит и покажет разнопрофильные сектора. Графика должна отражать идеи компании, быть понятной и легко адаптироваться на любые носители.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Работать нужно было внутри рамок существующего стиля: цветовая природная гамма, чистая верстка, акцент на натуральности.",
              "Отразить пять разных направлений, от генетики до садов, в одном визуальном языке для консервативной аудитории 38–43 лет.",
            ].map((t, k) => (
              <div key={k} className="border p-8 transition-colors duration-150 hover:border-primary">
                <p className="font-display text-6xl font-bold text-primary">0{k + 1}</p>
                <p className="mt-2 font-display text-lg font-bold">Вызов {k + 1}</p>
                <p className={`mt-4 ${P}`}>{t}</p>
              </div>
            ))}
          </div>
        </Chapter>

        <Divider src={d1.url} alt="Поле Залесья во время уборки урожая, вид сверху" />

        <Chapter title="Аудит текущего стиля">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase text-muted-foreground">Что есть</p>
              <p className={P}>Я проанализировала существующий стиль холдинга, сайт, корпоративные сети, айдентику. Базовый визуал транслировал ценности и идеи компании: натуральность, чистый вкус, доверие и уверенность.</p>
            </div>
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase text-muted-foreground">Чего не хватало</p>
              <p className={P}>Стилю не хватало гибкости для носителей, а департаменты никак не разделялись визуально. Требовалось освежить коммуникацию, добавив динамики, но не разрушая фундамент.</p>
            </div>
          </div>
        </Chapter>

        <Divider src={d2.url} alt="Туманное поле на рассвете" />

        <section className="border-b p-6 py-16 md:p-16 md:py-24">
          <p className="max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">Концепция «конструктора»</p>
          <Img src={main.url} alt="Логотип Залесья и модульная иллюстрация из квадратов" className="mt-12 aspect-[1.28/1]" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <p className={P}>Основой системы стала модульная сетка из квадратов — прямое олицетворение объединения: разные, глубоко индивидуальные сектора холдинга собираются воедино в один слаженный механизм.</p>
            <p className={P}>Минималистичные, приятные глазу образы, закреплённые за каждым сектором холдинга. Центральная иллюстрация — ядро графики: сады, фермерские постройки, поля и силосные башни, мини-копии реальных объектов холдинга. По краям, как детали конструктора, собираются иконки всех направлений.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {icons.map(([t, d], k) => (
              <div key={t} className="border p-6 transition-colors duration-150 hover:border-primary">
                <p className="font-mono text-xs text-primary">0{k + 1}</p>
                <p className="mt-2 font-display text-lg font-bold">{t}</p>
                <p className={`mt-2 ${P}`}>{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Img src={shoppers.url} alt="Три шоппера с паттерном" className="aspect-[1.28/1]" />
            <Img src={textile.url} alt="Шоппер с центральной иллюстрацией крупным планом" className="aspect-[1.28/1]" />
          </div>
        </section>


        <section className="border-b p-6 py-16 md:p-16 md:py-24">
          <p className="max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">Цветовой код</p>
          <p className={`${P} mt-8`}>Базовая строгая палитра расширена до четырёх чистых цветов, которые транслируют эстетику и экологичность сельского хозяйства: зелёный — трава и деревья, жёлтый — поля и пшеница, голубой — небо.</p>
          <Img src={paletteWide.url} alt="Палитра Залесья: природные текстуры и подобранные к ним цвета" className="mt-12 aspect-[1920/645]" />
        </section>

        <Chapter title="Иконки как навигация">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Символ подразделения</h3>
              <p className={P}>На визитках и бейджах топ-менеджеров вместо общего логотипа — крупный символ их подразделения. Директор по животноводству — корова, директор лаборатории — ДНК, генеральный директор — главный символ холдинга, колос.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Польза для бизнеса</h3>
              <p className={P}>Решение упрощает нетворкинг на отраслевых выставках: зона ответственности каждого руководителя считывается с первой секунды.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Img src={cards.url} alt="Визитки руководителей с символами подразделений" className="aspect-[1.28/1]" />
            <Img src={badge.url} alt="Бейдж генерального директора с колосом" className="aspect-[1.28/1]" />
          </div>
        </Chapter>

        <Chapter title="Адаптация и масштабируемость">
          <p className={`${P} max-w-4xl`}>Модульный формат обеспечил гибкость графики: паттерны в сборе ложатся на корпоративные блокноты, шопперы, мерч и объёмные выставочные фотозоны.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Img src={set.url} alt="Комплект корпоративных носителей Залесья" className="aspect-[1.28/1] md:col-span-2 md:row-span-2 md:aspect-auto md:h-full" />
            <Img src={envelope.url} alt="Конверт с паттерном" className="aspect-[1.28/1]" />
            <Img src={hoodie.url} alt="Худи с иллюстрацией" className="aspect-[1.28/1]" />
            <Img src={notebooks.url} alt="Корпоративные блокноты и закладки" className="aspect-[1.28/1]" />
            <Img src={pins.url} alt="Значки с иконками направлений" className="aspect-[1.28/1]" />
            <Img src={bags.url} alt="Пакеты светлый и тёмный" className="aspect-[1.28/1]" />
            <Img src={expo.url} alt="Выставочная фотозона из модулей" className="aspect-[2332/1824] md:col-span-3" />
          </div>
        </Chapter>

        <Chapter title="Результат">
          <p className={`${P} max-w-3xl`}>Разработана масштабируемая модульная дизайн-система, которая объединила пять направлений холдинга в рамках существующего стиля и закрыла задачи внутренней навигации, брендирования мерча и выставочных пространств.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {resultCards.map(([t, d]) => (
              <div key={t} className="border p-8 transition-colors duration-150 hover:border-primary">
                <p className="font-display text-lg font-bold">{t}</p>
                <p className={`mt-3 ${P}`}>{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border p-8">
            <p className={P}><span className="font-bold text-foreground">Статус:</span> система собрана и описана в брендбуке.</p>
          </div>
        </Chapter>

        <div className="p-6 md:p-16">
          <Link to="/" hash="cases" className="btn">← Назад к проектам</Link>
        </div>
      </div>
    </div>
  );
}
