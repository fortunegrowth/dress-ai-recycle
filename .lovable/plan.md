# urerun LP 再構築プラン（改訂版）

依頼書に沿って、現状のLPを**ゼロから作り直し**、国内デザイナーズブランド特化のAI即時査定サービスとしてリポジショニングします。スマホファースト・背景画像・スクロールアニメーションを軸に、洗練されたビジュアル体験を構築します。

## 1. 全体構成（src/routes/index.tsx）

セクション順:

1. Header（固定・透過 → スクロールで白背景化）
2. Hero（全画面背景画像＋パララックス）
3. Problem（共感ゾーン3カード＋ペルソナ示唆コピー）
4. Brands（買取特化11ブランドのタイル表示）
5. Condition（着用回数・状態による査定差分の訴求）
6. Solution（3ステップ ステッパー）
7. WhyUs（5つの強みカードグリッド）
8. Cycle（循環モデル円形SVG図解）
9. Trust（AI＋鑑定士二段構えのプロセス図解のみ。**信頼バッジ・β実績ブロックは含めない**）
10. FAQ（アコーディオン6問）
11. CTA（`/register` への誘導ボタンセクション。フォームは設置しない）
12. Footer

## 2. ブランド／デザイントーン

- カラー：オフホワイト基調、ウォームグレー、ディープフォレストグリーン、シャンパンゴールド
- タイポ：見出し Noto Serif JP、本文 Noto Sans JP
- `src/styles.css` の oklch トークンを再調整。`.reveal` / stagger / parallax ユーティリティを追加
- Hero/一部セクションに Unsplash の高品質写真（外部URL直リンク）

## 3. 主なセクションのポイント

### Hero
- 全画面背景写真＋ダークオーバーレイ、軽量パララックス
- メインキャッチ（案D）：「あなたのクローゼットから、次の誰かへ。」
- サブ：「AIが即時に相場を算出し、鑑定士が最終確認。国内デザイナーズ特化だから、ブランドの価値を正しく評価します。」
- バッジ：「国内デザイナーズブランド特化」「着用回数が少ないほど高価買取」
- CTA「無料で査定を申し込む」→ `#cta` へスムーズスクロール
- 案A/B/Cはコード内コメントで残す

### Problem / Brands / Condition / Solution / WhyUs / Cycle
- 依頼書通りに実装。staggered fade-in、SVG循環図、ブランド11件タイルなど

### Trust（簡略化）
- AI即時査定 → 鑑定士最終確認 の2ステップ図解のみ
- 信頼バッジ・β実績プレースホルダは**作らない**

### FAQ
- shadcn Accordion で6問

### CTA
- フォーム廃止。大きな「無料で査定を申し込む」ボタン
- 遷移先：**`/register`**（`<a href="/register">` でOK。型安全Linkはルート未定義のため使用しない）
- サブテキスト「会員登録してすぐ査定を始める」

### Footer（刷新）
- 上段：urerunロゴ＋ミッション
- 中段：会社情報（株式会社FortuneGrowth / 住所 / 代表 / 問い合わせメール）
- ナビゲーション（外部リンク `<a href>`、ルートは未作成のためプレースホルダ扱い）：
  - よくある質問 `/faq`
  - ご利用ガイド `/guide`
  - 特定商取引法に基づく表記 `/commerce-law`
  - 利用規約 `/terms`
  - プライバシーポリシー `/privacy`
  - お問い合わせ `/contact`
- アカウント導線：
  - ログイン `/login`
  - 無料登録 `/register`
- 下段：© 2025 FortuneGrowth Inc.

## 4. 技術詳細

- `src/routes/index.tsx` を全面書き換え
- 既存 `src/components/landing/*` を新内容で置き換え（Hero/Problem/Solution/WhyUs/Trust/FAQ/Footer/Header刷新、Cycle新SVG、CTA新設計、Brands・Condition新規）
- 旧 `CTASection.tsx` のフォーム実装は削除（`react-hook-form`/`zod`依存は package.json に残置可）
- `src/hooks/use-reveal.ts` に stagger 用 delay を追加、`use-parallax.ts` 新規
- `__root.tsx` の meta（title/description/og）を新コンセプトに更新
- Footer/CTAの内部リンクは `<a href>` を使用（`/register` 等は別途実装済み前提・ルート未定義のため `Link to=` は使わない）

## 5. スコープ外

- 実際の査定API、画像アップロード処理
- `/register` `/login` `/faq` 等のページ実装
- 規約・特商法本文
