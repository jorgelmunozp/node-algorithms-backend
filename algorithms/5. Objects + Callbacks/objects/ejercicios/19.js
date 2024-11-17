function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for (let index = 0; index < objetoMuchosUsuarios.length; index++) {
    objetoMuchosUsuarios[index].esPremium = true;
    
  }
  return objetoMuchosUsuarios
}

console.log(pasarUsuarioAPremium([{usuario:"",esPremium:""},{usuario:"",esPremium:""},{usuario:"",esPremium:""}]))


module.exports = pasarUsuarioAPremium;
