/* exercicio 1 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index1 = 0; index1 < numbers; index1 += 1){
  console.log(numbers[index])
}

/* exercicio 2 */

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma);

/* exercicio 3 */

let mediaAritimetica = soma / numbers.length

console.log(mediaAritimetica)

if (mediaAritimetica > 20) {
  console.log("Valor maior que 20")
} else if (mediaAritimetica <= 20 ) {
  console.log("Valor menor ou igual a 20")
}

/* exercicio 4 */

let maior = 0;

for (let maiorValor = 0; maiorValor < numbers.length; maiorValor += 1) {
  if (numbers[maiorValor] > maior) {
    maior = numbers[maiorValor]
  }
}
console.log(maior)

/* exercicio 5 */

for (let index4 = 0; index4 < numbers.length; index4 += 1) {
  if (numbers[index4] % 2 === 1){
    console.log("Esses são os números ímpares: ", numbers[index4])
  }
}

/* exercicio 6 */

let menor = 500;

for (let menorValor = 0; menorValor < numbers.length; menorValor += 1) {
  if (numbers[menorValor] < menor) {
    menor = numbers[menorValor]
  }
}
console.log(menor)

/* exercicio 7 */

let array = [];

for (let index5 = 1; index5 <= 25; index5 += 1) {
    array.push(index5)
}

console.log(array)

/* exercicio 8 */

for (let index6 = 0; index6 <= array.length; index6 += 1) {
  console.log(index6 / 2)
}