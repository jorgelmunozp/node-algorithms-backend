function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let index = 0
  let item = array[0]
  array.forEach(element => {
    if(element > item){
      item = element
      index = array.indexOf(element)
    }
  });
  return index
}

console.log("Indice mayor: ", encontrarIndiceMayor([1,20,3,40,5,60,7,80,9,10]))
console.log("Indice mayor: ", encontrarIndiceMayor([5, 4, 3, 2, 1]))

module.exports = encontrarIndiceMayor;
