import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "査定にかかる時間は？",
    a: "平均30秒以内にAIが査定額を提示します。その後、鑑定士による最終確認を経て確定価格をご案内します。",
  },
  {
    q: "どんなドレスが対象？",
    a: "まずは高級ドレス・ワンピース特化でスタートしています。今後、対象カテゴリは順次拡大予定です。",
  },
  {
    q: "査定後に断れる？",
    a: "もちろん可能です。承認前であれば、いつでもお断りいただけます。",
  },
  {
    q: "個人情報は安全？",
    a: "個人情報は暗号化して管理し、管理者のみがアクセスできる体制で運用しています。HTTPSによる通信暗号化も必須としています。",
  },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h2 className="mt-3 text-2xl sm:text-4xl">よくあるご質問</h2>
        </div>

        <div className="reveal mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-background px-5"
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
