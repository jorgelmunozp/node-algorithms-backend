function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let string = ""
  let word1 = "",word2 = "",word3 = ""
  let stringLength = 0
  if(str1.length>=str2.length && str1.length>=str3.length){ stringLength=str1.length }
  if(str2.length>=str1.length && str2.length>=str3.length){ stringLength=str2.length }
  if(str3.length>=str1.length && str3.length>=str2.length){ stringLength=str3.length }
  for (let index = 0; index < stringLength; index++) {
    if(str1[index]!=undefined){word1=str1[index]} else {word1=""}
    if(str2[index]!=undefined){word2=str2[index]} else {word2=""}
    if(str3[index]!=undefined){word3=str3[index]} else {word3=""}
    string = string + word1 + word2 + word3;
  }
  return string
}

// console.log(combine("hola","1234","ABC"))
// console.log(combine("abc","12345","67"))
console.log(combine('abc', '', '123'))
console.log(combine('abc', '12345', ''))
console.log(combine('a', '12', 'xyz'))
console.log(combine('a', 'b', 'c'))
console.log(combine('abc', '', ''))
console.log(combine('', '123', ''))
console.log(combine('', '', 'xyz'))

module.exports = combine;