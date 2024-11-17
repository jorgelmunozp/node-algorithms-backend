function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario["password"] = nuevaPassword
  return objetoUsuario
}

console.log(actualizarPassword({nombre:"Jorge",password:"123"},"abc"))
console.log(actualizarPassword({nombre:"Jorge",password:"345"},"def"))

module.exports = actualizarPassword;
