import {
  Zap,
  UserCheck,
  Brain,
  Target,
  Gift,
  Crown,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI即時査定",
    desc: "画像認識＋市場データで数秒以内に価格提示。",
  },
  {
    icon: UserCheck,
    title: "鑑定士が最終確認",
    desc: "AIの結果をプロの鑑定士がレビューし最終買取価格を確定。機械任せにしない二重チェック体制。",
  },
  {
    icon: Brain,
    title: "鑑定士監修のロジック",
    desc: "AIの査定アルゴリズム自体を鑑定士が設計・監修。精度の根拠が明確。",
  },
  {
    icon: Target,
    title: "高精度",
    desc: "査定額と実買取価格の乖離率10%以内を目標。",
  },
  {
    icon: Gift,
    title: "クーポン上乗せ",
    desc: "レンタル事業者との提携で実質還元率アップ。",
  },
  {
    icon: Crown,
    title: "高級ドレス特化",
    desc: "一般買取より圧倒的に精緻な評価基準。",
  },
  {
    icon: ShieldCheck,
    title: "セキュリティ",
    desc: "個人情報は暗号化管理、HTTPS必須。",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Why urerun</p>
          <h2 className="mt-3 text-2xl sm:text-4xl">選ばれる、7つの理由。</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal group rounded-2xl border border-border bg-background p-7 transition hover:border-gold/60 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15">
                <f.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-5 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
