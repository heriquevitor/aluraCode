const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota){
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

//devolve undefined, ou seja ele n retorna nada// 

// o parametro do foreach é uma função
//(function)(nota){}})