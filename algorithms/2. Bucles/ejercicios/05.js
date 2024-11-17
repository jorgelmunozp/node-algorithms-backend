function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if(valor === true){
    return "Soy verdadero"
  } else {
    return "Soy falso"
  }
}

console.log(esVerdadero(13))
console.log(esVerdadero(18))

module.exports = esVerdadero;
