/** uma função é um objeto que contém um bloc de códico executável  

declaration  vc pode invocar de forma diferente, pois ela é pre carregada no contexto de execucao 
expression 

na linguagem javasript , as funções são de primeira classe , ou seja , podem ser atribuidas a uma variavel, passadas por parametro ou serem retornada de uma outra função

é possivel invocar  uma funcao  com menos ou mais parâmetros, não necessariamente seguindo oque  está declarado;

podemos definir valores padrão para cada  um dos parâmetros de uma 
função

por meio da variavel implícita arguments é possivel acessar os param da funcao invocada

tbm é possivel acessar os param da  funcao  invocada por meio do rest parameter, o rest parm dever ser o ultimo da lista de param 
 */

//function declaration 

function mult (a,b) {
   return a*b;
}
console.log(2,2);

console.log("============================================")
// function expression 
const sum = function(a,b) {
     a+b;
}
console.log(sum(2,5)) //coda ok
console.log(sum(5)) // result em NaN
console.log(sum(2,5,7)) //ignora o param a mais

console.log("============================================")
const sum2 = function(a=1,b=1) { // define val padrão
    a+b;
}
console.log(sum2(2,2)) //da val 4
console.log(sum2(5)) //aki da 6 o segundo param assume 1
console.log(sum2()) // faz o calc dos val padroes definidos

console.log("============================================")




const subtract = function (a=1,b=1) { 
    return a-b;
}



/*
const calculator = function () {
    return function () {
        return "calculator";
    };
}
console.log(calculator()());
*/


const calculator = function (fn) {
    return function (a,b) {
        return fn(a,b)
    };
};

console.log(calculator(sum)(2,2));
console.log(calculator(subtract)(2,2));

console.log("============================================")

const sum3 = function() {
    let total =0;
    for(let argument in arguments){
        total +=arguments[argument];
    }
    return total;
};
console.log(sum3(1,2,3,4,5,6,7,8,9));

console.log("============================================")

const sum4 = function(...numbers) {
    let total =0;
    for(let number of numbers){
        total += number;
    }
    return total;
};
console.log(sum4(1,2,3,4,5,6,7,8,9));

console.log("============================================")






