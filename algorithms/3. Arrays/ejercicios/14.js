function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter(item => item > 10).length
}

console.log(contarElementosMayoresA10([1,20,3,40,5,60,7,80,9,10]))

module.exports = contarElementosMayoresA10;
