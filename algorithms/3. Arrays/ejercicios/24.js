function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let array = []
  for (let index = 0; index < 10; index++) {
    if (index < 5) {
      num = num + 2;
      array[index] = num;
    } else if (index === 5) {
      // array[index] = num;
      continue
    } else if (index > 5) {
      num = num + 2;
      array[index-1] = num;
    }
  }
  return array

}

console.log(continueStatement(2))
console.log(continueStatement(50))
console.log(continueStatement(-4))

module.exports = continueStatement;
