import { Camera, Sparkles, Check } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "写真と基本情報を入力",
    desc: "スマホで完結。難しい入力は不要です。",
  },
  {
    icon: Sparkles,
    title: "AIが30秒以内に査定額＋クーポン提示",
    desc: "画像認識と市場データをもとに、適正価格を即提示。",
  },
  {
    icon: Check,
    title: "承認すれば取引完了・入金",
    desc: "提示額に納得すれば、その場で取引成立。",
  },
];

export function Solution() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">How it works</p>
          <h2 className="mt-3 text-2xl sm:text-4xl">3ステップで完結。</h2>
          <p className="mt-4 text-muted-foreground">
            写真を撮って送るだけ。煩わしい手続きはありません。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="reveal relative">
              <div className="absolute -top-3 left-7 font-serif text-5xl text-gold/30">
                0{i + 1}
              </div>
              <div className="rounded-2xl border border-border bg-card p-7 pt-12">
                <s.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
