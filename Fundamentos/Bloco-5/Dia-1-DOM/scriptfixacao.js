const cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'green'
cabecalho.style.color = 'white'

const urgente = document.querySelectorAll('.emergency-tasks');

for (let i = 0; i < urgente.length; i += 1) {
urgente[i].style.backgroundColor = 'orange'
}

const urgente1 = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < urgente1.length; i += 1) {
  urgente1[i].style.backgroundColor = 'pink'
  urgente1[i].style.color = 'white'
}

const naoUrgente = document.querySelectorAll('.no-emergency-tasks');

for (let i = 0; i < naoUrgente.length; i += 1) {
  naoUrgente[i].style.backgroundColor = 'yellow'
}

const naoUrgente1 = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < naoUrgente1.length; i += 1) {
  naoUrgente1[i].style.backgroundColor = 'black'
  naoUrgente1[i].style.color = 'white'
}

const rodaPe = document.getElementById('footer-container');
rodaPe.style.backgroundColor = 'green'
rodaPe.style.color = 'white'