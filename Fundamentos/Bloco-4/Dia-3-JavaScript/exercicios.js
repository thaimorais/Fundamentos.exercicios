/* exercicio 1 */

let numfatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  numfatorial *= index;
}

console.log(numfatorial);

/* exercicio 2 */

let palavra = 'tryber';
let palavraContraria = '';

for (let index2 = 0; index2 < palavra.length; index2 += 1) {
    palavraContraria += palavra[palavra.length - 1 - index2]
}

console.log(palavraContraria)

/* exercicio 3 */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = '';

for (let index3 = 0; index3 < array; index3 += 1) {
    menorPalavra.push(index3.toString)
}
console.log(menorPalavra)