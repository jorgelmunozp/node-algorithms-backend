function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if(objetoUsuario.email != undefined && objetoUsuario != null){
    objeto = true
  } else {
    objeto = false
  }
  return objeto
}

console.log(tieneEmail({nombre:"Jorge",email:undefined},"email"))
console.log(tieneEmail({nombre:"Jorge",email:"jorge@gmail.com"},"email"))

module.exports = tieneEmail;
