/**
 * por meio das operações call e apply é possível invocar
 * uma função passando this por param
 * call recebe 1 o this 
 * apply vc passa por array
 * 
 * A operação bind permite encapsular  p this dentro da função ,retornando-a
 */


const  calculateArea = function(fn){
    return fn(Math.PI * Math.pow(this.radius,2));// this ref p obj cahmou a fun
}


const circle ={
    radius:10,
   
};

const calculateAreaForCicle =calculateArea.bind(circle)
console.log(calculateAreaForCicle(Math.round));
console.log(calculateAreaForCicle(Math.ceil));


//console.log(calculateArea.call(circle,Math.round));
//console.log(calculateArea.apply(circle,[Math.ceil]));