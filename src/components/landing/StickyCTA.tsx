import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),14px)] pt-3 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto max-w-md">
        <a
          href="#cta"
          className="group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-gold to-[oklch(0.72_0.13_75)] px-6 py-4 text-sm font-semibold tracking-wide text-gold-foreground shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45),0_2px_0_0_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.45)] ring-1 ring-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.5),0_2px_0_0_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.5)] active:translate-y-0 active:shadow-[0_6px_18px_-6px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
        >
          <Sparkles className="h-4 w-4" />
          無料で査定額を見る
        </a>
      </div>
    </div>
  );
}
