function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let x = 2
  let res = 0
  if(numero != 2) {
    do {
      res = numero%x
      x++
    }
    while(res!=0 && x<numero)
  
    if(res != 0){
      return true
    } else {
      return false
    }
  } else {
    return true
  }

}

// console.log(esNumeroPrimo(9))
// console.log(esNumeroPrimo(10))
// console.log(esNumeroPrimo(13))
console.log(esNumeroPrimo(2))

module.exports = esNumeroPrimo;
