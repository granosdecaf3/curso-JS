/**
 * Sí el día de hoy es lunes:
 * -> imprimir en consola "Feliz inicio de semana"
 * Sí el día es míercoles
 * -> imprimir en consola "Feliz mitad de semana"
 * Sí el día es viernes
 * -> imprimir en consola "Feliz fin de semana"
 * Sí es otro día
 * -> imprimir "Buen día"
 */
// [domingo = 0, lunes, martes, míercoles, jueves, viernes, sábado]

let diaHoy = new Date();
console.log(diaHoy.getDay());
switch (diaHoy.getDay()) {
  case 1:
    console.log("Feliz inicio de semana");
    break;
  case 3:
    console.log("Feliz mitad de semana");
    break;
  case 5:
    console.log("Feliz fin de semana");
    break;
  default:
    console.log("Buen día");
    break;
}
if (diaHoy.getDay() == 1) {
  console.log("Feliz inicio de semana");
} else if (diaHoy.getDay() == 3) {
  console.log("Feliz mitad de semana");
} else if (diaHoy.getDay() == 5) {
  console.log("Feliz fin de semana");
} else {
  console.log("Buen día");
}
