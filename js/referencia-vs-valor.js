let persona = {
  nombre: "Edwin",
  edad: 25,
};
let persona2 = persona;
console.log(persona2); // { nombre: 'Edwin', edad: 25 }
persona2.pais = "MX";
console.log(persona2); // { nombre: 'Edwin', edad: 25, pais: 'MX' }
console.log(persona); // { nombre: 'Edwin', edad: 25, pais: 'MX' }
persona.nombre = "Paola";
console.log(persona, persona2); //
