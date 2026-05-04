const brands = [
  { en: "Mame Kurogouchi", jp: "マメクロゴウチ" },
  { en: "MURRAL", jp: "ミューラル" },
  { en: "YOKO CHAN", jp: "ヨーコチャン" },
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
    <section className="py-24 sm:py-32 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal text-center max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Brands</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            買取特化ブランド
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground">
            国内デザイナーズブランドを中心に、価値を正しく評価します。
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
          掲載のないブランドはお問い合わせください。今後、ハイブランドバッグ・アクセサリーへも順次拡大予定です。
        </p>
      </div>
    </section>
  );
}
