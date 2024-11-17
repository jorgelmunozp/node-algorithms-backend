function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let index = 0; index < numeros.length; index++) {
    let numRepetido = numeros[index];
    let numerosFilter = numeros.filter(numero => numero === numRepetido)
    if(numerosFilter.length > 1){
      return numerosFilter[0]
    }
  }
}

console.log(encontrarElementoRepetido([1,4,3,5,5,7,10]))
console.log(encontrarElementoRepetido([1,2,3,4,5,1]))

module.exports = encontrarElementoRepetido;