import { User, Sparkles, Wallet, Building2, Repeat, Heart } from "lucide-react";

const nodes = [
  { icon: User, label: "消費者が手放す" },
  { icon: Sparkles, label: "AI即時査定" },
  { icon: Wallet, label: "買取＋クーポン還元" },
  { icon: Building2, label: "パートナー事業者へ" },
  { icon: Repeat, label: "次の利用者へ" },
  { icon: Heart, label: "また還元を実感" },
];

export function Cycle() {
  // 6 nodes around a circle
  const radius = 170;
  const center = 220;

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--sage) 14%, transparent), transparent 65%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Circular Model</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            価値が、巡り続ける。
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground">
            手放されたアイテムは次の誰かの元へ。urerunは循環するエコシステムを設計しています。
          </p>
        </div>

        <div className="reveal mt-16 flex justify-center">
          <div className="relative w-full max-w-[440px] aspect-square">
            <svg
              viewBox="0 0 440 440"
              className="absolute inset-0 w-full h-full"
              aria-hidden
            >
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="var(--gold)"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                className="dash-flow"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="font-serif text-base sm:text-lg leading-snug">
                  循環型ファッション
                  <br />
                  エコシステム
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  by urerun
                </div>
              </div>
            </div>

            {nodes.map((n, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = center + radius * Math.cos(angle);
              const y = center + radius * Math.sin(angle);
              const pct = (v: number) => `${(v / 440) * 100}%`;
              return (
                <div
                  key={i}
                  className="reveal absolute"
                  style={{
                    left: pct(x),
                    top: pct(y),
                    transform: "translate(-50%, -50%)",
                    ["--reveal-delay" as never]: `${i * 150}ms`,
                  }}
                >
                  <div className="flex flex-col items-center gap-1 w-24">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background border border-gold/50 shadow-md shadow-gold/10">
                      <n.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div className="text-[10px] sm:text-xs text-foreground text-center leading-tight">
                      {n.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
