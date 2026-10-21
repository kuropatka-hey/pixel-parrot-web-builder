import { createFileRoute, Link } from "@tanstack/react-router";
import relumoCover from "@/assets/relumo/relumo-07.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Милана Землянская — Brand & Communication Designer" },
      { name: "description", content: "Mid+/Senior бренд-дизайнер: визуальные системы, AI-пайплайны, препресс. HoReCa, ритейл, B2B." },
      { property: "og:title", content: "Милана Землянская — Brand Designer" },
      { property: "og:description", content: "Бренд-дизайн и визуальные системы. Без воды и случайных решений." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TG = "https://t.me/";
const MAIL = "mailto:hello@example.com";
const CV = "#";

const exp = [
  { t: "Образование и база", c: "Классическая художественная школа и профильный колледж по специальности «Графический дизайн». Глубокое академическое понимание композиции, колористики и работы с паттернами." },
  { t: "Индустриальный опыт", c: "Опыт работы ведущим дизайнером на проектах в сфере HoReCa (рестораны, лаунж-бары). Полный цикл ведения проектов: от создания визуального кода и леттеринга до контроля тиражей на производстве." },
];
const stack = [
  { t: "Вектор и Проектирование", c: "Figma, Adobe Illustrator, InDesign, Photoshop, Tilda. Создание сложных векторных иллюстраций, UI-компонентов и многостраничной верстки." },
  { t: "AI-визуализация", c: "Midjourney, Stable Diffusion. Глубокий промпт-инжиниринг для генерации 4K/8K рендеров, настройка реалистичного студийного света и сложных текстур (стекло, металл, ткань)." },
  { t: "Производство и препресс", c: "100% готовность к печати. Перевод в CMYK/Pantone, векторные контуры для УФ-лака и тиснения, контроль цветопроб." },
];
const cases = [
  { n: "Relumo", img: relumoCover.url, to: "/cases/relumo", c: "B2B-стартап. Айдентика, паттерны, гайдлайны. Метафора призмы. Принято без правок советом фаундеров.", tags: ["B2B", "Identity", "AI-assisted"] },
  { n: "Цмокі", c: "Премиальный лаунж-бар. Модульные сетки, навигация, дизайн упаковки со снижением затрат на печать.", tags: ["HoReCa", "Packaging", "Pre-press"] },
  { n: "Кейс 03", c: "Скоро.", tags: ["TBA"] },
  { n: "Кейс 04", c: "Скоро.", tags: ["TBA"] },
];
const steps = [
  ["Анализ", "Выявление ограничений (бюджет печати, ТЗ производства, контекст ниши)."],
  ["Метафора", "Разработка смыслового ядра. Отказ от банальных образов (напр. лампочки для света)."],
  ["Система", "Построение сетки, типографической пары, цветового кодирования. Адаптивность носителей."],
  ["Внедрение", "Передача исходников, интерактивных гайдлайнов и готового препресса без возвратов из типографии."],
];

function Title({ children }: { children: string }) {
  return (
    <div className="border-b px-6 py-16 md:px-16 md:py-24">
      <h2 className="text-3xl font-bold md:text-5xl">{children}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="mx-auto max-w-7xl border-x">
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b bg-background px-6 py-6 md:px-16">
        <a href="#top" className="font-display font-bold">Милана Землянская <span className="text-muted-foreground">/ Бренд дизайнер</span></a>
        <nav className="flex items-center gap-8 text-sm font-semibold">
          <a href="#experience" className="hidden hover:text-primary sm:inline">Опыт</a>
          <a href="#stack" className="hidden hover:text-primary sm:inline">Стек</a>
          <a href="#process" className="hidden hover:text-primary sm:inline">Процесс</a>
          <a href="#cases" className="hidden hover:text-primary sm:inline">Кейсы</a>
          <a href={CV} className="btn bg-foreground py-2 text-background">Скачать CV</a>
        </nav>
      </header>

      <section id="top" className="border-b">
        <div className="px-6 py-24 md:px-16 md:py-40">
          <p className="mb-6 font-mono text-sm text-muted-foreground">middle</p>
          <h1 className="max-w-5xl text-5xl font-bold leading-[0.92] md:text-8xl tracking-tighter">
            Графический бренд дизайнер
          </h1>
          <p className="mt-6 font-display text-2xl font-bold text-primary md:text-4xl">Милана Землянская</p>
          <p className="mt-12 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Более 3х лет в сфере / B2B, HoReCa / Подход к дизайну через маркетинг и глубокий анализ
          </p>
          <div className="mt-14 flex flex-wrap gap-6">
            <a href="#cases" className="btn bg-primary text-primary-foreground">Смотреть кейсы →</a>
            <a href={TG} className="btn">Написать в Telegram</a>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 border-b">
        <Title>Опыт и бэкграунд</Title>
        <div className="grid md:grid-cols-2">
          {exp.map((e) => (
            <div key={e.t} className="border-b p-6 py-16 last:border-b-0 md:border-b-0 md:border-r md:p-16 md:py-24 md:last:border-r-0">
              <h3 className="text-2xl font-bold md:text-3xl">{e.t}</h3>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">{e.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="scroll-mt-16 border-b">
        <Title>Технический стек и компетенции</Title>
        <div className="grid md:grid-cols-3">
          {stack.map((s, i) => (
            <div key={s.t} className="border-b p-6 last:border-b-0 md:border-b-0 md:border-r md:p-16 md:last:border-r-0">
              <span className="font-mono text-sm text-secondary">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
              <p className="mt-4 text-muted-foreground">{s.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="scroll-mt-16 border-b">
        <Title>Практика и кейсы</Title>
        <div className="grid gap-16 p-6 md:grid-cols-2 md:p-16">
          {cases.map((c) => (
            <article key={c.n} className="relative cursor-pointer border bg-background transition-colors duration-150 hover:border-primary">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden border-b bg-placeholder font-mono text-sm text-muted-foreground">
                {"img" in c && c.img ? <img src={c.img} alt={c.n} className="h-full w-full object-cover" /> : "IMG / 1600×1200"}
              </div>
              <div className="p-8 md:p-16">
                <h3 className="text-2xl font-bold">{"to" in c && c.to ? <Link to="/cases/relumo" className="after:absolute after:inset-0">{c.n} →</Link> : c.n}</h3>
                <p className="mt-2 text-muted-foreground">{c.c}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => <span key={t} className="border px-2 py-0.5 font-mono text-xs">[{t}]</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-16 border-b">
        <Title>Архитектура рабочего процесса</Title>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, c], i) => (
            <div key={t} className="border-b p-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 md:p-12">
              <div className="font-display text-6xl font-bold text-primary">{i + 1}.</div>
              <h3 className="mt-6 text-2xl font-bold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="border-b bg-primary px-6 py-20 text-primary-foreground md:px-16">
          <p className="font-display text-[11vw] font-bold leading-[0.85] tracking-tighter lg:text-[8.5rem]">ОТКРЫТА К НАЙМУ / FULL-TIME</p>
        </div>
        <div className="grid md:grid-cols-2">
          <p className="border-b p-6 text-lg md:border-b-0 md:border-r md:p-16">
            Ищу удаленную работу в штате (от 80k ₽) или долгосрочные контракты. Готова к тестовому заданию.
          </p>
          <div className="flex flex-wrap items-center gap-4 p-6 md:p-16">
            <a href={TG} className="btn">Telegram</a>
            <a href={MAIL} className="btn">Email</a>
            <a href={CV} className="btn bg-secondary text-secondary-foreground">Download Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
