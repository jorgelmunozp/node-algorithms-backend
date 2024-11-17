function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  // console.log(Array.isArray(arr))
  if(Array.isArray(arr) && arr.length >= 1) {
    return true
  } else {
    return false
  }
}

console.log(esArrayNoVacio(2))
console.log(esArrayNoVacio([2]))
console.log(esArrayNoVacio([]))

module.exports = esArrayNoVacio;