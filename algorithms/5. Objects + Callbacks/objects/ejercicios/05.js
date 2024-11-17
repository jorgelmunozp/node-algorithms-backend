const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  return Object.keys(objeto)
};

console.log(listarPropiedades({dia:"lunes",mes:"enero",año:"2000"}))

module.exports = listarPropiedades;
