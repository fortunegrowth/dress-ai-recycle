import { Gem, PackageX, HeartCrack } from "lucide-react";

const items = [
  {
    icon: Gem,
    title: "デザイナーズの価値、\nわかってもらえない",
    text: "数日待って査定されるのに、思ったより低い価格。デザイナーズの価値をちゃんと評価してもらえた気がしない。",
  },
  {
    icon: PackageX,
    title: "フリマサイトは手間がかかりすぎる",
    text: "出品・値下げ交渉・梱包・発送・クレーム対応。まとめて手放したい時は、特につらい。",
  },
  {
    icon: HeartCrack,
    title: "高かったのに、安く手放すのは嫌だ",
    text: "新しいシーズンの服も欲しい。でも手元の服は可愛いし、状態もいい。ブランドの価値をわかってくれる場所で、納得できる価格で売りたい。",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative isolate py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-20 bg-background" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Problem</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            手放したいのに、
            <br />
            なぜか踏み出せない。
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div
              key={i}
              className="reveal rounded-3xl border border-border bg-card p-8"
              style={{ ["--reveal-delay" as never]: `${i * 120}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-lg leading-snug">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal mt-12 text-sm text-muted-foreground max-w-3xl">
          ファッションが好きな方も、ファッションに携わるなかで手元にアイテムが増えてしまう方も。
          urerunは「ブランドの価値を理解してくれる買取先」を探しているすべての方のために。
        </p>
      </div>
    </section>
  );
}
