import { Camera, Sparkles, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "写真と基本情報を入力",
    desc: "スマホで完結。難しい入力は不要、数分で完了します。",
  },
  {
    icon: Sparkles,
    title: "AIが30秒以内に査定額＋クーポン提示",
    desc: "画像認識と市場データから適正価格を即提示。相場も合わせて確認できます。",
  },
  {
    icon: PackageCheck,
    title: "発送・最終承認 → 入金",
    desc: "納得したらurerunへ発送。鑑定士が最終確認した価格をご承認いただき、取引完了。",
  },
];

export function Solution() {
  return (
    <section id="how" className="py-24 sm:py-32 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">How it works</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            3ステップで完結。
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground">
            写真を撮って送るだけ。煩わしい手続きはありません。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          {steps.map((s, i) => (
            <div key={i} className="reveal relative" style={{ ["--reveal-delay" as never]: `${i * 150}ms` }}>
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute top-16 left-[calc(100%-1rem)] w-8 z-0"
                >
                  <svg viewBox="0 0 32 8" className="w-full h-2">
                    <line
                      x1="0" y1="4" x2="32" y2="4"
                      stroke="var(--gold)"
                      strokeWidth="1.5"
                      className="dash-flow"
                    />
                  </svg>
                </div>
              )}
              <div className="relative rounded-3xl border border-border bg-background p-8 h-full">
                <div className="font-serif text-6xl text-gold/25 leading-none">
                  0{i + 1}
                </div>
                <s.icon className="mt-4 h-8 w-8 text-gold" />
                <h3 className="mt-5 font-serif text-lg leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
