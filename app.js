// javascriptをstrictモードで利用する記述
'use strict';

// 1からコマンドラインの引数で与えられた数までを合計するプログラム

// process.argvはNode.jsがデフォルトで提供してくれるコマンドラインの引数が入った配列
// process.argv[2]が0やnullやundifinedなどの値であれば、0が代入される
// 条件付き論理和の||は、左の値がFalsyであれば右の値を結果として使う
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++){
  sum = sum + i;
}

console.log(sum);