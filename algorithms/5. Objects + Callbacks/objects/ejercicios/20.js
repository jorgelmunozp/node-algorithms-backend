function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let likes = 0
  for (let index = 0; index < objetoUsuario.posts.length; index++) {
    likes = likes + objetoUsuario.posts[index].likes;
    
  }
  return likes
}

console.log(sumarLikesDeUsuario({posts:[{likes:10},{likes:20},{likes:30}]}))


module.exports = sumarLikesDeUsuario;
