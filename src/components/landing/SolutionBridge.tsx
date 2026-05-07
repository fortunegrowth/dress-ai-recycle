import { Wallet, Lock, Ticket, ArrowRight } from "lucide-react";

const points = [
  {
    icon: Wallet,
    title: "フリマ相場と買取価格を同時提示",
    sub: "比べてから決断できる",
  },
  {
    icon: Lock,
    title: "相場が見えるから、安く買い叩かれない",
    sub: "透明性のある査定",
  },
  {
    icon: Ticket,
    title: "クーポン上乗せで、他社より高還元",
    sub: "買取価格＋クーポン＝実質還元率No.1を目指す",
  },
];

export function SolutionBridge() {
  return (
    <section className="relative isolate py-24 sm:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal text-center max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">The Answer</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            だから、両方の価格を
            <br className="sm:hidden" />
            同時に見せます。
          </h2>
        </div>

        <div className="reveal mt-10 max-w-2xl mx-auto space-y-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            urerunはAIがフリマ市場の売却相場を調べ、
            <br />
            買取価格と並べて提示します。
          </p>
          <div className="rounded-2xl border border-border bg-card px-6 py-5 font-serif text-base sm:text-lg text-foreground space-y-1">
            <p>「フリマで売ったらいくら？」</p>
            <p>「urerunで売ったらいくら？」</p>
          </div>
          <p>
            その両方が、写真を送るだけで<span className="font-medium text-foreground">30秒</span>でわかります。
            <br />
            比べて、自分で判断してください。
          </p>
          <p>
            urerunはフリマで売る方が合っている方は、そちらで売ってほしいと思っています。
            <br />
            それでも多くの方がurerunを選ぶのは、
            <br />
            <span className="font-medium text-foreground">手間なく、透明で、還元率が高い</span>からです。
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {points.map(({ icon: Icon, title, sub }, i) => (
            <div
              key={i}
              className="rounded-3xl border border-border bg-card p-6 text-center"
              style={{ ["--reveal-delay" as never]: `${i * 100}ms` }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 font-serif text-base leading-snug">{title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">→ {sub}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-background px-5 py-2.5 text-xs font-medium text-foreground transition hover:bg-gold/5"
          >
            まず価格を確認してみる
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
