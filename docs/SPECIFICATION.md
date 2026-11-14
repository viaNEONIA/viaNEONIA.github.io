# サイト仕様 v0.1
- Astro静的サイト / GitHub Pages
- Home / Projects / About
- OS設定によるライト・ダーク表示
- GitHub Actions: PRビルド検証、main自動公開
- 初期版はGitHub API連携、詳細ページ、手動テーマ切替なし
- 公開前にリンクと説明内容を確認する

## Phase 1 — プロジェクトカタログ
- `src/data/projects.ts` をプロジェクト情報の単一管理元とする。
- Homeは `featured: true` のプロジェクトのみ表示。
- Projectsは全件を表示し、カテゴリボタンでクライアント側フィルタリング。
- プロジェクトの外部リンクはアプリURL（任意）とGitHubリポジトリURL。
- 詳細ページ、GitHub API連携、更新情報の自動取得は次フェーズ。
- 受入確認: PC/スマホ表示、カテゴリ切替、ライト/ダーク、各リンク、Astroビルド。

## Phase 1.1 — プロジェクト詳細
- `src/pages/projects/[slug].astro` の静的パス生成により各プロジェクトの詳細ページを公開。
- 一覧とホームから `/projects/<slug>/` に遷移可能。
- 詳細ページはカテゴリ・概要・GitHubリンク・アプリリンク（設定がある場合）を表示。
- プロジェクトデータは `src/data/projects.ts` のみを正本とする。
- 詳細な機能紹介、画像、リリース情報は次フェーズ。

## 2026-11-05 プロジェクト棚卸し
- 掲載対象は各GitHubリポジトリのREADMEと現行の実装状況に基づく。
- 統合メモは最新の `viaNEONIA/Android-Memo` を正本として掲載し、旧 `androidmemo` は重複掲載しない。
- うちストック（`uchstock`）と電気工事計算支援PWA（`mochidenkikeisann`）を追加。
- 9件を掲載し、カテゴリにAndroidアプリを追加。
- 開発状態は「開発中」「技術検証中」「設計段階」で表示。公開済み・実機合格を推定しない。
- `app` は既存サイト設定で公開先として登録されたもののみ維持。APKや未検証デモへのリンクは作成しない。
- 開発状態は手動更新であり、GitHubの最新コミットから自動判定しない。

## 2026-11-14 リポジトリ棚卸し
- viaNEONIAのリポジトリ一覧を確認し、READMEを照合。
- UI Studio、Quick Backpack Drop、BackPack Lock、InediaInfectedAI Config Editorの4件を追加。
- TFAS Hubは該当するリポジトリを確認できないため一覧から除外。
- 合計12件を掲載。既存のカテゴリと静的詳細ページ生成を使用。
- 新規掲載先の実行URLは公開確認ができていないため設定せず、GitHubリポジトリのみリンク。
- 開発状態はREADMEからの要約であり、すべての環境での動作保証ではない。
