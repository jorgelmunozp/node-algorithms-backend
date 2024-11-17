function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let arrayFinal = []
   let index = 0
   arrayOfStrings.forEach(element => {
      if(element.split("")[0] === "a"){
         arrayFinal[index] = element
         index++
      }
   });

   return arrayFinal
}

console.log(filter(["amen","pez","anis","balon"]))


module.exports = filter;
