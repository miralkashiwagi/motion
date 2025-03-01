import { defineCollection, z } from 'astro:content';

// 親カテゴリーの定義
const parentCategorySchema = z.enum([
  'インタラクティブ要素',
  'メニュー展開効果',
  'スクロール関連',
  'テキストアニメーション',
  'ページ関連',
]);

// 実装技術を定義
const technologySchema = z.enum([
  'CSS',
  'JavaScript',
  'GSAP',
  'ScrollTrigger',
  'Framer Motion',
  'SVG',
  'Canvas',
  'CSS Animation',
  'CSS Transition',
  'Web Animation API',
  'Intersection Observer',
]);

// サブカテゴリーの定義
const subcategorySchema = z.enum([
  'ホバーエフェクト',
  'ボタン効果',
  'カード効果',
  'シャドウ効果',
  'アンダーライン効果',
  'ハンバーガーメニュー',
  'ドロップダウン',
  'メガメニュー',
  'スクロールトリガー',
  'パララックス',
  '順次表示',
  'スクロール連動',
  'テキスト効果',
  'タイピング効果',
  'ハイライト効果',
  '文字アニメーション',
  'ローディングアニメーション',
  'スケルトンローディング',
  'ページトランジション',
]);

const animationsCollection = defineCollection({
  type: 'content',
  // Explicitly specify that we can use both .md and .mdx files
  extensions: ['.md', '.mdx'],
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // 親カテゴリー
    parentCategory: parentCategorySchema,
    // サブカテゴリー（従来のcategoryフィールドを流用）
    category: subcategorySchema,
    tags: z.array(z.string()).optional(),
    technologies: z.array(technologySchema).optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    preview: z.string().optional(), // Path to preview GIF/MP4
    order: z.number().optional(),
    pubDate: z.date().optional(),
    updatedDate: z.date().optional(),
    useIframe: z.boolean().optional(),
    demoHeight: z.string().optional(),
  }),
});

export const collections = {
  'animations': animationsCollection,
};

// 親カテゴリーとサブカテゴリーのマッピングをエクスポート（他のコンポーネントで使用するため）
export const categoryMapping = {
  'インタラクティブ要素': {
    id: 'interactive',
    subcategories: [
      'ホバーエフェクト',
      'ボタン効果',
      'カード効果',
      'シャドウ効果',
      'アンダーライン効果',
    ],
    icon: 'cursor',
    color: '#4f46e5',
    description: 'ホバーエフェクト、ボタン効果、カード効果など、ユーザーの操作に反応するアニメーション',
  },
  'メニュー展開効果': {
    id: 'menu',
    subcategories: [
      'ハンバーガーメニュー',
      'ドロップダウン',
      'メガメニュー',
    ],
    icon: 'bars-3',
    color: '#ea580c',
    description: 'ハンバーガーメニュー、ドロップダウン、メガメニューなどのナビゲーション要素のアニメーション',
  },
  'スクロール関連': {
    id: 'scroll',
    subcategories: [
      'スクロールトリガー',
      'パララックス',
      '順次表示',
      'スクロール連動',
    ],
    icon: 'arrow-down',
    color: '#0891b2',
    description: 'スクロールトリガー効果とパララックス効果を含むスクロール連動アニメーション',
  },
  'テキストアニメーション': {
    id: 'text',
    subcategories: [
      'テキスト効果',
      'タイピング効果',
      'ハイライト効果',
      '文字アニメーション',
    ],
    icon: 'text',
    color: '#0d9488',
    description: 'タイピング効果、文字ごとのアニメーション、ハイライト効果など、テキストを動的に表示する手法',
  },
  'ページ関連': {
    id: 'page',
    subcategories: [
      'ローディングアニメーション',
      'スケルトンローディング',
      'ページトランジション',
    ],
    icon: 'arrow-path',
    color: '#c026d3',
    description: 'ローディングアニメーション、スケルトンUI、ページ内トランジションなど',
  },
};
