//nomes repetidos tirar fora
// poderiamos fazer com for
// usar o set

const nomes = ['Ana','Clara','Maria','Maria','João','João','João',]

// ele criar um conjunto, ou seja, valores únicos
// tipo de dado array like, ou seja, não é um array
// metodos de array n funciona neles
const nomesAtualizados = new Set(nomes);
console.log(nomesAtualizados);
// para utilizar ela, precisamos transformar o conjunto em um array
// criar outra variavel, usar o spread e nomeconjunto

const listaNomesAtualizados = [...nomesAtualizados];
console.log(listaNomesAtualizados);


// podemos também fazer direto

//const listaNomesAtualizados = [...new Set(nomes)];
//console.log(listaNomesAtualizados);

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set