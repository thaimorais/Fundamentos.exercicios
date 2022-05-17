const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (object, key, value) => {
  object[key] = value
}

adicionaTurno(lesson2, 'turno', 'noite');

const keysObjects = (object) => Object.keys(object);

console.log(keysObjects(lesson1));

const lengthObject = (obj) => Object.keys(obj).length

console.log(lengthObject(lesson2));

const valuesObjects = (objec) => Object.values(objec)

console.log(valuesObjects(lesson3))

const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});

console.log(allLessons)

const valores1 = allLessons.lesson1.numeroEstudantes
const valores2 = allLessons.lesson2.numeroEstudantes
const valores3 = allLessons.lesson3.numeroEstudantes

const counterStudents = () => {
  const resultado = valores1 + valores2 + valores3
  return resultado
}

console.log(counterStudents())

const valorDaChave = (ob, posicao) => Object.values(ob)[posicao];

console.log(valorDaChave(lesson2, 2))

const existeOuNao = (objeto, chave, valor) => {
  if (Object.keys(objeto).includes(chave) && Object.values(objeto).includes(valor)) {
    return true
  } else {
    return false
  }
}

  console.log(existeOuNao(lesson1, 'materia', 'História'))