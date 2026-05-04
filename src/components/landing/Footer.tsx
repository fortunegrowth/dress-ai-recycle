import logoLight from "@/assets/urerun-logo-light.png";
import mark from "@/assets/urerun-mark.png";

const navLinks = [
  { label: "よくある質問", href: "/faq" },
  { label: "ご利用ガイド", href: "/guide" },
  { label: "特定商取引法に基づく表記", href: "/commerce-law" },
  { label: "利用規約", href: "/terms" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "お問い合わせ", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
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

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-gold-foreground transition hover:opacity-90"
              >
                無料登録
              </a>
              <a
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-5 py-2.5 text-xs font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                ログイン
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-primary-foreground/60 text-[11px] uppercase tracking-widest">
              ナビゲーション
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-primary-foreground/85 transition hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-sm space-y-3">
            <div className="text-primary-foreground/60 text-[11px] uppercase tracking-widest">
              運営会社
            </div>
            <div>株式会社FortuneGrowth</div>
            <div className="text-primary-foreground/70 leading-relaxed">
              〒135-0063
              <br />
              東京都江東区有明3-7-11
              <br />
              有明パークビル20F
            </div>
            <div className="text-primary-foreground/70">代表：福 真衣</div>
            <a
              href="mailto:fortunegrowth.corp@gmail.com"
              className="inline-block text-primary-foreground hover:text-gold transition break-all"
            >
              fortunegrowth.corp@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} FortuneGrowth Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
