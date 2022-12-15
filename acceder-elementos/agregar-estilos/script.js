//const $titulo = document.getElementById("titulo");
// console.log($titulo);

// -> bg
// $titulo.style.backgroundColor = "yellow";
// border left
// $titulo.style.borderLeft = "4px solid brown";
// Padding left
// $titulo.style.paddingLeft = "1rem";

const $titulo = document.getElementById("titulo");

// añadir
$titulo.classList.add("mt-5");
// remove()
$titulo.classList.remove("bg-dark");
// alternar el color de texto
//$titulo.classList.toggle("text-warning"); // quite
//$titulo.classList.toggle("text-warning"); // poner

$titulo.addEventListener("click", () => {
  $titulo.classList.toggle("text-warning");
});
// ¿clase existe o no?
console.log($titulo.classList.contains("bg-dark"));
console.log($titulo.classList.contains("shadow"));
