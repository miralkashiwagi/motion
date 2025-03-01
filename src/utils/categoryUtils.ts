/**
 * カテゴリ情報の型定義
 */
export interface CategoryInfo {
  name: string;
  description: string;
  icon: string;
}

/**
 * サブカテゴリ情報の型定義
 */
export interface SubcategoryInfo {
  id: string;
  name: string;
  description: string;
}

/**
 * カテゴリIDの型定義
 */
export type CategoryId = 
  | 'interactive-animations'
  | 'menu-animations'
  | 'scroll-animations'
  | 'text-animations'
  | 'page-animations'
  | 'others'
  | string;

/**
 * カテゴリ情報を取得する関数
 * @param categoryId - カテゴリID
 * @returns カテゴリ情報
 */
export function getCategoryInfo(categoryId: CategoryId): CategoryInfo {
  // カテゴリ情報のマッピング
  const categoryInfo: Record<string, CategoryInfo> = {
    'interactive-animations': {
      name: 'インタラクティブ要素のアニメーション',
      description: 'ホバーエフェクト、ボタン効果、カード効果など、ユーザーの操作に反応するアニメーション技術のコレクション。色変化、サイズ変更、アンダーライン効果、シャドウ効果などの様々な実装方法を紹介します。',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
      </svg>`
    },
    'menu-animations': {
      name: 'メニュー展開効果',
      description: 'ハンバーガーメニュー、ドロップダウン、メガメニューなどのナビゲーション要素のアニメーションコレクション。ユーザーの操作に応じたメニューの開閉や表示方法の様々な実装を紹介します。',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>`
    },
    'scroll-animations': {
      name: 'スクロール関連アニメーション',
      description: 'スクロールトリガー効果とパララックス効果を含むスクロール連動アニメーションのコレクション。ページのスクロールに応じて要素を表示したり、動かしたりする様々な手法を紹介します。',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
      </svg>`
    },
    'text-animations': {
      name: 'テキストアニメーション',
      description: 'タイピング効果、文字ごとのアニメーション、ハイライト効果など、テキストを動的に表示する手法のコレクション。テキストを魅力的に表示するための様々なアニメーション技術を紹介します。',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>`
    },
    'page-animations': {
      name: 'ページ関連アニメーション',
      description: 'ローディングアニメーション、スケルトンUI、ページ内トランジションなどのコレクション。ページの読み込み時や遷移時のユーザー体験を向上させる様々な手法を紹介します。',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>`
    },
    'others': {
      name: 'その他',
      description: 'その他の特殊効果とアニメーションテクニックのコレクション。様々なウェブアニメーションの実装例とコードサンプルを紹介します。',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>`
    }
  };

  // カテゴリ情報を返す
  return categoryInfo[categoryId] || {
    name: categoryId,
    description: `${categoryId}に関するアニメーション技術のコレクション。`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>`
  };
}

/**
 * サブカテゴリ情報を取得する関数
 * @param categoryId - カテゴリID
 * @returns サブカテゴリ情報の配列
 */
export function getSubcategories(categoryId: CategoryId): SubcategoryInfo[] {
  // サブカテゴリの定義
  const subcategories: Record<string, SubcategoryInfo[]> = {
    'interactive-animations': [
      {
        id: 'hover',
        name: 'ホバーエフェクト',
        description: 'マウスホバー時に要素の見た目や動きが変化するエフェクト'
      },
      {
        id: 'button',
        name: 'ボタンエフェクト',
        description: 'クリック時やホバー時のボタンの動きや変化を強調するエフェクト'
      },
      {
        id: 'card',
        name: 'カードエフェクト',
        description: 'カードUIの動きや変化を強調するエフェクト'
      }
    ],
    'menu-animations': [
      {
        id: 'hamburger',
        name: 'ハンバーガーメニュー',
        description: 'モバイル向けのハンバーガーメニューの開閉アニメーション'
      },
      {
        id: 'dropdown',
        name: 'ドロップダウン',
        description: 'クリックやホバーで表示されるドロップダウンメニューのアニメーション'
      },
      {
        id: 'mega-menu',
        name: 'メガメニュー',
        description: '大規模なナビゲーションメニューの表示アニメーション'
      }
    ],
    'scroll-animations': [
      {
        id: 'scroll-trigger',
        name: 'スクロールトリガー',
        description: 'スクロール位置に応じて要素が表示・非表示されるアニメーション'
      },
      {
        id: 'parallax',
        name: 'パララックス',
        description: 'スクロール時に複数のレイヤーが異なる速度で動くエフェクト'
      }
    ],
    'text-animations': [
      {
        id: 'typing',
        name: 'タイピングエフェクト',
        description: 'テキストが1文字ずつタイプされるようなアニメーション'
      },
      {
        id: 'text-effects',
        name: 'テキストエフェクト',
        description: 'テキストの変形や色の変化など、様々なテキストアニメーション'
      }
    ],
    'page-animations': [
      {
        id: 'loading',
        name: 'ローディングアニメーション',
        description: 'ページやコンテンツの読み込み中に表示されるアニメーション'
      },
      {
        id: 'transition',
        name: 'ページトランジション',
        description: 'ページ間の遷移時に表示されるアニメーション'
      }
    ],
    'others': [
      {
        id: 'special-effects',
        name: '特殊効果',
        description: '他のカテゴリに分類されない特殊なアニメーション効果'
      }
    ]
  };

  // カテゴリに対応するサブカテゴリを返す
  return subcategories[categoryId] || [];
}
