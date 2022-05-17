function hydrate(frase) {
  const valoresIniciais = /[0-9]/g;
  const capturaNaFrase = frase.match(valoresIniciais);

  for (let index = 0; index < capturaNaFrase.length; index += 1) {
      capturaNaFrase[index] = parseInt(capturaNaFrase[index])
  }

  let sum = 0;
  for (let index = 0; index < capturaNaFrase.length; index += 1) {
      sum = sum + capturaNaFrase[index]
  }

  if (sum <= 1) {
      return `${sum} copo de água`
  } else if (sum > 1) {
      return `${sum} copos de água`
  }
}
console.log(hydrate('1 cachaça, 0 cervejas'))

module.exports = hydrate;