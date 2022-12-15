// <h1 class="titulo"> Hola, <strong> mundo </strong></h1>
const elementoH1 = document.createElement("H1");
elementoH1.setAttribute("class", "titulo");
elementoH1.innerHTML = "Hola, <strong> mundo </strong>";
console.log(elementoH1);

const $contenedor = document.getElementById("contenedor");
// -> Prepend
//$contenedor.prepend(elementoH1);

// -> Append
// $contenedor.append(elementoH1);

// -> appendChild()
// $contenedor.appendChild(elementoH1);

// -> inserBefore()

// const $p1 = document.getElementById("p1");
// $contenedor.insertBefore(elementoH1, $p1);
// const $p2 = document.getElementById("p2");
// $contenedor.insertBefore(elementoH1, $p2);
// const $p3 = document.getElementById("p3");
// $contenedor.insertBefore(elementoH1, $p3);

// Hermano
$contenedor.before(elementoH1);
