import { createFileRoute, Link } from "@tanstack/react-router";
import i00 from "@/assets/relumo/relumo-00.jpg.asset.json";
import sign from "@/assets/relumo/relumo-sign.jpg.asset.json";
import vertical from "@/assets/relumo/relumo-vertical.jpg.asset.json";
import horizontal from "@/assets/relumo/relumo-horizontal.jpg.asset.json";
import i01 from "@/assets/relumo/relumo-01.jpg.asset.json";
import i02 from "@/assets/relumo/relumo-02.jpg.asset.json";
import i03 from "@/assets/relumo/relumo-03.jpg.asset.json";
import i04 from "@/assets/relumo/relumo-04.jpg.asset.json";
import i05 from "@/assets/relumo/relumo-05.jpg.asset.json";
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
  ["Моя роль", "Lead Brand Designer (исследование ниши, разработка концепции, логотип, айдентика, паттерны, гайдлайны)."],
  ["Сложность", "B2B стартап, ориентация на средний+ и премиум сегмент. Согласование с CEO и защитой перед бордом из 3-х кофаундеров."],
  ["Результат", "Разработка итеративной дизайн-системы под ключ. Концепт принят без единой правки."],
];

function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden border bg-placeholder transition-colors duration-150 hover:border-primary ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

function H2({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-primary">[{n}]</span>
      <h2 className="text-3xl font-bold md:text-5xl">{children}</h2>
    </div>
  );
}

const P = "text-lg md:text-xl";

function Relumo() {
  return (
    <div className="mx-auto max-w-7xl border-x">
      <header className="sticky top-0 z-50 border-b bg-background px-6 py-6 md:px-16">
        <Link to="/" hash="cases" className="font-display font-bold hover:text-primary">← Назад к проектам</Link>
      </header>

      <section className="grid border-b md:grid-cols-2">
        <div className="border-b p-6 py-16 md:border-b-0 md:border-r md:p-16 md:py-24">
          <p className="font-mono text-sm text-muted-foreground">// Case 01 · B2B · Identity</p>
          <h1 className="mt-6 text-7xl font-bold leading-none tracking-tighter md:text-9xl">Relumo</h1>
        </div>
        <dl className="grid">
          {meta.map(([k, v]) => (
            <div key={k} className="grid gap-2 border-b p-6 last:border-b-0 md:grid-cols-[9rem_1fr] md:px-12 md:py-8">
              <dt className="font-mono text-sm uppercase text-primary">{k}</dt>
              <dd className="text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-b p-6 md:p-16">
        <Img src={i07.url} alt="Логотип Relumo, подсвеченный на тёмно-синем фоне" className="aspect-[16/10] shadow-brutal" />
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <H2 n="01">Контекст и бизнес-задача</H2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <p className="font-mono text-sm uppercase text-muted-foreground">Исходная ситуация</p>
            <p className={P}>Финский стартап в сфере светодизайна выходил на международный B2B-рынок. Изначальный запрос клиента звучал как «создать пластичный логотип и подобрать фирменные цвета».</p>
            <p className="pt-6 font-mono text-sm uppercase text-muted-foreground">Точки боли</p>
            <p className={P}>В ходе брифинга я выявила ключевое бизнес-требование: бренд строится на перспективу. Через 5 лет компания планирует масштабироваться и, возможно, выйти за пределы только светодизайна.</p>
          </div>
          <ul className="space-y-8">
            <li className="border p-8"><b className="font-display">Проблема 1:</b> <span className={P}>Нужен аутентичный знак, который транслирует идею «света» сейчас, но не потеряет актуальности при смене ниши (никаких прямых ассоциаций в лоб, вроде лампочек или лучей).</span></li>
            <li className="border p-8"><b className="font-display">Проблема 2:</b> <span className={P}>Проект стартует с нуля. Делать просто логотип — нерентабельно для бизнеса. Чтобы сразу занять премиум-позиционирование и отстроиться от конкурентов, стартапу требовалась полноценная, масштабируемая визуальная система.</span></li>
          </ul>
        </div>
      </section>

      <section className="grid border-b md:grid-cols-2">
        <div className="space-y-6 border-b p-6 py-16 md:border-b-0 md:border-r md:p-16 md:py-24">
          <H2 n="02">Исследование ниши и поиск метафоры</H2>
          <p className={`${P} pt-6`}>Аудит европейских и российских конкурентов показал две полярные и одинаково неэффективные стратегии:</p>
          <ol className={`${P} list-decimal space-y-3 pl-6`}>
            <li>Ультра-примитивность: незатейливая графика «для галочки» с фокусом только на продукт, бренд выглядит дешево.</li>
            <li>Гипер-абстракция: сложная, глубокая графика, которая абсолютно не запоминается и не идентифицируется при повторном касании.</li>
          </ol>
          <p className="pt-6 font-mono text-sm uppercase text-muted-foreground">Поиск метафоры</p>
          <p className={P}>За основу я взяла философский смысл слова «Relumo» — нести свет, улучшать, реконструировать среду и жизнь бизнеса. Отбросив банальные идеи со звездами и искрами, я пришла к метафоре Призмы. Призма не говорит о свете «в лоб», но она его преломляет, концентрирует и направляет. Это идеальный баланс между сложной абстракцией и понятным, запоминающимся образом, который легко считывается аудиторией (тестирование на фокус-группе из 30 человек вне индустрии показало 90% считываемости идеи).</p>
        </div>
        <div className="flex flex-col gap-8 p-6 md:p-16">
          <Img src={i16.url} alt="Мудборд логотипов конкурентов: FLOS, ERCO, Targetti, iGuzzini, Zumtobel" />
          <Img src={i10.url} alt="Знак-призма, спроецированный светом на стену" className="aspect-[4/3]" />
        </div>
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <H2 n="03">Архитектура дизайн-системы</H2>
        <div className="mt-12 space-y-24">
          {[
            {
              title: "Геометрия знака",
              items: [
                "Основа знака — треугольник (призма). Он символизирует три столпа светодизайна. Две нижние вершины — это архитектура и физическая среда. Они стремятся вверх и соединяются в высшей точке — человеке, ради которого создается световой сценарий.",
                "В теле призмы графично вырезан луч. Свет поступает в призму, преломляется и отражается от ее граней.",
                "Этот же вырезанный луч дублируется в шрифтовой части, образуя стилизованную букву «L» в названии ReLuma. Буква намеренно выведена выше основного набора: эта легкая «панковость» и неформальность разбивает строгость B2B-шрифта, делая логотип свежим и цепляющим.",
              ],
              img: <Img src={i02.url} alt="Построение знака Relumo по сетке" className="aspect-[3/2]" />,
            },
            {
              title: "Три начертания для любых носителей",
              items: [
                "Знак и шрифтовая часть имеют равный визуальный вес и самостоятельны: каждая работает и в паре, и автономно.",
                "Система включает три начертания — отдельный знак, вертикальную и горизонтальную версию логотипа. Так айдентика адаптируется под любой носитель: от фавикона и стикера до вывески на фасаде.",
              ],
              img: (
                <div className="grid gap-6 md:grid-cols-3">
                  <Img src={sign.url} alt="Знак Relumo отдельно" className="aspect-[3/2]" />
                  <Img src={vertical.url} alt="Вертикальная версия логотипа" className="aspect-[3/2]" />
                  <Img src={horizontal.url} alt="Горизонтальная версия логотипа" className="aspect-[3/2]" />
                </div>
              ),
            },
            {
              title: "Колористика",
              items: [
                <><b>База (Доверие и статус):</b> Глубокий, сложный B2B-синий в контрасте с теплым бежевым (тень и сам свет).</>,
                <><b>Акценты (Digital):</b> Яркий желтый для CTA-элементов и цифровой среды, который в связке с синим выглядит дорого, а не ядовито.</>,
              ],
              img: <Img src={i03.url} alt="Фирменная палитра Relumo" className="aspect-[3/2]" />,
            },
            {
              title: "Паттерн",
              items: [
                "Сформирован из базового треугольника призмы, в негативном пространстве которого зашифрована буква «М» (прямая отсылка к названию по запросу клиента).",
              ],
              img: <Img src={i11.url} alt="Объёмный паттерн из треугольников" className="aspect-[3/2]" />,
            },
          ].map((b) => (
            <div key={b.title} className="space-y-8">
              <h3 className="text-2xl font-bold">{b.title}</h3>
              <ul className={`${P} max-w-3xl space-y-6`}>
                {b.items.map((t, k) => <li key={k}>• {t}</li>)}
              </ul>
              {b.img}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <Img src={i15.url} alt="Деловая полиграфия Relumo" className="aspect-[4/3]" />
          <Img src={i08.url} alt="Визитки и ручки с логотипом" className="aspect-[4/3]" />
          <Img src={i09.url} alt="Сайт Relumo на ноутбуке" className="aspect-[4/3]" />
          <Img src={i12.url} alt="Бейдж сотрудника" className="aspect-[4/3]" />
          <Img src={i13.url} alt="Световая вывеска на фасаде" className="aspect-[4/3]" />
          <Img src={i14.url} alt="Логотип в луче света" className="aspect-[4/3]" />
          <Img src={i04.url} alt="Стикеры с логотипом" className="aspect-[4/3]" />
          <Img src={i05.url} alt="Фигурный стикер со знаком" className="aspect-[4/3]" />
        </div>
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <H2 n="04">Результат и бизнес-эффект</H2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <p className={P}>Заказчик пришел за логотипом, а ушел с комплексной инфраструктурой бренда, готовой к масштабированию без постоянного вовлечения сторонних арт-директоров. Глубокая метафора стала визуальным фильтром: айдентика с первого дня транслирует статус компании и вызывает доверие крупных B2B-заказчиков в премиум-сегменте.</p>
          <div className="space-y-4">
            <p className="font-mono text-sm uppercase text-muted-foreground">Защита проекта</p>
            <p className={P}>Концепция была принята без единой правки. В ходе презентации я успешно отработала возражения трех кофаундеров стартапа, аргументировав каждое графическое решение через призму бизнес-задач. Бренд успешно запущен и находится на стадии внедрения на физические носители и веб.</p>
          </div>
        </div>
      </section>

      <section className="border-b bg-primary p-6 py-20 text-foreground md:p-16 md:py-32">
        <blockquote className="font-display text-2xl font-bold leading-tight tracking-tight md:text-4xl">
          <p>«Я понимаю, что у тебя нестандартный подход к задаче, ты глубоко выясняешь потребности клиента и его боль. В творческом процессе меня покорило то, что ты закладываешь сложную мысль в айдентику — это очень сильно выделяет тебя на фоне других дизайнеров.</p>
          <p className="mt-8">Ты не тот человек, который просто рисует красивую картинку и ставит банальную лампочку. Ты думаешь о том, как визуальная система поможет бизнесу продавать и развиваться. Это редкое сочетание качеств, когда эстетика напрямую работает на коммерческую цель».</p>
        </blockquote>
        <p className="mt-12 font-mono text-sm uppercase">— CEO & Co-founder, Relumo</p>
      </section>

      <div className="p-6 md:p-16">
        <Link to="/" hash="cases" className="btn">← Назад к проектам</Link>
      </div>
    </div>
  );
}
