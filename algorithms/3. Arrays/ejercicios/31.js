function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let textoInvertido = ""
  for (let index = texto.length - 1; index >= 0; index--) {
    textoInvertido = textoInvertido + texto[index];
  }
  return textoInvertido
}

console.log(invertirTexto("hola"))

module.exports = invertirTexto;
