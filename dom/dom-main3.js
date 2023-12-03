// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// テキストボックスとボタンを配置し、ボタンをクリックしたら
// name属性の'result'の要素を取得して、その入力内容(テキスト)をコンソールに出力する

const e = document.getElementById('button');
e.addEventListener('click',() => {
  // name要素が「result」の物を取得して、変数に入れる
 const elements = document.getElementsByName('result');
//  getElementByNameメソッドはHTMLCollectionという配列が返ってくる。
//  今回は帰ってくる値が1つだが、配列は値が複数入るので、配列の一番目を取り出したいため、添え字を「0」としている
// 「.value」で文字を取り出している
 console.log(elements[0].value);
}, false);