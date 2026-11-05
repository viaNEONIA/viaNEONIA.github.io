export type Project = {
  slug: string;
  name: string;
  category: 'Webアプリ・PWA' | 'Androidアプリ' | 'DayZ MOD' | '開発ツール';
  description: string;
  status: '開発中' | '技術検証中' | '設計段階';
  repository: string;
  app?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'android-memo', name: '統合メモ', category: 'Androidアプリ',
    description: 'URL・文章・画像・ファイルをまとめて保存。あとで読む、検索、タグ整理、ピン留め、アーカイブに対応するAndroidメモアプリ。v0.7.0-dev。実機確認は一部未完了。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/Android-Memo', featured: true
  },
  {
    slug: 'stocklite', name: 'StockLite', category: 'Webアプリ・PWA',
    description: '数量・タグ・バーコードで管理する在庫管理PWA。iPhone/Androidの読取、バックアップ、Android写真OCRを開発中。最新版の実機確認は未完了。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/stocklite', app: 'https://vianeonia.github.io/stocklite/', featured: true
  },
  {
    slug: 'kakeibo', name: '簡易家計簿', category: 'Webアプリ・PWA',
    description: '収支・予算・繰越プール・定期収支を管理するオフライン対応PWA。JSONを使った家族間の手動データ統合にも対応。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/kakeibo', app: 'https://vianeonia.github.io/kakeibo/', featured: true
  },
  {
    slug: 'uchstock', name: 'うちストック', category: 'Androidアプリ',
    description: '品目マスターと購入ロットを分けて管理する家庭向け在庫管理Androidアプリ。開発版v50.0-dev fixes-21は実機検証未完了。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/uchstock'
  },
  {
    slug: 'filehub', name: 'FileHub', category: '開発ツール',
    description: 'WindowsのChrome/Edge向け、完全オフラインのファイル管理ツール。現在は仕様設計とPhase 0の技術検証段階で、製品機能は未実装。',
    status: '技術検証中', repository: 'https://github.com/viaNEONIA/filehub', featured: true
  },
  {
    slug: 'magazineammocheck', name: 'MagazineAmmoCheck', category: 'DayZ MOD',
    description: 'DayZでマガジンの残弾を6段階の概算で確認するMOD。v0.3の機能は実装済みで、名称変更後のビルド・署名・実機確認は未完了。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/MagazineAmmoCheck', featured: true
  },
  {
    slug: 'dayzspawn', name: 'LootControl', category: 'DayZ MOD',
    description: 'DayZのアイテム生成・退避・復元を独自制御するMOD。プレイヤー周辺のルート管理と保存方式をPhase 0で検証中。',
    status: '技術検証中', repository: 'https://github.com/viaNEONIA/dayzspawn'
  },
  {
    slug: 'tfashub', name: 'TFAS Hub', category: '開発ツール',
    description: 'TFX図面のレビュー・承認・手動シート統合を支援する共同管理ツール。OneDrive同期を利用するPhase 0技術検証中。',
    status: '技術検証中', repository: 'https://github.com/viaNEONIA/tfashub'
  },
  {
    slug: 'mochidenkikeisann', name: '電気工事計算支援PWA', category: 'Webアプリ・PWA',
    description: '動力負荷・電圧降下・ケーブル・遮断器などの選定計算を支援する現場向けPWA。仕様v1.2、実装未着手。実務での選定には使用不可。',
    status: '設計段階', repository: 'https://github.com/viaNEONIA/mochidenkikeisann'
  }
];
