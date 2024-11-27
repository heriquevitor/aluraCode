const salaJs = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];


function calculaMedia(listaDeNotas){
  // SERVE PARA REduzir todos os elementos em um único
  //laço reduce, primeiro parametro é acumulador, elementoqestasendoiterado
  // pós função, devemos passar a outra iteração
  const somaDasNotas = listaDeNotas.reduce((acumulador, nota)=>acumulador + nota, 0);

  const media = somaDasNotas / listaDeNotas.length;
  return media;
}

console.log(calculaMedia(salaJs));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce