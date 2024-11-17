function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  array.forEach(element => {
    cb(element)
  });
}

function duplicar(num) {
 console.log(num*2);
}

forEach([2,3,4,5],duplicar)

module.exports = forEach;
