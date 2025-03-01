/**
 * カテゴリ情報の型定義
 */
export interface CategoryInfo {
  name: string;
  description: string;
  icon: string;
  color: string;
}

/**
 * サブカテゴリ情報の型定義
 */
export interface SubcategoryInfo {
  id: string;
  name: string;
  description?: string;
}

/**
 * カテゴリIDの型定義
 */
export type CategoryId = 
  | 'interactive'
  | 'menu'
  | 'scroll'
  | 'text'
  | 'page'
  | 'others'
  | string;

// カテゴリーマッピングをインポート
import { categoryMapping } from '../content/config';

/**
 * カテゴリ情報を取得する関数
 * @param categoryId - カテゴリID
 * @returns カテゴリ情報
 */
export function getCategoryInfo(categoryId: CategoryId): CategoryInfo {
  // カテゴリIDから親カテゴリー名を取得
  const parentCategoryEntry = Object.entries(categoryMapping).find(([_, data]) => data.id === categoryId);
  
  if (parentCategoryEntry) {
    const [name, data] = parentCategoryEntry;
    return {
      name,
      description: data.description,
      icon: getIconSvg(data.icon),
      color: data.color
    };
  }
  
  // 該当するカテゴリーが見つからない場合はデフォルト値を返す
  return {
    name: 'その他',
    description: 'その他のアニメーション効果',
    icon: getIconSvg('sparkles'),
    color: '#6b7280'
  };
}

/**
 * サブカテゴリ情報を取得する関数
 * @param categoryId - カテゴリID
 * @returns サブカテゴリ情報の配列
 */
export function getSubcategories(categoryId: CategoryId): SubcategoryInfo[] {
  // カテゴリIDから親カテゴリー名を取得
  const parentCategoryEntry = Object.entries(categoryMapping).find(([_, data]) => data.id === categoryId);
  
  if (parentCategoryEntry) {
    const [_, data] = parentCategoryEntry;
    // サブカテゴリーの配列を返す
    return data.subcategories.map(subcategory => ({
      id: subcategory.toLowerCase().replace(/\s+/g, '-'),
      name: subcategory
    }));
  }
  
  // 該当するカテゴリーが見つからない場合は空の配列を返す
  return [];
}

/**
 * 親カテゴリー名からカテゴリーIDを取得する関数
 * @param parentCategory - 親カテゴリー名
 * @returns カテゴリーID
 */
export function getCategoryIdFromParentCategory(parentCategory: string): CategoryId {
  const categoryData = categoryMapping[parentCategory];
  return categoryData ? categoryData.id : 'others';
}

/**
 * サブカテゴリー名から親カテゴリー名を取得する関数
 * @param subcategory - サブカテゴリー名
 * @returns 親カテゴリー名
 */
export function getParentCategoryFromSubcategory(subcategory: string): string | null {
  for (const [parentCategory, data] of Object.entries(categoryMapping)) {
    if (data.subcategories.includes(subcategory)) {
      return parentCategory;
    }
  }
  return null;
}

/**
 * アイコン名からSVGを取得する関数
 * @param iconName - アイコン名
 * @returns SVG文字列
 */
function getIconSvg(iconName: string): string {
  const iconMap: Record<string, string> = {
    'cursor': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
    </svg>`,
    'bars-3': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>`,
    'arrow-down': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>`,
    'text': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
    </svg>`,
    'arrow-path': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>`,
    'sparkles': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>`
  };
  
  return iconMap[iconName] || iconMap['sparkles'];
}
