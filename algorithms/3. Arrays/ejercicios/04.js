function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento)
  return array
}

console.log(agregarItemAlFinalDelArray([1,2,3], 4))

module.exports = agregarItemAlFinalDelArray;
