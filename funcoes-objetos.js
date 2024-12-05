const estudante = {
  nome: 'José da Silva',
  idade: 32,
  cpf: '1234567891011',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['41854848948','999999999'],
  media:  7.7,
  //passamos aqui uma função q da comportamento
  // o this utiliza para fazer referencia ao contexto da funcao
  // a media daqui, deste objeto
  // se tirar o this ele nao sabe qual media é....
  // o arrow function n consegue lidar com contexto
  // n da pra usar no objeto com this
  //tem que declarar igual abaixo
  estaAprovado: function(mediaBase){
    return this.media >= mediaBase ? true: false
  }
};