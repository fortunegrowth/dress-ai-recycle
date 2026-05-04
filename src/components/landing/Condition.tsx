import { TrendingUp } from "lucide-react";

const tiers = [
  {
    label: "未使用・タグ付き",
    arrows: 3,
    badge: "高価買取",
    tone: "bg-gold text-gold-foreground",
  },
  {
    label: "着用回数 1〜3回・美品",
    arrows: 2,
    badge: "高評価",
    tone: "bg-gold/70 text-gold-foreground",
  },
  {
    label: "着用回数少なめ・目立つダメージなし",
    arrows: 1,
    badge: "適正評価",
    tone: "bg-secondary text-foreground border border-border",
  },
];

export function Condition() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Condition</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            状態が良いほど、高く。
          </h2>
          <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            デザイナーズブランドのアイテムは、コンディションが価値に直結します。
            AIが画像から状態を精密に判定。数回しか着ていない、タグ付き未使用に近いアイテムは、高価買取の対象です。
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {tiers.map((t, i) => (
            <div
              key={t.label}
              className="reveal flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6"
              style={{ ["--reveal-delay" as never]: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="flex">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <TrendingUp
                      key={idx}
                      className={`h-5 w-5 ${
                        idx < t.arrows ? "text-gold" : "text-border"
                      } ${idx > 0 ? "-ml-1" : ""}`}
                    />
                  ))}
                </div>
                <div className="text-sm sm:text-base font-medium">{t.label}</div>
              </div>
              <span
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ${t.tone}`}
              >
                {t.badge}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            まず査定を試してみる
          </a>
        </div>
      </div>
    </section>
  );
}
