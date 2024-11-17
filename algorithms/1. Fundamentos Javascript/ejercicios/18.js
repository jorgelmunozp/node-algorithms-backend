function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if( vocales.includes(letra) ) {
    return "Es vocal"
  } else {
    return "Dato incorrecto"
  }
}

const vocales = ["a","e","i","o","u"]

console.log(esVocal("a")) 
console.log(esVocal("b")) 

module.exports = esVocal;
