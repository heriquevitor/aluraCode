const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
//criar a const para receber a sala 1

const sala1 = listaEstudantes.slice(0,listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

// o indice do começo é incluido, quando o indice é o final ele não entra.
// Ou seja o final se você quiser o item 10 tem que passar ate 11;
//O slice cria outros arrays

console.log(sala1);
console.log(sala2);