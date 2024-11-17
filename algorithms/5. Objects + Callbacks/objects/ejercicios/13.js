function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad]
  return objeto
}

console.log(eliminarPropiedad({nombre:"Jorge",email:"jorge@gmail.com"},"email"))

module.exports = eliminarPropiedad;
