// Esses metodos são funções dentro do objeto que executam uma determinada ação dentro do objeto, exemplo de calculadora

const calculadora = {
    valorUnico1: 0,
    valorUnico2: 0,

  definirValores: function(v1, v2){
    this.valorUnico1 = v1;
    this.valorUnico2 = v2;
  },

    somar: function(){
       return this.valorUnico1 + this.valorUnico2;
    },

    subtrair: function(){
       return this.valorUnico1 - this.valorUnico2;
    },
    
    multplicar: function(){
        return this.valorUnico1 * this.valorUnico2;
    },

    dividir: function(){
        return this.valorUnico1 / this.valorUnico2;
    }
};

calculadora.definirValores(10,5);
console.log(calculadora.somar())
console.log(calculadora.subtrair())
console.log(calculadora.multplicar())
console.log(calculadora.dividir())



let ultimoPaciente = {
    nome: "Francisco",
    idade: 23,
    altura: 1.84,

    atualizarDados: function(dado1,dado2,dado3){
        this.nome = dado1;
        this.idade = dado2;
        this.altura = dado3;
    }

}

ultimoPaciente.atualizarDados("Antonio", 30, 1.70);
console.log(ultimoPaciente);
