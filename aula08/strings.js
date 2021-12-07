/* O tipo string é primitivo , imutável e é representado internamente pelo padrão unicode , codificado em UTF-16 (cada string ocupa 16 bits)
exixtem 3 formas de declarar string em forma literal: aspas simples '' aspas duplas "" ou acento grave `` 
tbm é possível  declarar uma string por meio de uma função construtora 
tipo primitivo pode sofrer operação de box
alguns tipos de caracteres não são  permitidos  e precisam ser  escapados
existem tbm caracteres de controle  que podem  ser utilizados  para quebrar  linhass , aumentar identação e entre  outras coisas

\b Backspace 
\f form feed
\n new line
\r carriege return
\t horizontal tabulator
\v vertical tabulator

é possível escrever vcaracteres utilizando seu code point no padrão Unicode
*/

console.log('JavaString')
console.log("JavaString")
console.log(`JavaString`)


let counter = 0;

console.time("performance")  // grava um time milesegundos
while(counter <1000){
    new String('Js');
    counter++
}
console.timeEnd("performance")