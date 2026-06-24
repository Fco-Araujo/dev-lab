// METODO .keys retorna todas as chaves/propiedas do objeto em uma array

let funcionario = {
    nome: "francisco",
    idade: 22,
    cargo: "Desenvolvedor",
    ativo: true
};

// let lista = Object.keys(funcionario)
// console.log(lista)
// [ 'nome', 'idade', 'cargo', 'ativo' ]

// METODO .values retorna todos os valores das propiedades em uma array

// let listaValores = Object.values(funcionario);
// console.log(listaValores);
// [ 'francisco', 22, 'Desenvolvedor', true ]

// METODO .entries retorna o par de chave e valor em uma lista, dentro de outra lista

// let ListaObjeto  = Object.entries(funcionario);
// console.log(ListaObjeto);
// [
//   [ 'nome', 'francisco' ],
//   [ 'idade', 22 ],
//   [ 'cargo', 'Desenvolvedor' ],
//   [ 'ativo', true ]
// ]


// Object.assign()
// Copia propriedades de um ou mais objetos para um objeto destino.
// Se a propriedade não existir, ela será adicionada.
// Se a propriedade já existir, seu valor será sobrescrito pelo último objeto informado.
// Retorna o objeto destino.


let carro = {
    Modelo: "Tundra",
    Ano: 2008,
};

let adicionaisCarro = {
    Cor: "Preto",
    Km: 100,
};

let adicionaisItens = {
    Alimentacao: "Diesel"
};

let carroCompleto = {};

Object.assign(carroCompleto, carro, adicionaisCarro, adicionaisItens);
Object.defineProperty(carroCompleto,"Cor",{value:"Cinza"});
console.log(carroCompleto);


// -----------------

// defineProperty
// Alterando uma propriedade existente:
// basta informar o que deseja alterar.
// Criando uma nova propriedade:
// é recomendável definir writable,
// enumerable e configurable,
// pois o padrão é false.

let guerreiro = {
    life: 30,
    classe: "heroi",
};

Object.defineProperty(guerreiro,"life",{value: 40});

Object.defineProperty(guerreiro,"tipo",{value:"mágico",
    writable:true,
    enumerable:true,
    configurable:true
});

console.log(guerreiro);

// .create cria um objeto protipo, diferente do assing esse objeto vai apenas herdar as propiedades do objeto pai, usando o assing o objeto vai fazer uma copia


let mundo = {
    pais: "Brasil",
    habitantes: 2517,
    metodo: function (){
        console.log("Olá mundo");
    }
};

let pessoa = Object.create(mundo);
pessoa.nome = "Francisco";
pessoa.metodo();

console.log(pessoa);

// hasOwnProperty verica se o objeto possui uma propiedade dentro dele e retrona um booleano, true or false