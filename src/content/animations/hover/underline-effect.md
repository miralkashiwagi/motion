---
title: 左から右へのアンダーライン
description: マウスホバー時に左から右へアンダーラインが表示されるエフェクト。CSSの疑似要素とtransitionプロパティを使用した実装例。
category: ホバーエフェクト
tags: [CSS, 疑似要素, アンダーライン]
difficulty: intermediate
preview: /images/animations/hover-underline.gif
pubDate: 2023-01-25
---

# 左から右へのアンダーライン

マウスホバー時に左から右へアンダーラインが表示されるエフェクトです。CSSの疑似要素と`transition`プロパティを使用して実装します。

## デモ

<AnimationDemo title="アンダーラインエフェクト" description="マウスを乗せるとアンダーラインが表示されます">
  <div class="underline-container">
    <a href="#" class="underline-item left-to-right">左から右へ</a>
    <a href="#" class="underline-item center-expand">中央から拡大</a>
    <a href="#" class="underline-item double-line">二重線</a>
    <a href="#" class="underline-item dotted-to-solid">点線から実線</a>
    <a href="#" class="underline-item fill-up">塗りつぶし</a>
  </div>
  
  <style>
    .underline-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
      padding: 1rem;
    }
    
    .underline-item {
      position: relative;
      font-size: 1.25rem;
      color: #4f46e5;
      text-decoration: none;
      padding-bottom: 4px;
    }
    
    /* 左から右へ */
    .underline-item.left-to-right::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #4f46e5;
      transition: width 0.3s ease;
    }
    
    .underline-item.left-to-right:hover::after {
      width: 100%;
    }
    
    /* 中央から拡大 */
    .underline-item.center-expand::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: #8b5cf6;
      transition: width 0.3s ease, left 0.3s ease;
    }
    
    .underline-item.center-expand:hover::after {
      width: 100%;
      left: 0;
    }
    
    /* 二重線 */
    .underline-item.double-line::before,
    .underline-item.double-line::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #6366f1;
      transition: width 0.3s ease;
    }
    
    .underline-item.double-line::before {
      bottom: 4px;
      transition-delay: 0.1s;
    }
    
    .underline-item.double-line:hover::before,
    .underline-item.double-line:hover::after {
      width: 100%;
    }
    
    /* 点線から実線 */
    .underline-item.dotted-to-solid {
      border-bottom: 2px dotted #ec4899;
      transition: border-bottom 0.3s ease;
    }
    
    .underline-item.dotted-to-solid:hover {
      border-bottom: 2px solid #ec4899;
    }
    
    /* 塗りつぶし */
    .underline-item.fill-up::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: rgba(79, 70, 229, 0.1);
      transition: height 0.3s ease;
      z-index: -1;
    }
    
    .underline-item.fill-up:hover::after {
      height: 100%;
    }
  </style>
</AnimationDemo>

## 実装方法

このエフェクトは、CSSの疑似要素（`::after`）と`transition`プロパティを組み合わせて実装します。

### 左から右へのアンダーライン

#### HTML
```html
<a href="#" class="underline-left-to-right">左から右へ</a>
```

#### CSS
```css
.underline-left-to-right {
  position: relative;
  color: #4f46e5;
  text-decoration: none;
  padding-bottom: 4px;
}

.underline-left-to-right::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4f46e5;
  transition: width 0.3s ease;
}

.underline-left-to-right:hover::after {
  width: 100%;
}
```

### 中央から拡大するアンダーライン

#### HTML
```html
<a href="#" class="underline-center-expand">中央から拡大</a>
```

#### CSS
```css
.underline-center-expand {
  position: relative;
  color: #8b5cf6;
  text-decoration: none;
  padding-bottom: 4px;
}

.underline-center-expand::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #8b5cf6;
  transition: width 0.3s ease, left 0.3s ease;
}

.underline-center-expand:hover::after {
  width: 100%;
  left: 0;
}
```

### 二重線アンダーライン

#### HTML
```html
<a href="#" class="underline-double-line">二重線</a>
```

#### CSS
```css
.underline-double-line {
  position: relative;
  color: #6366f1;
  text-decoration: none;
  padding-bottom: 8px;
}

.underline-double-line::before,
.underline-double-line::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #6366f1;
  transition: width 0.3s ease;
}

.underline-double-line::before {
  bottom: 4px;
  transition-delay: 0.1s;
}

.underline-double-line:hover::before,
.underline-double-line:hover::after {
  width: 100%;
}
```

## ポイント

- `::after`（または`::before`）疑似要素を使用して、アンダーラインを表現します。
- `position: absolute`と`bottom: 0`を使用して、要素の下部に配置します。
- `width`プロパティをアニメーションさせることで、線が伸びる効果を作成します。
- 中央から拡大する場合は、`left`プロパティも同時にアニメーションさせます。
- 二重線の場合は、`::before`と`::after`の両方を使用します。
- `transition-delay`を使用して、アニメーションのタイミングをずらすことができます。

## バリエーション

このエフェクトには、以下のようなバリエーションも考えられます：

1. **波線アンダーライン**: SVGやbackground-imageを使用して波線を表現
2. **グラデーションアンダーライン**: 線の色をグラデーションにする
3. **点滅アンダーライン**: アニメーションを使用して点滅効果を追加
4. **太さが変化するアンダーライン**: `height`プロパティもアニメーションさせる

## ブラウザ互換性

このエフェクトは、モダンブラウザでよくサポートされています：

- Chrome 26+
- Firefox 16+
- Safari 6.1+
- Edge 12+
