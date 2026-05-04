import { useEffect, useRef } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

// ABテスト候補（採用：案D）
// 案A：手放す、もっとかしこく。AIが30秒で適正価格を提示します。
// 案B：買取価格、もう曖昧にしない。相場も、根拠も、ぜんぶ見せます。
// 案C：着ていない服を、次の新作へ変えよう。

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
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-primary text-primary-foreground"
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

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5 sm:px-8">
        <div className="reveal max-w-3xl">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/60 bg-primary/50 px-3 py-1 text-[11px] font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              国内デザイナーズブランド特化
            </span>
            <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary/50 px-3 py-1 text-[11px] backdrop-blur">
              着用回数が少ないほど高価買取
            </span>
          </div>

          <h1 className="mt-7 font-serif text-[2.2rem] leading-[1.3] sm:text-6xl sm:leading-[1.2] text-balance">
            あなたのクローゼットから、
            <br className="hidden sm:block" />
            次の<span className="text-gold">誰か</span>へ。
          </h1>

          <p className="mt-6 max-w-xl text-sm sm:text-lg leading-relaxed text-primary-foreground/90">
            AIが即時に相場を算出し、鑑定士が最終確認。
            <br className="hidden sm:block" />
            国内デザイナーズ特化だから、ブランドの価値を正しく評価します。
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-medium text-gold-foreground shadow-xl shadow-black/30 transition hover:opacity-90"
            >
              無料で査定を申し込む
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-4 text-sm font-medium text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              仕組みを見る
            </a>
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
