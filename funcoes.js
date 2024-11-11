/*function exibirNomeEstudante(nome, nota){
  return `o nome é ${nome} e a nota é ${nota}`;
}

const mensagem = exibirNomeEstudante("Herique", 11);
console.log(mensagem);
console.log(exibirNomeEstudante(`Herique`, 10));*/

function calculaProduto(a, b = 2, c = 1) {
  return a * b * c;
}

const resultado1 = calculaProduto(3);
const resultado2 = calculaProduto(2, 4);
const resultado3 = calculaProduto(1, 2, 3);
const resultado4 = calculaProduto(2, NaN, 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);