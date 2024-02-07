console.log(Number.isNaN(NaN));
console.log(Number.isNaN(23));
console.log(Number.isInteger(10.234234));

Number.isInteger(20); //true
Number.isInteger(20.6); //false

console.log(parseFloat('  23434.343'));
console.log(parseFloat('100.27 reais'));
console.log(parseInt('100.27 reais'));
console.log(parseInt(23.49));

 const preco = 10.3232323;
 console.log(preco.toFixed());

 let valor = 48.49;
 valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
 console.log(valor)

 console.log(Math.PI);

 Math.abs(3 - 7); // 4
 Math.ceil(4.3); // 5
 Math.floor(4.334); // 4
 Math.round(4.3); // 4
 Math.round(4.667); // 5

 Math.max(5, 3, 10, 42, 2);
 Math.min(5, 3, 10, 42, 2);


 const aleatorio = Math.floor(Math.random() * 10);

 console.log(aleatorio);

 //Numero random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;