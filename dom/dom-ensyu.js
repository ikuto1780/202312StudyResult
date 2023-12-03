// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// ユーザがテキストボックスに文字列を入力後、ユーザがボタンを多スト、リストの最後の項目として文字列が追加される。


const e = document.getElementById('button');
e.addEventListener('click', () => {
  // テキストボックスの要素を取得
  const textBox = document.getElementById('textBox');
  const li = document.createElement('li');
  const text = document.createTextNode(textBox.value);
  li.appendChild(text);
  list.appendChild(li);

}, false);