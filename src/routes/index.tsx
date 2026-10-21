import { createFileRoute } from "@tanstack/react-router";

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

const stack = [
  { t: "Проектирование и вектор", c: "Figma (компоненты, автолейауты), Illustrator (сложная графика), InDesign (многостраничники, меню)." },
  { t: "AI-визуализация", c: "Midjourney, Stable Diffusion. Технические промпты для 4K/8K рендеров, студийный свет, реалистичные текстуры." },
  { t: "Производство и препресс", c: "100% готовность к печати. CMYK, пантоны, векторные контуры для УФ-лака и тиснения, контроль цветопроб." },
];
const cases = [
  { n: "Relumo", c: "B2B-стартап. Айдентика, паттерны, гайдлайны. Метафора призмы. Принято без правок советом фаундеров.", tags: ["B2B", "Identity", "AI-assisted"] },
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
const mq = "Figma • Adobe CC • Midjourney / Stable Diffusion • Pre-press • Guidelines • Typography • ";

function Title({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b-2 px-6 py-6 md:px-10">
      <span className="font-mono text-sm text-primary">[{n}]</span>
      <h2 className="text-3xl font-bold md:text-5xl">{children}</h2>
    </div>
  );
}

function Index() {
  return (
    <div className="mx-auto max-w-7xl border-x-2">
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b bg-background px-6 py-4 md:px-10">
        <a href="#top" className="font-display font-bold">Милана Землянская <span className="text-muted-foreground">/ Brand Designer</span></a>
        <nav className="flex items-center gap-6 text-sm font-semibold">
          <a href="#cases" className="hidden hover:text-primary sm:inline">Кейсы</a>
          <a href="#stack" className="hidden hover:text-primary sm:inline">Стек</a>
          <a href="#process" className="hidden hover:text-primary sm:inline">Процесс</a>
          <a href={CV} className="btn bg-foreground py-2 text-background">Скачать CV (PDF)</a>
        </nav>
      </header>

      <section id="top" className="border-b-2">
        <div className="px-6 py-16 md:px-10 md:py-24">
          <p className="mb-6 font-mono text-sm text-muted-foreground">// Mid+/Senior · Full-time</p>
          <h1 className="max-w-5xl text-5xl font-bold leading-[0.92] md:text-8xl">
            Бренд-дизайн и визуальные системы. <span className="text-primary">Без воды и случайных решений.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Mid+/Senior дизайнер. Специализация: HoReCa, ритейл, сложные B2B-продукты. Выстраиваю проекты от поиска смысловой метафоры до безошибочного препресса.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#cases" className="btn bg-primary text-primary-foreground">Смотреть кейсы →</a>
            <a href={TG} className="btn">Написать в Telegram</a>
          </div>
        </div>
        <div className="overflow-hidden border-t-2 bg-foreground py-3 text-background">
          <div className="marquee flex w-max whitespace-nowrap font-display text-xl font-bold uppercase">
            <span>{mq.repeat(4)}</span><span>{mq.repeat(4)}</span>
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-mt-16 border-b-2">
        <Title n="01">Технический стек и компетенции</Title>
        <div className="grid md:grid-cols-3">
          {stack.map((s, i) => (
            <div key={s.t} className="border-b-2 p-6 last:border-b-0 md:border-b-0 md:border-r-2 md:p-10 md:last:border-r-0">
              <span className="font-mono text-sm text-secondary">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
              <p className="mt-4 text-muted-foreground">{s.c}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="scroll-mt-16 border-b-2">
        <Title n="02">Практика и кейсы</Title>
        <div className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
          {cases.map((c) => (
            <article key={c.n} className="cursor-pointer border-2 bg-background transition-[transform,box-shadow] duration-75 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal">
              <div className="flex aspect-[4/3] items-center justify-center border-b-2 bg-placeholder font-mono text-sm text-muted-foreground">IMG / 1600×1200</div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{c.n}</h3>
                <p className="mt-2 text-muted-foreground">{c.c}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => <span key={t} className="border px-2 py-0.5 font-mono text-xs">[{t}]</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-16 border-b-2">
        <Title n="03">Архитектура рабочего процесса</Title>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, c], i) => (
            <div key={t} className="border-b-2 p-6 sm:[&:nth-child(odd)]:border-r-2 lg:border-b-0 lg:border-r-2 lg:last:border-r-0 md:p-8">
              <div className="font-display text-6xl font-bold text-primary">{i + 1}.</div>
              <h3 className="mt-6 text-2xl font-bold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="border-b-2 bg-primary px-6 py-10 text-primary-foreground md:px-10">
          <p className="font-display text-[11vw] font-bold leading-[0.85] tracking-tighter lg:text-[8.5rem]">ОТКРЫТА К НАЙМУ / FULL-TIME</p>
        </div>
        <div className="grid md:grid-cols-2">
          <p className="border-b-2 p-6 text-lg md:border-b-0 md:border-r-2 md:p-10">
            Ищу удаленную работу в штате (от 80k ₽) или долгосрочные контракты. Готова к тестовому заданию.
          </p>
          <div className="flex flex-wrap items-center gap-4 p-6 md:p-10">
            <a href={TG} className="btn">Telegram</a>
            <a href={MAIL} className="btn">Email</a>
            <a href={CV} className="btn bg-secondary text-secondary-foreground">Download Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
