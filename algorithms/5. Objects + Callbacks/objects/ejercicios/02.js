function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   return objeto;
}

console.log(actualizarValorPropiedad({dia:"lunes",mes:"enero",año:"2000"},"dia", "martes"))

module.exports = actualizarValorPropiedad;
