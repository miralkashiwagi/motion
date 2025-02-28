---
title: テキストタイピングエフェクト (ミニマル)
description: テキストが一文字ずつタイプされているように表示されるアニメーション効果。最小限の実装例。
category: テキストアニメーション
tags: [テキスト, CSS, アニメーション]
difficulty: beginner
preview: /images/animations/text-typing.gif
pubDate: 2023-02-10
---

# テキストタイピングエフェクト (ミニマル)

テキストが一文字ずつタイプされているように表示されるアニメーション効果です。最小限のCSSで実装します。

## デモ

テキストが一文字ずつタイプされるように表示されるデモです：
<AnimationDemo title="テキストタイピングエフェクト (ミニマル)" description="テキストが一文字ずつタイプされるように表示されます" height="300px">
<div class="typing-container">
  <div class="typing-text">こんにちは、ようこそ</div>
</div>

<style>
  .typing-container {
    display: inline-block;
    font-family: monospace;
    font-size: 1.25rem;
    margin: 1rem 0;
  }
  
  .typing-text {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #4f46e5;
    animation: 
      typing 2s steps(15) 1s 1 normal both,
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

このエフェクトは、CSSの`animation`プロパティと`steps()`タイミング関数を使用して実装します。

```html
<div class="typing-container">
  <div class="typing-text">こんにちは、ようこそ</div>
</div>

<style>
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
      typing 2s steps(15) 1s 1 normal both,
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
```

## ポイント

- `steps()`関数を使用して、アニメーションを段階的に実行します
- `white-space: nowrap`で、テキストが折り返されないようにします
- `overflow: hidden`で、まだ表示されていない文字を隠します
