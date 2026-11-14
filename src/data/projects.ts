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
    slug: 'ui-studio', name: 'UI Studio', category: '開発ツール',
    description: 'PCブラウザでUI設計と会議資料作成を行うプロトタイプエディター。A4/A3、PDF背景取込、線・矢印・頂点編集、JSON・HTML・PDF・PPTX出力に対応。試作版v0.6、ブラウザ操作試験は未完了。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/UI-studio', featured: true
  },
  {
    slug: 'quick-backpack-drop', name: 'Quick Backpack Drop', category: 'DayZ MOD',
    description: 'DayZ 1.29/1.30向け。バックパックに装着した専用トリガーをホットバーから使い、収納物を維持したままバッグを下ろすMOD。RC.2で基本動作の実機試験済み。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/QuickBackpackDrop', featured: true
  },
  {
    slug: 'backpack-lock', name: 'BackPack Lock', category: 'DayZ MOD',
    description: '装備中バックパックのCargoアクセスを制限し、地面に置くと通常操作に戻すDayZ MOD。v1.29.6で基本機能の確認記録あり。追加の互換性検証は継続。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/BackPack_lock'
  },
  {
    slug: 'inedia-config-editor', name: 'InediaInfectedAI Config Editor', category: '開発ツール',
    description: 'DayZのInediaInfectedAI設定JSONをブラウザで編集する非公式GUI。mainはv9で、外部成果物v9.2は未統合。実ブラウザの正常動作基準は未確立。',
    status: '技術検証中', repository: 'https://github.com/viaNEONIA/InediaInfectedAI-Config-Editor'
  },
  {
    slug: 'android-memo', name: '統合メモ', category: 'Androidアプリ',
    description: 'URL・文章・画像・ファイルをまとめて管理するAndroidメモアプリ。Mozilla Readabilityのリーダーモード、ループスクロール、タグ別フォルダ、自動タグ、ピン留め、アーカイブに対応。v0.7.0-dev、最新版の実機確認は未完了。',
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
    slug: 'mochidenkikeisann', name: '電気工事計算支援PWA', category: 'Webアプリ・PWA',
    description: '動力負荷・電圧降下・ケーブル・遮断器などの選定計算を支援する現場向けPWA。仕様v1.2、実装未着手。実務での選定には使用不可。',
    status: '設計段階', repository: 'https://github.com/viaNEONIA/mochidenkikeisann'
  }
];
