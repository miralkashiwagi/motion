/**
 * 日付関連のユーティリティ関数
 */

/**
 * 日付をフォーマットする
 * @param date フォーマットする日付
 * @param format フォーマット形式（デフォルト: 'YYYY-MM-DD'）
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: Date | string | null | undefined, format: string = 'YYYY-MM-DD'): string {
  try {
    if (!date) {
      return '';
    }
    
    // 文字列の場合はDateオブジェクトに変換
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // 無効な日付の場合は空文字を返す
    if (isNaN(dateObj.getTime())) {
      console.warn('無効な日付が指定されました:', date);
      return '';
    }
    
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();
    
    // フォーマットを置換
    return format
      .replace('YYYY', year.toString())
      .replace('MM', month.toString().padStart(2, '0'))
      .replace('DD', day.toString().padStart(2, '0'))
      .replace('HH', hours.toString().padStart(2, '0'))
      .replace('mm', minutes.toString().padStart(2, '0'))
      .replace('ss', seconds.toString().padStart(2, '0'));
  } catch (error) {
    console.error('日付のフォーマット中にエラーが発生しました:', error);
    return '';
  }
}

/**
 * 日付を比較する
 * @param date1 比較する日付1
 * @param date2 比較する日付2
 * @returns date1がdate2より新しい場合は1、同じ場合は0、古い場合は-1
 */
export function compareDates(date1: Date | string | null | undefined, date2: Date | string | null | undefined): number {
  try {
    // nullやundefinedの場合の処理
    if (!date1 && !date2) return 0;
    if (!date1) return -1;
    if (!date2) return 1;
    
    // 文字列の場合はDateオブジェクトに変換
    const dateObj1 = typeof date1 === 'string' ? new Date(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? new Date(date2) : date2;
    
    // 無効な日付の場合のチェック
    const time1 = dateObj1.getTime();
    const time2 = dateObj2.getTime();
    
    if (isNaN(time1) && isNaN(time2)) return 0;
    if (isNaN(time1)) return -1;
    if (isNaN(time2)) return 1;
    
    // 日付を比較
    if (time1 > time2) return 1;
    if (time1 < time2) return -1;
    return 0;
  } catch (error) {
    console.error('日付の比較中にエラーが発生しました:', error);
    return 0;
  }
}

/**
 * 日付が指定された範囲内にあるかチェックする
 * @param date チェックする日付
 * @param startDate 開始日
 * @param endDate 終了日
 * @returns 範囲内の場合はtrue、それ以外はfalse
 */
export function isDateInRange(
  date: Date | string | null | undefined, 
  startDate: Date | string | null | undefined, 
  endDate: Date | string | null | undefined
): boolean {
  try {
    if (!date) return false;
    
    // 開始日と終了日が指定されていない場合は常にtrue
    if (!startDate && !endDate) return true;
    
    // 文字列の場合はDateオブジェクトに変換
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // 無効な日付の場合はfalse
    if (isNaN(dateObj.getTime())) return false;
    
    // 開始日のチェック
    if (startDate) {
      const startDateObj = typeof startDate === 'string' ? new Date(startDate) : startDate;
      if (!isNaN(startDateObj.getTime()) && dateObj < startDateObj) {
        return false;
      }
    }
    
    // 終了日のチェック
    if (endDate) {
      const endDateObj = typeof endDate === 'string' ? new Date(endDate) : endDate;
      if (!isNaN(endDateObj.getTime()) && dateObj > endDateObj) {
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('日付の範囲チェック中にエラーが発生しました:', error);
    return false;
  }
}

/**
 * 現在の日付と指定された日付の差を取得する
 * @param date 比較する日付
 * @returns 差分を表す文字列（例: '3日前', '1時間前'）
 */
export function getRelativeTimeString(date: Date | string | null | undefined): string {
  try {
    if (!date) return '';
    
    // 文字列の場合はDateオブジェクトに変換
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    // 無効な日付の場合は空文字を返す
    if (isNaN(dateObj.getTime())) return '';
    
    const now = new Date();
    const diffMs = now.getTime() - dateObj.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    
    if (diffSec < 60) return `${diffSec}秒前`;
    
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}分前`;
    
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) return `${diffHour}時間前`;
    
    const diffDay = Math.floor(diffHour / 24);
    if (diffDay < 30) return `${diffDay}日前`;
    
    const diffMonth = Math.floor(diffDay / 30);
    if (diffMonth < 12) return `${diffMonth}ヶ月前`;
    
    const diffYear = Math.floor(diffMonth / 12);
    return `${diffYear}年前`;
  } catch (error) {
    console.error('相対時間の計算中にエラーが発生しました:', error);
    return '';
  }
}
