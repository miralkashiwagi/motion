---
title: ホバーボタンエフェクト
description: マウスホバー時に背景色が滑らかに変化するボタンエフェクト。CSSのtransitionプロパティを使用した実装例。
category: ホバーエフェクト
tags: [ボタン, CSS, トランジション]
difficulty: beginner
preview: /images/animations/hover-button.gif
pubDate: 2023-01-15
---

# ホバーボタンエフェクト

マウスホバー時に背景色が滑らかに変化するボタンエフェクトです。CSSのtransitionプロパティを使用して簡単に実装できます。

## デモ

<AnimationDemo title="ホバーボタンエフェクト" description="マウスを乗せると背景色が変化します">
  <button class="hover-button">ホバーしてください</button>
  
  <style>
    .hover-button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #4f46e5;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }
    
    .hover-button:hover {
      background-color: #6366f1;
      transform: translateY(-2px);
    }
    
    .hover-button:active {
      transform: translateY(0);
    }
  </style>
</AnimationDemo>

## 実装方法

このエフェクトは、CSSの`transition`プロパティを使用して実装します。ボタン要素に対して、背景色の変化とわずかな上方向への移動を組み合わせることで、インタラクティブな印象を与えます。

### HTML

```html
<button class="hover-button">ホバーしてください</button>
```

### CSS

```css
.hover-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.hover-button:hover {
  background-color: #6366f1;
  transform: translateY(-2px);
}
.hover-button:active {
  transform: translateY(0);
}
```

## ポイント

- `transition`プロパティを使用して、背景色と変形の変化を滑らかにします。
- `transform: translateY(-2px)`を使用して、ホバー時に要素を少し上に移動させることで、浮き上がる効果を作成します。
- `:active`擬似クラスを使用して、クリック時の効果も追加しています。

## バリエーション

このエフェクトには、以下のようなバリエーションも考えられます：

1. **境界線の変化**: 背景色の代わりに、境界線の色や太さを変化させる
2. **影の追加**: ホバー時に`box-shadow`を追加して、立体感を強調する
3. **テキストの色変更**: 背景色と同時にテキストの色も変更する

## ブラウザ互換性

このエフェクトは、モダンブラウザでよくサポートされています：

- Chrome 26+
- Firefox 16+
- Safari 6.1+
- Edge 12+

Internet Explorer 10以降では部分的にサポートされていますが、一部の効果は制限される場合があります。
