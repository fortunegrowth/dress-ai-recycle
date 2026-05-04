import { Sparkles, UserCheck, ArrowRight } from "lucide-react";

export function Trust() {
  return (
    <section className="relative isolate py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-20" style={{ backgroundColor: "oklch(0.94 0.01 90)" }} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Trust</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            AIだけに任せない。
            <br />
            プロの鑑定士が、精度を支える。
          </h2>
          <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            AIが即時に査定結果を提示した後、鑑定士がその結果をレビューし、
            最終的な買取価格を確定します。スピードと精度を両立した独自プロセスです。
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
          <div className="rounded-3xl border border-border bg-background p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
              <Sparkles className="h-6 w-6 text-gold" />
            </div>
            <div className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-gold">
              STEP 1
            </div>
            <h3 className="mt-2 font-serif text-xl">AI即時査定</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              商品画像と基本情報から、市場価値を数秒で算出。鑑定士監修のロジックが精度を担保します。
            </p>
          </div>

          <div className="hidden sm:flex items-center justify-center text-gold">
            <ArrowRight className="h-6 w-6" />
          </div>

          <div className="rounded-3xl border border-gold/40 bg-background p-8 shadow-lg shadow-gold/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15">
              <UserCheck className="h-6 w-6 text-gold" />
            </div>
            <div className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-gold">
              STEP 2
            </div>
            <h3 className="mt-2 font-serif text-xl">鑑定士が最終確認</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              専門家がAIの結果をレビューし、最終買取価格を確定。納得感のある適正価格をお届けします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
