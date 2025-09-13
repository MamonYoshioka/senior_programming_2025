/** 
 * 変数の例
*/
let score = 0;

score = 10;

console.log(`得点: ${score}`);

/**
 * 定数の例
*/

const tax = 1.10; // 消費税率
let applePrice = 300;
const calPrice = (applePrice * tax) + applePrice;

console.log(`${calPrice}円`);

// // これを後から変更しようとするとエラーになります
// tax = 0; // ← これはできません