/**
 as arrow functions tem uma abordagem mais simples e direta para escrever 
 uma função e podem melhorar a legibilidade fo código em diversas situações
  as arrows n possuem as suas próprias varíaveis this e argumets 

 */

 const sum = (a,b) => a+b;

 const subtract = (a,b) => a-b;
  

 const calculator = fn => (a,b)=> fn(a,b);
     
 

 console.log(calculator(sum)(2,2));
 console.log(calculator(subtract)(2,2));

 console.log("===================================================")
 console.log("this")
 const person ={
     name:"james Gosling",
     city:"Alberta",
     year:1955,
     get: function () {
         return (new Date()).getFullYear() - this.year;
     }
 }

 console.log(person);
 console.log(person.getAge());


 console.log("===================================================")
 console.log("Arguments")
 const sum = function () {
    let total =0;
    for(let argumets in arguments)  {
        total += arguments[argument]
    }
    return total;
 };

 console.log(sum(1,2,3,4,5,6,7,8,9));

 console.log("===================================================")
 console.log("Objeto")
 const createPerson = function(name,city,year) {
     return{
         name,
         city,
         year
     };
 };
 const person = createPerson("Alan Kay", "Springfield",1940);
 console.log(person)