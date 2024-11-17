function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof(valor);
}

const tipoDato = esTipoDato(3)
console.log(tipoDato) 

module.exports = esTipoDato;