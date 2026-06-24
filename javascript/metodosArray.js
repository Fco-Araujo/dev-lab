// Manipulando Arrays com metodos nativos

let listaMercado = ["Arroz", "Feijão", "Açúcar", "Café"];
let listaValores = [1,11,2,5,7,4,30,9,5]

// metodo push, adiciona um item ao final da lista
listaMercado.push("Leite");
console.log(listaMercado);

// método unshift, adiciona um item no começo da lista
listaMercado.unshift("Litro de suco");
console.log(listaMercado);

// método pop, remove o útilmo item da lista
// listaMercado.pop();
console.log(listaMercado);

// método shift, remove o primeiro item da lista
// listaMercado.shift();
console.log(listaMercado);

// *******************************\\

// coloca os itens da lista em ordem obs, com valores ele segue a ordem em casa decimal, com str é com ordem alfabetica
listaValores.sort();
listaMercado.sort();
console.log(listaValores);
console.log(listaMercado);

// reverse, funciona da mesma forma, porém deixa a lista invertida
listaMercado.reverse();
listaValores.reverse();
console.log(listaMercado);
console.log(listaValores);

// concat, concatena as listas em uma só

let listaConcatenada = listaMercado.concat(listaValores);
console.log(listaConcatenada);

console.log(listaConcatenada.indexOf("Arroz"));

// Método Splice, fatia a lista e usa dois parametros, (inicio,fim) e retorna os devidos valores, ao adicionar o terceiro parametro ele adiciona ao ultimo elemento da lista 
let listaSplice = ["Carro", "Moto", "Avião", "Barco"]
console.log(listaSplice.splice(2,3, "Motor"));
console.log(listaSplice);

// includes procura um valor na lista e retorna um booleano
console.log(listaSplice.includes("Carro")) // true

// every procura um valor em todos os itens e retorna um booleando, usando uma funcao anonima como parametro
console.log(listaSplice.every(
    function (procurar){
        return procurar.includes("o")
    }
));

// some procura em todos os itens da lista o unico valor que foi passado e tambem retorna um booelano

console.log(listaSplice.some(
    function(lista){
        return lista.includes("C")
    }
));


// JOIN, transforma o array em string, sem usar nenhum parametro para separar os elementos eles vao ser dividios por "," modo padrão

console.log(listaSplice.join())