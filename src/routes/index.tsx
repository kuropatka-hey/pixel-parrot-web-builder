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

const work: { y: string; t: string; u?: string; l?: string }[] = [
  { y: "2024-2026", t: "Старший графический дизайнер", u: "https://esteem.pro/", l: "Esteem.pro" },
  { y: "2023-2026", t: "Фриланс проекты" },
];
const edu = [
  { t: "Диплом художественной школы" },
  { t: "Профильный диплом колледжа" },
  { t: "Онлайн курсы маркетинга" },
];
const stack = [
  { t: "Работа в программах", c: "Adobe Illustrator, InDesign, Photoshop, Figma, Canva. Создание векторных иллюстраций, многостраничная верстка, ретушь фото, лендинги, дизайн упаковки." },
  { t: "AI инструментарий", c: "Глубокая работа с генерациями 4K/8K рендеров, настройка реалистичного студийного света и сложных текстур, автоматизация рутинных процессов." },
  { t: "Подготовка к печати", c: "Готовность к печати на 100%. Создание разверток, нанесение меток реза, подготовка цветового профиля." },
  { t: "Автономность работы", c: "Работаю без четкого ТЗ, сама деконструирую задачу на этапы, делаю исследования, составляю брифы и интервью." },
  { t: "Маркетинговая база ", c: "Провожу анализ для каждого проекта, каждое решение обосновываю. Думаю системно." },
  { t: "Коммуникация", c: "Открытая и прозрачная коммуникация на каждом этапе, анализ фидбеков и \"защита\" своих решений. Работаю в формате партнера, а не исполнителя " },
];
const cases = [
  { n: "RELUMO\n", img: relumoCover.url, to: "/cases/relumo", accent: true, c: "B2B-стартап. Айдентика, паттерны, гайдлайны. Метафора призмы. Принято без правок советом фаундеров.", tags: ["B2B", "Identity", "AI-assisted"] },
  { n: "Цмокі", c: "Премиальный лаунж-бар. Модульные сетки, навигация, дизайн упаковки со снижением затрат на печать.", tags: ["HoReCa", "Packaging", "Pre-press"] },
  { n: "Кейс 03", c: "Скоро.", tags: ["TBA"] },
  { n: "Кейс 04", c: "Скоро.", tags: ["TBA"] },
];

function Title({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`border-b px-6 py-16 md:px-16 md:py-24 ${className}`}>
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
          <a href="#cases" className="hidden hover:text-primary sm:inline">Кейсы</a>
          <a href="#stack" className="hidden hover:text-primary sm:inline">Стек</a>
          <a href={CV} className="btn bg-foreground py-2 text-background">Скачать CV</a>
        </nav>
      </header>

      <section id="top" className="border-b">
        <div className="px-6 py-24 md:px-16 md:py-40">
          <p className="mb-6 font-mono text-sm text-muted-foreground">middle</p>
          <h1 className="max-w-5xl text-5xl font-bold leading-[0.92] md:text-8xl tracking-tighter">
            Графический бренд дизайнер
          </h1>
          <p className="mt-4 font-display text-2xl font-bold leading-tight tracking-tighter text-primary md:text-[45px]">Милана Землянская</p>
          <p className="mt-12 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Более 3х лет в сфере / B2B, HoReCa / Комплексный подход к дизайну через маркетинг и глубокий анализ
          </p>
          <div className="mt-14 flex flex-wrap gap-6">
            <a href="#cases" className="btn bg-primary text-primary-foreground">Смотреть кейсы →</a>
            <a href={TG} className="btn">Написать в Telegram</a>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 border-b">
        <Title className="text-primary">Опыт и бэкграунд</Title>
        <div className="relative grid gap-12 p-6 py-16 md:grid-cols-2 md:gap-16 md:p-16 md:py-24">
          <div aria-hidden className="absolute inset-y-24 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block" />
          <ul className="w-full max-w-md space-y-8 border p-6 md:p-10">
            {work.map((e) => (
              <li key={e.y} className="border-l-2 border-primary pl-6">
                <span className="font-mono text-xl font-medium text-primary md:text-2xl">{e.y}</span>
                <p className="mt-2 text-base md:text-lg">
                  {e.t}
                  {" "}
                  {e.u && (
                    <a href={e.u} target="_blank" rel="noreferrer" className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                      {e.l}
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ul>
          <ul className="w-full max-w-md space-y-8 border p-6 md:p-10">
            {edu.map((e) => (
              <li key={e.t} className="border-l-2 border-primary pl-6">
                <p className="text-base md:text-lg">{e.t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cases" className="scroll-mt-16 border-b">
        <Title className="text-primary">Практика и кейсы</Title>
        <div className="grid gap-16 p-6 md:grid-cols-2 md:p-16">
          {cases.map((c) => {
            const accent = "accent" in c && c.accent;
            return (
              <article key={c.n} className={`relative cursor-pointer border transition-colors duration-150 ${accent ? "bg-primary text-primary-foreground hover:border-primary-foreground" : "bg-background hover:border-primary"}`}>
                <div className={`flex aspect-[4/3] items-center justify-center overflow-hidden border-b font-mono text-sm ${accent ? "border-primary-foreground/60 bg-primary-foreground/10 text-primary-foreground/70" : "bg-placeholder text-muted-foreground"}`}>
                  {"img" in c && c.img ? <img src={c.img} alt={c.n} className="h-full w-full object-cover" /> : "IMG / 1600×1200"}
                </div>
                <div className="p-8 md:p-16">
                  <h3 className="text-2xl font-bold">{"to" in c && c.to ? <Link to="/cases/relumo" className="after:absolute after:inset-0">{c.n}</Link> : c.n}</h3>
                  <p className={`mt-2 ${accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{c.c}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => <span key={t} className={`border px-2 py-0.5 font-mono text-xs ${accent ? "border-primary-foreground/40" : ""}`}>[{t}]</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="stack" className="scroll-mt-16 border-b">
        <Title className="text-primary">Технический стек и компетенции</Title>
        <div className="grid md:grid-cols-3">
          {stack.map((s, i) => (
            <div key={s.t} className="border-b p-6 last:border-b-0 md:border-b-0 md:[&:nth-child(-n+3)]:border-b md:[&:nth-child(n+4)]:border-b-0 md:border-r md:[&:nth-child(3n)]:border-r-0 md:p-16">
              <span className="font-mono text-sm text-secondary">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
              <p className="mt-4 text-muted-foreground">{s.c}</p>
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
