/* exercicio 1 */

function verificaPalindromo(palavra) {
  let reverso = palavra.split('').reverse().join('');
  if (reverso === palavra) {
    return true
  } else {
    return false
  }
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('acarajé'));

/* exercicio 2 */


function maiorIndice(array) {
  let maiorIndice = 0;
  for (let indice in array) {
    if (array[indice] > array[maiorIndice]) {
      maiorIndice = indice
    }
  }
  return maiorIndice
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]));

/* exercicio 3 */

function menorIndice(array2) {
  let menorIndice = 0;
  for (let indice2 in array2) {
    if (array2[indice2] < menorIndice) {
      menorIndice = indice2
    }
  }
  return menorIndice
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));

/* exercicio 4 */

