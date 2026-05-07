import { Sparkles, ChevronDown, Camera, CheckCircle2 } from "lucide-react";
import heroDress from "@/assets/hero-dress.png";

const HERO_BG =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1280&q=70";

export function Hero() {

  return (
    <section
      id="top"
      className="relative isolate min-h-[60svh] sm:min-h-[100svh] w-full overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{ backgroundColor: "oklch(0.18 0.02 260)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "oklch(0.18 0.02 260)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,20,35,0.55) 0%, rgba(15,20,35,0.65) 50%, rgba(15,20,35,0.85) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[60svh] sm:min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-32 sm:py-24 sm:px-8">
        <div className="grid grid-cols-[1.5fr_1fr] items-center gap-3 sm:gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="min-w-0">
            <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:flex-wrap sm:gap-2">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-gold/60 bg-primary/50 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[11px] font-medium backdrop-blur">
                <Sparkles className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-gold" />
                30秒査定
              </span>
              <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary/50 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[11px] backdrop-blur">
                着用回数が少ないほど高価買取
              </span>
            </div>

            <h1 className="mt-3 sm:mt-6 font-serif text-[1.5rem] leading-[1.3] sm:text-6xl sm:leading-[1.2] text-balance">
              売るかどうか、<br />
              <span className="text-gold">今日中</span>に<br />
              決められる。
            </h1>

            <p className="mt-3 sm:mt-5 text-[10px] sm:text-lg leading-relaxed text-primary-foreground/90">
              写真を送るだけで30秒。<br />
              店舗にも行かず、<br className="sm:hidden" />数日も待たず、<br />
              家にいながら<br className="sm:hidden" />適正価格がわかります。
            </p>

            <div className="mt-4 sm:mt-7 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-gold px-3 sm:px-6 py-2.5 sm:py-3.5 text-[11px] sm:text-sm font-medium text-gold-foreground shadow-xl shadow-black/30 transition hover:opacity-90"
              >
                無料で査定を申し込む
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-3 sm:px-6 py-2.5 sm:py-3.5 text-[11px] sm:text-sm font-medium text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
              >
                仕組みを見る
              </a>
            </div>
          </div>

          <div className="flex justify-end lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      <a
        href="#problem"
        aria-label="次のセクションへ"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/70 transition hover:text-primary-foreground"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[3rem] bg-gold/20 blur-3xl"
      />
      <div className="relative w-[100px] sm:w-[320px] rounded-[1.25rem] sm:rounded-[2.5rem] border-[5px] sm:border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/60">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-20 h-3 sm:h-5 w-14 sm:w-24 -translate-x-1/2 rounded-b-xl sm:rounded-b-2xl bg-neutral-900" />
        <div className="overflow-hidden rounded-[1.1rem] sm:rounded-[1.9rem] bg-background text-foreground">
          {/* status bar */}
          <div className="flex items-center justify-between px-3 sm:px-5 pt-2 sm:pt-4 pb-1 sm:pb-2 text-[8px] sm:text-[10px] text-foreground/70">
            <span>9:41</span>
            <span>urerun</span>
          </div>

          <div className="px-3 sm:px-5 pb-3 sm:pb-6">
            {/* image area */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:rounded-2xl bg-muted">
              <img
                src={heroDress}
                alt="査定中のアイテム"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-1.5 top-1.5 sm:left-3 sm:top-3 inline-flex items-center gap-0.5 sm:gap-1 rounded-full bg-background/90 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[7px] sm:text-[10px] font-medium backdrop-blur">
                <Camera className="h-2 w-2 sm:h-3 sm:w-3 text-gold" />
                AI解析中
              </div>
            </div>

            <div className="mt-2 sm:mt-4">
              <p className="text-[7px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">Brand</p>
              <p className="font-serif text-[10px] sm:text-base leading-tight">Mame Kurogouchi / Dress</p>
            </div>

            <div className="mt-2 sm:mt-4 rounded-lg sm:rounded-2xl border border-gold/40 bg-gold/5 p-2 sm:p-4">
              <p className="text-[7px] sm:text-[10px] uppercase tracking-widest text-gold">査定結果</p>
              <div className="mt-0.5 sm:mt-1 flex items-baseline gap-1 flex-wrap">
                <span className="font-serif text-base sm:text-3xl font-medium">¥66,000</span>
                <span className="text-[7px] sm:text-xs text-muted-foreground">+ ¥2,000</span>
              </div>
              <div className="mt-1 sm:mt-2 flex items-center gap-0.5 sm:gap-1 text-[7px] sm:text-[10px] text-muted-foreground">
                <CheckCircle2 className="h-2 w-2 sm:h-3 sm:w-3 text-gold" />
                相場：¥50,000〜¥66,000
              </div>
            </div>

            <button className="mt-2 sm:mt-4 w-full rounded-full bg-foreground py-1.5 sm:py-3 text-[8px] sm:text-xs font-medium text-background">
              この価格で承諾する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
