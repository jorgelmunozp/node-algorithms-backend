function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let array = []
  let breakFlag = 0
  for (let index = 0; index < 10; index++) {
    num = num + 2;
    array[index] = num;
    if (num === index) {
      breakFlag = 1;
      break
    }
  }
  if(breakFlag === 0) {
    return array
  } else {
    return "Se interrumpió la ejecución"
  }
}

console.log(breakStatement(2))
console.log(breakStatement(50))

module.exports = breakStatement;
