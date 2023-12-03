// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// // 関数定義の方法は4種類
// 1．function命令で定義
// 2．関数リテラルで定義
// 3．Functionコンストラクタで定義
// 4．アロー関数で定義
// 使い分けるというよりは、どの書き方に遭遇しても対応できる方が良い。

// 1．function命令で定義
function getRectangle(height, width) {
  return height * width;
}
console.log('手法1:' + getRectangle(3, 5));

// 2．関数リテラルで定義
// 引数は複数持てるし、無い場合もある。Returnが無い時もある。関数名を持たないので、「匿名関数」「無名関数」とも呼ばれる。
const getRectangle2 = function (height, width) {
  return height * width;
}
console.log('手法2:'+ getRectangle2(3, 5));

// 3．Functionコンストラクタで定義
// 実務ではあまり使わないかも
const getRectangle3 = new Function('height', 'width', 'return height * width');
console.log('手法3:' + getRectangle3(3, 5));

// 4．アロー関数で定義
// 関数リテラルの省略技法。ES2015から使えるようになった。
const getRectangle4 = (height, width) => {
  return height * width;
}
console.log('手法4:' + getRectangle4(3, 5));