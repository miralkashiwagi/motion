---
title: ゆるやかな拡大・縮小効果
description: マウスホバー時に要素がゆるやかに拡大・縮小するエフェクト。CSSのtransformとtransitionプロパティを使用した実装例。
category: ホバーエフェクト
tags: [CSS, トランジション, 変形]
difficulty: beginner
preview: /images/animations/hover-scale.gif
pubDate: 2023-01-22
---

# ゆるやかな拡大・縮小効果

マウスホバー時に要素がゆるやかに拡大・縮小するエフェクトです。CSSの`transform`と`transition`プロパティを使用して実装します。

## デモ

<AnimationDemo title="ゆるやかな拡大・縮小効果" description="マウスを乗せると要素のサイズと形状が変化します">
  <div class="scale-shape-container">
    <div class="scale-item">拡大効果</div>
    <div class="scale-item shrink">縮小効果</div>
    <div class="scale-item rounded">角丸化</div>
    <div class="scale-item skew">傾き効果</div>
  </div>
  
  <style>
    .scale-shape-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
    }
    
    .scale-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 100px;
      background-color: #4f46e5;
      color: white;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      transition: transform 0.3s ease, border-radius 0.3s ease;
    }
    
    .scale-item:hover {
      transform: scale(1.1);
    }
    
    .scale-item.shrink:hover {
      transform: scale(0.9);
    }
    
    .scale-item.rounded {
      background-color: #8b5cf6;
    }
    
    .scale-item.rounded:hover {
      border-radius: 24px;
    }
    
    .scale-item.skew {
      background-color: #6366f1;
    }
    
    .scale-item.skew:hover {
      transform: skew(-10deg, 0);
    }
  </style>
</AnimationDemo>

## 実装方法

このエフェクトは、CSSの`transform`プロパティと`transition`プロパティを組み合わせて実装します。

### 拡大効果

#### HTML
```html
<div class="scale-up">拡大効果</div>
```

#### CSS
```css
.scale-up {
  width: 150px;
  height: 100px;
  background-color: #4f46e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.scale-up:hover {
  transform: scale(1.1);
}
```

### 縮小効果

#### HTML
```html
<div class="scale-down">縮小効果</div>
```

#### CSS
```css
.scale-down {
  width: 150px;
  height: 100px;
  background-color: #4f46e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.scale-down:hover {
  transform: scale(0.9);
}
```

### 角丸化効果

#### HTML
```html
<div class="rounded-effect">角丸化</div>
```

#### CSS
```css
.rounded-effect {
  width: 150px;
  height: 100px;
  background-color: #8b5cf6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: border-radius 0.3s ease;
}

.rounded-effect:hover {
  border-radius: 24px;
}
```

### 傾き効果

#### HTML
```html
<div class="skew-effect">傾き効果</div>
```

#### CSS
```css
.skew-effect {
  width: 150px;
  height: 100px;
  background-color: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.skew-effect:hover {
  transform: skew(-10deg, 0);
}
```

## ポイント

- `transform`プロパティを使用して、要素のサイズや形状を変更します。
- `scale()`関数を使用して要素を拡大・縮小します。値が1より大きいと拡大、1より小さいと縮小します。
- `border-radius`プロパティを使用して、角の丸みを変更します。
- `skew()`関数を使用して、要素を傾けます。第一引数がX軸方向の傾き、第二引数がY軸方向の傾きです。
- `transition`プロパティを使用して、変化を滑らかにします。

## バリエーション

このエフェクトには、以下のようなバリエーションも考えられます：

1. **幅・高さの変化**: `width`/`height`プロパティを直接変更する
2. **アスペクト比の変化**: `aspect-ratio`プロパティを変更する
3. **回転効果**: `transform: rotate()`を使用して回転させる
4. **3D変形**: `transform: perspective()`と組み合わせて3D効果を作成する

## ブラウザ互換性

このエフェクトは、モダンブラウザでよくサポートされています：

- Chrome 26+
- Firefox 16+
- Safari 6.1+
- Edge 12+
