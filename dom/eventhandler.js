// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// イベント：ブラウザ上でユーザが行う様々な動作のこと。
// 例)マウスをクリック、ダブルクリック、マウスのポインタを移動、マウスのボタン押下、マウスのボタンを離す、など。

// イベントハンドラ：イベントの発生をきっかけとして動く処理のこと。
// 例)マウスでボタンをクリック → Hello！とコンソールに出力する など。

// ボタンをクリックすると、コンソールに「Clocked!」と出力する。

// ボタンの要素を取得
const e = document.getElementById('button');
// ボタンのクリックイベント「onclick」が発生したときの処理を書く
e.onclick = () => {
  console.log('Clicked!!');
}

// loadイベント：画像を含む、ページが完全に読み終わったことを検知して、何らかの処理をしたい時に使用する

// windowオブジェクトおのloadイベントが発生したタイミングで、コンソールに「load event!」と出力する。
// windowオブジェクトはブラウザオブジェクトの階層構造のトップの階層

window.onload = () => {
  console.log('load event!');
}

e.addEventListener('click', () => {
  console.log('Clicked');
}, false);