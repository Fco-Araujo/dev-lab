// Módulo 5
// Exercícios - Métodos nativos Array
// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.



// .push - adiciona um item ao final do array

// .unshift - adiciona um item ao início do array

// .pop - remove o último item do array

// .shift - remove o primeiro item do array

// .includes - verifica se um valor existe no array (retorna true ou false)

// .every - verifica se TODOS os itens atendem uma condição
// retorna true somente se todos atenderem

// .some - verifica se PELO MENOS UM item atende uma condição
// retorna true se encontrar ao menos um

// .sort - ordena os itens do array

// .reverse - inverte a ordem atual dos itens

// .join - transforma o array em uma string usando um separador

// .splice - adiciona, remove ou substitui itens em uma posição específica do array

// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final, 
// remova o primeiro item e exiba o carrinho atualizado.

let listaCarrinho = ["Produto A", "Produto B"];
listaCarrinho.push("Produto C"); // Insere dados no final da array
listaCarrinho.shift(); // deleta o primeiro intem do array
console.log(listaCarrinho);
// Exemplo de Saída: // ['Produto B', 'Produto C']


// Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
// disponíveis.
// Exemplo de Saída: // ['Produto X', 'Produto Y', 'Produto Z', 'Produto A', 'Produto B']

let listaProdutos1 = ["Produto X", "Produto Y"];
let listaProdutos2 = ["Produto A", "Produto B"];
listaProdutos1.push("Produto Z");
let listaProdutosConcat = listaProdutos1.concat(listaProdutos2); // Concat usado para unir arrays em um só
console.log(listaProdutosConcat);

// Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
// 'Agenda' estão presentes no estoque.
// Exemplo de Saída: // true
// // false

let listaEscola = ["Caderno", "Lápis", "Estojo"];
console.log(listaEscola.includes("Caderno"));
console.log(listaEscola.includes("Agenda"));


// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
// que 7.
// Exemplo de Saída: // true

let verificarAlgum = [2,5,8,1];
console.log(verificarAlgum.some(
    function (numeros){
        return numeros > 7
    }
));

// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
// Exemplo de Saída: // false

let verificarTodos = [4,6,8,2];
console.log(verificarTodos.every(
    function (numeros){
        return numeros > 3
    }
));

