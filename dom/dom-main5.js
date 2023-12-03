// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// 空のリスト、ボタンを配置
// ボタンをクリックすると、リストの項目が表示される。
// 追加される文字列は、"test"とする

// Webページをリロードしなくても、動的に要素を変化させられる。

const e = document.getElementById('button');
e.addEventListener('click',() => {
//  li要素を生成する
  const li = document.createElement('li');
// テキストノードを生成する
  const text = document.createTextNode('test');
  // liタグの要素にテキストノード「test」を追加する
  li.appendChild(text);
  const listElement = document.getElementById('list');
  listElement.appendChild(li);  //この処理で、「<li>test</li>」が生成される
}, false);