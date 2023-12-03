// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// リストとボタンを配置。
// ボタンをクリックすると、リストの子要素を置換する処理が走る。

const e = document.getElementById('button');
e.addEventListener('click',() => {
  // 空のli要素を作成
  const newList = document.createElement('li');
  // 生成したノードに、ID属性「newList」を付与
  newList.setAttribute('id','newList');
  // テキストノードを生成
  const newText = document.createTextNode('new element');
  // 生成したノードを、空のli要素の子ノードとして追加
  newList.appendChild(newText);
  // 置換前の変数oldListの参照を変数oldListに代入
  // 置換前のidがoldListの要素の参照を変数oldListに代入
  const oldList = document.getElementById('oldList');
  // 親ノード ulの参照を変数parenetNodeに代入
  const parentNode = oldList.parentNode;
  // 既存ノードoldListを、新規に作成したli要素newListと置換
  parentNode.replaceChild(newList,oldList);
}, false);