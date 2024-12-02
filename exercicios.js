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



//Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!

//Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

//1 - Crie uma função que receba dois arrays e os concatene em um único array.


function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2); // Concatena os dois arrays
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray); // Saída: [1, 2, 3, 4, 5, 6]

//2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const numerosLindos = [1,2,3,4,5,6,7,8,9,10];

const parteNumeros = numerosLindos.slice(3,8);
console.log(parteNumeros);


//3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
//Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']

frutas.splice(2,2,`Kiwi`,`Pêssego`);
console.log(frutas);



//4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = [`Batata-Frita`,`Arroz`,`Ovo`];
const menuDeSobremesas = [`Brigadeiro`,`Maçã do Amor`];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);



//5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
//comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
//você pode resolver usando um for dentro de outro for.
const listaDimensionalVazia = [];
let contador = 1;

for(let i = 0; i < 3; i++){
  const linha = [];
  for(let j = 0; j < 3; j++){
    linha.push(contador);
  contador++
}
listaDimensionalVazia.push(linha);
}



console.log(listaDimensionalVazia);


//6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

console.log(listaDimensionalVazia[1][2]);


//7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

listaDimensionalVazia[2][1] = 15;
console.log('Matriz após adição de elemento:', listaDimensionalVazia);

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

//Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

//Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const codigoLoop = [1,2,3];
for(let numeros of codigoLoop){
  console.log(numeros);
}

const codigoLoopFor = [3,2,1];
for(let indice = 0; indice < codigoLoopFor.length; indice++){
  console.log(codigoLoopFor[indice]);
}



//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const arrayNumeros = function(arrayNumerosParam){
  for([indice, elemento] of arrayNumerosParam.entries()){
    console.log (`O indice é ${indice} e o elemento é ${elemento}`);
  }
}

const arrayNumerosExec = [4,5,6];
(arrayNumeros(arrayNumerosExec));


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



//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const arrayNumerosInt = function (arrayInteiros){
  const maior = Math.max(...arrayInteiros)
  const menor = Math.min(...arrayInteiros)
  return `O maior é ${maior} e o menor é ${menor}`
}

const arrayNumerosIntExec = [55,99,101,2000];
console.log(arrayNumerosInt(arrayNumerosIntExec));




//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const numerosPares = []
for(let indice of numeros){
  if(indice % 2===0){
    numerosPares.push(indice);
    numerosPares.sort((a, b) => a - b);            
  }
}
console.log(`Estes são os pares ${numerosPares}`)





//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const calculaMediaNumeros = function (arrayNumbers){
  let soma = 0;
  for( const numeros of arrayNumbers){
    soma += numeros;
  }
  return `A média entre os números é ${soma / arrayNumbers.length}`;
}
const numerosExec = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log(calculaMediaNumeros(numerosExec));


// Calcular a média usando forEach

const arrayMedias = [10,6.5,8,7.5];

let somar = 0;
arrayMedias.forEach(function(notas){
  somar += notas;
})

const media = somar / arrayMedias.length;

console.log(`A média das notas ${arrayMedias} é ${media}`);



//Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

//1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const arrayIndice = [10,20,30,40,50,55];

//o number devolve o elemento e o index devolve indice

arrayIndice.forEach((number, index)=>{
  return console.log(`O elemento ${number} tem como seu indice ${index}`)
});


//2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

const operaArray = function executaOperacaoEmArray(arr, callback){
  arr.forEach((numeros)=>{
    const resultado = callback(numeros)
    console.log(resultado)
  })
};

const meuArray2 = [10,20,30];

function somaMeunumero (num){
  return num+num
}
operaArray(meuArray2, somaMeunumero);




//3 - Você recebeu um array numeros contendo valores numéricos. 
//Crie um programa que verifique se um número específico está presente nesse array. 
//Se estiver, o programa deve retornar a posição (índice) desse número. 
//Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const encontrarIndice = function encontrarN(arrayZim, numeroQuero){
  const indice = arrayZim.indexOf(numeroQuero);
  return indice !== -1 ? indice : -1;
}

const arrayZim = [40,50,60,70,80,90];
const numeroQuero = 90;

const resultado = encontrarIndice(arrayZim, numeroQuero);
console.log(resultado);






//4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
//Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas.
// Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. 
//Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.


const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

 const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

 const encontrarAluno = function(array, nomeEncontrado){
  const resultado = array.find((nome)=> nome === nomeEncontrado)
  return resultado || `Não encontrado`;
 }

 const todosAlunos = todasAsTurmas;
 const nomeAluno = 'Carlos';
 console.log(encontrarAluno(todosAlunos, nomeAluno));
 





//5 - Considere um array de números inteiros.
//Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

const numerosCall = [6, 9, 12, 15, 18, 21];

numerosCall.forEach((number)=> console.log(number * 3));

const indiceElemento = (elemento) => elemento === 18;

console.log(numerosCall.findIndex(indiceElemento));


// Método filter()

//Filtrar números pares
//Você tem um array de números e precisa criar um novo array contendo apenas os números pares. Para isso, use o método .filter.
//Use o método .filter para filtrar os números pares.

const numerosPaares = [3, 8, 5, 12, 7, 10, 15, 6];

const numeroDivisel = numerosPaares.filter((numeroPaar)=> numeroPaar % 2 === 0);
console.log(numeroDivisel);

// Dominar o uso de arrays é fundamental em programação e uma base essencial na manipulação de dados. Praticar regularmente é a chave para se tornar mais confiante!

// Para isso criamos uma lista de exercícios que não apenas ajudam a explorar os métodos de manipulação de arrays, mas também vão te preparar para lidar eficientemente com dados em aplicações reais.

// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

const aceitoVarios = function(x,y,z){
  const combined = [...x,...y,...z]
  return combined;
}
const arrayTeste = [1,2,3,4,5]
const arrayTesteDois = [6,7,8,9,10]
const arrayTesteTres = [11,12,13,14,15]
console.log(aceitoVarios(arrayTeste,arrayTesteDois,arrayTesteTres));



// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.


const numerosArray = [16,17,18,19,20];

const somarTudo = function(arrayElementos){
  const soma = arrayElementos.reduce((acumular, elementos)=> acumular + elementos + 0)
  return soma
};

console.log(somarTudo(numerosArray));





// 3 - Considere duas listas de cores:
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

//const listaNomesAtualizados = [...new Set(nomes)];
//console.log(listaNomesAtualizados);

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const juntarTudo = function(arrayUM,arrayDois){
  const juntarArray = [...arrayUM, ...arrayDois]
  return juntarArray
}

const juntandoTudo = juntarTudo(coresLista1,coresLista2);
const listasAtualizadas = [...new Set(juntandoTudo)];
console.log(listasAtualizadas);





// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const arrayNumeral = function (numerosSo){
  const pegaPar = numerosSo.filter((elemento)=>elemento % 2 ===0)
  return pegaPar
 }
const arrayDePega = [2,4,5,7,8,10,12,24,555,57];
console.log(arrayNumeral(arrayDePega));



// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const arrayMultiplo = [3,10,15,27,9,36,33,47,49,55,56,53,93,90];

const filtroTres = function (arrayMultiplo){
  const pegaMultiplo = arrayMultiplo.filter((elemento)=>
    elemento % 3 === 0 && elemento > 5)
    return pegaMultiplo
  }


console.log(filtroTres(arrayMultiplo));



// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

const vouSomar = function (arrayPraSomar){
  const somando = arrayPraSomar.reduce((acumulador, numero)=> acumulador + numero, 0);
  return somando
}

const numerosPrasomar= [2,4,6,8,9,10];
console.log(vouSomar(numerosPrasomar));


//Usando a representação do objeto pessoa, 
//foi solicitado que adicionássemos os campos seguro social e cpf 
//no formato string. 
//Além disso, quando forem exibidas as informações da 
//pessoa em um relatório, deverão aparecer somente os 
//4 primeiros dígitos do CPF e da carteira de identidade


const pessoa = {
  nome: "Bruce Banner",
  dataNascimento: "25/01/1980",
  carteiraIdentidade: "997776-X",
  email: "profbanner@email.com",
  telefone: "+552877776666",
  cidade: "Cachoeiro de Itapemirim",
  estado: "ES"
}

pessoa.seguroSocial = '109876543';
pessoa.cpf = '1234567891011';
pessoa.cpf.substring(0,4);
pessoa.carteiraIdentidade.substring(0,4);

console.log(pessoa.cpf.substring(0,4));
console.log(pessoa.carteiraIdentidade.substring(0,4));

//Criamos uma lista de exercícios para você colocar em prática tudo que aprendemos durante essa aula.

//1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
//No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.


const livro2 = {
titulo : "A praia sensual",
autor: "OtiroCerteiro",
anoPublicacao: 1999,
genero: "nude"
}

console.log(livro2['titulo'])

//2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
//Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
//Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
//Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
//Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
      // Cria a variável anoAtual com o ano atual
const anoAtual = new Date().getFullYear();

const livro = {
  titulo: "A praia sensual",
  autor: "OtiroCerteiro",
  anoPublicacao: 1999,
  genero: "nude"
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;
const mostrarDetalhes = `O título do livro é "${livro.titulo}", o autor é ${livro.autor}, foi publicado no ano de ${livro.anoPublicacao}, pertence ao gênero ${livro.genero}, e já fazem ${livro.idadePublicacao} anos desde sua publicação.`;
console.log(mostrarDetalhes);
    
    
//3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, 
   // utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

   console.log(livro['titulo']);
   console.log(livro['autor']);
   console.log(livro['anoPublicacao']);

//4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 

const livro204 = {
  titulo: "A praia sensual",
  autor: "OtiroCerteiro",
  anoPublicacao: 1999,
   genero: "nude",
   idadePublicacao: "idadePublicacao",
};
livro204.idadePublicacao = anoAtual - livro.anoPublicacao;
console.log(livro204);

    //Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
    livro204.avaliacao = null;
    
    //No final do arquivo livro.js, adicione uma avaliação ao objeto.
      //Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
        // Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
    if (livro204.avaliacao === null) {
      livro204.avaliacao = 7.5; 
      console.log("Uma avaliação foi atribuída ao livro.");
    } else {
      console.log("O livro já possui uma avaliação.");
    }
    console.log(livro204);
  

//5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
     

    const livro205 = {
      titulo: "Passado",
      autor: "Futurama",
      anoPublicacao: 2021,
      genero: "Indie",
      idadePublicacao: anoAtual - 'anoPublicacao'
    };
    livro205.idadePublicacao = anoAtual - livro205.anoPublicacao;
    console.log(livro205);
  //Depois altere o gênero do livro para "Aventura".
    livro205.genero = "Aventura";
    console.log(livro205);


//6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
    //Em seguida, exclua a propriedade avaliacao do objeto livro. 
    //Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente. */
    delete livro204['avaliacao'];
    console.log(livro204);



    const cliente = {
      nome: "Jose",
      idade: 33,
      email: "jose@email.com",
      telefones: ["+550033338888", "+550033334444"]
    };
    
    cliente.animalEstimacao = [{
      nome: "Kripto",
      raca: "Cão",
      vacinado: true
    }];
    
    cliente.animalEstimacao.push({
      nome: "Lex",
      raca: "Gato",
      vacinado: false
    })

    //para filtrar  array objetos usamos

    const caes = cliente.animalEstimacao.filter(animal=> animal.raca ==="Cão");
    caes.forEach(cao => console.log(cao));
    