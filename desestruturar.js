const alunos = [`João`,`Juliana`,`Caio`,`Ana`];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
  if(lista[0].includes(aluno)){
    const [alunos, media] = lista;
    const indice = lista.indexOf(aluno);
    const mediaAluno = medias[indice];
    console.log(`${aluno} tem a média de ${mediaAluno}`);
  } else{
    console.log(`Estudante não existe.`);
  }

}

exibeNomeENota(`Juliana`);
exibeNomeENota(`Vini`);

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const arrayNumerosInteiros = function(arrayNumerosParamSoma){
  let soma =0;
  for( const [indice, elementos] of arrayNumerosParamSoma.entries()){
   soma += elementos;
   console.log(`O indice é ${indice}, e os elementos somados são: ${elementos}`)
  }
  return `O resultado da soma é: ${soma}`;
}
const arrayNumerosExecSoma = [50,50,50];
console.log(arrayNumerosInteiros(arrayNumerosExecSoma));