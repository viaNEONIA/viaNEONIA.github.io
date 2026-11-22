export type Project = {
  slug: string;
  name: string;
  category: 'Webアプリ・PWA' | 'Androidアプリ' | 'DayZ MOD' | '開発ツール';
  description: string;
  status: '開発中' | '技術検証中' | '設計段階';
  repository: string;
  app?: string;
  featured?: boolean;
  tested?: boolean;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: 'raku-calendar', name: 'rakuCalendar', category: 'Webアプリ・PWA',
    description: 'スマートフォン向けの1日単位の予定表PWA。縦の時間軸で予定の重複・現在時刻・所要時間を表示し、表示／編集モード、画像1枚の添付、JSONバックアップ、ICS入出力に対応。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/rakuCalendar', app: 'https://vianeonia.github.io/rakuCalendar/', featured: true, tested: true,
    highlights: ["1日の予定を縦の時間軸で表示し、重複予定と現在時刻を確認","表示モードと編集モードを切替。時間軸の移動・Now操作に対応","予定ごとに画像を1枚添付し、詳細画面で確認","JSONバックアップ・復元、ICS形式の読込・書出に対応"],
  },
  {
    slug: 'ui-studio', name: '会議ノート（旧 UI Studio）', category: '開発ツール',
    description: 'PDF図面に線・図形・文字を重ねて会議の検討事項を記録するPCブラウザ用「会議ノート」（旧UI Studio）。PDF背景、レイヤー、スタンプ、HTMLスライド取込・注釈、AI向け構造化JSON出力に対応。ビルド済みHTMLをオフラインで利用できる試作版。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/UI-studio', featured: true,
    tested: true,
    highlights: ["PDF図面やHTMLスライドを読み込み、線・図形・文字で注釈","レイヤー・グループ・スタンプ・補助線で会議中の編集を効率化","HTMLスライドへの修正指示をAI向け構造化JSONとして出力","ビルド済みHTMLをChrome・Edgeで開きオフライン利用"],
  },
  {
    slug: 'quick-backpack-drop', name: 'Quick Backpack Drop', category: 'DayZ MOD',
    description: 'DayZ 1.29/1.30向け。バックパックに装着した専用トリガーをホットバーから使い、収納物を維持したままバッグを下ろすMOD。RC.2で基本動作の実機試験済み。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/QuickBackpackDrop', featured: true,
    tested: true,
    highlights: ["DayZでホットバー操作からバックパックを素早くドロップ","収納物・アタッチメントを保持する操作","BackPack Lockとの併用を想定"],
  },
  {
    slug: 'backpack-lock', name: 'BackPack Lock', category: 'DayZ MOD',
    description: '装備中バックパックのCargoアクセスを制限し、地面に置くと通常操作に戻すDayZ MOD。v1.29.6で基本機能の確認記録あり。追加の互換性検証は継続。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/BackPack_lock',
    tested: true,
    highlights: ["装備中のバックパックCargoへのアクセスを制限","バックパックを地面に置いた際の操作を制御"],
  },
  {
    slug: 'inedia-config-editor', name: 'InediaInfectedAI Config Editor', category: '開発ツール',
    description: 'DayZのInediaInfectedAI設定JSONをブラウザで編集する非公式GUI。mainはv9で、外部成果物v9.2は未統合。現行機能の実機動作・実用テストは利用者確認済み。',
    status: '技術検証中', repository: 'https://github.com/viaNEONIA/InediaInfectedAI-Config-Editor',
    tested: true,
    highlights: ["InediaInfectedAI向け設定JSONをGUIで編集","ブラウザ上で設定項目を確認・変更"],
  },
  {
    slug: 'android-memo', name: '統合メモ', category: 'Androidアプリ',
    description: 'URL・文章・画像・ファイルをまとめて管理するAndroidメモアプリ。Mozilla Readabilityによる記事表示と端末標準機能を使う日本語翻訳、ループスクロール、タグ別フォルダ、ピン留め、アーカイブに対応。v0.7.0-dev、単体試験66件成功。現行機能の実機動作・実用テストは利用者確認済み。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/Android-Memo', featured: true,
    tested: true,
    highlights: ["Androidの共有メニューからURL・テキスト・画像・ファイルを保存","Mozilla Readabilityによる記事本文表示と端末標準の日本語翻訳","タグ別フォルダ、ピン留め、アーカイブ、ループスクロール","メモ情報のJSONバックアップ・追加復元に対応"],
  },
  {
    slug: 'stocklite', name: 'StockLite', category: 'Webアプリ・PWA',
    description: '数量・タグ・バーコードで管理する在庫管理PWA。iPhone/Androidの読取、バックアップ、Android写真OCRを開発中。現行機能の実機動作・実用テストは利用者確認済み。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/stocklite', app: 'https://vianeonia.github.io/stocklite/', featured: true,
    tested: true,
    highlights: ["ブラウザで数量とタグを管理する在庫管理PWA","JANコード読取と在庫の絞り込み","端末内保存とバックアップ機能"],
  },
  {
    slug: 'kakeibo', name: '簡易家計簿', category: 'Webアプリ・PWA',
    description: '収支・予算・繰越プール・定期収支を管理するオフライン対応PWA。JSONを使った家族間の手動データ統合にも対応。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/kakeibo', app: 'https://vianeonia.github.io/kakeibo/', featured: true,
    tested: true,
    highlights: ["収入・支出・予算と繰越プールの管理","定期収支の登録と集計","JSONデータによる手動共有・統合"],
  },
  {
    slug: 'uchstock', name: 'うちストック', category: 'Androidアプリ',
    description: '品目マスターと購入ロットを分けて管理する家庭向け在庫管理Androidアプリ。開発版v50.0-dev fixes-21。現行機能の実機動作・実用テストは利用者確認済み。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/uchstock',
    tested: true,
    highlights: ["品目マスターと購入ロットを分離した在庫管理","JANコード読取、在庫の追加・使用、買い物リスト","期限・在庫不足の通知とロット別履歴の管理"],
  },
  {
    slug: 'filehub', name: 'FileHub', category: '開発ツール',
    description: 'WindowsのChrome/Edge向け、完全オフラインのファイル管理ツール。仕様設計とPhase 0の技術検証を進めるオフラインファイル管理ツール。製品機能の実装状況はリポジトリを参照。',
    status: '技術検証中', repository: 'https://github.com/viaNEONIA/filehub', featured: true,
    highlights: ["PCブラウザ向けオフラインファイル管理を設計","Phase 0で技術構成を検証"],
  },
  {
    slug: 'magazineammocheck', name: 'MagazineAmmoCheck', category: 'DayZ MOD',
    description: 'DayZでマガジンの残弾を6段階の概算で確認するMOD。v0.3の機能は実装済みで、現行機能の実機動作・実用テストは利用者確認済み。',
    status: '開発中', repository: 'https://github.com/viaNEONIA/MagazineAmmoCheck', featured: true,
    tested: true,
    highlights: ["DayZの残弾確認を6段階の概算で表現","確認操作を行ったときだけ残弾情報を表示"],
  },
  {
    slug: 'dayzspawn', name: 'LootControl', category: 'DayZ MOD',
    description: 'DayZのアイテム生成・退避・復元を独自制御するMOD。プレイヤー周辺のルート管理と保存方式をPhase 0で検証中。',
    status: '技術検証中', repository: 'https://github.com/viaNEONIA/dayzspawn',
    highlights: ["DayZのアイテムスポーン・退避・復元の独自制御を検証","プレイヤー周辺のルート管理と保存方式を開発"],
  },
  {
    slug: 'mochidenkikeisann', name: '電気工事計算支援PWA', category: 'Webアプリ・PWA',
    description: '動力負荷・電圧降下・ケーブル・遮断器などの選定計算を支援する現場向けPWA。仕様v1.2の設計段階。実務での選定に利用する前に計算根拠と検証が必要。',
    status: '設計段階', repository: 'https://github.com/viaNEONIA/mochidenkikeisann',
    highlights: ['動力負荷・電圧降下の計算支援を設計','ケーブル・遮断器選定の計算仕様を検討'],
  }
];
