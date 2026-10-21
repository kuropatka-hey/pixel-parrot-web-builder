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
  { t: "Вектор и Проектирование", c: "Figma, Adobe Illustrator, InDesign, Photoshop, Tilda. Создание сложных векторных иллюстраций, UI-компонентов и многостраничной верстки.", tools: ["Figma", "Illustrator", "InDesign", "Photoshop", "Tilda"] },
  { t: "AI-визуализация", c: "Midjourney, Stable Diffusion. Глубокий промпт-инжиниринг для генерации 4K/8K рендеров, настройка реалистичного студийного света и сложных текстур (стекло, металл, ткань).", tools: ["Midjourney", "Stable Diffusion", "4K/8K"] },
  { t: "Производство и препресс", c: "100% готовность к печати. Перевод в CMYK/Pantone, векторные контуры для УФ-лака и тиснения, контроль цветопроб.", tools: ["CMYK", "Pantone", "УФ-лак", "Тиснение"] },
];
const cases = [
  { n: "Relumo", sub: "B2B · Identity", img: relumoCover.url, to: "/cases/relumo", c: "B2B-стартап. Айдентика, паттерны, гайдлайны. Метафора призмы. Принято без правок советом фаундеров." },
  { n: "Цмокі", sub: "HoReCa · Packaging", c: "Премиальный лаунж-бар. Модульные сетки, навигация, дизайн упаковки со снижением затрат на печать." },
  { n: "Кейс 03", sub: "Скоро", c: "Скоро." },
  { n: "Кейс 04", sub: "Скоро", c: "Скоро." },
];
const steps = [
  ["Анализ", "Выявление ограничений (бюджет печати, ТЗ производства, контекст ниши)."],
  ["Метафора", "Разработка смыслового ядра. Отказ от банальных образов (напр. лампочки для света)."],
  ["Система", "Построение сетки, типографической пары, цветового кодирования. Адаптивность носителей."],
  ["Внедрение", "Передача исходников, интерактивных гайдлайнов и готового препресса без возвратов из типографии."],
];
const facts = [
  ["0", "правок в концепции Relumo"],
  ["100%", "готовность макетов к печати"],
  ["3", "ниши: HoReCa, ритейл, B2B"],
];
const focus = [
  ["Айдентика и визуальные системы", 100],
  ["Препресс и производство", 90],
  ["AI-визуализация", 80],
  ["Упаковка и навигация", 75],
] as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <div>
      <h2 className="eyebrow text-foreground">{children}</h2>
      <div className="mt-4 h-0.5 w-10 bg-primary" />
    </div>
  );
}

function Index() {
  return (
    <div className="mx-auto max-w-7xl">
      <header className="sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b bg-background/95 px-6 py-5 backdrop-blur md:px-16">
        <p className="eyebrow hidden text-[0.65rem] leading-relaxed text-muted-foreground sm:block">Brand &amp;<br />Communication Design</p>
        <a href="#top" className="text-lg font-semibold tracking-tight">М<span className="text-primary">/</span>З</a>
        <nav className="flex items-center justify-end gap-6 text-xs font-medium uppercase tracking-[0.15em]">
          <a href="#cases" className="hidden hover:text-primary md:inline">Кейсы</a>
          <a href="#skills" className="hidden hover:text-primary md:inline">Навыки</a>
          <a href="#contact" className="hidden hover:text-primary md:inline">Контакты</a>
          <a href={CV} className="text-primary hover:text-secondary">CV ↓</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="grid items-end gap-10 px-6 pt-16 md:grid-cols-[1.25fr_1fr] md:px-16 md:pt-24">
        <div className="pb-16 md:pb-24">
          <p className="eyebrow text-muted-foreground">Mid+/Senior · Full-time · Remote</p>
          <h1 className="mt-6 text-6xl font-extrabold uppercase leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[7.5rem]">
            Милана<br />Землянская
          </h1>
          <p className="eyebrow mt-6 text-primary">Brand &amp; Communication Designer</p>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            Бренд-дизайн и визуальные системы. Без воды и случайных решений. Специализация: HoReCa, ритейл, сложные B2B-продукты — от смысловой метафоры до безошибочного препресса.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#cases" className="btn border-primary bg-primary text-primary-foreground hover:bg-background">Смотреть кейсы →</a>
            <a href={TG} className="btn">Telegram</a>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute bottom-0 left-1/2 aspect-square w-[88%] -translate-x-1/2 rounded-full bg-sky" />
          <div className="absolute inset-x-[10%] bottom-0 top-[6%] flex items-center justify-center rounded-t-full border border-dashed border-secondary/50 text-center text-xs uppercase tracking-[0.2em] text-secondary">
            Место<br />для фото
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="grid border-y bg-surface sm:grid-cols-3">
        {facts.map(([n, t]) => (
          <div key={t} className="border-b px-6 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:px-16">
            <div className="text-5xl font-light tracking-tight text-secondary">{n}</div>
            <div className="eyebrow mt-2 text-[0.65rem] text-muted-foreground">{t}</div>
          </div>
        ))}
      </section>

      {/* Cases */}
      <section id="cases" className="scroll-mt-20 grid gap-12 px-6 py-20 md:grid-cols-[220px_1fr] md:px-16 md:py-28">
        <div>
          <Eyebrow>Практика и кейсы</Eyebrow>
          <p className="mt-6 text-sm text-muted-foreground">Проекты, где смысл, система и производство собраны в одно целое.</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          {cases.map((c, i) => {
            const inner = (
              <>
                <div className="flex items-baseline gap-3 border-b pb-3">
                  <span className="text-sm font-semibold text-primary">0{i + 1}</span>
                  <div>
                    <h3 className="eyebrow text-foreground">{c.n}</h3>
                    <p className="text-xs text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
                <div className="mt-4 flex aspect-[4/3] items-center justify-center overflow-hidden border bg-placeholder text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-150 group-hover:border-primary">
                  {"img" in c && c.img ? <img src={c.img} alt={c.n} className="h-full w-full object-cover" /> : "Скоро"}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{c.c}</p>
              </>
            );
            return "to" in c && c.to ? (
              <Link key={c.n} to="/cases/relumo" className="group block">{inner}</Link>
            ) : (
              <article key={c.n} className="group">{inner}</article>
            );
          })}
        </div>
      </section>

      {/* Skills + experience */}
      <section id="skills" className="scroll-mt-20 grid gap-16 border-t px-6 py-20 md:grid-cols-2 md:px-16 md:py-28">
        <div>
          <Eyebrow>Фокус и стек</Eyebrow>
          <ul className="mt-10 space-y-5">
            {focus.map(([t, v]) => (
              <li key={t} className="grid grid-cols-[minmax(0,1fr)_120px] items-center gap-4 text-sm sm:grid-cols-[minmax(0,1fr)_180px]">
                <span className="text-xs font-medium uppercase tracking-[0.12em]">{t}</span>
                <span className="h-1 bg-muted"><span className="block h-full bg-secondary" style={{ width: `${v}%` }} /></span>
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-8">
            {stack.map((s, i) => (
              <div key={s.t} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="text-sm font-semibold text-primary">0{i + 1}</span>
                <div>
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.c}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.tools.map((t) => <span key={t} className="bg-sky/40 px-2 py-0.5 text-xs text-secondary">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:border-l md:pl-16">
          <Eyebrow>Опыт и бэкграунд</Eyebrow>
          <ol className="mt-10 space-y-10 border-l pl-8">
            {exp.map((e) => (
              <li key={e.t} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <h3 className="font-semibold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.c}</p>
              </li>
            ))}
          </ol>
          <blockquote className="mt-14 border p-8">
            <span className="text-5xl leading-none text-primary">“</span>
            <p className="mt-2">Выстраиваю проекты от поиска смысловой метафоры до безошибочного препресса.</p>
          </blockquote>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t bg-surface px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Архитектура рабочего процесса</Eyebrow>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, c], i) => (
            <div key={t} className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">{i + 1}</span>
                <span className="hidden h-px flex-1 bg-border lg:block" />
              </div>
              <h3 className="mt-6 font-semibold uppercase tracking-[0.12em]">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="grid gap-12 border-t px-6 py-20 md:grid-cols-[1fr_1fr_auto] md:px-16 md:py-24">
        <div>
          <Eyebrow>Открыта к найму</Eyebrow>
          <p className="mt-6 max-w-xs text-sm text-muted-foreground">
            Ищу удаленную работу в штате (от 80k ₽) или долгосрочные контракты. Готова к тестовому заданию.
          </p>
        </div>
        <ul className="space-y-6 md:border-l md:pl-16">
          {[["Telegram", TG, "@username"], ["Email", MAIL, "hello@example.com"], ["Резюме", CV, "Download Resume"]].map(([l, h, v]) => (
            <li key={l}>
              <p className="eyebrow text-[0.65rem] text-muted-foreground">{l}</p>
              <a href={h} className="text-sm hover:text-primary">{v}</a>
            </li>
          ))}
        </ul>
        <a href={TG} className="flex min-h-40 w-full flex-col justify-between border border-secondary p-6 transition-colors duration-150 hover:border-primary md:w-60">
          <span className="eyebrow text-secondary">Давайте сделаем сильный бренд вместе</span>
          <span className="self-end text-2xl text-primary">→</span>
        </a>
      </footer>
    </div>
  );
}
