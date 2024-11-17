function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x > y){
    return x
  } else if(x < y){
    return y
  } else {
    return x
  }
}

console.log(obtenerMayor(1,3))
console.log(obtenerMayor(2,1))
console.log(obtenerMayor(4,4))

module.exports = obtenerMayor;
