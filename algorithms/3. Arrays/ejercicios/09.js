function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if(array.length === 1){
    return array.at(0)
   } else {
    return array.at(Math.floor(Math.random() * array.length))
   }
 }
 
//  console.log(obtenerElementoAleatorio([1,2,3,4,5,6,7,8,9]))
 console.log(obtenerElementoAleatorio([1,2,3,4,5]))
 console.log(obtenerElementoAleatorio([1]))

module.exports = obtenerElementoAleatorio;
