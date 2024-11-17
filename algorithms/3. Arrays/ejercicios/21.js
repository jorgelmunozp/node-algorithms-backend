function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let cantMeses = 0
  let arrayFinal = []
  array.forEach(element => {
    // console.log(element)
    if(element === "Enero" || element === "Marzo" || element === "Noviembre"){
      arrayFinal[cantMeses] = element
      cantMeses++
    }
  });
  if(cantMeses === 3){
    return arrayFinal
  } else {
    return "No se encontraron los meses pedidos"
  }
}

console.log(mesesDelAño(["Diciembre","Febrero","Noviembre","Julio","Enero","Agosto","Septiembre","Marzo","Junio","Octubre","Abril","Mayo"]))
console.log(mesesDelAño(["Diciembre","Febrero","Noviembre","Julio","Agosto","Septiembre","Marzo","Junio","Octubre","Abril","Mayo"]))
console.log(mesesDelAño(["Diciembre","Febrero","Noviembre","Julio","Enero","Agosto","Septiembre","Junio","Octubre","Abril","Mayo"]))
console.log(mesesDelAño(["Diciembre","Febrero","Julio","Enero","Agosto","Septiembre","Marzo","Junio","Octubre","Abril","Mayo"]))

module.exports = mesesDelAño;
