/*
length:  retorna o tamanho da string
indexOf: retorna a 1 posicaão parassada por parametro 
lstIndexOf: retorna a ultima posição passada por parametro
toUpperCase: converte para letras maiusculas 
toLowerCase: converte para letras minusculas
charAt:  retorna o caractere na posição passada por parametro
charCodeAt: retorna o código com base na posição passada por parametro
fromCharCode: retorna um caractere com base  no código  passado por parametro

includes: retorna verdadeiro se a string  contém a string pass p parametro
startsWith: retotna verdadeiro se a string inicia com a string passada p parametro
endsWith:  retorna true se a string termina com a string passada por parametro 
localeCompare:(comparação com duas strings) retorna -1 se a String  passada por parametro for maior, 0 se for  igual a e 1 se for menor

match: retorna partes de uma string  com base na  RegExp passada por parametro
search: retorna a primeira  posição encontrada com base  na RegExp passada por parametro
replace: retorna uma nova string resultante da substitução da String  ou RegExp  passada no primeiro  parametro pelo segundo parametro

slice: retorna uma parte da string (coloca o inicio e o fim)
split: retorna  um arry contendo  o resultado da divisão da string original de acordo  com critério  passado por parametro (divide a string)
substring:Similar ao slice, não aceita valores  negativos  como parametro  e permite  a inversão  dos parametros 

concat: retorna uma  uma nova string resultante da concatenação  da que  está invocando a função  e  outra ,passada por parametro
padStart:Completa a string  com caracteres no fim
rapeat:  repete caractere
trim: elimina  espaços  em branco  no inicio e no fim
trimleft: elimina espaços em branco no inicio
trimRight: elimina espaços em branco no fim 

*/

let name = "javaScript".length
console.log(name)

let name1= "javaScript".indexOf("c");
console.log(name1)

let name2= "javaScript".lastIndexOf("r");
console.log(name2)

let name3 = "javaScript".toLocaleUpperCase()
console.log(name3)

let name4 = "javaScript".toLowerCase()
console.log(name4)

let num = "javaScript".charAt(4)
console.log(num)

let num2 = "javaScript".charCodeAt(4);
console.log(num2);

let exemplo="javaScript".includes('java')
console.log(exemplo)

let exemplo1="javaScript".startsWith('r')
console.log(exemplo1)

let exemplo2="javaScript".endsWith('t')
console.log(exemplo2)


let comparacao ="C#".localeCompare("Java")
console.log(comparacao)
let comparacao1 ="C#".localeCompare("C#")
console.log(comparacao1)
let comparacao2 ="java".localeCompare("C#")
console.log(comparacao2)

"C++".match(/\+/g)
"java".search(/a/)
"javaScript".replace(/a/g,4)

let texto = "JavaScript".slice(0,4);
console.log(texto)
let texto1 = "JavaScript".slice(0,-6); // negativo vai ao contrario
console.log(texto1)
let texto2 = "JavaScript".slice(-6); // vai de trás p frete
console.log(texto2)

let text ="C,C++,C#,Java,JacaScript,Python,Node".split(";") // me retorna um array com as quebras
console.log(text)
                      
let text1 = "java".substring(0,4);
console.log(text1)
let text2 = "java".substring(4,0);
console.log(text2)
let text3 = "java".substring(4)
console.log(text3)


let ex1 ="java".concat("Script")
console.log(ex1)

// numeoto total + oque vc completar
let ex2 = "Script".padStart(10,"java")
console.log(ex2)

let ex3 = "C".concat("+".repeat(2))
console.log(ex3)

let ex4 = " self ".trim();
console.log(ex4)

