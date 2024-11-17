function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
   let nombre = "Jorge";
   cb(nombre);
}

function saludar(nombre) {
   console.log("Hola " + nombre);
}

invocarCallback(saludar)

module.exports = invocarCallback;
