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
