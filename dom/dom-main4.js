// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// ボタンをクリックしたときに、class名が'foo'の要素を取得し、
// そのコンテンツ(テキスト)をコンソールに出力する
const e = document.getElementById('button');
e.addEventListener('click',() => {
  // 引数には、取得したいクラス名を指定
  const elements = document.getElementsByClassName('foo');
  // 1件ずつコンソールに出力する処理
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerText);
  }
}, false);