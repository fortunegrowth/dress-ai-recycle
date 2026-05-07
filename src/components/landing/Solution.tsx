import {
  Camera,
  Sparkles,
  Truck,
  UserCheck,
  ShieldCheck,
  Wallet,
  
  ArrowDown,
  Clock,
  Zap,
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
            査定額がわかるのは、
            <br />
            たった30秒。
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground">
            写真を送るだけ。従来 <span className="font-medium text-foreground">7日</span> かかっていた査定が、AIで <span className="font-medium text-gold">30秒</span> に短縮されます。
          </p>
        </div>

        {/* Comparison: 従来 vs urerun – clearer side-by-side cards */}
        <div className="reveal mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* 従来 */}
          <div className="rounded-3xl border border-border bg-background/80 p-6 sm:p-8 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                従来の宅配買取
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">査定額がわかるまで</div>
                <div className="font-serif text-2xl text-foreground">約7日</div>
              </div>
            </div>

            <ol className="mt-6 space-y-3">
              {[
                { label: "申込", time: "当日" },
                { label: "発送・到着", time: "1〜2日" },
                { label: "鑑定士が査定", time: "3〜5日", highlight: true },
                { label: "結果連絡・入金", time: "1〜2日", milestone: "← 査定額がわかる" },
              ].map((row, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-medium text-muted-foreground">
                    {i + 1}
                  </div>
                  <div className={`flex-1 rounded-xl border px-3 py-2 text-sm ${row.highlight ? "border-foreground/20 bg-muted font-medium" : "border-border bg-secondary/50"}`}>
                    <div className="flex items-center justify-between gap-2">
                      <span>{row.label}</span>
                      <span className="text-xs text-muted-foreground">{row.time}</span>
                    </div>
                    {row.milestone && (
                      <div className="mt-1 text-[11px] font-medium text-foreground">{row.milestone}</div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* urerun */}
          <div className="relative rounded-3xl border-2 border-gold/50 bg-background p-6 sm:p-8 shadow-lg shadow-gold/10">
            <div className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold tracking-widest text-gold-foreground">
              urerunなら
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
                <Zap className="h-3.5 w-3.5" />
                AI査定
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-gold">査定額がわかるまで</div>
                <div className="font-serif text-2xl text-gold">30秒</div>
              </div>
            </div>

            <ol className="mt-6 space-y-3">
              {[
                { label: "AIが査定", time: "30秒", highlight: true, milestone: "← 査定額がわかる" },
                { label: "発送・到着", time: "1〜2日" },
                { label: "鑑定士が最終確認", time: "1〜2日" },
                { label: "入金", time: "最短当日" },
              ].map((row, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium ${row.highlight ? "bg-gold text-gold-foreground" : "border border-gold/30 bg-background text-gold"}`}>
                    {i + 1}
                  </div>
                  <div className={`flex-1 rounded-xl border px-3 py-2 text-sm ${row.highlight ? "border-gold/50 bg-gold/10 font-medium" : "border-gold/20 bg-gold/5"}`}>
                    <div className="flex items-center justify-between gap-2">
                      <span>{row.label}</span>
                      <span className={`text-xs ${row.highlight ? "text-gold" : "text-muted-foreground"}`}>{row.time}</span>
                    </div>
                    {row.milestone && (
                      <div className="mt-1 text-[11px] font-medium text-gold">{row.milestone}</div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="reveal mt-6 text-center text-xs text-muted-foreground">
          ※ 発送・鑑定の時間は変わりませんが、
          <br />
          <span className="font-medium text-foreground">「売るか決める判断」が圧倒的に早く</span> できます。
        </p>

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

        {/* Mobile/Tablet: vertical flow */}
        <div className="mt-12 lg:hidden">
          <div className="relative mx-auto max-w-md">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const ring =
                s.accent === "ai"
                  ? "border-gold/60 bg-gold/10 text-gold"
                  : s.accent === "human"
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-background text-foreground";
              const isLast = i === steps.length - 1;
              return (
                <div key={i} className="reveal" style={{ ["--reveal-delay" as never]: `${i * 60}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${ring} bg-background shadow-sm`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      {!isLast && (
                        <div aria-hidden className="my-1 h-8 w-px bg-gradient-to-b from-border to-transparent" />
                      )}
                    </div>
                    <div className="flex-1 pb-2 pt-1">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                        Step {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-0.5 font-serif text-base leading-snug">{s.title}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{s.sub}</div>
                    </div>
                    {!isLast && (
                      <ArrowDown className="mt-3 h-4 w-4 shrink-0 text-muted-foreground/40" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <p className="rounded-full border border-dashed border-gold/50 bg-gold/5 px-4 py-2 text-[11px] text-foreground/80">
              💡 <span className="font-medium text-gold">AI</span> × <span className="font-medium text-primary">鑑定士</span> の二段構え
            </p>
          </div>
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
          >
            無料で査定を申し込む
          </a>
        </div>
      </div>
    </section>
  );
}
