import { ArrowRight, Sparkles } from "lucide-react";

const CTA_BG =
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1920&q=80";

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28 sm:py-36 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${CTA_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,20,35,0.85) 0%, rgba(15,20,35,0.92) 100%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/60 bg-black/20 px-3 py-1 text-[11px] font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            会員登録は1分。すぐに査定を始められます。
          </span>
          <h2 className="mt-6 font-serif text-3xl sm:text-5xl leading-tight">
            今すぐ無料査定を
            <br className="sm:hidden" />
            申し込む。
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/85 leading-relaxed">
            会員登録のうえ、写真を送るだけで30秒以内に査定額をお届けします。
            <br className="hidden sm:block" />
            登録・査定は完全無料。手放す決断は、結果を見てからで大丈夫です。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-gold-foreground shadow-xl shadow-black/30 transition hover:opacity-90"
            >
              無料で査定を申し込む
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              ログイン
            </a>
          </div>

          <p className="mt-8 text-xs text-white/60">
            ご不明点は{" "}
            <a
              href="/contact"
              className="text-white underline underline-offset-4 hover:text-gold"
            >
              お問い合わせ
            </a>{" "}
            よりお気軽に。
          </p>
        </div>
      </div>
    </section>
  );
}
