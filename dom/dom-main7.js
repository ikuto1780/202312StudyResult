// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// リストとボタンを設置
// ボタンをクリックすると、リストの子要素が最後の物から削除される。

const e = document.getElementById('button');
e.addEventListener('click', () => {
  // ID「list」の要素を取得
  const parentElement = document.getElementById('list');
  // タグが「li」の要素を取得
  const elements = parentElement.getElementsByTagName('li');
  // 変数elementsに入っている要素から、削除するインデックス番号を取得する
  // 配列のインデックスは「0」から始まるので、「-1」をしている
  const removeIndex = elements.length - 1;
  // リストの子要素が最後の物から、削除する
  parentElement.removeChild(elements[removeIndex]);
}, false);