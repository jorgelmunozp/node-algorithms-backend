function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  array.forEach((element, index) => array[index] = element * 2)
  return array
}

console.log(duplicarElementos([1,2,3,4]))

module.exports = duplicarElementos;
