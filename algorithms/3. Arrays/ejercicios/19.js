function multiplicarArgumentos(args) {
  // Usa la palabra clave `args` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "args" es un arreglo.
  // Tu código:
  if(args === undefined) {
    return 0
  } else if(args.length === 1) {
    return args[0]
  } else if(args.length > 1) {
    let product = 1
    args.forEach(element => {
      product = product * element
    });
    return product
  }
}

console.log(multiplicarArgumentos([1,2,3,4,5]))
console.log(multiplicarArgumentos([5, 5]))
console.log(multiplicarArgumentos())
console.log(multiplicarArgumentos([3, 3, 3, 3]))
console.log(multiplicarArgumentos([1]))
console.log(multiplicarArgumentos([10, 0, 10]))

module.exports = multiplicarArgumentos;
