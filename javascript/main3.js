// strict(厳格)モードで実行する　より厳密にエラーチェックが行われる。
'use strict';

// console.log('Hello, I'm Ryota Sakuma.');
// シングルクォートを文字列として使いたい時は、シングルクォートの前に「\」を付ける。(エスケープ)
// この時の「\'」の部分を、「エスケープシーケンス」と呼ぶ。
console.log('Hello, I\'m Ryota Sakuma.');

// 「\」「タブ」「改行」
console.log('\\ \t AAA \n BBB');

// エスケープを使わずにシングルクォートを文字列として出力する場合は、ダブルクォーテーションで囲むのもアリ。
console.log("Hello, I'm Ryota Sakuma.");

// 逆も同様
console.log('"Ryota"-san');

// 文字列を表示するときに使うのは、どちらでも良い。
console.log('Hello');
console.log("Hello");

// 基本的にはシングルクォートを推奨、文字列の中にシングルクォートがある場合はエスケープシーケンスを使用、というのをGoogleが推奨しているらしい。
// https://google.github.io/styleguide/jsguide.html#features-strings-use-single-quotes