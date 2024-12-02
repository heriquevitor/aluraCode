const estudante = {
  nome:'José Silva',
  idade: 32,
  cpf: '1234567891011',
  turma: 'javaScript'
}


// Diferente do array o objeto não é ordenado
// as manipulações são pelas chaves

// para adicionar alguma chave e valor

estudante.telefone = '856666666'

// Isso tb serve para alterar propriedades que existem

// pode criar const com objeto vazio e depois ir atribuindo


// para deletar

delete estudante.turma;

delete estudante['cpf']

console.log(estudante);


