// exibir um atributo
let nokia = {
    nome: "Modelo x",
    fabricação: 1980,
    vendas: 20000,
    cor: "vermelho",
};
// console.log(nokia.nome);
// Modelo x


// ---------------------------------
// incluir um atributo com duas maneiras
nokia.pais = "Brasil";
// console.log(nokia);
nokia["material"] = "aço inox";
// console.log(nokia);


// ------------------
// excluir um atributo e seu valor atrelado
delete nokia.nome;
console.log(nokia);

// IN propiedade usada para retornar um valor booleano se existir a propiedade dentro do objeto

console.log("vendas" in nokia);

