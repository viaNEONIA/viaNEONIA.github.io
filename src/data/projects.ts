export type Project = {
  slug: string;
  name: string;
  category: 'Webアプリ・PWA' | 'DayZ MOD' | '開発ツール';
  description: string;
  repository: string;
  app?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  { slug: 'stocklite', name: 'StockLite', category: 'Webアプリ・PWA', description: 'ブラウザで使える軽量な在庫管理アプリ。', repository: 'https://github.com/viaNEONIA/stocklite', app: 'https://vianeonia.github.io/stocklite/', featured: true },
  { slug: 'kakeibo', name: '簡易家計簿', category: 'Webアプリ・PWA', description: '収支・予算・繰越を管理するPWA。', repository: 'https://github.com/viaNEONIA/kakeibo', app: 'https://vianeonia.github.io/kakeibo/', featured: true },
  { slug: 'filehub', name: 'FileHub', category: '開発ツール', description: 'オフライン対応のブラウザファイル管理ツール。', repository: 'https://github.com/viaNEONIA/filehub', featured: true },
  { slug: 'magazineammocheck', name: 'MagazineAmmoCheck', category: 'DayZ MOD', description: 'DayZのマガジン残弾確認を拡張するMOD。', repository: 'https://github.com/viaNEONIA/MagazineAmmoCheck', featured: true },
  { slug: 'dayzspawn', name: 'LootControl', category: 'DayZ MOD', description: 'DayZのアイテムスポーンを独自に制御するMOD。', repository: 'https://github.com/viaNEONIA/dayzspawn' },
  { slug: 'tfashub', name: 'TFAS Hub', category: '開発ツール', description: 'TFAS図面のレビューと統合を管理するツール。', repository: 'https://github.com/viaNEONIA/tfashub' }
];
