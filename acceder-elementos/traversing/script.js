const $hijoDaniel = document.getElementById("hijoDaniel");
// -> Hermano anterior
// console.log($hijoDaniel.previousElementSibling.getAttribute("id"));
// -> Hermano siguiente
// console.log($hijoDaniel.nextElementSibling.getAttribute("id"));
// -> Padres
// console.log($hijoDaniel.parentElement.getAttribute("id"));
// -> Abuelos
// console.log($hijoDaniel.parentElement.parentElement.getAttribute("id"));

const $papa = document.getElementById("padres");

// -> Hijos
console.log($papa.children);
// -> Primer hijo
console.log($papa.firstElementChild);
// -> Cuántos hijos tiene el emento
console.log($papa.childElementCount);
// -> Ultimo
console.log($papa.lastElementChild);
