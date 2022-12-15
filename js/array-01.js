/*
// REDUCE
let numeros = [2, 5, 8, 10, 12];
let reducir = numeros.reduce(function (valorAnterior, valorACtual) {
  return valorAnterior + valorACtual;
});
console.log(reducir);


// Método map()
let numeroPorDos = numeros.map(function (numero) {
  return numero * 2;
});
console.log(numeroPorDos);
// Método filter()
let filtrar = numeros.filter(function (numero) {
  return numero > 6;
});
console.log(filtrar);

// ELIMINAR ELEMENTOS DE ARRAY
let peso = [65, 32, 15, 90, 100];
peso.sort((a, b) => a - b);
console.log(peso);
console.log(Array.isArray(peso));

// UN ARRAY ES ARRAY
let numero = 13,
  cadena = "Texto de ejemplo";
console.log(Array.isArray(numero));
console.log(Array.isArray(cadena));

// UNIR ARREGLOS
let fruta = ["mazana", "uva", "sandia"];
let verdura = ["zanahoria", "papa"];
let ropa = ["pantalon", "camisa", "gorra"];
let nuevoArreglo = fruta.concat(verdura, ropa);
console.log(nuevoArreglo);
nuevoArreglo.sort();
console.log(nuevoArreglo);

let edades = [23, 17, 18, 33, 24, 24];
// ELIMINAR ELEMENTOS DE ARRAY
//edades.splice(2, 3);
//console.log(edades);
//console.log([...new Set(edades)]);
// edades.shift();
// console.log(edades);
// edades.pop();
// console.log(edades);

// BUSCAR ELEMENTO DENTRO DEL ARRAY
// -> Método findIndex()
let encontrarFindIndex = edades.findIndex(function (edad) {
  return edad > 18;
});
console.log(encontrarFindIndex);

// -> Método find()
let encontrarFind = edades.find(function (edad) {
  return edad > 18;
});
console.log(encontrarFind);

// -> Método indexOf()
let indiceDe = edades.indexOf(24);
console.log(indiceDe);

let supermercado = ["uvas", "queso", "pan"];
//AGREGAR ELEMENTOS AL ARRAY
// -> uso de corchetes
supermercado[3] = "pera";
console.log(supermercado);

// -> Método push()
supermercado.push("jabón", 12, true);
console.log(supermercado);

// -> Método unshift()
supermercado.unshift("pasta", "desodorante");
console.log(supermercado);

// -> Método splice()
supermercado.splice(7, 0, "mermelada", "azúcar");
console.log(supermercado);

// -> Método concat()
let nuevaLista = supermercado.concat("carne");
console.log(nuevaLista);

// CAMBIAR ELEMENTO
supermercado[0] = "manzanas";
console.log(supermercado);
supermercado[5] = "lapicero";
console.log(supermercado);

// ACCEDER A ELEMENTO
// -> Usando método slice()
let accederMetodo = supermercado.slice(1);
console.log(accederMetodo);

// ->Usando su indice
let accederIndice = supermercado[0];
console.log(accederIndice);

// PROPIEDAD LENGTH
console.log(supermercado.length);
console.log(supermercado);
*/
