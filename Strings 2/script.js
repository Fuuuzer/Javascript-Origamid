const htmlText = '<div>O melhor item</div><div>A melhor Lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);


const frutasArray = ['Banana', 'Melancia', 'Laranja'];


const lista = document.querySelectorAll('li');
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';
const listaTexto = lista.innerText;

console.log(lista)
console.log(sexo1.toLowerCase() === 'feminino')

const valor = '   R$23.00   ';
valor.trim() = 'R$23.00';
valor.trimStart() = 'R$23.00     ';
valor.trimEnd() = '   R$23.00';

