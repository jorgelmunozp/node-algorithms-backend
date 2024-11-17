function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let frase = palabras[0]
  for (let index = 1; index < palabras.length; index++) {
    frase = frase + " " + palabras[index];
  }
  return frase
}

console.log(dePalabrasAFrase(["hola","cómo","estás","hoy","?"]))

module.exports = dePalabrasAFrase;
