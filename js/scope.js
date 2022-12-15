// var a = "Global var";
// let b = "Global let";
// const c = "Global const";
// console.log(`Global scope:
// a= ${a}
// b= ${b},
// c= ${c}`);

// function unafuncion() {
//   console.log(`Global scope:
// a= ${a}
// b= ${b}, G
// c= ${c}`);
// }
// var a = "Glabar var re-declarada y re-asignada";
// unafuncion();
// if (true) {
//   console.log(`Global scope:
// a= ${a}
// b= ${b},
// c= ${c}`);
// }

// var a = "Global var";
// let b = "Global let";
// const c = "Global const";

// console.log(`Global scope:
// a= ${a}
// b= ${b},
// c= ${c}`);

// function unafuncion() {
//   let fruta = "Kiwi";
//   let b;
//   a = "Function scope var";
//   b = "Function scope let";
//   //console.log(fruta);
//   console.log(`Global scope:
// a= ${a}
// b= ${b}`);
// }
// unafuncion();
// console.log(`Global scope:
// a= ${a}
// b= ${b}`);

// var a = "Global var";
// let b = "Global let";
// const c = "Global const";
// console.log(a, b);

// if (true) {
//   a = "Block scope var";
//   b = "Block scope let";
//   let nombre = "Daniela";
//   console.log(nombre);
// }
// console.log(a, b);

import scopeModulo from "./scope2.js";
var a = "Global var";
let b = "Global let";
const c = "Global const";

console.log(scopeModulo);
