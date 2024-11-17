function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if(a === b && a < 0 && b < 0){
    return true
  } else {
    return false
  }
}

console.log(esIgualYNegativo(1,1))
console.log(esIgualYNegativo(-1,-1))
console.log(esIgualYNegativo(-1,-2))

module.exports = esIgualYNegativo;
