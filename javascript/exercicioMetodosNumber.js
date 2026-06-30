// Módulo 5
// Exercícios - Métodos Nativos - Number
// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.



// Exercício 1: Converta valores de texto em números
// Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
// convertê-los para números reais.
// Exemplo de Entrada: // "150.50";
// // "200px";
// // "abc";
// Exemplo de Saída: // 150.50
// // 200
// // NaN

const entrada1 = "150.50";
const entrada2 = "200px";
const entrada3 = "abc";

console.log(Number.parseFloat(entrada1));
console.log(Number.parseInt(entrada2));
console.log(Number(entrada3));



// Exercício 2: Somar valores numéricos de uma entrada de formulário
// Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.
// Exemplo de Entrada: // "10" e "20.5";
// Exemplo de Saída: // 30.5

const valorSoma1 = "10";
const ValorSoma2 = "20.5";
let soma = (Number.parseInt(valorSoma1) + Number.parseFloat(ValorSoma2)); 
console.log(soma) 


// Exercício 3: Arredonde valores financeiros
// Você tem um valor financeiro com várias casas decimais e deseja exibi-lo com apenas duas
// casas decimais.
// Exemplo de Entrada: // 1234.56789;
// Exemplo de Saída: // Valor formatado: 1234.57

const valorArredondado = 1234.56789;
const valorFormatado = valorArredondado.toFixed(2)
console.log(`O valor formatado é: ${valorFormatado}`);


// Exercício 4: Ajustar a precisão de um número
// Você tem um número muito grande e precisa exibi-lo com uma precisão específica.
// Exemplo de Entrada: // 12345.6789;
// Exemplo de Saída: // Valor com precisão: 1.235e+4

const numeroGrande = 12345.6789;
const numeroPreciso = numeroGrande.toPrecision(4)
console.log(`O valor preciso é: ${numeroPreciso}`)

// Exercício 5: Verificar se a entrada é um número válido
// Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
// realizar qualquer operação.
// Exemplo de Entrada: // "123abc";
// Exemplo de Saída: // "A entrada não é um número válido."


const entrada = "abc123";
const verificarNumero = Number (entrada);
const resultadoEntrada = isNaN(verificarNumero)
console.log(resultadoEntrada + " A entrada é invalida ")



// Exercício 6: Verificar se o número é finito
// Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.
// Exemplo de Entrada: // 1 / 0;
// // NaN ou “abc”;
// Exemplo de Saída: // ""O número é infinito ou não é um número."

const validarInfinity = 1 / 0;
const validarInfinity2 = NaN;
const validarInfinity3 = "abc";
const validarInfinity4 = 1257;
console.log(Number.isFinite(validarInfinity)+ " O número é infinito ou não é um número.");
console.log(Number.isFinite(validarInfinity2) + " O número é infinito ou não é um número.");
console.log(Number.isFinite(validarInfinity3) + " O número é infinito ou não é um número.");
console.log(Number.isFinite(validarInfinity4) + " O número é finito");



