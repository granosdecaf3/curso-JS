// Propiedad length
var nombre = "Dinora ";
console.log(nombre.length);
console.log("David".length);

// MÉTODOS
// trim()
let especialidad = "   Desarrollo     web   ";
console.log(especialidad.trim());

// toUpperCase()
let mayusculas = "hola";
console.log(mayusculas.toUpperCase());

//toLowerCase()
let minusculas = "DINORA";
console.log(minusculas.toLowerCase());

// concat()
let cadena1 = "Bienviendo";
let cadena2 = "JavaScript";
console.log(cadena1.concat(" ", cadena2));

// indexOf()
let titulo = "Tecnologías web: HTML, CSS, JavaScript";
console.log(titulo.indexOf("z"));

// lastIndexOf()
console.log(titulo.lastIndexOf("a"));

// substring()
let mensaje = "Este es un mensaje";
console.log(mensaje.substring(11, 18));

// substr()
console.log(mensaje.substr(11, 7));

// slice()
console.log(mensaje.slice(-7));

//  split()
let dividir = "Este texto será dividio";
console.log(dividir.split("e", 2));

// replace()
let lenguajesWeb = "HTML, CSS, PHP";
console.log(lenguajesWeb.replace("PHP", "JavaScript"));

// includes()
console.log(lenguajesWeb.includes("css"));

// startWith
console.log(lenguajesWeb.startsWith("HTML"));

// endsWith()
console.log(lenguajesWeb.endsWith("PHP"));

// repeat()
let saludar = "hola";
console.log(saludar.repeat(2));

// CONCATENAR--------------
let nombre2 = "Dinora",
  apellido = "Peña",
  edad = 22;

// Hola, me llamo Dinora Peña y tengo 22 años.
//Signo más
let signoMas = console.log(
  "Hola, me llamo " + nombre2 + " " + apellido + " y tengo " + edad + " años"
);

// Template literals
let templateLiterals = console.log(
  `Hola, me llamo ${nombre2} ${apellido} y tengo ${edad} años.`
);

// concat()
let metodoConcat = "Hola, me llamo ";
console.log(
  metodoConcat.concat(nombre, " ", apellido, " y tengo ", edad, " años.")
);

// CONVERTIR DE STRING A NUMERO--------------
let edadUsuario = prompt("¿Cuál es tu edad?");
let funcionNumber = console.log(typeof Number(edadUsuario)),
  metodoParseIst = console.log(typeof parseInt(edadUsuario)),
  metodoParseFloat = console.log(typeof parseFloat(edadUsuario));
