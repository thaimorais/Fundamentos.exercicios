let salarioBruto = 3000;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    console.log(valorDescontoInss = (8/100)*salarioBruto)
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    console.log(valorDescontoInss = (9/100)*salarioBruto)
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    console.log(valorDescontoInss = (11/100)*salarioBruto)
} else if (salarioBruto > 5189.82) {
    console.log(valorDescontoInss =  570.88)
}

console.log('O valor do desconto INSS é: ', valorDescontoInss)

let salarioBase = salarioBruto - valorDescontoInss;

if (salarioBase > 0 && salarioBase <= 1903.98) {
    console.log('Sem desconto');
} else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
    console.log(valorImpostoRenda = (7.5/100)*salarioBase - 142.80)
} else if (salarioBase > 28626.66 && salarioBase <= 3751.05) {
    console.log(valorImpostoRenda = (15/100)*salarioBase - 354.80)
} else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
    console.log(valorImpostoRenda = (22.5/100)*salarioBase - 636.13)
} else if (salarioBase > 4664.68) {
    console.log(valorImpostoRenda = (27.5/100)*salarioBase - 869.36)
}

console.log('O valor do imposto de renda é:', valorImpostoRenda);

salarioLiquido = salarioBase - valorImpostoRenda;

console.log('Parabéns esse é o teu salário liquido: BARABAM ', salarioLiquido);
