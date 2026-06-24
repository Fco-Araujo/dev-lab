// 1

function retornarNome(nomeUser){
    console.log(nomeUser)
}
retornarNome("francisco");

// 2

function nomeUser(){
    let nome = "Francisco";
    console.log(nome)
}
nomeUser();

// 3

function somarValores(a,b,c){
     return a + b + c
}
 let resultado = somarValores(10,5,5);
console.log(resultado)

// 4

function multiplicarValor(numero,multiplicador){
    return (numero * multiplicador)
}
let ResultadoMultiplicacao = multiplicarValor(2,6)
console.log(ResultadoMultiplicacao)

// 5

function calcularMedida(nota1,nota2,nota3){
    return ((nota1 + nota2 + nota3) / 3)
}
let resultadoSemestre = calcularMedida(7,6,5)

console.log(resultadoSemestre)

if (resultadoSemestre >= 6){
    console.log("aprovado");
}else{
    console.log("reprovado");
}

// 6

function mostrarOperacao(valor1,operacao){
    return operacao(valor1)
}
function somar(SomarNumero){
    return SomarNumero + 10
}
function subtrair(subtrairNumero){
    return subtrairNumero - 5}

let resultadorOperacaoSomar = mostrarOperacao(5,somar)
console.log(resultadorOperacaoSomar);

let resultadorOperacaoSubtrair = mostrarOperacao(5,subtrair)
console.log(resultadorOperacaoSubtrair);

// 7 