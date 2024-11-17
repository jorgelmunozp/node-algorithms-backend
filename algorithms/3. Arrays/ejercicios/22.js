function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let array = []
  let i = 0
  for (let index = 0; index <= 60; index++) {
    if(index%6 === 0){
      array[i] = index;
      i++
    }
  }

  return array
}

console.log(tablaDelSeis())

module.exports = tablaDelSeis;
