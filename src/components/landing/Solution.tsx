import {
  Camera,
  Sparkles,
  Truck,
  UserCheck,
  ShieldCheck,
  Wallet,
  ArrowRight,
} from "lucide-react";

const steps = [
  { icon: Camera, title: "写真を送る", sub: "数分で入力完了" },
  { icon: Sparkles, title: "AI査定", sub: "30秒で価格提示", accent: "ai" as const },
  { icon: Truck, title: "集荷・発送", sub: "自宅まで集荷" },
  { icon: UserCheck, title: "鑑定士確認", sub: "実物を最終チェック", accent: "human" as const },
  { icon: ShieldCheck, title: "価格確定", sub: "入力どおりなら据え置き" },
  { icon: Wallet, title: "入金", sub: "最短当日〜3営業日" },
];

export function Solution() {
  return (
    <section id="how" className="relative isolate py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-20" style={{ backgroundColor: "oklch(0.96 0.01 90)" }} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">How it works</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            査定額がわかるのは、たった30秒。
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground">
            写真を送るだけ。従来 <span className="font-medium text-foreground">7日</span> かかっていた査定が、AIで <span className="font-medium text-gold">30秒</span> に短縮されます。
          </p>
        </div>

        {/* Comparison: 従来 vs urerun */}
        <div className="reveal mt-12 rounded-3xl border border-border bg-background/80 p-5 sm:p-8 backdrop-blur">
          <div className="space-y-6">
            {/* 従来 */}
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  従来の買取
                </div>
                <div className="text-xs text-muted-foreground">
                  査定額がわかるまで <span className="font-serif text-base text-foreground">約7日</span>
                </div>
              </div>
              <div className="mt-3 relative">
                <div className="flex h-9 overflow-hidden rounded-full border border-border bg-secondary text-[10px] sm:text-xs">
                  <div className="flex items-center justify-center px-3 text-muted-foreground" style={{ width: "12%" }}>
                    申込
                  </div>
                  <div className="flex items-center justify-center border-l border-border px-3 text-muted-foreground" style={{ width: "30%" }}>
                    発送・到着
                  </div>
                  <div className="flex items-center justify-center border-l border-border bg-muted px-3 font-medium text-foreground" style={{ width: "33%" }}>
                    鑑定士が査定
                  </div>
                  <div className="flex items-center justify-center border-l border-border px-3 text-muted-foreground" style={{ width: "25%" }}>
                    結果連絡・入金
                  </div>
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-1 h-11 border-l-2 border-dashed border-foreground/40"
                  style={{ left: "75%" }}
                />
                <div
                  className="absolute -top-7 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-medium text-background"
                  style={{ left: "75%" }}
                >
                  ↓ 査定額がわかる（約7日後）
                </div>
              </div>
            </div>

            {/* urerun */}
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-gold">
                  urerun
                </div>
                <div className="text-xs text-muted-foreground">
                  査定額がわかるまで <span className="font-serif text-base text-gold">30秒</span>
                </div>
              </div>
              <div className="mt-3 relative">
                <div className="flex h-9 overflow-hidden rounded-full border border-gold/40 bg-gold/5 text-[10px] sm:text-xs">
                  <div className="flex items-center justify-center bg-gold/20 px-3 font-medium text-foreground" style={{ width: "8%" }}>
                    AI
                  </div>
                  <div className="flex items-center justify-center border-l border-gold/30 px-3 text-muted-foreground" style={{ width: "30%" }}>
                    発送・到着
                  </div>
                  <div className="flex items-center justify-center border-l border-gold/30 px-3 text-muted-foreground" style={{ width: "32%" }}>
                    鑑定士が最終確認
                  </div>
                  <div className="flex items-center justify-center border-l border-gold/30 px-3 text-muted-foreground" style={{ width: "30%" }}>
                    入金（最短当日）
                  </div>
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-1 h-11 border-l-2 border-dashed border-gold"
                  style={{ left: "8%" }}
                />
                <div
                  className="absolute -top-7 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-medium text-gold-foreground"
                  style={{ left: "8%" }}
                >
                  ↓ 査定額がわかる（30秒）
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            ※ 帯の長さは所要時間のイメージです。発送・鑑定の時間は変わりませんが、<span className="font-medium text-foreground">「売るか決める判断」が圧倒的に早く</span> できます。
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="reveal mt-16 hidden lg:block">
          <div className="relative flex items-start justify-between gap-2">
            <div aria-hidden className="absolute left-8 right-8 top-7 h-px bg-gradient-to-r from-gold/40 via-border to-primary/40" />
            {steps.map((s, i) => {
              const Icon = s.icon;
              const ring =
                s.accent === "ai"
                  ? "border-gold/60 bg-gold/10 text-gold"
                  : s.accent === "human"
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-background text-foreground";
              return (
                <div key={i} className="relative flex flex-1 flex-col items-center text-center">
                  <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 ${ring} bg-background shadow-sm`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-gold">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 font-serif text-base leading-snug">{s.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground px-2">{s.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <p className="rounded-full border border-dashed border-gold/50 bg-gold/5 px-5 py-2 text-xs text-foreground/80">
              💡 <span className="font-medium text-gold">AI</span> × <span className="font-medium text-primary">鑑定士</span> の二段構え。スピードと精度を両立。
            </p>
          </div>
        </div>

        {/* Mobile/Tablet: 2-column compact grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 lg:hidden">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const ring =
              s.accent === "ai"
                ? "border-gold/60 bg-gold/10 text-gold"
                : s.accent === "human"
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground";
            return (
              <div
                key={i}
                className="reveal rounded-2xl border border-border bg-background p-4"
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${ring}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                    Step 0{i + 1}
                  </div>
                </div>
                <div className="mt-3 font-serif text-sm leading-snug">{s.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
          >
            無料で査定を申し込む
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
