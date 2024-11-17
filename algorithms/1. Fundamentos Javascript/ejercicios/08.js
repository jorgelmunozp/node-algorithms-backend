function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if( typeof(numero) === "number" && numero % 1 === 0 ) {
    return true
  } else {
    return false
  }
}

console.log(esNumeroEntero(0))
console.log(esNumeroEntero(1))
console.log(esNumeroEntero(-1))
console.log(esNumeroEntero(42))
console.log(esNumeroEntero(121.212))
console.log(esNumeroEntero("42"))


module.exports = esNumeroEntero;