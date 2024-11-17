function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let item = array[0]
  let flag = 0
  array.forEach((element) => {
    if(item != element) {
      flag = 1
    }
  });

  if(flag === 0) {
    return true
  } else {
    return false
  }
}

console.log(todosIguales([1,2,3,4,5]))
console.log(todosIguales([2,2,2,2,2]))

module.exports = todosIguales;
