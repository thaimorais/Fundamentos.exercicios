const checkRespostas = (gabarito, respostaEstudante) => {
  let pontuacao = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    for (let index = 0; index < respostaEstudante.length; index += 1) {
      if (respostaEstudante[index] === gabarito[index]) {
        pontuacao += 1
        break
      } else if (gabarito[index] === 'N.A') {
        pontuacao += 0
        break
      } else {
        pontuacao -= 0.5
      }
    }
  }
  return pontuacao
}

console.log(checkRespostas(['a', 'b', 'N.A', 'c'], ['b', 'b', 'c', 'b']))

// const valores = (gabarito, respostaEstudante, callback) => {
//   callback(gabarito, respostaEstudante)
// }