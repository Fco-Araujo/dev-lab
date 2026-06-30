// Módulo 5
// Exercícios - Métodos Objetos
// Lembre-se de que os exercícios podem ser resolvidos com diferentes abordagens, e nosso
// gabarito é apenas uma forma de implementação.


// Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade,
// precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
// valor total da venda, considerando o desconto. Adicione também um método chamado
// detalharVenda que retorne uma string detalhando a venda.

let venda = {
    produto:"tv",
    quantidade: 5,
    precoUnitario: 100,
    desconto: 10,

    calcularTotal: function(){
        let totalVenda = this.quantidade * this.precoUnitario;
        let descontoTotal = totalVenda * (this.desconto / 100)
        let valorFinal = totalVenda - descontoTotal;
        return valorFinal;
    },

    detalheVenda: function(){
    return `
    Produto: ${this.produto}
    Quantidade: ${this.quantidade}
    Valor: ${this.precoUnitario}
    Desconto: ${this.desconto}%
    Valor Final: ${this.calcularTotal()}
    A venda pode ser realizada: ${this.verificarEstoque()}
    É nescessario ajustar o estoque: ${!this.verificarEstoque()}
     `
    }
}

// Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
// um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
// valor total com o método calcularTotal.

venda.aplicarDesconto = function(desconto){
    return this.desconto = desconto;
}

// Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que
// recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
// verifique o total da venda após a atualização.

venda.atualizarQuantidade = function(quantidade){
    return this.quantidade = quantidade
}

// Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
// disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
// ou se é necessário ajustar a quantidade.

venda.verificarEstoque = function(){
    let disponivel = this.quantidade > 0
    return disponivel;
}

venda.atualizarQuantidade(10);
venda.aplicarDesconto(5);
venda.verificarEstoque();
console.log(venda.detalheVenda());



// Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda.
// Exiba as propriedades e valores em um formato legível.

const listaPropiedadesEvalores = Object.entries(venda);
console.log(listaPropiedadesEvalores);

// Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda.
// Exiba as propriedades do objeto.

const listaPropiedades = Object.keys(venda);
console.log(listaPropiedades);

// Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda.
// Exiba os valores das propriedades.

const listaValores = Object.values(venda);
console.log(listaValores);

// Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a
// verificação diretamente em uma mensagem fixa.

function verificarPropiedade (){
    return `A verificação foi concluida com ${venda.hasOwnProperty("descon")}`
}
console.log(verificarPropiedade());
// Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
// valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
// NovaVenda.

const novaVenda = Object.assign({},venda,{
    produto: "guarda-roupa",
    quantidade: 100
})
console.log(novaVenda)


// Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
// enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
// nova propriedade data separadamente.


Object.defineProperty(venda,"data",{value: "24/06/2026",
    enumerable: false,
});

console.log(venda);
console.log(venda.data);

// Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
// Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
// se o desconto foi aplicado corretamente.

let descontoEspecial = Object.create(venda);
descontoEspecial.desconto = 20;

// console.log(descontoEspecial);

// Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
// foi removida com sucesso e exiba as propriedades restantes do objeto.

delete venda.desconto;
// console.log(venda);