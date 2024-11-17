/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

let objeto_deObjetoAarray = {D: 1, B: 2, C: 3}
deObjetoAarray(objeto_deObjetoAarray)
function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let keys = Object.keys(objeto)
  let values = Object.values(objeto)
  let arrayFinal = []
  keys.forEach((element,index) => {
    arrayFinal[index] = [keys[index],values[index]]
  });
  console.log(arrayFinal)
  return arrayFinal
}

// let string_numberOfCharacters = "sktpwrroqstkrpwwsqtqopwktsd"
let string_numberOfCharacters = "adsjfdsfsfjsdjfhacabcsbajda"
numberOfCharacters(string_numberOfCharacters)
function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let objeto = {}
  string.split("").forEach((element)=>{
    objeto[element] = 0
  })
  string.split("").forEach((element)=>{
    objeto[element]++
  })
  console.log(objeto)
  return objeto
}

let string_capToFront = "soyHENRY"
capToFront(string_capToFront)
function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let stringFinal = ""
  string.split("").forEach((element,index)=>{
    if(element === element.toUpperCase()){
      stringFinal = stringFinal + element
    }
  })
  string.split("").forEach((element,index)=>{
    if(element === element.toLowerCase()){
      stringFinal = stringFinal + element
    }
  })
  console.log(stringFinal)
  return stringFinal
}

let string_asAmirror = "The Henry Challenge is close!"
asAmirror(string_asAmirror)
function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let palabras = []
  let palabrasInv = []
  frase.split(" ").forEach((palabra,index)=>{
    let palabraInv = []
    palabras[index] = palabra.split("")
    let j = palabras[index].length - 1
    for (let i = 0; i < palabras[index].length; i++) {
      palabraInv[j] = palabras[index][i];
      j--
      palabrasInv[index] = palabraInv.join("")      
    }

  })
  console.log(palabrasInv.join(" "))
  return palabrasInv.join(" ")
}

let numero_capicua = 12321
capicua(numero_capicua)
function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let i = 0
  let j = numero.toString().length - 1
  let capicua = 0
  for (let index = 0; index < numero.toString().length; index++) {
    if(numero.toString()[i] === numero.toString()[j]) {
      capicua = 1
    } else {
      capicua = 0
      break
    }
    i++
    j--
  }

  if(capicua === 1){
    console.log("Es capicua")
    return "Es capicua"
  } else {
    console.log("No es capicua")
    return "No es capicua"
  }
}

let string_deleteAbc = "abcefgh"
deleteAbc(string_deleteAbc)
function deleteAbc(string) {
  let stringFinal = ""
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  for (let index = 0; index < string.length; index++) {
    if(string[index] === "a" || string[index] === "b" || string[index] === "c"){
      continue
    } else {
      stringFinal = stringFinal + string[index]
    }
  }
  console.log(stringFinal)
  return stringFinal
}

// let array_sortArray = ["You", "are", "beautiful", "looking"]
let array_sortArray = ['pera', 'manzana', 'alcaucil', 'papa']
sortArray(array_sortArray)
function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let arrayFinal = [arrayOfStrings[0]]
  for (let i = 1; i < arrayOfStrings.length; i++) {
    if(arrayOfStrings[i].length >= arrayFinal[i-1].length){
      arrayFinal[i] = arrayOfStrings[i]
    } else {
      for (let index = 0; index < arrayFinal.length; index++) {
        if(arrayFinal[index].length > arrayOfStrings[i].length){
          arrayFinal.splice(index,0,arrayOfStrings[i])
          break
        }
      }
    }
  }
  console.log(arrayFinal)
  return arrayFinal
}

let array1_buscoInterseccion = [4,2,3]
let array2_buscoInterseccion = [1,3,4]
buscoInterseccion(array1_buscoInterseccion,array2_buscoInterseccion)
function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arrayFinal = []
  let arrayIndex = 0
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]){
        arrayFinal[arrayIndex] = array1[i]
        arrayIndex++
      }
    }
  }
  console.log(arrayFinal)
  return arrayFinal
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
