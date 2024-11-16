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

//Programação é prática! Criamos mais uma lista de atividades (não obrigatórias) para você exercitar e reforçar ainda mais seu aprendizado. Bora praticar?

//Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

// Declaração de Função
function recebeNome(nome){
  return `Olá, querido ${nome}`
}
console.log(recebeNome(`Herique`));
//Expressão de função
const rebeceNome2 = function(nome2){
  return `Olá, querido ${nome2}` 
}
console.log(rebeceNome2(`Herique2`));

//Arrow Function

const receberNome3 = (nome3) =>{
  return `Olá, querido ${nome3}` 
}

console.log(receberNome3(`Herique3`));

//Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.


// Declaração de Função
 function idadeMaior (idade){
  if(idade >= 18){
    return `Parabéns você tem ${idade} e é maior`
  } else
  return `Parado`;
 }
console.log(idadeMaior(15));

//Expressão de função
const idadeMaior2 = function (idade2){
  if(idade2 >= 18){
    return `Parabéns você tem ${idade2} e é maior`
  } else
  return `Parado`;
}
console.log(idadeMaior2(18));
//Arrow Function só para Treinar

const idadeMaior3 = (idade3) =>{
  if(idade3 >= 18){
    return `Parabéns você tem ${idade3} e é maior`
  } else
  return `Parado`;
}
console.log(idadeMaior3(17));


//Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

// Declaração de Função

function palindromo(string){
  const limpaString = string.replace(/\s+/g, '').toLowerCase();
  return limpaString === limpaString.split("").reverse().join("");
  
}
console.log(palindromo(`radarr`));

//Expressão de função

const palindromo2= function(string){
  const limpaString2 = string.replace(/\s+/g,"").toLocaleLowerCase();
  return limpaString2 === limpaString2.split("").reverse().join("");
}
console.log(palindromo(`radar`));
//Arrow Function

const palindromo3 = (string) =>{
  limpaString3 = string.replace(/\s+/g+"").toLocaleLowerCase();
 return limpaString3 === limpaString3.split("").reverse().join("");
}
console.log(palindromo3(`radar`));


//Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

// Declaração de Função

function recebeNumeros(number1,number2,number3){
  if(number1 > number2 && number1 > number3){
    return `O maior é o número ${number1}`
  } else if(number2 > number1 && number2 > number3){
    return `O maior é o número ${number2}`
  } else if(number3> number1 && number3 > number2){
    return `O maior é o número ${number3}`
  }else{
    return `São iguais`;
  }
}
console.log(recebeNumeros(5,5,5));

//Expressão de função
const recebeNumeros2 = function(number1,number2,number3){
  if(number1 > number2 && number1 > number3){
    return `O maior é o número ${number1}`;
  } else if(number2 > number1 && number2 > number3){
    return `O maior é o número ${number2}`;
  } else if(number3 > number2 && number3 > number1){
    return `O maior é o número ${number3}`;
  } else{
    return `São todos iguais`
  }
}

console.log(recebeNumeros2(10,5,20));


//Arrow function

const recebeNumeros3 = (number1, number2, number3)=>{
  if(number1> number2 && number1 > number3){
    return `O maior é o número ${number1}`;
  } else if(number2 > number1 && number2 > number3){
    return `O maior é o número ${number2}`;
  } else if(number3 > number1 && number3 > number2){
    return `O maior é o número ${number3}`;
  } else{
    return `São todos iguais`
  }
}

console.log(recebeNumeros3(15,25,30))



//Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
// o operador ** so é aceito nas versões mais novas

const calculaPotencia = (base, expoente)=>{
  const potencia = base ** expoente;
  return `O resultado da potencia de ${base}, elevada a ${expoente} é igual a ${potencia}.`;
}

console.log(calculaPotencia(2,3));


//Arrays


//Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!
//Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

//Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

const mininoEsparso = [,,,,,,,,];
console.log(mininoEsparso);
mininoEsparso[1] = 10;
mininoEsparso[3] = 15;
mininoEsparso[7] = 18;
console.log(mininoEsparso.length);
console.log(mininoEsparso);


//Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

const iniciaElementos = [5, `linda`, true, 8, 9.5];
console.log(iniciaElementos);
iniciaElementos[0] = 98
console.log(iniciaElementos);


//Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
 const meuArray = [];
 meuArray.push(10,20,30);
 console.log(meuArray);
 meuArray[0] = 100;
 console.log(meuArray);



//Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

const vazioSim = [];
vazioSim.push(55,56,57)
console.log(vazioSim);


//Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

const clinica = [];
clinica.push(`Dara`, `Zeus`, `Mel`);
console.log(clinica);
clinica.pop();
clinica.pop();
clinica.pop();
console.log(clinica);


//Agora tente fazer um exercício:
//Crie um array com os números [5, 10, 15, 20].

//Use um for para mostrar os índices e os valores.
//Use um for...of para mostrar apenas os valores.


const numeros = [5, 10, 15, 20];

// Usando o for tradicional
for (let indice = 0; indice < numeros.length; indice++) {
  console.log(`Índice ${indice}: ${numeros[indice]}`);
}

// Usando o for...of
for (const numero of numeros) {
  console.log(`Número: ${numero}`);
}


/*Desafio 1: Soma dos números
Dado o array const numeros = [5, 10, 15, 20];
some todos os valores do array usando um for e 
depois usando um for...of.*/

const numeros3 = [5,10,15,20];
let soma = 0;
for(let indice = 0; indice < numeros3.length; indice++){
  soma += numeros3[indice];
}
console.log(soma);
let soma2 =0;
for (num of numeros3){
soma2 += num;
}
console.log(soma2);



//Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!
//Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, 
//mas também vão te preparar para lidar eficientemente com dados 
//em aplicações reais.

// Escreva um código que utilize o loop for/of para iterar e 
// imprimir cada elemento de um array.

     const n1 = [10,55,56,80,33];
     let number1 = 0;
     for(i = 0;i < n1.length; i++){
        console.log(n1[i]);   
     }
    
     for (indice of n1){
      console.log(indice);
     }




// Crie uma função que receba uma array e imprima no console o 
// número do índice e o elemento.

const funcionaArray = function(array69){
  for (i=0; i < array69.length; i++){
    console.log(`o indice equivale a ${i} e o numero ${array69[i]}`);}
}

const numeros69 = [99,88,77,66,55];
funcionaArray(numeros69);


//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

let soma70 = 0;
const funcionaArray2 = function (array70){
  for (i=0; i < array70.length; i++)
    soma70 += array70[i];
  console.log(`A soma dos números é : ${soma70}`);
}
 const numeros70 = [3,6,1];
 funcionaArray2(numeros70);

//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, 
//no seguinte formato: 'o menor número é X e o maior número é Y'.

const funcionaArray3 = function(array71){
  const menor = Math.min(...array71);
  const maior = Math.max(...array71);
  return {menor, maior};
}

const numeros71 = [10, 5, 20, 8, 15];
const resultado = funcionaArray3(numeros71);
return console.log(`O menor valor é: ${resultado.menor} e o maior valor é: ${resultado.maior}`);

//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.






//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.