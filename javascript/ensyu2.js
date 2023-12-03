// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// 1～100の整数値について、合計値を計算してコンソールに出力する

// 変数宣言
let sum = 0;
for (let i = 1;i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);