function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  let usuario = {
    nombre: nombre,
    email: email,
    password: password
  }
  return usuario
}

console.log(nuevoUsuario("Jorge","jorge@gmail.com","12345678"))

module.exports = nuevoUsuario;
