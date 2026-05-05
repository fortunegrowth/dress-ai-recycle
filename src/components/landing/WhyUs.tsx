import { Zap, Brain, UserCheck, Eye, Gift } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI即時査定",
    desc: "画像認識＋市場データで数秒以内に価格提示。査定結果をすぐに確認できます。",
  },
  {
    icon: Brain,
    title: "鑑定士が監修",
    desc: "AIの査定アルゴリズム自体をプロの鑑定士が設計・監修。精度の根拠が明確です。",
  },
  {
    icon: UserCheck,
    title: "鑑定士が最終チェック",
    desc: "AIの結果をプロの鑑定士がレビューし最終買取価格を確定。機械任せにしない二重チェック体制。",
  },
  {
    icon: Eye,
    title: "相場がわかる、価格が透明",
    desc: "市場相場データをあわせて提示。価格の根拠が見えるから、安心して判断できます。",
  },
  {
    icon: Gift,
    title: "クーポン上乗せで高還元",
    desc: "提携事業者が発行するクーポンを査定額に加算。実質還元率が競合より高くなります。",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Why urerun</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            選ばれる、5つの理由。
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal group w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10"
              style={{ ["--reveal-delay" as never]: `${i * 90}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
                <f.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-6 font-serif text-lg leading-snug">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
