function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   switch(sortBy) {
      case "a":
         return list.sort(function(a, b){return b.a - a.a})
      case "b":
        return list.sort(function(a, b){return b.b - a.b})
      default:
         return list
    }
};

console.log(sort("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }]))
console.log(sort("b", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }]))
console.log(sort("c", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }]))

module.exports = sort;
