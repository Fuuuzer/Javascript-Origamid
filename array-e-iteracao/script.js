/* const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function(item, index, array) {
  array[index] = 'teste'
  console.log(item, index, array);
}); */

// const li = document.querySelectorAll('li');

// li.forEach(i => i.classList.add('ativa'));

// li.forEach(function(item) {
//   item.classList.add('ativa');
// })

const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array) => {
//   console.log(item, index, array);
//   return item;
// })

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map(n => n * 2);



const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);

function nomeAulas(aula) {
  return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas);
console.log(tempoAulas)







/*var x = 99;
function testIQ() {
  console.log(x);
  var x = 999;
}
testIQ(); */