import mark from "@/assets/urerun-mark.png";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28"
    >
      {/* Soft gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top right, color-mix(in oklab, var(--gold) 22%, transparent), transparent 60%), radial-gradient(ellipse at bottom left, color-mix(in oklab, var(--sage) 12%, transparent), transparent 55%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            AIファッション買取 β版
          </span>
          <h1 className="mt-5 text-3xl leading-[1.35] sm:text-5xl sm:leading-[1.25]">
            そのドレス、
            <br className="sm:hidden" />
            眠らせていませんか？
            <br />
            <span className="text-gold">AIが30秒</span>で
            <br className="sm:hidden" />
            適正価格を提示します。
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            写真を撮って送るだけ。高級ドレス特化のAI査定で、
            <br className="hidden sm:block" />
            適正価格＋クーポン還元。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
            >
              無料で査定してみる
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              仕組みを見る
            </a>
          </div>
        </div>

        {/* Visual: phone mock with mark */}
        <div className="reveal relative flex justify-center lg:justify-end">
          <div
            aria-hidden
            className="absolute -top-6 -right-2 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
          />
          <div className="relative">
            <img
              src={mark}
              alt=""
              className="absolute -top-10 -left-10 h-44 w-44 sm:h-56 sm:w-56 opacity-90"
            />
            <div className="relative w-[260px] sm:w-[300px] rounded-[2.5rem] border border-border bg-background p-3 shadow-2xl shadow-primary/15">
              <div className="rounded-[2rem] bg-gradient-to-b from-secondary to-background p-5 aspect-[9/19]">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>9:41</span>
                  <span>urerun</span>
                </div>
                <div className="mt-4 rounded-2xl border border-border bg-background p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    AI査定結果
                  </div>
                  <div className="mt-2 font-serif text-3xl text-foreground">
                    ¥48,000
                  </div>
                  <div className="mt-1 text-[11px] text-sage">＋クーポン ¥6,000</div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[78%] rounded-full bg-gold" />
                  </div>
                  <div className="mt-2 text-[10px] text-muted-foreground">
                    査定信頼度 78%
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-dashed border-gold/50 bg-gold/5 p-3 text-[10px] text-foreground">
                  鑑定士による最終確認 進行中…
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-muted"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
