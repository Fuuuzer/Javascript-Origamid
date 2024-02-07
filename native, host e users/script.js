const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao2.slice(-5));

console.log(transacao3.indexOf('xa'));

const listaPrecos = ['R$ 99', 'R$ 9149', 'R$ 2239'];

listaPrecos.forEach((item) => {
  console.log(item.padStart(20, '_'))
});

let listaItens = 'camisas bones calças bermudas vestido saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.')