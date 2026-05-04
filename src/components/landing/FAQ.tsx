import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "査定にかかる時間は？",
    a: "AIが30秒以内に査定額を提示します。その後、鑑定士による最終確認を経て、確定価格をご案内します。",
  },
  {
    q: "どんなブランドが対象？",
    a: "Mame Kurogouchi・MURRAL・FETICO・YOKO CHAN・LOKITHO・CLANEなど、国内デザイナーズブランドに特化しています。一覧に掲載のないブランドはお問い合わせください。",
  },
  {
    q: "状態が良くないと査定してもらえない？",
    a: "状態が良いほど査定額は高くなりますが、まずはお気軽にお申し込みください。AIが画像から状態を判定し、適切な価格をご提示します。",
  },
  {
    q: "査定後に断れますか？",
    a: "最終価格の承認前であれば、いつでもキャンセル可能です。",
  },
  {
    q: "個人情報は安全ですか？",
    a: "暗号化管理・管理者のみアクセス可能なセキュリティ体制を整備しています。HTTPSによる通信暗号化も必須としています。",
  },
  {
    q: "発送はどうすれば？",
    a: "査定額にご納得いただいたら、urerunへ発送いただきます。発送方法のご案内はメールでお送りします。",
  },
];

export function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">FAQ</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl leading-tight">
            よくあるご質問
          </h2>
        </div>

        <div className="reveal mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
