function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:  
   return objeto.hasOwnProperty(propiedad)
};

console.log(verificarPropiedad({dia:"lunes",mes:"enero",año:"2000"},"dia"))


module.exports = verificarPropiedad;
