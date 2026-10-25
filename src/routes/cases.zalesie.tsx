import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import cover from "@/assets/zalesie/zalesie-cover.jpg.asset.json";
import d1 from "@/assets/zalesie/zalesie-d1.jpg.asset.json";
import d2 from "@/assets/zalesie/zalesie-d2.jpg.asset.json";
import d3 from "@/assets/zalesie/zalesie-d3.jpg.asset.json";
import main from "@/assets/zalesie/zalesie-main.jpg.asset.json";
import palette from "@/assets/zalesie/zalesie-palette.jpg.asset.json";
import notebooks from "@/assets/zalesie/zalesie-notebooks.jpg.asset.json";
import badge from "@/assets/zalesie/zalesie-badge.jpg.asset.json";
import cards from "@/assets/zalesie/zalesie-cards.jpg.asset.json";
import pins from "@/assets/zalesie/zalesie-pins.jpg.asset.json";
import hoodie from "@/assets/zalesie/zalesie-hoodie.jpg.asset.json";
import shoppers from "@/assets/zalesie/zalesie-shoppers.jpg.asset.json";
import textile from "@/assets/zalesie/zalesie-textile.jpg.asset.json";
import envelope from "@/assets/zalesie/zalesie-envelope.jpg.asset.json";
import bags from "@/assets/zalesie/zalesie-bags.jpg.asset.json";
import expo from "@/assets/zalesie/zalesie-expo.jpg.asset.json";
import set from "@/assets/zalesie/zalesie-set.jpg.asset.json";

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
  ["Моя роль", "Graphic Designer (аудит стиля, разработка концепции, система иконографики, вёрстка паттернов, адаптация на носители, брендбук)."],
  ["Сложность", "Жёсткие рамки существующего стиля. Объединить пять разных направлений — от генетики до садов — для консервативной аудитории 38–43 лет."],
  ["Результат", "Масштабируемая модульная дизайн-система («конструктор») для навигации, мерча и выставочных пространств."],
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

function Zalesie() {
  return (
    <div className="case-cream min-h-screen">
      <div className="mx-auto max-w-7xl border-x">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-6 py-6 md:px-16">
          <Link to="/" hash="cases" className="font-display font-bold hover:text-primary">← Назад к проектам</Link>
        </header>

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

        <Chapter title="Контекст и задача">
          <div className="grid gap-12 md:grid-cols-2">
            <p className={P}>АПХ «Залесье» — один из крупнейших агропромышленных холдингов России. Экосистема компании включает пять направлений: животноводство, переработку молока («Залесский фермер», «Фермы Залесья»), растениеводство, садоводство («Сады Залесья») и собственную лабораторию генетики и ветеринарных исследований.</p>
            <p className={P}>Бизнес-задача — универсальная система корпоративной графики, которая визуально объединит разрозненные сектора. Язык должен отражать масштаб компании, быть понятным ядру коллектива (сотрудники 38–43 лет) и легко адаптироваться на любые носители.</p>
          </div>
        </Chapter>

        <Divider src={d1.url} alt="Поле Залесья во время уборки урожая, вид сверху" />

        <Chapter title="Аудит текущего стиля">
          <div className="grid gap-12 md:grid-cols-2">
            <p className={P}>Я проанализировала существующий стиль холдинга: сайт, корпоративные сети, айдентику. Базовый визуал транслировал строгую стабильность классического B2B-агрогиганта: глубокий хвойно-зелёный, консервативная типографика, логотип с золотым колосом.</p>
            <p className={P}>Стилю не хватало гибкости для современных носителей, а департаменты никак не разделялись визуально. Требовалось освежить и «очеловечить» коммуникацию, добавив динамики, но не разрушая строгий фундамент, к которому привыкла аудитория.</p>
          </div>
        </Chapter>

        <Divider src={d2.url} alt="Туманное поле на рассвете" />

        <section className="border-b p-6 py-16 md:p-16 md:py-24">
          <p className="max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">Концепция «конструктора»</p>
          <div className="mt-16 grid items-end gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <Img src={main.url} alt="Логотип Залесья и модульная иллюстрация из квадратов" className="aspect-[1.28/1]" />
            <p className={P}>Основой системы стала модульная сетка из квадратов — прямое олицетворение объединения: разные, глубоко индивидуальные сектора холдинга собираются воедино в один слаженный механизм.</p>
          </div>

          <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Система смысловых иконок</h3>
              <p className={P}>Минималистичные, приятные глазу образы, закреплённые за каждым сектором холдинга.</p>
            </div>
            <Img src={pins.url} alt="Значки с иконками: корова, яблоко, ДНК, бутылка молока, колос" className="aspect-[1.28/1]" />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-5">
            {icons.map(([t, d], k) => (
              <div key={t} className="border p-6 transition-colors duration-150 hover:border-primary">
                <p className="font-mono text-xs text-primary">0{k + 1}</p>
                <p className="mt-2 font-display text-lg font-bold">{t}</p>
                <p className={`mt-2 ${P}`}>{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Центральная иллюстрация</h3>
              <p className={P}>Сборный пейзаж — ядро графики: сады, фермерские постройки, поля и силосные башни, мини-копии реальных объектов холдинга. По краям, как детали конструктора, собираются иконки всех направлений.</p>
            </div>
            <Img src={textile.url} alt="Центральная иллюстрация на текстиле крупным планом" className="aspect-[1.28/1]" />
          </div>
        </section>

        <Divider src={d3.url} alt="Колосья пшеницы крупным планом" />

        <Chapter title="Архитектура графики">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Цветовой код</h3>
              <p className={P}>Базовая строгая палитра расширена до четырёх чистых цветов, которые транслируют эстетику и экологичность сельского хозяйства: зелёный — трава и деревья, жёлтый — поля и пшеница, голубой — небо.</p>
            </div>
            <Img src={palette.url} alt="Расширенная палитра Залесья" className="aspect-[1.28/1]" />
          </div>

        </Chapter>

        <Chapter title="Адаптация и масштабируемость">
          <p className={`${P} max-w-3xl`}>Модульный формат обеспечил гибкость графики: паттерны в сборе ложатся на корпоративные блокноты, шопперы, мерч и объёмные выставочные фотозоны.</p>
          <div className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-[1.9fr_1fr]">
              <Img src={notebooks.url} alt="Корпоративные блокноты и закладки" className="aspect-[1.28/1]" />
              <div className="grid gap-6">
                <Img src={envelope.url} alt="Конверт с паттерном" className="aspect-[1.28/1]" />
                <Img src={hoodie.url} alt="Худи с иллюстрацией" className="aspect-[1.28/1]" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Img src={shoppers.url} alt="Шопперы с паттерном" className="aspect-[1.28/1]" />
              <Img src={bags.url} alt="Пакеты светлый и тёмный" className="aspect-[1.28/1]" />
            </div>
            <Img src={expo.url} alt="Выставочная фотозона из модулей" className="aspect-[1.5/1]" />
          </div>
        </Chapter>

        <Chapter title="Иконки как навигация">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <p className={P}>На визитках и бейджах топ-менеджеров вместо общего логотипа — крупный символ их подразделения. Директор по животноводству — корова, директор лаборатории — ДНК, генеральный директор — главный символ холдинга, колос.</p>
            </div>
            <Img src={cards.url} alt="Визитки руководителей с символами подразделений" className="aspect-[1.28/1]" />
          </div>
          <div className="mt-16 grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Польза для бизнеса</h3>
              <p className={P}>Решение упрощает нетворкинг на отраслевых выставках: зона ответственности каждого руководителя считывается с первой секунды.</p>
            </div>
            <Img src={badge.url} alt="Бейдж генерального директора с колосом" className="aspect-[1.28/1]" />
          </div>
        </Chapter>

        <Chapter title="Результат">
          <p className={`${P} max-w-3xl`}>Разработана масштабируемая модульная дизайн-система, которая объединила пять направлений холдинга в рамках существующего стиля и закрыла задачи внутренней навигации, брендирования мерча и выставочных пространств.</p>
          <Img src={set.url} alt="Комплект корпоративных носителей Залесья" className="mt-12 aspect-[1.28/1]" />
        </Chapter>

        <div className="p-6 md:p-16">
          <Link to="/" hash="cases" className="btn">← Назад к проектам</Link>
        </div>
      </div>
    </div>
  );
}
