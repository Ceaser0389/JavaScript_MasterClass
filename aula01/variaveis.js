/*
declaração : o nome  da variável é registrado no contexto  de execução, tbm conhecido como escopo da função 
inicialização: A variável  é inicializada com o valor undefined ( n tem valor definido)
Atribuição:Um valor  é atribuido  para a variável
VAR , a variável  é declarada  e inicializada no escopo de função, não respeitando bloco e permitindo a redeclaração  e reatribuição
*/


var pi = 3.141592
console.log(pi)
//var pi = 3;
//console.log(p1) // redeclaração e reatribuição

/*
if(true){
    var pi= 3.14592
}
console.log(pi)
*/

/*
Ao  utilizar o LET,  a variável é declarada  no escopo  da função  mas só é inicializada posteriormente, respeitando  bloco  e permitindo reatribuição mas não redeclaração
*/

//let pi = 3.141592
//console.log(pi);
//pi = 3;
//let pi =5;


//if(true){
 //   let pi =3.141592; // aki ela tá restrita ao bloco
//}
//console.log(p1);


/* 
Ao usar CONST , a variável é declarada  no escopo da função mas só é inicializada posteriormente , respeitando bloco e não permitindo reatribuição nem redeclaração
*/

//const pi = 3.141592;
//console.log(p1)
//pi=3 não deixa reatribuir 
// const pi não deixa redeclarar
// 

/* ao declarar  uma variável sem var , let ou const ela é criada  no escopo global 
um identificador  válido  deve começar  com [a-zA-Z_$]
seguido por [a-zA-ZO-9_$]

let name123
let Name123
let _name123
let $name123
*/ 
// no dia a dia usa-se let ou const(valores finais)