const checkResult = (number, numeroSorteado) => number === numeroSorteado;

const resultSorteio = (number, callback) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);

  return callback(number, numeroSorteado) ? `Parabéns!` : `Tente novamente.`
}


console.log(resultSorteio(2, checkResult));