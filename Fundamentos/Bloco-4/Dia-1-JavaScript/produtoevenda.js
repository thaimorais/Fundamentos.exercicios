const valorCusto = 500;
const valorVenda = 800;
const valorImposto = (20 / 100) * valorCusto;
const valorLucro =  valorVenda - (valorCusto + valorImposto)
let quantidadeVendido = 1000;

if (quantidadeVendido > 0) {
  console.log('O lucro é de:', quantidadeVendido + valorLucro)
} else if (quantidadeVendido <= 0 || valorLucro <= 0) {
  console.log('Erro!')
}