const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor
  return objeto;
}

console.log(agregarNuevaPropiedad({dia:"lunes",mes:"enero",año:"2000"},"hora", "8:00am"))


module.exports = agregarNuevaPropiedad;
