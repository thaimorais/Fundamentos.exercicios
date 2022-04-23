function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek()

// Escreva seu código abaixo.
// Exercício 1
function createNumbersOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const numeros = dezDaysList[i];
    const lista = document.createElement('li');
    lista.classList = 'day'
    lista.innerHTML = numeros;

    if (numeros == 24 || numeros == 25 || numeros == 31) {
      lista.classList += ' holiday'
    } if (numeros == 4 || numeros == 11 || numeros == 18 || numeros == 25) {
      lista.classList += ' friday'
    }

    daysList.appendChild(lista)
  }
}

createNumbersOfMonth()

// Exercício 2

function botao1(nomeDoBotao) {
  const divsDeBotoes = document.querySelector('.buttons-container')
  const botao = document.createElement('button');
  botao.innerHTML = nomeDoBotao;
  botao.id = 'btn-holiday';
  divsDeBotoes.appendChild(botao)
}

botao1('Feriados');

// Exercícios 3

function acionarBotao() {

  const botaoFeriado = document.querySelector('#btn-holiday')
  botaoFeriado.addEventListener('click', mudaCorHoliday)
  const corInicial = 'rgb(238,238,238)';
  const corNova = 'green';

  function mudaCorHoliday() {
    const diasHoliday = document.querySelectorAll('.holiday');
    for (let i = 0; i < diasHoliday.length; i += 1) {
      if (diasHoliday[i].style.backgroundColor === corNova) {
        diasHoliday[i].style.backgroundColor = corInicial;
      } else {
        diasHoliday[i].style.backgroundColor = corNova
      }
    }
  }
}

acionarBotao()