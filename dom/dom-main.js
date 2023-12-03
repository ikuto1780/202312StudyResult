// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// 1．現在のIDが「result」の要素の、コンテンツ(テキスト)を取得
// 2．取得した要素のコンテンツ(テキスト)を、コンソールに出力

const e = document.getElementById('button');
e.addEventListener('click',() => {
  // console.log('Clecked!');
  // 引数には、取得したい要素のIDを指定する
  const result = document.getElementById('result');
  // pタグのテキスト部分だけを持ってきたいので、「.innerText」を追加
  // 持ってきたい要素のIDは、HTML側で必ず一意にしておく。予期せぬ動作を引き起こす可能性あり。
  console.log(result.innerText);
}, false);