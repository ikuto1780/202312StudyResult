// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

// for文
for (let i = 1;i <= 3; i++) {
  console.log(i);
}

// while文
let i = 1;
console.log('While文');

while(i <= 3) {
  console.log(i);
  i++;
}

let j = 1;
console.log('do while文');
do {
  console.log(j);
  j++;
} while(j <= 3);