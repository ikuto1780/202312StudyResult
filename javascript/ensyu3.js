// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";
// テストの点数の合計値、平均値を求める
// 集計する各点数は100、90、80、70、60とする

const scores = [100, 90, 80, 70, 60];
let sum = 0;
let ave = 0;

for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

ave = sum / scores.length;

console.log('合計値' + sum);
console.log('平均値' + ave);