const alunos = ['Ana','Marcos','Maria','Mauro'];
const medias = [7,4.5,8,7.5];
    //array que eu quero filtrar(alunos), 
    //filtro tb callback, ai chamamos outra função(aluno)
    // ai colocamos return pra ele jogar pra fora
    // o filter vai retonar true ou false
    // filter sempre retonar um array como map
    // com valor se for true ou vazio se não passar
    // pra gente relacionar os dois array, alunos e medias
    //filter, map, foreach é só adicionar segundo parametro
    //que sera o indice, com isso, a cada iteração
    // vai retonar nome + indice
    // Podemos _ colocar para ignorar o parametro q n usamos
    //Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no novo array, e quando 
    //ela retorna falso, ou false, o elemento é descartado.
const reprovados = alunos.filter((_, indice)=>{
  return medias[indice] < 7;
})

console.log(reprovados);