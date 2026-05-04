import { useEffect, useState } from "react";
import logoDark from "@/assets/urerun-logo-dark.png";
import mark from "@/assets/urerun-mark.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={mark} alt="" className="h-9 w-9" />
          <img
            src={logoDark}
            alt="urerun"
            className={`h-5 sm:h-6 w-auto transition ${
              scrolled ? "opacity-100" : "brightness-0 invert"
            }`}
          />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/login"
            className={`hidden sm:inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-medium transition ${
              scrolled
                ? "text-foreground hover:text-gold"
                : "text-white/90 hover:text-white"
            }`}
          >
            ログイン
          </a>
          <a
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-xs sm:text-sm font-medium text-gold-foreground shadow transition hover:opacity-90"
          >
            無料で査定
          </a>
        </div>
      </div>
    </header>
  );
}
