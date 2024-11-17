function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   word1 = str1.toLowerCase().split("").sort().join("")
   word2 = str2.toLowerCase().split("").sort().join("")
   console.log(word1)
   console.log(word2)
   if(word1 === word2) {
      return true
   } else {
      return false
   }
}

console.log(esAnagrama("amor","roma"))
console.log(esAnagrama("mapa","pana"))
console.log(esAnagrama('Hola', 'aloh'))


module.exports = esAnagrama;
