//Programação é prática! Criamos mais uma lista de atividades (não obrigatórias) para você exercitar e reforçar ainda mais seu aprendizado. Bora praticar?
//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
const respostasDev = "Aqui esta o resultado da questão:\n";
let primeira = "Eu sou uma stringa";
let segunda = 10;
let terceira = true;
console.log(respostasDev);
console.log(`A primeira opção é uma string ${primeira}, já a segunda opção é um número ${segunda} e a terceira um booleano ${terceira}`);
console.log(typeof(primeira),typeof(segunda), typeof(terceira));


//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
console.log(respostasDev);
let nome = "Herique"
let sobreNome = "Oliveira"
let nomeSobrenome = nome + sobreNome;
let diferente = `Nome é ${nome} ${sobreNome}`;  
console.log(nomeSobrenome);
console.log(diferente);


//Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
console.log(respostasDev);
let temNumero = 22;
let temString = "Minha idade";
let combinaVariavel = `Essa é a variavél do número, contendo ${temNumero}, e essa é a variavel da string contendo ${temString}`;
console.log(combinaVariavel);




//Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
console.log(respostasDev);
let variavelVariada = 10;
variavelVariada = "Letra de amor";
console.log(variavelVariada, variavelVariada)


//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

console.log(respostasDev);
let choveChuva = true;
if(choveChuva === true){
  console.log("Levar guarda-chuva pois vai chover")
} else{
  console.log("Não precisa levar o guarda-chuva");
}
console.log(choveChuva);