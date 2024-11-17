function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let pares = 0
  for (let index = 0; index < numeros.length; index++) {
    if(numeros[index]%2 != 0 ){ continue }
    pares++
  }
  return pares
}

console.log(contarParesConContinue([1,3,6,8,7,4,2]))

module.exports = contarParesConContinue;
