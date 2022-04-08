/* exercicio 1 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
  for (let index2 = 0; index2 < index; index2 += 1){
    if (numbers[index] < numbers[index2]) {
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    }
  }
}

console.log(numbers)

/* exercicio 2 */

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index3 = 1; index3 < numbers2.length; index3 += 1){
  for (let index4 = 0; index4 < index3; index4 += 1){
    if (numbers2[index3] > numbers2[index4]) {
      let position = numbers2[index3];
      numbers2[index3] = numbers2[index4];
      numbers2[index4] = position;
    }
  }
}

console.log(numbers2)

/* exercicio 3 */

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = [];

for (let index5 = 0; index5 < numeros.length; index5 += 1){
  if (index5 + 1 < numeros.length) {
    multiplicado.push(numeros[index5] * numeros[index5 + 1])
  } else {
    multiplicado.push(numeros[index5] * 2)
  }
}

console.log(multiplicado)