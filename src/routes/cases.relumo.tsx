import { createFileRoute, Link } from "@tanstack/react-router";
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

function H2({ children }: { children: string }) {
  return <h2 className="text-3xl font-bold md:text-5xl">{children}</h2>;
}

const P = "text-lg md:text-xl";
// Общая сетка секций: заголовок сверху, ниже — текст и фото на одной колонночной сетке.
const ROW = "mt-12 grid items-center gap-10 md:gap-16";
const TEXT_LEFT = `${ROW} md:grid-cols-[1fr_1.4fr]`;
const IMG_LEFT = `${ROW} md:grid-cols-[1.4fr_1fr]`;
const PHOTO = "aspect-[1.42/1]";
const WIDE = "aspect-[16/9]";

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
        <Img src={i07.url} alt="Логотип Relumo, подсвеченный на тёмно-синем фоне" className={`${WIDE} shadow-brutal`} />
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <H2>Контекст и бизнес-задача</H2>
        <div className={TEXT_LEFT}>
          <div className="space-y-6">
            <p className="font-mono text-sm uppercase text-muted-foreground">Исходная ситуация</p>
            <p className={P}>Финский стартап в сфере светодизайна выходил на международный B2B-рынок. Изначальный запрос клиента звучал как «создать пластичный логотип и подобрать фирменные цвета».</p>
            <p className="pt-6 font-mono text-sm uppercase text-muted-foreground">Точки боли</p>
            <p className={P}>В ходе брифинга я выявила ключевое бизнес-требование: бренд строится на перспективу. Через 5 лет компания планирует масштабироваться и, возможно, выйти за пределы только светодизайна.</p>
          </div>
          <div className="grid gap-6">
            <div className="border p-8"><b className="font-display">Проблема 1:</b> <span className={P}>Нужен аутентичный знак, который транслирует идею «света» сейчас, но не потеряет актуальности при смене ниши (никаких прямых ассоциаций в лоб, вроде лампочек или лучей).</span></div>
            <div className="border p-8"><b className="font-display">Проблема 2:</b> <span className={P}>Проект стартует с нуля. Делать просто логотип — нерентабельно для бизнеса. Чтобы сразу занять премиум-позиционирование и отстроиться от конкурентов, стартапу требовалась полноценная, масштабируемая визуальная система.</span></div>
          </div>
        </div>
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <H2>Исследование ниши</H2>
        <div className={TEXT_LEFT}>
          <div className="space-y-6">
            <p className={P}>Аудит европейских и российских конкурентов показал две полярные и одинаково неэффективные стратегии:</p>
            <ol className={`${P} list-decimal space-y-3 pl-6`}>
              <li>Ультра-примитивность: незатейливая графика «для галочки» с фокусом только на продукт, бренд выглядит дешево.</li>
              <li>Гипер-абстракция: сложная, глубокая графика, которая абсолютно не запоминается и не идентифицируется при повторном касании.</li>
            </ol>
          </div>
          <Img src={i16.url} alt="Мудборд логотипов конкурентов: FLOS, ERCO, Targetti, iGuzzini, Zumtobel" className={WIDE} />
        </div>
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <H2>Поиск метафоры</H2>
        <div className={IMG_LEFT}>
          <Img src={i10.url} alt="Знак-призма, спроецированный светом на стену" className={PHOTO} />
          <p className={`${P} text-muted-foreground`}>За основу я взяла философский смысл слова «Relumo» — нести свет, улучшать, реконструировать среду и жизнь бизнеса. Отбросив банальные идеи со звездами и искрами, я пришла к метафоре Призмы. Призма не говорит о свете «в лоб», но она его преломляет, концентрирует и направляет. Это идеальный баланс между сложной абстракцией и понятным, запоминающимся образом, который легко считывается аудиторией (тестирование на фокус-группе из 30 человек вне индустрии показало 90% считываемости идеи).</p>
        </div>
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <H2>Архитектура дизайн-системы</H2>
        <div className="mt-16 space-y-24">
          {/* 1. Геометрия знака: большое фото + карточки-смыслы */}
          <div>
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <h3 className="text-2xl font-bold md:text-3xl">Геометрия знака</h3>
              <p className={`${P} text-muted-foreground`}>Основа знака — треугольник (призма). Он символизирует три столпа светодизайна: две нижние вершины стремятся вверх и соединяются в высшей точке.</p>
            </div>
            <div className={IMG_LEFT}>
              <Img src={i02.url} alt="Знак Relumo на синем фоне, вписанный в треугольник" className={PHOTO} />
              <div className="grid gap-6">
                {[
                  ["Вершина — человек", "Тот, ради которого создаётся световой сценарий."],
                  ["Основание — архитектура", "Физическая среда и интерьер, с которыми работает студия."],
                  ["Срез — луч света", "Свет поступает в призму, преломляется и отражается от её граней."],
                  ["Буква «L»", "Тот же луч дублируется в названии и выведен выше набора — лёгкая «панковость» разбивает строгость B2B-шрифта."],
                ].map(([t, d], k) => (
                  <div key={t} className="border p-6 transition-colors duration-150 hover:border-primary">
                    <p className="font-mono text-xs text-primary">0{k + 1}</p>
                    <p className="mt-2 font-display text-lg font-bold">{t}</p>
                    <p className="mt-2 text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Три начертания: три фото в ряд */}
          <div>
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <h3 className="text-2xl font-bold md:text-3xl">3 версии логотипа — от фасада до фавикона</h3>
              <p className={`${P} text-muted-foreground`}>Знак и шрифтовая часть имеют равный визуальный вес и самостоятельны: работают и в паре, и по отдельности. Три начертания покрывают любой носитель — от стикера до вывески.</p>
            </div>
            <div className={`${ROW} md:grid-cols-3`}>
              {[
                [sign, "Знак", "Фавикон, аватар, тиснение"],
                [vertical, "Вертикальная", "Полиграфия, бейджи, упаковка"],
                [horizontal, "Горизонтальная", "Сайт, вывеска, шапки документов"],
              ].map(([img, t, d]) => (
                <figure key={t as string}>
                  <Img src={(img as { url: string }).url} alt={`${t} версия логотипа Relumo`} className={PHOTO} />
                  <figcaption className="mt-4">
                    <p className="font-display font-bold">{t as string}</p>
                    <p className="text-sm text-muted-foreground">{d as string}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* 3. Колористика: текст слева, палитра справа */}
          <div className={TEXT_LEFT}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Колористика</h3>
              <p className={P}><b>База (доверие и статус):</b> <span className="text-muted-foreground">глубокий, сложный B2B-синий в контрасте с тёплым бежевым — тень и сам свет.</span></p>
              <p className={P}><b>Акценты (digital):</b> <span className="text-muted-foreground">яркий жёлтый для CTA и цифровой среды — в связке с синим выглядит дорого, а не ядовито.</span></p>
            </div>
            <Img src={i03.url} alt="Фирменная палитра Relumo" className={PHOTO} />
          </div>

          {/* 4. Паттерн: фото слева, текст справа */}
          <div className={IMG_LEFT}>
            <Img src={i11.url} alt="Паттерн из треугольников Relumo" className={PHOTO} />
            <div className="space-y-6">
              <h3 className="text-2xl font-bold md:text-3xl">Паттерн с «пасхалкой»</h3>
              <p className={`${P} text-muted-foreground`}>Сформирован из базового треугольника призмы, в негативном пространстве которого зашифрована буква «М» — прямая отсылка к названию по запросу клиента.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <Img src={i15.url} alt="Деловая полиграфия Relumo" className={`${WIDE} md:col-span-2`} />
          <Img src={i08.url} alt="Визитки и ручки с логотипом" className={PHOTO} />
          <Img src={i12.url} alt="Бейдж сотрудника" className={PHOTO} />
          <Img src={i09.url} alt="Сайт Relumo на ноутбуке" className={`${WIDE} md:col-span-2`} />
          <Img src={i13.url} alt="Световая вывеска на фасаде" className={PHOTO} />
          <Img src={i14.url} alt="Логотип в луче света" className={PHOTO} />
        </div>
      </section>

      <section className="border-b p-6 py-16 md:p-16 md:py-24">
        <H2>Результат и бизнес-эффект</H2>
        <div className={TEXT_LEFT}>
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
