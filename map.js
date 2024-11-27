//metodo map é tb callback(função chama função)
// Se eu preciso que o resultado retorne uso map

const notas = [10,9.5,8,7,6];

const atualizarNotas = notas.map((notas)=> notas +  1 >= 10 ? 10 : notas + 1 );
console.log(atualizarNotas);