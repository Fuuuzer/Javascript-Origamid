// const frutas = ['', 'pera'];
// const buscaUva = frutas.every((fruta) => {
//   return fruta;
// })

// console.log('Index: ', buscaUva);

const frutas = ['Banana', undefined, null, '', 'Uva', 'maçã'];

const arrayFrutas = frutas.filter((item) => {
  console.log(item)
  return item ;
})

const numeros = [2, 43, 22, 88, 101, 29];
const maiorNumero = numeros.filter((x) => {
  return x > 45;
})

console.log(maiorNumero)