/**
 * O acessor methdos quando invocados retornam informações
 * especificas sobre o array
 * 
 * indexOf => retorna a primeira posição do elemento encontrado
 * lastIndexOf => Retorna a posição do ultimo elemento encontrado
 * includes => retorna true se o elemento existir
 * concat => retorna um no vo array resul da concatenação de um ou mais   arrays
 * slice => rertorna as partes de um determinado array  de acord com a posição de inicio e fim
 * join =>converte o array para uma String , juntando os elementos com base  em um separador 
 * 
 * 
 */

const languages = ["Python","C","Java"];

console.log(languages.indexOf("Python"))
console.log(languages.lastIndexOf("Python"))
console.log("==========================================================")

console.log(languages.includes("C"));
console.log("==========================================================")

const  ooLanguages = ["Smalltalk","C++","Simula"]
const funcionalLanguages = ["Haskell","Scheme"]

const languages1 = [].concat(ooLanguages,funcionalLanguages)
console.log(ooLanguages)
console.log(funcionalLanguages)
console.log(languages1);
console.log("==========================================================")

const languages2 = ["Smalltalk","C++","Simula","Haskell","Scheme"]
console.log(languages2.slice(0,2));
console.log(languages2.slice(2,4));
console.log(languages2.slice(1));
console.log("==========================================================")

const languages2 = ["Smalltalk","C++","Simula","Haskell","Scheme"]
console.log(languages2.join(";"))








