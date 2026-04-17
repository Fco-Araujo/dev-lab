// atividade 1
let produtos = ["telefone","televisão","caixa de som"];
// console.log(produtos[1]);
produtos[2] = "notebook";
// console.log(produtos);



// atividade 2
let clientes = ["Kelson","Barbosa","Hernandes"];
clientes[3] = "Francisco";
// console.log(clientes);
delete clientes[3];
// console.log(clientes);



// atividade 3
let produto = {
    nome: "samsung a14",
    valor: 1400,
    quantidade: 10
}
// b - console.log(produto.nome);
produto.valor = 2000;  //maneira um de alterar
// produto["quantidade"] = 20; //maneira dois de alterar
// console.log(produto);



// atividade 4

let venda = {
    cliente: "francisco",
    produto: "camiseta",
    valor: 150
}
venda.data = "01/01/2026"
// console.log(venda);

delete venda.produto;
// console.log(venda);



// atividade 5

let estoque = [20,30,40];
let estoqueNovo = [...estoque]
estoqueNovo[0] = 100;
// console.log(estoque);
// console.log(estoqueNovo);


// atividade 5 p2

let funcionario = {
    nome: "francisco",
    idade: 23
};

let novoFuncionario = {...funcionario};

novoFuncionario["nome"] = "jose";

console.log(funcionario);
console.log(novoFuncionario);