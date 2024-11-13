function exibirNomeEstudante(nome, nota){
  return `o nome é ${nome} e a nota é ${nota}`;
}

const mensagem = exibirNomeEstudante("Herique", 11);
console.log(mensagem);
console.log(exibirNomeEstudante(`Herique`, 10));