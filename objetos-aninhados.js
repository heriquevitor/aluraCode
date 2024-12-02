const estudante = {
  nome: 'José da Silva',
  idade: 32,
  cpf: '1234567891011',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['41854848948','999999999'],
};

//se precisamos deixar mais complexo
// o endereço por exemplo, n da no array
// criamos então outro objeto
//para acessar estudante.endereco.rua etc
// porque o estudante nao tem rua!! lembra da vida real
// dados diferentes do mesmo contexto usamos objetos
// se for dados iguais do mesmo tipo e mais complexsos ver lista-objetos
// dados iguais array


estudante.endereco = {
  rua:'Rua Joseph Climber',
  numero: '', //porque pode ter letras
  complemento: 'apto 43',
};
