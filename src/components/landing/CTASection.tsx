import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "お名前を入力してください").max(50, "50文字以内で入力してください"),
  email: z.string().trim().email("正しいメールアドレスを入力してください").max(255),
  category: z.string().min(1, "カテゴリを選択してください"),
});

type FormValues = z.infer<typeof schema>;

const zodResolver: Resolver<FormValues> = async (values) => {
  const result = schema.safeParse(values);
  if (result.success) {
    return { values: result.data, errors: {} };
  }
  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of result.error.issues) {
    const key = issue.path.join(".") || "root";
    if (!errors[key]) errors[key] = { type: issue.code, message: issue.message };
  }
  return { values: {} as FormValues, errors: errors as never };
};

const categories = [
  "パーティードレス",
  "イブニングドレス / ロングドレス",
  "ワンピース",
  "ウェディングドレス",
  "その他",
];

export function CTASection() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver,
    defaultValues: { name: "", email: "", category: "" },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("お申し込みありがとうございます", {
      description: `${data.name}さん、追ってご連絡いたします。`,
    });
    reset();
  };

  const category = watch("category");

  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--gold) 10%, var(--background)) 0%, var(--background) 100%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="reveal text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            β版テスト参加者を限定募集中
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl">
            今すぐ無料査定を申し込む。
          </h2>
          <p className="mt-4 text-muted-foreground">
            メールアドレスとお名前、ドレスのカテゴリだけで完了します。
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="reveal mt-10 rounded-3xl border border-border bg-card p-6 sm:p-9 shadow-xl shadow-primary/5"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <Label htmlFor="name">お名前</Label>
              <Input
                id="name"
                placeholder="山田 花子"
                className="mt-2"
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="category">ドレスカテゴリ</Label>
              <Select
                value={category}
                onValueChange={(v) =>
                  setValue("category", v, { shouldValidate: true })
                }
              >
                <SelectTrigger id="category" className="mt-2">
                  <SelectValue placeholder="カテゴリを選択" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="mt-1 text-xs text-destructive">{errors.category.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90 disabled:opacity-60"
          >
            {isSubmitting ? "送信中..." : "無料査定に申し込む"}
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            送信後、担当者よりご連絡いたします。
          </p>
        </form>

        <p className="reveal mt-8 text-center text-sm text-muted-foreground">
          ご不明点は{" "}
          <a
            href="mailto:fortunegrowth.corp@gmail.com"
            className="text-foreground underline underline-offset-4 hover:text-gold"
          >
            fortunegrowth.corp@gmail.com
          </a>{" "}
          までお気軽に。
        </p>
      </div>
    </section>
  );
}
