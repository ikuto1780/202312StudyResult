// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
'use strict';

// 変数宣言
let x;
console.log(x);
x = 1;
console.log(x);
x = 2;
console.log(x);

let y = 10;
console.log(y);
y = 11;
console.log(y);

let str = 'Hello JavaScript';
console.log(str);
// ダブルクォーテーションでもオッケー
let str2 = "Hello DoubleCort";
console.log(str2);

let i,j,k;

// 再代入できない関数：const 初期化の時のみ、代入できる
// 絶対変わらない値(定数)などに使う
const a = 10;
console.log(a);

const prefecture = 'Tokyo';
console.log(prefecture);

console.log('Hello World from main.js');

// 足し算
console.log(10+3);

// 引き算
console.log(10 - 3);

// 掛け算
console.log(10 * 3);

// 割り算
console.log(10 / 3);

// 余り
console.log(10 % 3);