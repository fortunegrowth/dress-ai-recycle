import { useEffect, useRef } from "react";
import { Sparkles, ChevronDown, Camera, CheckCircle2 } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!bgRef.current) return;
        const y = window.scrollY * 0.35;
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{ backgroundColor: "oklch(0.18 0.02 260)" }}
      />
      <div
        ref={bgRef}
        aria-hidden
        className="absolute inset-0 -z-20 will-change-transform"
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

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
        <div className="grid grid-cols-[1.4fr_1fr] items-center gap-3 sm:gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
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

            <h1 className="mt-3 sm:mt-6 font-serif text-[1.35rem] leading-[1.3] sm:text-6xl sm:leading-[1.2] text-balance">
              売るかどうか、<br />
              <span className="text-gold">今日中</span>に<br className="sm:hidden" />決められる。
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
      <div className="relative w-[320px] rounded-[2.5rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/60">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
        <div className="overflow-hidden rounded-[1.9rem] bg-background text-foreground">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2 text-[10px] text-foreground/70">
            <span>9:41</span>
            <span>urerun</span>
          </div>

          <div className="px-5 pb-6">
            {/* image area */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80"
                alt="査定中のアイテム"
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-[10px] font-medium backdrop-blur">
                <Camera className="h-3 w-3 text-gold" />
                AI解析中
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Brand</p>
              <p className="font-serif text-base leading-tight">sacai / Wool Coat</p>
            </div>

            <div className="mt-4 rounded-2xl border border-gold/40 bg-gold/5 p-4">
              <p className="text-[10px] uppercase tracking-widest text-gold">査定結果</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-serif text-3xl font-medium">¥48,200</span>
                <span className="text-xs text-muted-foreground">+ クーポン ¥2,000</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground">
                <CheckCircle2 className="h-3 w-3 text-gold" />
                相場：¥42,000 – ¥52,000
              </div>
            </div>

            <button className="mt-4 w-full rounded-full bg-foreground py-3 text-xs font-medium text-background">
              この価格で承諾する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
