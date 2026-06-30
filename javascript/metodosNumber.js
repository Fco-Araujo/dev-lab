// Verificar se um numero é um inteiro, retorna um booleano. 

// Number.

let numeroInteiro = 10;
let pontoFlutuante = 8.5847;
let pontoFlutuante2 =  8.9847;

// Number.isInteger - verifica se o valor é inteiro e retorna um booleano

console.log(Number.isInteger(numeroInteiro));


// .toFixed(digitos) - digitos = casas decimais // sem parametro ele retorna o numero inteiro = 0 casas decimais.
// ele arredonda para cima com base no numero ao lado.

console.log(pontoFlutuante.toFixed());
console.log(pontoFlutuante.toFixed(1));

// toPrecision(digitos) numero de digitos que o numeral irá conter

console.log(pontoFlutuante.toPrecision(1));

//parseFloat - converte uma string para um numero, precisa ser chamado com metodo global number.
let numeroFloat = "86.874";
let numeroInt = "42"
console.log(Number.parseFloat(numeroFloat));
console.log(Number.parseFloat(numeroInt));

// parseInt - converte uma string para um numero inteiro (opcional base numeria, onde o padrao é vazio ou 10)
console.log(Number.parseInt(numeroFloat));

console.log(numeroFloat.toString())