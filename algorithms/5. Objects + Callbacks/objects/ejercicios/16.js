function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // if(objetoUsuario["password"] === password){
  //   return true
  // } else {
  //   return false
  // }
  return objetoUsuario["password"] === password
}

console.log(verificarPassword({nombre:"Jorge",password:"123"},"123"))
console.log(verificarPassword({nombre:"Jorge",password:"345"},"123"))

module.exports = verificarPassword;
