import logoDark from "@/assets/urerun-logo-dark.png";
import mark from "@/assets/urerun-mark.png";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={mark} alt="" className="h-9 w-9" />
          <img src={logoDark} alt="urerun" className="h-5 sm:h-6 w-auto" />
        </a>
        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs sm:text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          無料で査定
        </a>
      </div>
    </header>
  );
}
