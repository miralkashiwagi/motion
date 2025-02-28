---
title: ハンバーガーメニューアニメーション
description: クリックするとハンバーガーアイコンが×マークに変化するアニメーション。CSSのtransformとtransitionプロパティを使用した実装例。
category: メニューアニメーション
tags: [CSS, メニュー, トランジション]
difficulty: intermediate
preview: /images/animations/hamburger-menu.gif
pubDate: 2023-03-05
---

# ハンバーガーメニューアニメーション

クリックするとハンバーガーアイコンが×マークに変化するアニメーションです。CSSの`transform`と`transition`プロパティを使用して実装します。

## デモ

<AnimationDemo title="ハンバーガーメニューアニメーション" description="アイコンをクリックすると変形します">
  <div class="hamburger-container">
    <button class="hamburger-btn" aria-label="メニュー">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    
    <button class="hamburger-btn spin" aria-label="メニュー">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    
    <button class="hamburger-btn collapse" aria-label="メニュー">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    
    <button class="hamburger-btn arrow" aria-label="メニュー">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>
  
  <style>
    .hamburger-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 2rem;
    }
    
    .hamburger-btn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 24px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      position: relative;
    }
    
    .hamburger-line {
      width: 100%;
      height: 3px;
      background-color: #4f46e5;
      border-radius: 3px;
      transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
    }
    
    /* 基本的な×への変形 */
    .hamburger-btn.active .hamburger-line:nth-child(1) {
      transform: translateY(10.5px) rotate(45deg);
    }
    
    .hamburger-btn.active .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    
    .hamburger-btn.active .hamburger-line:nth-child(3) {
      transform: translateY(-10.5px) rotate(-45deg);
    }
    
    /* 回転する×への変形 */
    .hamburger-btn.spin .hamburger-line:nth-child(1) {
      transform-origin: center;
    }
    
    .hamburger-btn.spin .hamburger-line:nth-child(3) {
      transform-origin: center;
    }
    
    .hamburger-btn.spin.active {
      transform: rotate(180deg);
    }
    
    .hamburger-btn.spin.active .hamburger-line:nth-child(1) {
      transform: translateY(10.5px) rotate(45deg);
    }
    
    .hamburger-btn.spin.active .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    
    .hamburger-btn.spin.active .hamburger-line:nth-child(3) {
      transform: translateY(-10.5px) rotate(-45deg);
    }
    
    /* 折りたたみ式の変形 */
    .hamburger-btn.collapse .hamburger-line {
      transform-origin: right;
    }
    
    .hamburger-btn.collapse.active .hamburger-line:nth-child(1) {
      transform: rotate(-45deg);
      width: 75%;
    }
    
    .hamburger-btn.collapse.active .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    
    .hamburger-btn.collapse.active .hamburger-line:nth-child(3) {
      transform: rotate(45deg);
      width: 75%;
    }
    
    /* 矢印への変形 */
    .hamburger-btn.arrow .hamburger-line {
      transform-origin: center;
    }
    
    .hamburger-btn.arrow.active .hamburger-line:nth-child(1) {
      transform: translateY(10.5px) rotate(-45deg) translateX(5px);
      width: 50%;
    }
    
    .hamburger-btn.arrow.active .hamburger-line:nth-child(2) {
      transform: translateX(0);
    }
    
    .hamburger-btn.arrow.active .hamburger-line:nth-child(3) {
      transform: translateY(-10.5px) rotate(45deg) translateX(5px);
      width: 50%;
    }
  </style>
  
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // すべてのハンバーガーボタンを取得
      const hamburgerBtns = document.querySelectorAll('.hamburger-btn');
      
      // 各ボタンにクリックイベントを追加
      hamburgerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active');
        });
      });
      
      // デモリセット時の処理
      document.querySelector('.demo-content').addEventListener('demo-reset', () => {
        // すべてのボタンのactiveクラスを削除
        hamburgerBtns.forEach(btn => {
          btn.classList.remove('active');
        });
      });
    });
  </script>
</AnimationDemo>

## 実装方法

このエフェクトは、CSSの`transform`と`transition`プロパティを使用して実装します。ハンバーガーメニューの3本の線を回転させることで、×マークに変形させます。

### 基本的な×への変形

#### HTML
```html
<button class="hamburger-menu" aria-label="メニュー">
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
</button>
```

#### CSS
```css
.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background-color: #4f46e5;
  border-radius: 3px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-menu.active .hamburger-line:nth-child(1) {
  transform: translateY(10.5px) rotate(45deg);
}

.hamburger-menu.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.active .hamburger-line:nth-child(3) {
  transform: translateY(-10.5px) rotate(-45deg);
}
```

#### JavaScript
```javascript
document.querySelector('.hamburger-menu').addEventListener('click', function() {
  this.classList.toggle('active');
});
```

### 回転する×への変形

#### HTML
```html
<button class="hamburger-spin" aria-label="メニュー">
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
</button>
```

#### CSS
```css
.hamburger-spin {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
}

.hamburger-spin .hamburger-line {
  width: 100%;
  height: 3px;
  background-color: #4f46e5;
  border-radius: 3px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-spin.active {
  transform: rotate(180deg);
}

.hamburger-spin.active .hamburger-line:nth-child(1) {
  transform: translateY(10.5px) rotate(45deg);
}

.hamburger-spin.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-spin.active .hamburger-line:nth-child(3) {
  transform: translateY(-10.5px) rotate(-45deg);
}
```

## ポイント

- 3本の線（`span`要素）を使用して、ハンバーガーアイコンを作成します。
- `transform`プロパティを使用して、線を回転させたり移動させたりします。
- 中央の線は、`opacity: 0`にすることで非表示にします。
- 上下の線は、`translateY`で位置を調整し、`rotate`で回転させることで、×マークを形成します。
- `transition`プロパティを使用して、変化を滑らかにします。
- JavaScriptを使用して、クリック時に`active`クラスを切り替えます。

## バリエーション

このエフェクトには、以下のようなバリエーションも考えられます：

1. **矢印への変形**: ハンバーガーアイコンが矢印に変形する
2. **プラス/マイナスへの変形**: ハンバーガーアイコンがプラス/マイナス記号に変形する
3. **折りたたみ式**: 線が折りたたまれるように変形する
4. **波紋効果**: クリック時に波紋が広がるエフェクトを追加する

## ブラウザ互換性

このエフェクトは、モダンブラウザでよくサポートされています：

- Chrome 26+
- Firefox 16+
- Safari 6.1+
- Edge 12+
