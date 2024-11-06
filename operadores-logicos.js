const notaFinal = 7;
const faltas = 2;
const advertencias = 0;

if(notaFinal < 7 && faltas > 4){
  console.log(`rep`);
} else{
  console.log(`não foi reprovado por falta`)
}

if(faltas >=2 && !advertencias){
  console.log(`Recebeu bonus`);
} else{
  console.log(`Não recebeu bonus`)
}


