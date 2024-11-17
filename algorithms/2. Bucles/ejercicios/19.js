function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0
  for (let index = 0; index <= n; index++) {
    suma = suma + index;
  }
  return suma
}

console.log(sumarHastaN(5))

module.exports = sumarHastaN;
