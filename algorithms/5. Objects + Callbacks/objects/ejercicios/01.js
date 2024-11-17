const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   const a = objeto[propiedad];

   return a;
};

console.log(obtenerValorPropiedad({dia:"lunes",mes:"enero",año:"2000"},"dia"))

module.exports = obtenerValorPropiedad;
