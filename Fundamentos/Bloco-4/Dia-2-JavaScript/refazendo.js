/* exercicio 1 */

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for (let index = 0; index < numeros.length; index += 1){
}

 console.log(numeros)

/* exercicio 2 */

let soma = 0;

for (let index2 = 0; index2 < numeros.length; index2 += 1){
  soma += numeros[index2];
 }
 console.log(soma);

/* exercicio 2 */

let soma2 = 0;
let mediaAritimetica = 0;

for (let index3 = 0; index3 < numeros.length; index3 += 1){
  soma2 += numeros[index3];
  mediaAritimetica = soma / numeros.length
 }

 console.log(mediaAritimetica);

 /* exercicio 3 */

 if (mediaAritimetica < 20) {
   console.log('Valor menor que 20')
 } else {
   console.log('Valor menor ou igual a 20')
 }

 /* exercicio 4 */

 let maiorNumero = 0;

 for (let index4 = 0; index4 < numeros.length; index4 += 1){
  if (numeros[index4] > maiorNumero) {
    maiorNumero = numeros[index4]
  }
 }
console.log(maiorNumero)

/* exercicio 5 */

for (let index5 = 0; index5 < numeros.length; index5 += 1){
  if (numeros[index5] % 2 === 1) {
  console.log(numeros[index5])
} else if (numeros % 2 === 0){
  console.log('Nenhum numero impar')
}
}

/* exercicio 6 */

let menorNumero = 100;

for (index6 = 0; index6 < numeros.length; index6 += 1) {
  if (numeros[index6] < menorNumero) {
    menorNumero = numeros[index6]
  }
}
console.log(menorNumero)

/* exercicio 7 */

let array = [];

for (let index7 = 1; index7 <= 25; index7 +=1 ){
  array.push = index7
}
console.log(array)