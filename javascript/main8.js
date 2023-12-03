// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
"use strict";

const colors = ["Red", "Green", "Blue"];
// console.log(colors.length);
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

const user = {name:'山田花子', gender:'女性', birth:'1990/01/01'};
// 個々の要素の取り出し方
console.log('手法1:'+user.name);
console.log('手法2:'+user['name']);

const user2 = {name:'Olivia', gender:'women', birth:'1990/01/01'};
console.log(user2.name);
console.log(user2.gender);
console.log(user2.birth);
// console.log(user2.hoge);