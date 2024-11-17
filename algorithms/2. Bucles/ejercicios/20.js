function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let suma = 0
   for (let index = 0; index <= n; index++) {
     suma = suma + index;
     if(suma>100){ break }
   }
   return suma
 }
 
 console.log(sumarHastaNConBreak(50))

module.exports = sumarHastaNConBreak;
