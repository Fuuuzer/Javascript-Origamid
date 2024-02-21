function Pessoa(nome, idade) {
 this.nome = nome;
 this.idade = idade;
 this.abracar = function() {
  return 'Abraçou';
 }
 this.andar = function() {
  return 'Andou pelo objeto';
 }
}

Pessoa.prototype.andar = function() {
  return 'Pessoa Andou';
}

const joao = new Pessoa('Joao', 21);

console.log(joao.prototype);