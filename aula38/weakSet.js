/**
 * WeakSet é um obj, similar ao SET, que permite apenas o valores do tipo 
 * Object  e mantêm as ref de forma fraca , sendo volátill  e não interável 
 * 
 * add =>add um elemento
 * has=> retorna true se elemento existir
 * delete=> remove o elemento
 * 
 * para que serve um weakSet
 */

const ws1 =new WeakSet();
console.log(ws1);
console.log("========================================");

const obj1 = {};
const obj2 = {};

ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));
console.log("========================================");

ws1.add(obj1);
ws1.add(obj2);
console.log(ws1);
console.log(ws1.delete(obj1));
console.log(ws1.has(obj1));
console.log(ws1.has(obj2));
console.log("========================================");

const circles = new WeakSet();
function Circle(radius){
    circles.add(this);
    this.radius = radius;
}

Circle.prototype.CalculateArea = function(){
    if(!circles.has(this)) throw "Invalid Object";
    return Math.PI * Math.pow(this.radius,2);
}
const circle1 = new Circle(10);
const circle2 = {
    radius:5,
}
console.log(circle1.CalculateArea());
console.log(circle1.CalculateArea.call(circle2));
















