const estudante = {
  nome: 'José da Silva',
  idade: 32,
  cpf: '1234567891011',
  turma: 'JavaScript'
}

//A notação de ponto só serve quando sabemos os valores

// A notação de colchete serve para os casos q n temos os valores ou n sabemos c vai ter

const exibeInfoEstudante = function (objEstudante, infoEstudante){
  return objEstudante[infoEstudante]
}
// usando []

console.log(estudante['nome']);
console.log(estudante['cpf']);

//usando  ()
console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'))