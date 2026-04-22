let pedidoLanche = {
    id: 123,
    guarana:10,
    batataFrita: 10,
    suco: 7,
    nome: "Francisco",
    email: "francisco123.com",
};

function enviarMensagem(nomeCliente,emailCliente,pedidoCliente) {
    console.log(` Obrigado ${nomeCliente}\n Seu pedido já está sendo processado.\n Mensagem eviada para: ${emailCliente}\n referente ao pedido: ${pedidoCliente}.`);
}
enviarMensagem(pedidoLanche.nome, pedidoLanche.email, pedidoLanche.id);

function processarPedido(item1,item2,item3){
    let totalPedido = item1 + item2 + item3;
    console.log(`Total do seu pedido ficou por R$: ${totalPedido} `);
    return totalPedido;
}
processarPedido(pedidoLanche.guarana, pedidoLanche.batataFrita, pedidoLanche.suco);

let valorTotalPedido = processarPedido (
    pedidoLanche.guarana,
    pedidoLanche.batataFrita,
    pedidoLanche.suco,
);

console.log(valorTotalPedido);
console.log(valorTotalPedido + valorTotalPedido);
