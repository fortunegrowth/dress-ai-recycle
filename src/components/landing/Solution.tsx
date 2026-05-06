import {
  Camera,
  Sparkles,
  Truck,
  UserCheck,
  ShieldCheck,
  Wallet,
  ArrowRight,
} from "lucide-react";

type Step = {
  icon: typeof Camera;
  title: string;
  desc: string;
  badge?: { label: string; tone: "ai" | "human" | "guarantee" | "payout" };
  accent?: "ai" | "human";
};

const steps: Step[] = [
  {
    icon: Camera,
    title: "写真と基本情報を送るだけ",
    desc: "ブランド・サイズ・状態・着用回数などをフォームに入力。写真を数枚アップロード。スマホで完結、数分で完了します。",
  },
  {
    icon: Sparkles,
    title: "AIが30秒で査定額を提示",
    desc: "画像認識＋市場データをもとにAIが即時に査定額と相場を算出。クーポン上乗せ後の実質還元額も同時表示。従来 7日 → 30秒へ。",
    badge: { label: "AI査定", tone: "ai" },
    accent: "ai",
  },
  {
    icon: Truck,
    title: "納得したら発送（本人確認＆集荷）",
    desc: "査定額にご納得いただけたら、本人確認のうえ配送業者が自宅まで集荷。梱包の手間を最小限に。",
  },
  {
    icon: UserCheck,
    title: "鑑定士が実物を査定",
    desc: "urerunに届いたアイテムをプロの鑑定士が実物確認。AIが判定した状態・情報と照らし合わせて最終査定を行います。",
    badge: { label: "鑑定士チェック", tone: "human" },
    accent: "human",
  },
  {
    icon: ShieldCheck,
    title: "本査定価格を提示・売却決定",
    desc: "申込時の入力情報と実物の状態が一致していれば、AI査定価格がそのまま本査定価格として確定。内容が異なる場合のみ再提示します。",
    badge: { label: "価格保証", tone: "guarantee" },
  },
  {
    icon: Wallet,
    title: "当日〜3営業日以内に入金",
    desc: "売却決定後、最短当日・最大3営業日以内に指定口座へ入金。スピーディーに現金化できます。",
    badge: { label: "最短即日入金", tone: "payout" },
  },
];

const badgeStyles: Record<NonNullable<Step["badge"]>["tone"], string> = {
  ai: "bg-gold/15 text-gold border border-gold/40",
  human: "bg-primary/10 text-primary border border-primary/30",
  guarantee: "bg-secondary text-foreground border border-border",
  payout: "bg-secondary text-foreground border border-border",
};

export function Solution() {
  return (
    <section
      id="how"
      className="relative isolate py-24 sm:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{ backgroundColor: "oklch(0.96 0.01 90)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
            How it works
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            査定〜入金まで、6ステップで完結。
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
            写真を送るだけ。査定から入金まで、すべてオンラインで完結します。
            <br className="hidden sm:block" />
            従来 <span className="font-medium text-foreground">7日</span>{" "}
            かかっていた査定が、AIで{" "}
            <span className="font-medium text-gold">30秒</span> へ。
          </p>
        </div>

        <ol className="relative mt-16 space-y-6 sm:space-y-8">
          <div
            aria-hidden
            className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/40 via-border to-primary/40"
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const ringTone =
              s.accent === "ai"
                ? "border-gold/60 bg-gold/10 text-gold"
                : s.accent === "human"
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground";

            return (
              <li
                key={i}
                className="reveal relative pl-16 sm:pl-20"
                style={{ ["--reveal-delay" as never]: `${i * 110}ms` }}
              >
                <div
                  className={`absolute left-0 top-0 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 ${ringTone} shadow-sm`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div className="rounded-3xl border border-border bg-background p-6 sm:p-7 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-serif text-xs uppercase tracking-widest text-gold">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.badge && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${badgeStyles[s.badge.tone]}`}
                      >
                        {s.badge.label}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-serif text-lg sm:text-xl leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>

                {i === 1 && (
                  <div className="reveal mt-6 ml-0 sm:ml-2 rounded-2xl border border-dashed border-gold/50 bg-gold/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                      💡 AIと鑑定士の二段構え
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      AIが写真から即時査定し、鑑定士が実物で最終確認。
                      入力情報どおりの状態であれば、価格は変わりません。
                      スピードと精度を両立した独自プロセスです。
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-14 text-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
          >
            無料で査定を申し込む
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            会員登録は1分。今すぐ査定を始められます。
          </p>
        </div>
      </div>
    </section>
  );
}
