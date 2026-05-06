import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

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
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto max-w-md">
        <a
          href="#cta"
          className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-gold-foreground shadow-2xl shadow-black/30 transition hover:opacity-90"
        >
          無料で査定額を見る
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
