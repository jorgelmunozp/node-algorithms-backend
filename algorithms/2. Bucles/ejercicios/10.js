function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if(num === 5 || num === 10){
    return true
  } else {
    return false
  }
}

console.log(esDiezOCinco(10))
console.log(esDiezOCinco(5))
console.log(esDiezOCinco(15))

module.exports = esDiezOCinco;
