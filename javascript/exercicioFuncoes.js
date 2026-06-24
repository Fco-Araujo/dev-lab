// Módulo 3 - Exercícios
// Observações:
// - O nome de cada variável criada deve respeitar as regras de nomenclatura de
// variáveis.
// - Se uma variável não tiver seu valor alterado depois da inicialização, ela deve
// ser do tipo const .
// - Comece cada resolução com o comentário em texto "Resolução do exercício X",
// sendo X o número do exercício em questão.


// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
// término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
// cálculo).
function mediaAluno(nota1,nota2,nota3){
return (nota1 + nota2 + nota3) / 3
}
const totalMedia = mediaAluno(10,9,8);
console.log(`a média desse aluno é ${totalMedia}`) 

// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
// de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
// primeiras provas + a nota da prova final. O cálculo deve ser o seguinte:
// média_final = (média_antes_da_pf + pf)/2
// Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar
// necessário.
// Ao término do processo, devemos ter a mensagem "a média final desse aluno é x" (sendo x o
// resultado do cálculo).

function mediaFinal(notapf){
    return (totalMedia + notapf) / 2
}
const mediaComPf = mediaFinal(5)
console.log(`a média final desse aluno é ${mediaComPf}` )

// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na
// tela o texto:
// a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)
// Obs: temperatura em Farenheit = (9/5)*( temperatura em Celsius ) + 32

function temperatura(grausCelsius){
    return (9/5) * (grausCelsius) + 32;
}
const temperaturaConvertida = temperatura(29)
console.log(`a temperatura correspondente em Farenheit é de ${temperaturaConvertida}ºF `)


// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
// que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
// maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
// etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
// é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
// etiqueta e registre na tela a frase:
// O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).

let valorProduto = 320;

function impostoSobreProduto(){
const valorImposto = valorProduto * 0.0875;
const valorFinalProduto = valorProduto + valorImposto;
return valorFinalProduto;
}
const totalComImposto = impostoSobreProduto();
console.log(`O valor do produto é ${valorProduto} e com o acréscimo fica ${totalComImposto}`); 