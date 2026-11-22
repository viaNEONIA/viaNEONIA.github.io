# viaNEONIA website

Astroで構築したviaNEONIAのプロジェクト紹介サイトです。GitHub Pagesで公開しています。

- サイト: https://vianeonia.github.io/
- プロジェクト情報: `src/data/projects.ts`（単一管理元）
- ホーム: `src/pages/index.astro`
- 一覧: `src/pages/projects/index.astro`
- 詳細: `src/pages/projects/[slug].astro`（静的生成）
- About: `src/pages/about.astro`

## ローカル起動・ビルド

```sh
npm install
npm run dev
npm run build
```

## 更新手順

1. `src/data/projects.ts` に名称、説明、カテゴリ、開発状況、GitHubリンク、主な機能を登録します。
2. `featured: true` でホームの注目プロジェクトに表示します。
3. `tested: true` は現行機能について開発者から実機・実用テストの確認報告がある場合に設定します。すべての環境・将来機能の動作保証ではありません。
4. `app` は公開URLを確認できた場合のみ設定します。
5. GitHubへPRを作成し、Astroビルドを確認してからmainにマージします。

## 公開

GitHubのSettings → Pages → Build and deploymentでGitHub Actionsを選択。mainへのpushでデプロイされます。

## 注意

プロジェクトの開発状況は手動管理です。設計中の機能を実装済みと誤認させないようにしてください。画像を掲載する場合は実ファイルがリポジトリに存在することを確認してください。
