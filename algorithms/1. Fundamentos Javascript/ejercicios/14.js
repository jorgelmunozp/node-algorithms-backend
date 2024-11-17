function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
  if( num > 50 ) {
    return true
  } else {
    return false
  }
}

console.log(mayorQueCincuenta(51))
console.log(mayorQueCincuenta(15))

module.exports = mayorQueCincuenta;
