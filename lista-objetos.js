const estudante = {
  nome: 'José da Silva',
  idade: 32,
  cpf: '1234567891011',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['41854848948','999999999'],
  endereco: [{
    rua:'Rua Joseph Climber',
    numero: '', //porque pode ter letras
    complemento: 'apto 43',
  }]
};

//podemos ter listas de objetos
//por exemplo, cursos que cursou, endereços
estudante.endereco.push({
  rua:'Rua Dona Clotilde',
    numero: '71', 
    complemento: '',
});

//console.log(estudante.endereco);
//console.log(estudante.endereco[0]);

//string vazia é false
// null tb false

const listaEnderecos = estudante.endereco.filter((endereco)=> endereco.complemento)
console.log(listaEnderecos);

