class TextSplit {
  constructor(selector) {
    this.container = document.querySelector(selector);
    if (!this.container) {
      throw new Error('Element not found');
    }
    this.originalContent = this.container.innerHTML;
    this.init();
  }

  init() {
    const linesFragment = this.splitIntoLines();
    this.container.innerHTML = "";
    this.container.appendChild(linesFragment);
  }

  wrapTextNodesInCharSpans(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (!text) return;
      const frag = document.createDocumentFragment();
      for (const ch of text) {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = ch;
        frag.appendChild(span);
      }
      node.parentNode.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(child => this.wrapTextNodesInCharSpans(child));
    }
  }

  assignLineIndexes() {
    const chars = this.container.querySelectorAll('.char');
    let lastTop = null, currentLine = 0;
    const map = new Map();

    // パフォーマンス最適化: DOMアクセスを最小限に抑える
    const measurements = Array.from(chars).map(char => ({
      element: char,
      top: Math.round(char.getBoundingClientRect().top)
    }));

    measurements.forEach(({ element, top }) => {
      if (lastTop === null) {
        lastTop = top;
      } else if (Math.abs(top - lastTop) > 1) {
        currentLine++;
        lastTop = top;
      }
      map.set(element, currentLine);
    });

    // 不要なデータをクリア
    measurements.length = 0;

    return { map, lineCount: currentLine + 1 };
  }

  cloneStructureForLine(node, lineIndex, map) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.classList.contains('char')) {
        if (map.get(node) === lineIndex) {
          return node.cloneNode(true);
        } else {
          return null;
        }
      }
      const cloned = node.cloneNode(false);
      let hasChild = false;
      node.childNodes.forEach(child => {
        const childClone = this.cloneStructureForLine(child, lineIndex, map);
        if (childClone) {
          cloned.appendChild(childClone);
          hasChild = true;
        }
      });
      return hasChild ? cloned : null;
    }
    return null;
  }

  unwrapCharSpans(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.classList.contains('char')) {
        return document.createTextNode(node.textContent);
      } else {
        const frag = document.createDocumentFragment();
        Array.from(node.childNodes).forEach(child => {
          const unwrapped = this.unwrapCharSpans(child);
          if (unwrapped) {
            frag.appendChild(unwrapped);
          }
        });
        const cloned = node.cloneNode(false);
        cloned.appendChild(frag);
        return cloned;
      }
    }
    return node.cloneNode(true);
  }

  splitIntoLines() {
    this.wrapTextNodesInCharSpans(this.container);
    const { map, lineCount } = this.assignLineIndexes();

    const linesFragment = document.createDocumentFragment();
    for (let i = 0; i < lineCount; i++) {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'line';
      Array.from(this.container.childNodes).forEach(child => {
        const clonedChild = this.cloneStructureForLine(child, i, map);
        if (clonedChild) {
          lineDiv.appendChild(clonedChild);
        }
      });
      const unwrapped = this.unwrapCharSpans(lineDiv);
      linesFragment.appendChild(unwrapped);
    }

    // メモリリーク防止のためmapをクリア
    map.clear();

    return linesFragment;
  }

  revert() {
    this.container.innerHTML = this.originalContent;
  }

  // メモリ管理改善のための新しいメソッド
  destroy() {
    this.revert();
    // 参照を解放
    this.container = null;
    this.originalContent = null;
  }
}