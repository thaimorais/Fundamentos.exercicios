
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const verificaInformacoes = (id, information) => {
  let valor = '';

  for (let index = 0; index < professionalBoard.length; index += 1) {
      const trechoDoObjeto = professionalBoard[index]

      if (trechoDoObjeto.id === id) {
          valor = trechoDoObjeto
      }
  }

  if (!valor) {
      throw new Error('ID não identificada');
  } if (!valor[information]) {
      throw new Error('Informação indisponível');
  }
  
  return valor[information]
};


module.exports = verificaInformacoes;