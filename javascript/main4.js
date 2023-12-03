// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
'use strict';

let num = 10;

//インクリメント
num++;
console.log(num);

// デクリメント
num--;
console.log(num);

// 前置演算子のインクリメント
++num;
console.log(num);

// 前置演算子のデクリメント
--num;
console.log(num);

// 後置演算子のインクリメント
let num1 = 10;
let num2 = 10;
let ans1 = ++num1;
let ans2 = num2++;
console.log(ans1);
console.log(ans2);

