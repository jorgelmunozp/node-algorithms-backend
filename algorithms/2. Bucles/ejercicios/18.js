function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1
  for (let index = a; index <= b; index++) {
    producto = producto * index;
  }
  if(producto != -0) {
    return producto
  } else {
    return 0
  }
}

console.log(productoEntreNúmeros(2,6))
console.log(productoEntreNúmeros(-5,5))

module.exports = productoEntreNúmeros;