function cadastrarUsuario(){
    console.log("Antes de iniciar, faça o seu cadastro!");
}
// cadastrarUsuario();

function bemVindo (nome){
    console.log(`Seja bem vindo ao sistema ${nome}. Seu usuario foi cadastrado com sucesso!`);
}
// bemVindo("Francisco");

function saldoConta (deposito,saque){
    let saldo = deposito - saque
    console.log(`Seu saldo em conta é ${saldo}`)
    return saldo;
}
// saldoConta (1000,700);

function main (){
    cadastrarUsuario();
    bemVindo("jose");
    saldoConta(1000,700)
}
// main()

function exibirMensagem (nome, idade){
    console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
}
// exibirMensagem("Francisco", 23);
// exibirMensagem("José", 27);
// exibirMensagem("Augusto", 50);


function somarNumeros(numero1, numero2){
    total = numero1 + numero2;
    console.log(`a soma dos dois valores é ${total}`);
}
    num1 = 10;
    num2 = 3;
somarNumeros(num1,num2);