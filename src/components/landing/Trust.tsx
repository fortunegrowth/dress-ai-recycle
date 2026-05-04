import { Brain, UserCheck, ArrowRight, BadgeCheck } from "lucide-react";

export function Trust() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Trust</p>
          <h2 className="mt-3 text-2xl sm:text-4xl">
            AIだけに任せない。
            <br />
            プロの鑑定士が、精度を支える。
          </h2>
        </div>

        {/* Card 1: Curated by experts */}
        <div className="reveal mt-12 rounded-3xl border border-border bg-background p-8 sm:p-10">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15">
              <Brain className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl">鑑定士監修のAI査定</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                urerunのAIは、プロの鑑定士が査定ロジックそのものを設計・監修しています。
                機械任せではなく、専門家の知見がシステムの根幹に組み込まれているからこそ、
                適正価格に対する強い根拠を持って提示できます。
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Two-stage process */}
        <div className="reveal mt-6 rounded-3xl border border-border bg-background p-8 sm:p-10">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15">
              <UserCheck className="h-6 w-6 text-gold" />
            </div>
            <div className="w-full">
              <h3 className="text-xl">AI＋鑑定士の二段構え</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                AIが即時に査定結果を提示した後、鑑定士がその結果をレビューし、
                最終的な買取価格を確定します。スピードと精度を両立した独自プロセスです。
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
                {[
                  { step: "STEP 1", title: "AI即時査定", desc: "30秒で価格提示" },
                  { step: "STEP 2", title: "鑑定士レビュー", desc: "プロが精度を確認" },
                  { step: "STEP 3", title: "最終価格 確定", desc: "納得の買取価格" },
                ].map((s, i) => (
                  <div key={i} className="contents">
                    <div className="rounded-2xl border border-gold/30 bg-gold/5 p-5">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                        {s.step}
                      </div>
                      <div className="mt-2 text-base font-medium text-foreground">
                        {s.title}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {s.desc}
                      </div>
                    </div>
                    {i < 2 && (
                      <div className="hidden sm:flex items-center justify-center text-gold">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* β version stats placeholder */}
        <div className="reveal mt-6 rounded-3xl border border-dashed border-gold/40 bg-background/60 p-8 sm:p-10">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15">
              <BadgeCheck className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl">β版テスト実績</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                [TODO: β版テスト数値]
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                ※ β版リリース後、実際の査定件数・乖離率などを掲載予定です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
