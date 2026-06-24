// Metodos nativos string

// .toUpperCase - imprime em caixa alta
let meuTexto = "olá olá mundo"
console.log(meuTexto)
console.log(meuTexto.toUpperCase())
// .toLowerCase - imprime em caixa baixa
console.log(meuTexto.toLowerCase())
//  usar sempre () no final para executar a funcaom, algumas vao precisar de argumentos

// **************\\

// fatiar parte de uma string, cortando o resto, aqui usamos dois argumentos - start e end ---- acieta numeros negativos -- nao reogarniza ordem dos argumentos
console.log(meuTexto.slice(7,2))
// extrai o texto - bem parecido com o slice - mas aqui estamos apenas extraindo, nao cortando o texto
console.log(meuTexto.substring(7,2))

// part 2
// replace - substitui uma palavra ou caractere (Utiliza dois parametros. 1 - de busca e o 2 com o que vamos substituir) sempre pega a primeira ocorrencia e continua o texto  enao substitui o valor real da string
console.log(meuTexto.replace("olá","teste"));

// indexOf - verifica o indice e00m que comeca a ocorrencia e retorna o indice e quando nao encontra ele retorna - 1, sempre tras a primeira ocorrencia 
console.log(meuTexto.indexOf("mundo"))


// part 3 
// split - transforma a sring em array. usando dois paramentros (delimitador, limite(opcional))

let meuTextoArray = meuTexto.split(" ")
console.log(meuTextoArray)

// splice
