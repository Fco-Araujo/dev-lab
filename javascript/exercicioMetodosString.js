// Módulo 5
// Exercícios - Métodos nativos String
// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.



//touppercase - tudo maiusculo
//tolowercase - tudo minusculo
//slice - fatia uma parte da string
//substring - extrai uma parte da string
//replace - subistitui o conteudo de uma sirting
//indexof - indica o indice que inicia uma string




// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras maiúsculas.
// Exemplo de Saída: // “JAVASCRIPT é divertido”

let exercicio1 = "javascript é divertido";
let extrairTextoMaiusculo = exercicio1.slice(0,10).toUpperCase();
let extrairTextoMinusculo = exercicio1.slice(11,22);
console.log(`${extrairTextoMaiusculo} ${extrairTextoMinusculo}`);
// jeito2
console.log(exercicio1.replace("javascript","JAVASCRIPT"));
// Exemplo de Saída: // “JAVASCRIPT é divertido”"


// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e, em seguida, converta essa palavra para letras minúsculas.
// Exemplo de Saída: // “ aprendendo”
let exercicio2 = "Aprendendo Javascript";
let exercicio2Extraido = exercicio2.slice(0,10).toLowerCase();
console.log(exercicio2Extraido);



// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por “Javascript”.
// Exemplo de Saída: // “Aprendendo Javascript”

let exercicio3 = "Aprendendo Python";
console.log(exercicio3.replace("Python","Javascript"));

// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de produtos e remova o item 'sofá' da lista.
// Exemplo de Saída: “["cadeira", "mesa", "armário"]”

let exercicio4 = "cadeira, mesa, sofá, armário";
let exercicio4Array = exercicio4.split(", ")

exercicio4Array.splice(exercicio4Array.indexOf("sofá"),1)
console.log(exercicio4Array);
