import { HelpCircle, ShoppingBag, Scale } from "lucide-react";

const items = [
  {
    icon: HelpCircle,
    title: "買取価格が適正かどうか、\nわからない",
    text: "数日待って査定されても、その価格が本当に適正なのか判断できない。結局、言われた価格で売るしかなかった。",
  },
  {
    icon: ShoppingBag,
    title: "フリマの方が\n高く売れるかもしれない",
    text: "でも相場を調べて、写真を撮って、文章を書いて、交渉して……その手間を考えると踏み出せない。",
  },
  {
    icon: Scale,
    title: "比べられないから、\n決断できない",
    text: "フリマで売るべきか、買取に出すべきか。判断する材料がなければ、クローゼットに眠ったまま。",
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
            売りたいのに、
            <br />
            どこで売るのが得か
            <br />
            わからない。
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
              <h3 className="mt-6 font-serif text-lg leading-snug whitespace-pre-line">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal mt-12 text-center font-serif text-lg sm:text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
          決断できないのは、
          <br />
          比べる材料がないから、
          <br />
          決められないんです。
        </p>
      </div>
    </section>
  );
}
