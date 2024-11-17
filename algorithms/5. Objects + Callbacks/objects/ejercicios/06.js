const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  return Object.keys(objeto).length
};

console.log(contarPropiedades({dia:"lunes",mes:"enero",año:"2000"}))

module.exports = contarPropiedades;
