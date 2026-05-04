# urerun（株式会社FortuneGrowth）LP構築プラン

サービス名は **urerun（AIファッション買取）**。提供いただいたテキストロゴ＋ハンガー循環アイコン（ゴールド）をブランドビジュアルの基軸として、AI即時査定LPを単一ページ（`/`）で構築します。コピーは依頼書通り、未確定箇所は `[TODO: ...]`。

## ロゴ・ブランドビジュアル

- アップロードされた3点を `src/assets/` に取り込み利用
  - `urerun-logo-dark.png`（黒文字、ライト背景用）
  - `urerun-logo-light.png`（白文字、ダーク背景用）
  - `urerun-mark.png`（ゴールドのハンガー＋循環矢印アイコン）
- ハンガーアイコンはブランドDNA（循環・洗練）と完全に合致しているため**そのまま採用**
- ヘッダー・Hero・Footer・Faviconで使用

## デザイン方針

- **カラー**：オフホワイト基調 + ディープネイビー（知性）+ ロゴに合わせたシャンパンゴールド + セージグリーン補助
- **タイポ**：見出し Noto Serif JP、本文 Noto Sans JP
- 余白広めのミニマル構成、SVG中心
- IntersectionObserverによる控えめなフェードイン
- 375px起点のスマホファースト、PC最大1200px

## ページ構成（1ページLP）

`src/routes/index.tsx` を置き換え、セクションは `src/components/landing/` に分割。

1. **Header（固定）** — マーク+urerunロゴ / 右に「無料査定」CTA
2. **Hero**
   - H1：「そのドレス、眠らせていませんか？ AIが30秒で適正価格を提示します。」
   - サブ：「写真を撮って送るだけ。高級ドレス特化のAI査定で、適正価格＋クーポン還元。」
   - CTA：「無料で査定してみる」
   - ビジュアル：ゴールドのハンガーマーク + スマホモック内に査定UI
3. **Problem** — 痛み3点をアイコンカード
4. **Solution（3ステップ）** — 写真送信 → AI査定30秒 → 承認・入金
5. **Why Us** — 7項目カード（AI即時査定 / 鑑定士最終確認 / 鑑定士監修ロジック / 高精度（乖離率10%以内）/ クーポン上乗せ / 高級ドレス特化 / セキュリティ）
6. **循環モデル図解** — SVGで「消費者 → AI査定 → 買取 → レンタル → 次の利用者 → クーポン還元」をゴールド矢印で循環表現
7. **信頼構築**
   - 鑑定士監修AI査定
   - AI＋鑑定士の二段構えプロセス図
   - β版テスト数値：「[TODO: β版テスト数値]」
8. **FAQ** — Accordionで4問
9. **CTA + 申込フォーム** — 「今すぐ無料査定を申し込む」「現在β版テスト参加者を限定募集中」/ 氏名・メール・ドレスカテゴリ（zod検証）/ 送信時 sonner toast
10. **Footer** — urerunロゴ（白）/ 株式会社FortuneGrowth / 住所 / 代表 福真衣 / fortunegrowth.corp@gmail.com / プライバシーポリシー・特商法（# 枠）

## 技術詳細

- TanStack Start 1ルート構成
- `__root.tsx` の meta を「urerun｜AIで30秒、高級ドレスの即時査定」に更新（og含む）
- Favicon を urerun マークに差し替え
- shadcn/ui：Button, Card, Accordion, Input, Label, Select, Form, Sonner
- `src/hooks/use-reveal.ts`：IntersectionObserver
- フォーム：react-hook-form + zod、送信はモック
- `src/styles.css` の oklch トークンをブランドカラーに調整

## スコープ外

- 実際のAI査定API・画像アップロード処理
- プライバシーポリシー / 特商法本文
- 認証・DB連携
