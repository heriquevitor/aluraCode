//Programação é prática! Criamos mais uma lista de atividades (não obrigatórias) para você exercitar e reforçar ainda mais seu aprendizado. Bora praticar?
//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
const respostasDev = "Aqui esta o resultado da questão:\n";
const primeira = "Eu sou uma stringa";
const segunda = 10;
const terceira = true;
console.log(respostasDev);
console.log(`A primeira opção é uma string ${primeira}, já a segunda opção é um número ${segunda} e a terceira um booleano ${terceira}`);
console.log(typeof(primeira),typeof(segunda), typeof(terceira));


//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
console.log(respostasDev);
const nome = "Herique"
const sobreNome = "Oliveira"
const nomeSobrenome = nome + sobreNome;
const diferente = `Nome é ${nome} ${sobreNome}`;  
console.log(nomeSobrenome);
console.log(diferente);


//Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
console.log(respostasDev);
const temNumero = 22;
const temString = "Minha idade";
const combinaVariavel = `Essa é a variavél do número, contendo ${temNumero}, e essa é a variavel da string contendo ${temString}`;
console.log(combinaVariavel);




//Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
console.log(respostasDev);
let variavelVariada = 10;
variavelVariada = "Letra de amor";
console.log(variavelVariada, variavelVariada)


//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

console.log(respostasDev);
const choveChuva = true;
if(choveChuva === true){
  console.log("Levar guarda-chuva pois vai chover")
} else{
  console.log("Não precisa levar o guarda-chuva");
}
console.log(choveChuva);


//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const temFrase = `Aqui tem uma frase`;
const comprimentoSemEspaco = temFrase.replace(/\s/g,"").length;
console.log(`comprimento com espaços em branco é: ${temFrase.length}`);
console.log(`comprimento sem espaços em branco é: ${comprimentoSemEspaco}`);
console.log(temFrase.toLocaleUpperCase());


//Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

const variandoNu = null;
let variandoUnd;
console.log(variandoNu);
console.log(variandoUnd);
console.log(typeof variandoUnd)
if(variandoNu === null){
  console.log(`a variavel ${variandoNu} é null`);
}

//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const papelAzul= `Aqui é azul`;

const papelAmarelo = 5.55

const papelPreto= true;

let papelRosa;

console.log(typeof papelAzul,papelAmarelo,papelPreto,papelRosa);
console.log(`O papel azul é ${papelAzul} do tipo: ${typeof papelAzul}`);
console.log(`O papel amarelo é ${papelAmarelo} do tipo: ${typeof papelAmarelo}`);
console.log(`O papel preto é ${papelPreto} do tipo: ${typeof papelPreto}`);
console.log(`O papel rosa é ${papelRosa} do tipo: ${typeof papelRosa}`);

//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

let numeroAqui = 1;

let fraseAqui = `2`;

let numeroConvertido = String(numeroAqui);

let fraseConvertido = Number(fraseAqui);
let fraseConvertido2 = parseInt(fraseAqui);

console.log(numeroConvertido);
console.log(fraseConvertido);
console.log(fraseConvertido2);

//Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

let brincaString = `Minha cachorra é linda`;

console.log(brincaString.toLocaleUpperCase());
console.log(brincaString.toLocaleLowerCase());
console.log(brincaString.slice(6,14));
console.log(brincaString.substring(1,5));
