//metodo map é tb callback(função chama função)

const notas = [10,9.5,8,7,6];

const atualizarNotas = notas.map((notas)=> notas + 1);
console.log(atualizarNotas);