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

//Bora praticar?

//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldoBanco = 39000000;
let depositoBanco = 1000000;
let saque = 2900000; // Valor do saque como número, sem formatação

// Calcula o saldo após o saque e o depósito
let saldoBancoFinalSaque = saldoBanco - saque;
let saldoBancoFinalDeposito = saldoBancoFinalSaque + depositoBanco;

// Formata os valores para exibir na mensagem final
let saldoBancoFormatado = saldoBanco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
let saqueFormatado = saque.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
let depositoBancoFormatado = depositoBanco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
let saldoBancoFinalSaqueFormatado = saldoBancoFinalSaque.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
let saldoBancoFinalDepositoFormatado = saldoBancoFinalDeposito.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(`Hoje meu saldo quando acordei era ${saldoBancoFormatado}. Fui pagar as contas e efetuei um saque de ${saqueFormatado}, ficando com o saldo de ${saldoBancoFinalSaqueFormatado}. Fiz então o depósito de ${depositoBancoFormatado}, ficando com saldo final de ${saldoBancoFinalDepositoFormatado}`);



//Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
let numeroUm = 56
let operadorTemplario = numeroUm % 2 === 0 ? `O numero é par`: `O número é impar`
console.log(operadorTemplario);
//Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

const usuarioAdministrador= `Herique`;
let usuarioLogado = `Herique`;
if(usuarioAdministrador === `Herique`){
  console.log(`Bem vindo senhor Administrador`);
  
} else{
  console.log(`Bem vindo usuario padrao`);
}

const digitoFuncionalidade = 1;
if(usuarioLogado === usuarioAdministrador && digitoFuncionalidade === 1){
  console.log(`Geladeira aberta`);
}else{
  console.log(`Você não tem permissão`);
}

//Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
const variavel1 = 1;
const variavel2 = false;
let variavel3;

if(variavel1 == true){
  console.log(`Essa é verdadeira`);
} else{
 console.log(`Essa é falsa`);
}
if(variavel2 == 0){
  console.log(`Essa é falsa pelo Falsy`);
} else{
 console.log(`Essa é Verdadeira da Shoopee`);
}
if(variavel3 == null){
  console.log(`Essa é falsa pelo falsy`);
} else{
 console.log(`Essa é Verdadeira da Shopee2`);
}

if(variavel1 == 1 || variavel3 == null){
  console.log(`Ambas são verdadeiras, lembrando que funcionaria mesmo se uma apenas fosse verdade`);
}


//Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.


const idadeSufi = 18;

let idade = 22;
// Usando o operador ternario
const podeComprar = idade >= idadeSufi ? `Pode comprar`: `Infelizmente não pode comprar`;
console.log(podeComprar);
// Usando o if e else

if(idade >= idadeSufi){
  console.log(`Pode comprar`);
}else{
  console.log(`Infelizmente não pode comprar`);
}