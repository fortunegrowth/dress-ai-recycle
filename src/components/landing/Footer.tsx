import logoLight from "@/assets/urerun-logo-light.png";
import mark from "@/assets/urerun-mark.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <img src={mark} alt="" className="h-10 w-10" />
              <img src={logoLight} alt="urerun" className="h-6 w-auto" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70 max-w-md">
              循環型ファッションエコシステムの構築を通じて、
              持続可能な消費社会の実現と、
              多様な価値観が共存する豊かなライフスタイルの創造に貢献する。
            </p>
          </div>

          <div className="text-sm space-y-3 md:text-right">
            <div className="text-primary-foreground/60 text-xs uppercase tracking-widest">
              運営会社
            </div>
            <div>株式会社FortuneGrowth</div>
            <div className="text-primary-foreground/70">
              〒135-0063 東京都江東区有明3-7-11
              <br />
              有明パークビル20F
            </div>
            <div className="text-primary-foreground/70">代表：福 真衣</div>
            <a
              href="mailto:fortunegrowth.corp@gmail.com"
              className="inline-block text-primary-foreground hover:text-gold transition"
            >
              fortunegrowth.corp@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} FortuneGrowth Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-foreground transition">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-primary-foreground transition">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
