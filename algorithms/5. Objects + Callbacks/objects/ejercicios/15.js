function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if(objeto[propiedad]){
    return true
  } else {
    return false
  }
}

console.log(tienePropiedad({nombre:"Jorge",email:"jorge@gmail.com"},"nombre"))
console.log(tienePropiedad({nombre:"Jorge",email:"jorge@gmail.com"},"email"))
console.log(tienePropiedad({nombre:"Jorge",email:"jorge@gmail.com"},"cel"))

module.exports = tienePropiedad;
