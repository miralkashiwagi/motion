const responsiveMatch = (onMatch,onUnMatch,media = 'max-width: 768px') => {
  //第3引数に入れたメディアクエリもしくは768pxのところでMediaQueryList作成
  const mql = window.matchMedia('('+media+')');

  //MediaQueryListにマッチした時の動作、しなかった時の動作を引数から受け取る
  function mediaChange(e) {
    if (e.matches) {
      onMatch();
    } else {
      onUnMatch();
    }
  }

  //MediaQueryListのChangeイベント時に発火させる
  mql.addEventListener("change", mediaChange);
  //ページ読み込み時にも発火させる
  mediaChange(mql);
}