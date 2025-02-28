---
title: テキストハイライト効果
description: テキストの背景色を使ったハイライト効果。CSSのtransitionとbackground-positionを使用した実装例。
category: テキストアニメーション
tags: [CSS, テキスト, ハイライト]
difficulty: intermediate
preview: /images/animations/text-highlight.gif
pubDate: 2023-02-15
---

# テキストハイライト効果

テキストの背景色を使ったハイライト効果です。CSSの`transition`と`background-position`プロパティを使用して実装します。

## デモ

<AnimationDemo title="テキストハイライト効果" description="テキストにマウスを乗せると背景色でハイライトされます">
  <div class="highlight-container">
    <p class="highlight-text basic">基本的なハイライト効果</p>
    <p class="highlight-text left-to-right">左から右へのハイライト</p>
    <p class="highlight-text right-to-left">右から左へのハイライト</p>
    <p class="highlight-text gradient">グラデーションハイライト</p>
    <p class="highlight-text underline">アンダーラインハイライト</p>
  </div>
  
  <style>
    .highlight-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem;
    }
    
    .highlight-text {
      font-size: 1.25rem;
      font-weight: 500;
      display: inline-block;
      cursor: pointer;
    }
    
    /* 基本的なハイライト */
    .highlight-text.basic {
      background-image: linear-gradient(transparent 60%, #fef08a 40%);
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: background-size 0.4s ease;
    }
    
    .highlight-text.basic:hover {
      background-size: 100% 100%;
    }
    
    /* 左から右へのハイライト */
    .highlight-text.left-to-right {
      background-image: linear-gradient(transparent 60%, #bae6fd 40%);
      background-size: 0 100%;
      background-repeat: no-repeat;
      background-position: left;
      transition: background-size 0.4s ease;
    }
    
    .highlight-text.left-to-right:hover {
      background-size: 100% 100%;
    }
    
    /* 右から左へのハイライト */
    .highlight-text.right-to-left {
      background-image: linear-gradient(transparent 60%, #c7d2fe 40%);
      background-size: 0 100%;
      background-repeat: no-repeat;
      background-position: right;
      transition: background-size 0.4s ease;
    }
    
    .highlight-text.right-to-left:hover {
      background-size: 100% 100%;
    }
    
    /* グラデーションハイライト */
    .highlight-text.gradient {
      background-image: linear-gradient(transparent 60%, #fecdd3 40%);
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: background-size 0.4s ease;
    }
    
    .highlight-text.gradient:hover {
      background-size: 100% 100%;
      background-image: linear-gradient(transparent 60%, #fda4af 40%);
    }
    
    /* アンダーラインハイライト */
    .highlight-text.underline {
      background-image: linear-gradient(transparent 90%, #a5b4fc 10%);
      background-size: 0 100%;
      background-repeat: no-repeat;
      transition: background-size 0.4s ease;
    }
    
    .highlight-text.underline:hover {
      background-size: 100% 100%;
    }
  </style>
</AnimationDemo>

## 実装方法

このエフェクトは、CSSの`background-image`、`background-size`、`background-position`、`transition`プロパティを組み合わせて実装します。

### 基本的なハイライト

#### HTML
```html
<p class="highlight-basic">基本的なハイライト効果</p>
```

#### CSS
```css
.highlight-basic {
  font-size: 1.25rem;
  background-image: linear-gradient(transparent 60%, #fef08a 40%);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.4s ease;
}

.highlight-basic:hover {
  background-size: 100% 100%;
}
```

### 左から右へのハイライト

#### HTML
```html
<p class="highlight-left-to-right">左から右へのハイライト</p>
```

#### CSS
```css
.highlight-left-to-right {
  font-size: 1.25rem;
  background-image: linear-gradient(transparent 60%, #bae6fd 40%);
  background-size: 0 100%;
  background-repeat: no-repeat;
  background-position: left;
  transition: background-size 0.4s ease;
}

.highlight-left-to-right:hover {
  background-size: 100% 100%;
}
```

### 右から左へのハイライト

#### HTML
```html
<p class="highlight-right-to-left">右から左へのハイライト</p>
```

#### CSS
```css
.highlight-right-to-left {
  font-size: 1.25rem;
  background-image: linear-gradient(transparent 60%, #c7d2fe 40%);
  background-size: 0 100%;
  background-repeat: no-repeat;
  background-position: right;
  transition: background-size 0.4s ease;
}

.highlight-right-to-left:hover {
  background-size: 100% 100%;
}
```

### グラデーションハイライト

#### HTML
```html
<p class="highlight-gradient">グラデーションハイライト</p>
```

#### CSS
```css
.highlight-gradient {
  font-size: 1.25rem;
  background-image: linear-gradient(transparent 60%, #fecdd3 40%);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.4s ease, background-image 0.4s ease;
}

.highlight-gradient:hover {
  background-size: 100% 100%;
  background-image: linear-gradient(transparent 60%, #fda4af 40%);
}
```

## ポイント

- `linear-gradient`を使用して、テキストの一部だけに背景色を適用します。
- `transparent 60%, #color 40%`のような値を使用することで、テキストの下部だけをハイライトします。
- `background-size: 0 100%`を初期状態として、ホバー時に`background-size: 100% 100%`に変更することで、ハイライトが広がる効果を作成します。
- `background-position`を使用して、ハイライトの開始位置を制御します。
- `transition`プロパティを使用して、変化を滑らかにします。

## バリエーション

このエフェクトには、以下のようなバリエーションも考えられます：

1. **斜めハイライト**: `linear-gradient`の角度を変更して、斜めのハイライトを作成
2. **波線ハイライト**: SVGを使用して波線のハイライトを作成
3. **マーカーハイライト**: 手書き風のマーカーテクスチャを使用
4. **複数色ハイライト**: 複数の色を使用したグラデーションハイライト

## ブラウザ互換性

このエフェクトは、モダンブラウザでよくサポートされています：

- Chrome 26+
- Firefox 16+
- Safari 6.1+
- Edge 12+
