function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  array.forEach((element, index) => array[index] = element * index)
  return array
}

console.log(multiplicarElementosPorIndice([1,2,3,4,5,6,7,8,9]))

module.exports = multiplicarElementosPorIndice;
