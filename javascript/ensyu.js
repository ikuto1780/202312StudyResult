// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// 大人(12歳以上)　5000円
// 中人(6歳以上12歳未満)　2500円
// 小人(6歳未満)　1000円

// 変数宣言
const age = 20;

if(age >= 12) {
  console.log('5000円');
} else if(age >= 6) {
  console.log('2500円');
} else {
  console.log('1000円');
}