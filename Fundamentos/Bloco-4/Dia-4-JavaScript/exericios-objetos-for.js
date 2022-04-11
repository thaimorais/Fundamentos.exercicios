/* exericio 1 - objetos e for in/of */
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald', 
};

console.log('Bem-vinda, ' + info.personagem + '!')

/* exercicio 2 */

info['recorrente'] = 'Sim';

console.log(info)

/* exercicio 3 */

for (let chave in info) {
  console.log(chave)
}

/* exercicio 4 */

for (let chave in info) {
  console.log(info[chave])
}

/* exercicio 5 */

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #786",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

for (let index in info, info2){
  if (info[index] != info2[index]) {
    console.log(info[index] + ' e ' + info2[index])
  } else {
    console.log('Ambos recorrente')
  }
}

/* exercicio 6 */

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)

/* exercicio 7 */

leitor['livrosFavoritos'].push (
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)

console.log(leitor)

/* exericicio 8 */

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')