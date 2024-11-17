function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let arrayFinal = []
  array.forEach((element,index) => {
    arrayFinal[index] = cb(element)
  });
  return arrayFinal;
}

function duplicar(num) {
  return num*2;
}

console.log(map([2,3,4,5],duplicar))

module.exports = map;
