function cambiarCadena(string, callback) {
   // Aplica la función de callback al  y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   console.log("cb: ", callback)
   if(callback != undefined){
      return callback(string);
   } else {
      return string;
   }
}

function saludar(nombre) {
   console.log("Hola " + nombre);
}

cambiarCadena("Jorge",saludar)
cambiarCadena("Jorge",)

module.exports = cambiarCadena;
