// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
'use strict';

// 変数宣言
const x = 99;

if(x >= 100) {
  console.log('100以上の値です。');
} else {
  console.log('100未満の値です。');
}

let score = 100;
if (score >= 90) {
  // 条件式1がTrueの時に実行される処理
  console.log('A');
} else if(score >= 80) {
  // 条件式2がTrueの時に実行される処理
  console.log('B');
} else if(score >= 60) {
  console.log('C');
} else {
  // 全ての条件式が成り立たなかったときに実行される処理
  console.log('D');
}

let num = 100;
let str = '100';

// 等しいか確認
// 抽象的な比較で、内容が同じなら型が違くてもTrueとみなされる(比較する前に型変換がされる)
if (num == str) {
  console.log('同じ');
} else {
  console.log('違う');
}

// 厳密に等しいかを確認(内容も型も同じかを比較する)
if (num === str) {
  console.log('同じ');
} else {
  console.log('違う');
}
