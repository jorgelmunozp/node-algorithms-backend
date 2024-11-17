function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   let suma = 0
   arrayOfNumbers.forEach(element => {
      suma = suma + element
   });
   cb(suma);
}

function sumar(suma) {
  console.log("Suma total: ", suma);
}

sumarArray([2,3,4,5],sumar)

module.exports = sumarArray;
