// -> Ratón
const $boton = document.getElementById("btn-evento");
$boton.addEventListener(
  "click",
  (_) => ($boton.textContent = "Me han dado un click")
);

// -> Teclado
const $campoTexto = document.querySelector('[type="text"]');
$campoTexto.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// -> Formulario
const $formulario = document.getElementById("formulario");
$formulario.addEventListener("submit", () => {
  alert("Formulario enviado");
});

const $inputNombre = $formulario.nombreUsuario;
const $inputEmail = $formulario.correoUsuario;

$inputNombre.addEventListener("focus", () =>
  console.log("El usuario esta en el campo nombre")
);
$inputEmail.addEventListener("focus", () =>
  console.log("El usuario esta en el campo email")
);

const $inputCheckbox = $formulario.terminosCondiciones;
$inputCheckbox.addEventListener("change", (e) => {
  // if (e.target.checked) {
  //   console.log("El usuario acepta terminos y condiciones");
  // } else {
  //   console.log("El usuario NO acepta los terminos y condiciones");
  // }
  e.target.checked
    ? console.log("El usuario acepta terminos y condiciones")
    : console.log("El usuario NO acepta los terminos y condiciones");
  //alert("El usuario acepta terminos y condiciones");
});

// -> Eventos de navegador
window.addEventListener("scroll", () => {
  // console.log("El usuario esta o hizo un scroll");
  // console.log(`Desplazamiento en Y: ${scrollY}`);
  // console.log(`Desplazamiento en X: ${scrollX}`);
  // if (window.scrollY > 200) {
  //   document.body.style.background = "red";
  // } else {
  //   document.body.style.background = "blue";
  // }
});

window.addEventListener("resize", () => {
  console.log("El usuario a cambiado el tamaño de pantalla");
});

// -> Eventos del DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada");
});
