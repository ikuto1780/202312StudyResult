// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

const n = 1;
switch (n) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log("other");
    // defaultのbreakは省略することもできるらしい
    break;
}
