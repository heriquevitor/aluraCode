// quando a gente faz a instância podemos alterar separadamente o que precisamos

const objPersonagem = {
  nome: 'Gandalf',
  classe: 'Mago',
  nivel: '20'
};


// instanciar preciamos usar o método object.create()
//o personagem 2 é uma instancia do 1
const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = 'Saruman'


console.log(objPersonagem);
console.log(objPersonagem2);
