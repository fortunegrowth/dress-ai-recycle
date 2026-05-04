import { User, Sparkles, Banknote, Shirt, Users, Gift } from "lucide-react";

const nodes = [
  { icon: User, label: "消費者", sub: "手放したい人" },
  { icon: Sparkles, label: "AI査定", sub: "30秒で適正価格" },
  { icon: Banknote, label: "買取", sub: "即時取引" },
  { icon: Shirt, label: "レンタル事業者", sub: "提携パートナー" },
  { icon: Users, label: "次の利用者", sub: "また誰かの一着に" },
  { icon: Gift, label: "クーポン還元", sub: "消費者へ循環" },
];

export function Cycle() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Circular Model</p>
          <h2 className="mt-3 text-2xl sm:text-4xl">
            手放したドレスが、次の誰かを輝かせる。
          </h2>
          <p className="mt-4 text-muted-foreground">
            urerunは、消費者・AI・レンタル事業者をつなぎ、
            ファッションを循環させるエコシステムを作ります。
          </p>
        </div>

        <div className="reveal mt-14 rounded-3xl border border-border bg-secondary/40 p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
            {nodes.map((n, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/50 bg-background">
                    <n.icon className="h-7 w-7 text-gold" />
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-gold-foreground">
                    {i + 1}
                  </div>
                </div>
                <div className="mt-3 text-sm font-medium text-foreground">
                  {n.label}
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {n.sub}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="h-px w-8 bg-gold" />
            循環するから、捨てなくていい。
            <span className="h-px w-8 bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
