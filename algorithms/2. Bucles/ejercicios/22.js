function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let x = 0
  do {
    num = num + 5
    x = x+1
  } while(x<8)
    return num
}

console.log(doWhile(10))

module.exports = doWhile;