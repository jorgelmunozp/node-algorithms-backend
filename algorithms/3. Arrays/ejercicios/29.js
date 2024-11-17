function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  let numFaltante = undefined;
  let numFlag = 0;
  if(numeros.length === 0) {
    return null
  } else {
    numFaltante = numeros[0];
    for (let index = 1; index < numeros.length; index++) {
      if(numeros[index] === numFaltante + 1 ){
        numFaltante = numeros[index]
        continue
      } else {
        numFlag = 1
        return numFaltante + 1
      }
    }
    if(numFlag === 0){ return null }
  }
}

console.log(encontrarNumeroFaltante([1,2,3,4,6,7,8]))
console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

module.exports = encontrarNumeroFaltante;