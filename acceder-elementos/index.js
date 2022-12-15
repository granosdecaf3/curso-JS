// -> Nombre de etiqueta.
// let anclas = Array.from(document.getElementsByTagName("a"));
// console.log(anclas);
// console.log(Array.isArray(anclas));

// for (ancla in anclas) {
//   console.log(anclas[ancla]);
// }

// -> Nombre de clase
// let anclasClase = document.getElementsByClassName("nav__link");
// console.log(anclasClase);

// -> Nombre del ID
// let $anclaInicio = document.getElementById("inicio");
// console.log(anclaInicio);
// console.log(portafolio);
// console.log(contacto);

// -> Nombre de selector
let anclaInicio = document.querySelector(".nav__link");
console.log(anclaInicio);

let anclas = document.querySelectorAll(".nav__link:nth-child(odd)");
console.log(anclas);

let etiquetaNav = document.querySelector("nav");
console.log(etiquetaNav);

let anclaPortafolio = etiquetaNav.querySelector("#portafolio");
console.log(anclaPortafolio);
