function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0
  arrayOfNums.forEach((element) => suma = suma + element)
  return suma
}

console.log(agregarNumeros([1,2,3,4,5,6,7,8,9]))

module.exports = agregarNumeros;
