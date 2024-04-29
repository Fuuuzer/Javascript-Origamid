/* const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2;
}

function darOi(nome, idade) {
  console.log('oi pra voce' + nome + idade)
}

darOi.call({}, ' andre', 'jorge', 25);

const carro = {
  marca: 'ford',
  ano: 2030
}

function descricaoCarro(velocidade) {
  console.log(this.marca + ' ' + this.ano + ' ' +velocidade);
}

descricaoCarro.call(carro, 100 + 'Km/h')
*/

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Maçã'];

// carros.forEach.call(carros, (item) => {
//   console.log(item)
// });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this)
//   this.element.classList.add(classe)
// }

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar')


// ul.ativo('ativar')


const frutas = ['uva', 'maçã', 'Banana'];

Array.prototype.pop.call(frutas)
frutas.pop();

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
})

console.log(filtro)



