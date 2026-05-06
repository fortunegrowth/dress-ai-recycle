const brands = [
  { en: "Mame Kurogouchi", jp: "マメクロゴウチ" },
  { en: "MURRAL", jp: "ミューラル" },
  { en: "YOKO CHAN", jp: "ヨーコチャン" },
  { en: "sacai", jp: "サカイ" },
  { en: "FETICO", jp: "フェティコ" },
  { en: "HARUNOBUMURATA", jp: "ハルノブムラタ" },
  { en: "LOKITHO", jp: "ロキト" },
  { en: "tanakadaisuke", jp: "タナカダイスケ" },
  { en: "Ameri VINTAGE", jp: "アメリヴィンテージ" },
  { en: "CLANE", jp: "クラネ" },
  { en: "Acka.", jp: "エーシーケーエー" },
  { en: "Leja", jp: "レジャ" },
];

export function Brands() {
  return (
    <section className="relative isolate py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-20" style={{ backgroundColor: "oklch(0.96 0.01 90)" }} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Brands</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            買取特化ブランド
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground">
            国内デザイナーズブランドを中心に、
            <br />
            価値を正しく評価します。
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b, i) => (
            <div
              key={b.en}
              className="reveal flex flex-col items-center justify-center bg-background px-4 py-8 transition hover:bg-gold/5"
              style={{ ["--reveal-delay" as never]: `${i * 60}ms` }}
            >
              <div className="font-serif text-base sm:text-lg text-foreground tracking-wide text-center">
                {b.en}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs text-muted-foreground tracking-wider">
                {b.jp}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-xs sm:text-sm text-muted-foreground">
          上記は買取に特に力を入れているブランドの一例です。掲載のないブランドも買取できる場合があります。まずは会員登録して、AI査定画面のブランド一覧からご確認ください。今後、ハイブランドバッグ・アクセサリーへも順次拡大予定です。
        </p>
      </div>
    </section>
  );
}
