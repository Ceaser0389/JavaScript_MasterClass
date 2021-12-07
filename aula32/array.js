/**
 * Um array é penas um objeto que oferece operações p acessar
 * e manipular suas propriedades
 * 
 * é possivel inicializar passando apenas um number para a função 
 * construtora
 * 
 * a prop length indica a qtd  de elementos q existem dentro do array
 * 
 * os elementos vazios dentro do array n~ são considerados no length
 */

const languages = ["Python","C","Java"];
console.log(languages);

//const languages = new Array("Python","C","Java")

const numbers = new Array(10);
console.log(numbers);

const languages1= [];

languages1[0] = "Python"
languages1[1] = "C";
languages1[2] = "Java"

console.log(languages1.length);

delete languages[1];
console.log(languages);
console.log(languages.length)