---
title: テキストタイピングエフェクト
description: テキストが一文字ずつタイプされているように表示されるアニメーション効果。CSSアニメーションを使用した実装例。
category: テキストアニメーション
tags: [テキスト, CSS, アニメーション]
difficulty: intermediate
preview: /images/animations/text-typing.gif
pubDate: 2023-02-10
---


# テキストタイピングエフェクト

テキストが一文字ずつタイプされているように表示されるアニメーション効果です。CSSのアニメーションと`steps()`関数を使用して実装します。

## デモ

テキストが一文字ずつタイプされるように表示されるデモです：

<AnimationDemo title="テキストタイピングエフェクト" description="テキストが一文字ずつタイプされるように表示されます">
  <div class="typing-demo-container">
    <div class="typing-demo-text">こんにちは、ようこそウェブアニメーションの世界へ</div>
  </div>
  <style>
    .typing-demo-container {
      display: inline-block;
      font-family: monospace;
      font-size: 1.25rem;
      margin: 1rem 0;
    }
    .typing-demo-text {
      width: 0;
      overflow: hidden;
      white-space: nowrap;
      border-right: 3px solid #4f46e5;
      animation: 
        typing 3s steps(30) 1s 1 normal both,
        blink-caret 0.75s step-end infinite;
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #4f46e5 }
    }
  </style>
</AnimationDemo>

## 実装方法

このエフェクトは、CSSの`animation`プロパティと`steps()`タイミング関数を使用して実装します。テキストの幅を0から徐々に増やしていくことで、文字が一つずつ表示されるように見せます。

### HTML

```html
<div class="typing-container">
  <div class="typing-text">こんにちは、ようこそウェブアニメーションの世界へ</div>
</div>
```

### CSS

```css
.typing-container {
  display: inline-block;
  font-family: monospace;
  font-size: 1.25rem;
}

.typing-text {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #4f46e5;
  animation: 
    typing 3s steps(30) 1s 1 normal both,
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #4f46e5 }
}
```

## ポイント

- `steps()`関数を使用して、アニメーションを滑らかではなく、段階的に実行します。ここでの数値（例：30）は、表示する文字数以上である必要があります。
- `white-space: nowrap`を使用して、テキストが折り返されないようにします。
- `overflow: hidden`を使用して、まだ表示されていない文字を隠します。
- `border-right`と`blink-caret`アニメーションを使用して、カーソルの点滅効果を作成します。

## JavaScript版

より複雑な実装や動的なテキスト変更が必要な場合は、JavaScriptを使用することもできます。

```javascript
function typeEffect(element, text, speed = 100) {
  let i = 0;
  
  // 既存のテキストをクリア
  element.textContent = '';
  
  // 一文字ずつ追加
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// 使用例
const textElement = document.querySelector('.typing-text');
typeEffect(textElement, 'こんにちは、ようこそウェブアニメーションの世界へ', 100);
```

## バリエーション

このエフェクトには、以下のようなバリエーションも考えられます：

1. **複数行のタイピング**: 複数の文章を順番にタイプする
2. **削除効果の追加**: タイプした後に文字を削除する効果を追加
3. **カラフルなテキスト**: 文字ごとに色を変える
4. **音声効果**: タイピング音を追加する（JavaScriptが必要）

## ブラウザ互換性

このエフェクトは、モダンブラウザでよくサポートされています：

- Chrome 43+
- Firefox 16+
- Safari 9+
- Edge 12+

Internet Explorer 10以降では部分的にサポートされていますが、`steps()`関数の動作が異なる場合があります。
