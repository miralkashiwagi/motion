---
title: 背景色の滑らかな変化
description: マウスホバー時に背景色が滑らかに変化するエフェクト。CSSのtransitionプロパティを使用した実装例。
category: ホバーエフェクト
tags: [CSS, トランジション, 色変化]
difficulty: beginner
preview: /images/animations/hover-color.gif
pubDate: 2023-01-20
---

# 背景色の滑らかな変化

マウスホバー時に背景色が滑らかに変化するエフェクトです。CSSのtransitionプロパティを使用して簡単に実装できます。

## デモ

<AnimationDemo title="背景色の滑らかな変化" description="マウスを乗せると背景色が滑らかに変化します">
  <div class="hover-color-container">
    <div class="hover-color-item">ホバーしてください</div>
    <div class="hover-color-item gradient">グラデーション変化</div>
    <div class="hover-color-item text-color">テキスト色も変化</div>
  </div>
  
  <style>
    .hover-color-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    
    .hover-color-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 100px;
      background-color: #4f46e5;
      color: white;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .hover-color-item:hover {
      background-color: #818cf8;
    }
    
    .hover-color-item.gradient {
      background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
      transition: background 0.5s ease;
    }
    
    .hover-color-item.gradient:hover {
      background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
    }
    
    .hover-color-item.text-color {
      background-color: #f3f4f6;
      color: #4f46e5;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    .hover-color-item.text-color:hover {
      background-color: #4f46e5;
      color: white;
    }
  </style>
</AnimationDemo>

## 実装方法

このエフェクトは、CSSの`transition`プロパティを使用して実装します。要素に対して、背景色の変化を滑らかに行うことで、インタラクティブな印象を与えます。

### 基本的な背景色の変化

#### HTML
```html
<div class="hover-color-item">ホバーしてください</div>
```

#### CSS
```css
.hover-color-item {
  background-color: #4f46e5;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hover-color-item:hover {
  background-color: #818cf8;
}
```

### グラデーション背景の変化

#### HTML
```html
<div class="hover-color-gradient">グラデーション変化</div>
```

#### CSS
```css
.hover-color-gradient {
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.5s ease;
}

.hover-color-gradient:hover {
  background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
}
```

### テキスト色も同時に変化

#### HTML
```html
<div class="hover-color-text">テキスト色も変化</div>
```

#### CSS
```css
.hover-color-text {
  background-color: #f3f4f6;
  color: #4f46e5;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.hover-color-text:hover {
  background-color: #4f46e5;
  color: white;
}
```

## ポイント

- `transition`プロパティを使用して、背景色の変化を滑らかにします。
- 第一引数にアニメーションさせたいプロパティ、第二引数に変化にかかる時間、第三引数にイージング関数を指定します。
- 複数のプロパティを同時にアニメーションさせる場合は、カンマで区切って指定します。
- グラデーション背景の場合は、`background`プロパティ全体をトランジションの対象にします。

## バリエーション

このエフェクトには、以下のようなバリエーションも考えられます：

1. **色相回転効果**: `filter: hue-rotate()`を使用して色相を変化させる
2. **彩度変化**: `filter: saturate()`を使用して彩度を変化させる
3. **境界線の色変化**: `border-color`を変化させる
4. **ボックスシャドウの色変化**: `box-shadow`の色を変化させる

## ブラウザ互換性

このエフェクトは、モダンブラウザでよくサポートされています：

- Chrome 26+
- Firefox 16+
- Safari 6.1+
- Edge 12+
