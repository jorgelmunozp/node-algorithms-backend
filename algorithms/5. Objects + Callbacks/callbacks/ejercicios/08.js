const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  if(array.find(callback)){
    return array.find(callback)
  } else {
    return "No se encontró el elemento"
  }
};

for (let index = 0; index < array.length; index++) {
  console.log(typeof(a))
}

const buscar = element => element === 3
const buscar2 = element => element === 6

console.log(buscarElemento([2,3,4,5],buscar))
console.log(buscarElemento([2,3,4,5],buscar2))

module.exports = buscarElemento;
