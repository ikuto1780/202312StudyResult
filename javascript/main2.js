// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
'use strict';

// 変数宣言
// 2単語以降は大文字にする。(ローワーキャメルケース)
let color;
let colorName;
let myColorName;

let favoriteFood = 20;

// ルールとしてはオッケーだが、暗黙的には特殊な意味を持つと解釈されるので、明確に意味がない限りは使わないようにするのが無難
let _color;
let $name;

// 変数名に数字を付けるのは「マジックナンバー」となり、その人にしか意味が通じなくなってしまうので、なるべく避けるべき。
let name1;
let _name1;

// 大文字と小文字は別物で解釈される
let foo = 'small';
let Foo = 'Big';
console.log(foo);
console.log(Foo);

// 予約語は使用できない。予約語の一覧は下記参照
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Lexical_grammar#%E3%82%AD%E3%83%BC%E3%83%AF%E3%83%BC%E3%83%89