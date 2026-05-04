import { Clock, PackageX, Shirt } from "lucide-react";

const items = [
  {
    icon: Clock,
    text: "買取に出したら数日待って、思ったより安かった",
  },
  {
    icon: PackageX,
    text: "メルカリは梱包・発送・クレームが面倒",
  },
  {
    icon: Shirt,
    text: "いいドレスなのにクローゼットに眠ったまま",
  },
];

export function Problem() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Problem</p>
          <h2 className="mt-3 text-2xl sm:text-4xl">
            ドレスを手放すとき、こんな悩みありませんか？
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-border bg-background p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
