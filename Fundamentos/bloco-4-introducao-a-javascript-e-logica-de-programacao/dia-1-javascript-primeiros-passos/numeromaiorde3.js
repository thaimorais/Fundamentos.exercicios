const valor1 = 5;
const valor2 = 7;
const valor3 = 3;

if (valor1 > (valor3 && valor2)) {
  console.log(valor1)
} else if (valor2 > (valor1 && valor3)) {
  console.log(valor2)
} else if (valor3 > (valor1 && valor2)) {
  console.log(valor3)
}