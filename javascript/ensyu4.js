// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// 1個100円のリンゴを13個買った
// リンゴの単価と値段を関数の引数に渡すと、合計金額を計算して返す関数を作成

function price(unitPrice, n) {
  return (unitPrice * n);
}
console.log(price(100, 13));