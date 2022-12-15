let pi = 3.51;
console.log(pi.toFixed(1));
/*
5< subir
5> bajar
*/
console.log(parseInt(pi));
pi = 2;
console.log(parseFloat(pi));

// OBJETO MATH
//PI
let valorPI = Math.PI;
console.log(valorPI.toFixed(4));

// Round()
let numero1 = 10.4;
numero2 = 10.5;
console.log(Math.round(numero1)); // 10
console.log(Math.round(numero2)); // 11

// ceil()
let numero3 = 10.5;
console.log(Math.ceil(numero3)); // 11
// floor()
console.log(Math.floor(numero3)); // 10

// sqrt()
let raizCuadrada = 81;
console.log(Math.sqrt(raizCuadrada));

// abs()
let numeroAbsoluto = -9;
console.log(Math.abs(numeroAbsoluto)); // 9

//pow()
let potencia = 5;
console.log(Math.pow(potencia, 3)); // 25 -> 5x5 = 25 x 5 = 125

// min()
let minimo = [10, 9, 5, 6, 4, 2];
console.log(Math.min(...minimo));
console.log(Math.max(...minimo));

// random()
let aleatorio = Math.random();
console.log(aleatorio.toFixed(2) * 100);

// CONVERTIR NÚMERO A STRING --> length (no. caracteres)
let numeroTelefono = 4456790234;
let numeroAString = String(numeroTelefono);
let numeroAStringMetodo = numeroTelefono.toString();
console.log(numeroAString.length);
console.log(numeroAStringMetodo.length);
console.log(numeroTelefono.length);
