let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index1 = 0; index1 < numbers; index1 += 1){
  console.log(numbers[index])
}

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma);

let mediaAritimetica = soma / numbers.length

console.log(mediaAritimetica)

if (mediaAritimetica > 20) {
  console.log("Valor maior que 20")
} else if (mediaAritimetica <= 20 ) {
  console.log("Valor menor ou igual a 20")
}

let maior = 0;

for (let maiorValor = 0; maiorValor < numbers.length; maiorValor += 1) {
  if (numbers[maiorValor] > maior) {
    maior = numbers[maiorValor]
  }
}
console.log(maior)