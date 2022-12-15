// Escribir los números del 1 al 100
let numero = 1;
// for (; numero <= 100; numero++) {
//   console.log(numero);
// }
//---- CICLO WHILE
// while (numero <= 100) {
//   console.log(numero);
//   numero++; // numero + 1
// }

// Escribir los números del 1 al 30,
// --> sí el número es par, imprimir el número mas un guion y la palabra par.
// --> Sí el número es igual a 15, salir del ciclo.
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} - Par`);
//     continue;
//   }
//   if (i == 15) break;
//   console.log(i);
// }

// - Ciclo While
// let inicio = 1;
// while (inicio <= 30) {
//   if (inicio % 2 == 0) {
//     console.log(`${inicio} - Par`);
//     inicio++;
//     continue; // 3
//   }
//   if (inicio == 15) break;
//   console.log(inicio);
//   inicio++;
//}

let devs = ["David", "Carlos", "Alberto", "José"];

for (let i = 0; i < devs.length; i++) {
  // -> Indice
  //console.log(i);

  // -> Elemento de array
  //console.log(devs[i]);

  //-> Indice + elemento array
  console.log(`${i} : ${devs[i]}`);
}
// ------- For of ---------
//-> Indice
// for (let elemento of devs.keys()) {
//   console.log(elemento);
// }

// -> Elementos del array
// for (let elemento of devs.values()) {
//   console.log(elemento);
// }

// -> Indice & Elemento de array
for (let elemento of devs.entries()) {
  console.log(elemento.join(" : "));
}
