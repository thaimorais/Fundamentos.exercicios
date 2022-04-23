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
const divsDeBotoes = document.querySelector('.buttons-container')

function botao1(nomeDoBotao) {
  const botao = document.createElement('button');
  botao.innerHTML = nomeDoBotao;
  botao.id = 'btn-holiday';
  divsDeBotoes.appendChild(botao)
}

botao1('Feriados');

// Exercício 3

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

// Exercício 4

function botao2(nomeDoBotao2) {
  const botaoSexta = document.createElement('button');
  botaoSexta.id = 'btn-friday'
  botaoSexta.innerText = 'Sexta-feira'
  divsDeBotoes.appendChild(botaoSexta)
}

botao2('Sexta-feira')

// Exercício 5

function acionarBotaoSexta () {
  const sextaBotao = document.getElementById('btn-friday');
  sextaBotao.addEventListener('click', mudaCorFriday);
  const friday = document.querySelectorAll('.friday');
  
  function mudaCorFriday() {
  for (let i = 0; i < friday.length; i += 1) {
    const diasFriday = friday[i]
    if (friday[i].innerHTML !== 'SEXTOU!!') {
      friday[i].innerText = 'SEXTOU!!'
    } else {
      friday[i].innerText = diasFriday;
      }
    }
  }
}

acionarBotaoSexta()

// Exercício 6

const diasDoMes = document.getElementById('days')
diasDoMes.addEventListener('mouseover', aumentaTamanho)

function aumentaTamanho(evento) {
  evento.target.style.fontSize = '40px';
 }


diasDoMes.addEventListener('mouseout', voltaTamanho)
 
 function voltaTamanho(evento) {
   evento.target.style.fontSize = '20px';
  }

// Exercício 7
const tasks = document.querySelector('.my-tasks')

function tarefaPersonalizada(nomeDaTarefa) {
  const tarefa = document.createElement('span');
  tarefa.innerHTML = 'Cozinhar';
  tasks.appendChild(tarefa)
}

tarefaPersonalizada('cozinhar')

// Exercício 8
const primeiraTarefa = document.getElementsByTagName('span')

function corDaTarefa(cor) {
  const corFundoTarefa = document.createElement('div')
  corFundoTarefa.classList = 'task'
  corFundoTarefa.style.backgroundColor = cor;
  tasks.appendChild(corFundoTarefa)
}
corDaTarefa('blue')

// Exercício 9

const corTarefa = document.querySelector('.task')
corTarefa.addEventListener('click', adicionaClasse)

function adicionaClasse(evento) {
    if (corTarefa.className !== 'task selected') {
      evento.target.className = 'task selected'
    } else {
      evento.target.className = 'task'
    }
  }

// Exercício 10
function mudaCor() {
diasDoMes.addEventListener('click', atribuiTarefa)
const novaColoracao = document.querySelector('.task').style.backgroundColor
let selectedTask = document.getElementsByClassName('task selected');

function atribuiTarefa(evento) {
  for (let i = 0; i < diasDoMes.length; i += 1) {
    if (diasDoMes[i].style.color === 'rgb(119,119,119') {
      evento.target.style.color = novaColoracao
    } else {
      evento.target.style.color = 'rgb(119,119,119'
    }
  }
}
}

mudaCor()