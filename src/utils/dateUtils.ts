/**
 * 日付をフォーマットする関数
 * @param date - フォーマットする日付
 * @param options - フォーマットオプション
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: Date | string | undefined, options: Intl.DateTimeFormatOptions = {}): string {
  if (!date) return '日付なし';
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // 無効な日付の場合はデフォルト値を返す
    if (isNaN(dateObj.getTime())) {
      return '日付なし';
    }
    
    // デフォルトのオプション
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    // デフォルトオプションとユーザー指定オプションをマージ
    const mergedOptions = { ...defaultOptions, ...options };
    
    return dateObj.toLocaleDateString('ja-JP', mergedOptions);
  } catch (error) {
    console.error('日付フォーマットエラー:', error);
    return '日付なし';
  }
}

/**
 * 日付を比較する関数
 * @param dateA - 比較する日付A
 * @param dateB - 比較する日付B
 * @returns 比較結果（負: A < B, 0: A = B, 正: A > B）
 */
export function compareDates(dateA: Date | string | undefined, dateB: Date | string | undefined): number {
  try {
    // undefinedの場合は最も古い日付として扱う
    if (!dateA && !dateB) return 0;
    if (!dateA) return -1;
    if (!dateB) return 1;
    
    const timeA = typeof dateA === 'string' ? new Date(dateA).getTime() : dateA.getTime();
    const timeB = typeof dateB === 'string' ? new Date(dateB).getTime() : dateB.getTime();
    
    // 無効な日付の場合は安全に処理
    if (isNaN(timeA) && isNaN(timeB)) return 0;
    if (isNaN(timeA)) return -1;
    if (isNaN(timeB)) return 1;
    
    return timeA - timeB;
  } catch (error) {
    console.error('日付比較エラー:', error);
    return 0;
  }
}

/**
 * 日付が有効かどうかを確認する関数
 * @param date - 確認する日付
 * @returns 有効な日付かどうか
 */
export function isValidDate(date: Date | string | undefined): boolean {
  if (!date) return false;
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return !isNaN(dateObj.getTime());
  } catch (error) {
    return false;
  }
}
