const estudante = {
  nome: 'Jose Silva',
  idade: 32,
  cpf: '1234567891011',
  turma: 'javaScript'
}

// acessar info dos objeto
// usamos notação de ponto
// composto sempre chave e valor

console.log(estudante.nome);
console.log(`o nome do estudante é ${estudante.nome}`);
console.log(`os tres primeiros numeros do CPF são ${estudante.cpf.substring(0,3)}`);

