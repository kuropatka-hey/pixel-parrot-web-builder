import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import sign from "@/assets/relumo/relumo-sign.jpg.asset.json";
import vertical from "@/assets/relumo/relumo-vertical.jpg.asset.json";
import horizontal from "@/assets/relumo/relumo-horizontal.jpg.asset.json";
import i02 from "@/assets/relumo/relumo-02.jpg.asset.json";
import i03 from "@/assets/relumo/relumo-03.jpg.asset.json";
import i07 from "@/assets/relumo/relumo-07.jpg.asset.json";
import i08 from "@/assets/relumo/relumo-08.jpg.asset.json";
import i09 from "@/assets/relumo/relumo-09.jpg.asset.json";
import i10 from "@/assets/relumo/relumo-10.jpg.asset.json";
import i11 from "@/assets/relumo/relumo-11.jpg.asset.json";
import i12 from "@/assets/relumo/relumo-12.jpg.asset.json";
import i13 from "@/assets/relumo/relumo-13.jpg.asset.json";
import i14 from "@/assets/relumo/relumo-14.jpg.asset.json";
import i15 from "@/assets/relumo/relumo-15.jpg.asset.json";
import i16 from "@/assets/relumo/relumo-16.jpg.asset.json";

export const Route = createFileRoute("/cases/relumo")({
  head: () => ({
    meta: [
      { title: "Relumo — кейс айдентики | Милана Землянская" },
      { name: "description", content: "Айдентика для финской студии светодизайна Relumo: метафора призмы, дизайн-система, паттерны и гайдлайны." },
      { property: "og:title", content: "Relumo — кейс айдентики" },
      { property: "og:description", content: "Метафора призмы и масштабируемая визуальная система для B2B-стартапа в сфере светодизайна." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Relumo,
});

const meta = [
  ["Проект", "Relumo — международная студия светодизайна (Финляндия)."],
  ["Моя роль", "Lead Brand Designer (исследование ниши, разработка концепции, логотип, айдентика, гайдлайны, подготовка к печати)."],
  ["Сложность", "B2B стартап, ориентация на средний+ и премиум сегмент. Согласование с 4 учредителями. Запрос на долгосрочную актуальность вне ниши."],
  ["Результат", "Автономная комплексная дизайн система. Концепция принята \nбез правок."],
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

/* Секция с липкой подписью слева и контентом справа */
function Chapter({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <section className="grid border-b md:grid-cols-[16rem_1fr]">
      <div className="border-b p-6 md:border-b-0 md:border-r md:p-10">
        <p className={`${LABEL} md:sticky md:top-28`}>{label}</p>
      </div>
      <div className="p-6 py-16 md:p-16 md:py-24">
        <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Relumo() {
  return (
    <div className="case-dark min-h-screen">
      <div className="mx-auto max-w-7xl border-x">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-6 py-6 md:px-16">
          <Link to="/" hash="cases" className="font-display font-bold hover:text-primary">← Назад к проектам</Link>
          <span className="hidden font-mono text-sm uppercase text-muted-foreground md:inline">Brand identity · 2024</span>
        </header>

        {/* Обложка */}
        <section className="border-b p-6 pt-16 md:p-16 md:pt-24">
          <p className={LABEL}>Айдентика для студии светодизайна</p>
          <h1 className="mt-6 text-[22vw] font-bold leading-[0.85] tracking-tighter md:text-[12rem]">Relumo</h1>
          <Img src={i07.url} alt="Логотип Relumo, подсвеченный на тёмно-синем фоне" className="mt-12 aspect-[16/9] shadow-brutal" />
        </section>

        <dl className="grid border-b md:grid-cols-4">
          {meta.map(([k, v]) => (
            <div key={k} className="border-b p-6 last:border-b-0 md:border-b-0 md:border-r md:p-10 md:last:border-r-0">
              <dt className={LABEL}>{k}</dt>
              <dd className="mt-4 whitespace-pre-line text-base text-muted-foreground md:text-lg">{v}</dd>
            </div>
          ))}
        </dl>

        <Chapter label="Контекст" title="Контекст и бизнес-задача">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase text-muted-foreground">Исходная ситуация</p>
              <p className={P}>Финский стартап в сфере светодизайна выходил на международный B2B-рынок. Изначальный запрос клиента звучал как «создать пластичный логотип и подобрать фирменные цвета».</p>
            </div>
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase text-muted-foreground">Точки боли</p>
              <p className={P}>В ходе брифинга я выявила ключевое бизнес-требование: бренд строится на перспективу. Через 5 лет компания планирует масштабироваться и, возможно, выйти за пределы только светодизайна.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Проект стартует с нуля. Я выявила потребность в построение полноценной системы айдентики и обосновала эффективность этого решения. Итог клиент согласился работать над айдентикой",
              "Нужен аутентичный знак, который транслирует идею «света» сейчас, но не потеряет актуальности при смене ниши (никаких прямых ассоциаций в лоб, вроде лампочек или искр/лучей).",
            ].map((t, k) => (
              <div key={k} className="border p-8 transition-colors duration-150 hover:border-primary">
                <p className="font-display text-6xl font-bold text-primary">0{k + 1}</p>
                <p className="mt-2 font-display text-lg font-bold">Проблема {k + 1}</p>
                <p className={`mt-4 ${P}`}>{t}</p>
              </div>
            ))}
          </div>
        </Chapter>

        <Chapter label="Исследование" title="Исследование ниши">
          <p className={`${P} max-w-3xl`}>Аудит европейских и российских конкурентов показал две полярные стратегии компаний:</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["Ультра-примитивность", "Незатейливая графика «для галочки» с фокусом только на продукт, не вызывает доверия."],
              ["Гипер-абстракция", "Сложная, глубокая графика, которая абсолютно не запоминается и не идентифицируется при повторном касании."],
            ].map(([t, d]) => (
              <div key={t} className="border-t pt-6">
                <p className="font-display text-xl font-bold">{t}</p>
                <p className={`mt-3 ${P}`}>{d}</p>
              </div>
            ))}
          </div>
          <Img src={i16.url} alt="Мудборд логотипов конкурентов: FLOS, ERCO, Targetti, iGuzzini, Zumtobel" className="mt-12 aspect-[16/9]" />
        </Chapter>

        {/* Метафора — крупная цитата во всю ширину */}
        <section className="border-b p-6 py-16 md:p-16 md:py-24">
          <p className={LABEL}>Поиск метафоры</p>
          <p className="mt-8 max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Призма не говорит о свете «в лоб», но она его преломляет, концентрирует и направляет.
          </p>
          <div className="mt-16 grid items-end gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <Img src={i10.url} alt="Знак-призма, спроецированный светом на стену" className="aspect-[1.42/1]" />
            <div>
              <p className={P}>За основу я взяла философский смысл слова «Relumo» — нести свет, улучшать, реконструировать среду и жизнь бизнеса. Отбросив банальные идеи со звездами и искрами, я пришла к метафоре Призмы. Это идеальный баланс между сложной абстракцией и понятным, запоминающимся образом.</p>
              <div className="mt-10 grid grid-cols-2 border-t">
                <div className="border-r pt-6 pr-4">
                  <p className="font-display text-5xl font-bold text-primary">92%</p>
                  <p className="mt-2 text-sm text-muted-foreground">считываемости идеи</p>
                </div>
                <div className="pt-6 pl-6">
                  <p className="font-display text-5xl font-bold text-primary">78</p>
                  <p className="mt-2 text-sm text-muted-foreground">человек в фокус-группе вне индустрии</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Chapter label="Дизайн-система" title="Архитектура дизайн-системы">
          <h3 className="text-2xl font-bold md:text-3xl">Геометрия знака</h3>
          <p className={`mt-4 max-w-3xl ${P}`}>Основа знака — треугольная призма. Она символизирует три столпа светодизайна: две нижние вершины стремятся вверх и соединяются в высшей точке.</p>
          <Img src={i02.url} alt="Знак Relumo на синем фоне, вписанный в треугольник" className="mt-10 aspect-[16/10]" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              ["Вершина — человек", "Тот, ради которого создаётся световой сценарий."],
              ["Основание — среда", "Архитектура и интерьер, над чем работает студия."],
              ["Срез — луч света", "Свет поступает в призму, преломляется и отражается от её граней."],
              ["Единая система", "Луч сделан из буквы \"L\" в названии, она выведена выше набора — лёгкая «панковость» разбивает строгость шрифта и композиции"],
            ].map(([t, d], k) => (
              <div key={t} className="border p-6 transition-colors duration-150 hover:border-primary">
                <p className="font-mono text-xs text-primary">0{k + 1}</p>
                <p className="mt-2 font-display text-lg font-bold">{t}</p>
                <p className={`mt-2 ${P}`}>{d}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-24 text-2xl font-bold md:text-3xl">3 версии логотипа</h3>
          <p className={`mt-4 max-w-3xl ${P}`}>Знак и шрифтовая часть имеют равный визуальный вес, работают и в паре, и по отдельности. Три начертания покрывают любой носитель.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {([
              [sign, "Знак", "Фавикон, аватар, тиснение"],
              [vertical, "Вертикальная", "Полиграфия, упаковка"],
              [horizontal, "Горизонтальная", "Сайт, вывеска, шапки документов"],
            ] as const).map(([img, t, d]) => (
              <figure key={t}>
                <Img src={img.url} alt={`${t} версия логотипа Relumo`} className="aspect-square" />
                <figcaption className="mt-4 border-t pt-4">
                  <p className="font-display font-bold">{t}</p>
                  <p className={`${P} mt-1`}>{d}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Колористика</h3>
              <p className={P}>База (доверие и статус): глубокий, сложный B2B-синий в контрасте с тёплым бежевым — тень и сам свет.</p>
              <p className={P}>Акценты (digital): яркий жёлтый для CTA и цифровой среды — в связке с синим выглядит ярко, а не ядовито.</p>
            </div>
            <Img src={i03.url} alt="Фирменная палитра Relumo" className="aspect-[1.42/1]" />
          </div>

          <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Img src={i11.url} alt="Паттерн из треугольников Relumo" className="aspect-[1.42/1] md:order-2" />
            <div className="space-y-6 md:order-1">
              <h3 className="text-2xl font-bold md:text-3xl">Паттерн с «пасхалкой»</h3>
              <p className={P}>Сформирован из треугольника призмы, в негативном пространстве которого зашифрована буква «М» — прямая отсылка к названию по запросу клиента.</p>
            </div>
          </div>
        </Chapter>

        {/* Носители — мозаика */}
        <section className="border-b p-6 py-16 md:p-16 md:py-24">
          <p className={LABEL}>Носители</p>
          <div className="mt-10 grid auto-rows-[14rem] gap-6 md:auto-rows-[18rem] md:grid-cols-6">
            <Img src={i15.url} alt="Деловая полиграфия Relumo" className="md:col-span-4 md:row-span-2" />
            <Img src={i08.url} alt="Визитки и ручки с логотипом" className="md:col-span-2" />
            <Img src={i12.url} alt="Бейдж сотрудника" className="md:col-span-2" />
            <Img src={i13.url} alt="Световая вывеска на фасаде" className="md:col-span-3" />
            <Img src={i14.url} alt="Логотип в луче света" className="md:col-span-3" />
            <Img src={i09.url} alt="Сайт Relumo на ноутбуке" className="md:col-span-6 md:row-span-2" />
          </div>
        </section>

        <Chapter label="Итог" title="Результат и бизнес-эффект">
          <div className="grid gap-10 md:grid-cols-2">
            <p className={P}>Заказчик пришел за логотипом, а ушел с комплексной айдентикой бренда, готовой к масштабированию без постоянного вовлечения сторонних подрядчиков. Глубокая метафора стала фундаментом для доверия B2B аудитории и транслирования статуса компании.</p>
            <p className={P}>Концепция была принята без единой правки. В ходе презентации я успешно отработала возражения четырех кофаундеров, аргументировав каждое графическое решение через призму бизес-задач. Бренд успешно запущен и находится на стадии внедрения на физические носители и веб.</p>
          </div>
          <div className="mt-12 grid border md:grid-cols-3">
            {[["0", "правок концепции"], ["4", "кофаундера согласовали"], ["3", "версии логотипа"]].map(([n, t]) => (
              <div key={t} className="border-b p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="font-display text-6xl font-bold text-primary">{n}</p>
                <p className="mt-2 text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
        </Chapter>

        <section className="border-b p-6 py-16 md:p-16 md:py-24">
          <p className={LABEL}>Обратная связь</p>
          <blockquote className="mt-10 max-w-5xl">
            <p className="font-display text-2xl leading-snug md:text-4xl">«Я вижу, что у тебя нестандартный подход к задаче, ты глубоко выясняешь потребности клиента и его боль. В творческом процессе меня покорило то, что ты закладываешь сложную мысль в айдентику — это очень сильно выделяет тебя на фоне других дизайнеров.</p>
            <p className={`mt-8 ${P}`}>Ты не тот человек, который просто рисует красивую картинку и ставит банальную лампочку. Ты думаешь о том, как визуальная система поможет бизнесу продавать и развиваться. Это редкое сочетание качеств, когда эстетика напрямую работает на коммерческую цель».</p>
          </blockquote>
          <p className="mt-12 font-mono text-sm uppercase text-muted-foreground">— АЛЕКСЕЙ ВДОНИН CEO &amp; CO-FOUNDER RELUMO</p>
        </section>

        <div className="p-6 md:p-16">
          <Link to="/" hash="cases" className="btn">← Назад к проектам</Link>
        </div>
      </div>
    </div>
  );
}
