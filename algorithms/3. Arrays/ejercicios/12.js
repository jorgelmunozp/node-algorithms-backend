function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  array.forEach((element, index) => array[index] = element.toUpperCase())
  return array
}

console.log(convertirStringAMayusculas(["abc","abcd","abcdef","abc","abcdefg"]))

module.exports = convertirStringAMayusculas;
