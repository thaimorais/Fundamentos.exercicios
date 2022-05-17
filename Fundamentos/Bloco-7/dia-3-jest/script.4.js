const techList = (tech, nome) => {
  if (tech.length === 0) {
      return 'Vazio!'
  } else {
      const ordenada = tech.sort()
      const resultado = []
      for (let index = 0; index < ordenada.length; index += 1) {
          resultado.push({
              tech: ordenada[index],
              name: nome
          })
      }
      return resultado
  }
}

module.exports = techList;
