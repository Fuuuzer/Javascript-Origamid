// const jorge = Array.of(1, 2, 3, 4);
// const lista = document.querySelectorAll('li');


// Array.of(10);
// Array.of(1, 2, 3, 4);
// new Array(5);

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas[2][0].length);

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();

// const idades = [32,21,33,43,1,12,8];
// idades.sort();

// console.log(instrumentos);
// console.log(idades);


const carros = ['Ford', 'Fiat', 'VW', 'Ferrari', 'JORGESON'];
// carros.unshift('Kia', 'Ferrari');

// const novaArray = carros.push('Parati', 'Gol')
// carros.push('Fiat', 'Honda');
// console.log(carros);
// console.log(novaArray);


// console.log(carros.pop());
// console.log(carros.reverse()); 

 
// console.log(carros.splice(2,2, 'Fusca'));

// console.log(carros)



// console.log(['Item1', 'Item2', 'Item3', 'Item4' , 'item5'].copyWithin(2, 0, 2));


// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 2));


//pegar o ultimo item de uma lista transformada em array e 
// modificar algo cutilizando alguma função


// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2, 'fala', 'jorge');

// const veiculos = Array('jorge', 'minecraft', 'mitomaniaco'); 

// const veiculos1 = ['jorge', 'minecraft', 'cesar']

// console.log(veiculos1)
// console.log(transportes)


const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];


// console.log(linguagens.includes('ruby'));
// console.log(linguagens.indexOf('ruby'));
// console.log(linguagens.lastIndexOf('js'));

// let htmlString = '<h2>Título Principal</h2>';
// htmlString = htmlString.split('h2');
// htmlString = htmlString.join('p');

// console.log(htmlString);




const cloneLinguagens = linguagens.slice(); // tecnica comum de clonas arrays




console.log(linguagens.pop());
console.log(linguagens);

console.log(cloneLinguagens);






// console.log(linguagens.slice(0, 6));