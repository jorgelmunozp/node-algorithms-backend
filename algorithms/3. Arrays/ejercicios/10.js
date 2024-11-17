function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código: 
  return array.find(item => item.length >= 5)
}

console.log(obtenerPrimerStringLargo(["abc","abcd","abcdef","abc","abcdefg"]))
console.log(obtenerPrimerStringLargo(['hello', 'world', 'this', 'is', 'a', 'test']))

module.exports = obtenerPrimerStringLargo;
