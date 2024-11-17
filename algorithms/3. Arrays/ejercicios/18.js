function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let promedio = 0
  resultadosTest.forEach((element) => promedio = promedio + element)
  return promedio/resultadosTest.length
}

console.log(promedioResultadosTest([1,2,3,4,5,6,7,8,9]))

module.exports = promedioResultadosTest;
