// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// タグ名がdivの要素を取得し、そのコンテンツ(テキスト)をコンソールに出力する

const e = document.getElementById('button');
e.addEventListener('click',() => {
  // 一度に複数のタグ名を指定できる？
  const elements = document.getElementsByTagName('div');
  // elementsの個数分ループ処理を実行し、1件ずつコンソールに出力
  for (let i = 0;i < elements.length; i++) {
    console.log(elements[i].innerText);
  }
}, false);