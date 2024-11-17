function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let stringTemp = ""
  let stringInvertido = ""
  for (let index = 0; index < string.length; index++) {
    if(string[index] != " "){
      stringTemp = stringTemp + string[index];
    }
  }
  for (let index = string.length - 1; index >= 0; index--) {
    if(string[index] != " "){
      stringInvertido = stringInvertido + string[index];
    }
  }

  if(stringTemp === stringInvertido) {
    return true
  } else {
    return false
  }
}

console.log(esPalindromo("a la gorda drogala"))

module.exports = esPalindromo;