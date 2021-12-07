/**
 *  Map é um obj uqe armazena  um conjunto de valores que 
 *  podem ser de qualquer tipo de dado
 * 
 * size => retorna a qtd de elementos
 * set => adiciona um par de chave e valor
 * forEach => intera sobre o map
 * has => retorna o valor de uma determinada chave
 * delete => reove um par de chave e valor
 *  clear => remove todos os elementos
 */ 

const timeUnits = new Map([["Second",1],["Minute",60],["Hour",3600]]);
console.log(timeUnits);
console.log("===================================================")
console.log(Array.from(timeUnits));
console.log("===================================================")
console.log(timeUnits.size);
console.log("===================================================")

const timeUnits2 = new Map();
timeUnits2.set("Second",1);
timeUnits2.set("Minute",60);
timeUnits2.set("Hour",3600);
console.log(timeUnits2);
console.log(timeUnits.size);
console.log("===================================================")

const timeUnits3 = new Map();
timeUnits3.set("Second",1);
timeUnits3.set("Minute",60);
timeUnits3.set("Hour",3600);
timeUnits3.forEach(function(value,key){
    console.log(key,value);
})
console.log("===================================================")


const timeUnits4 = new Map();
timeUnits4.set("Second",1);
timeUnits4.set("Minute",60);
timeUnits4.set("Hour",3600);

console.log(timeUnits4.has("hour"));

console.log("===================================================")

const timeUnits5 = new Map();
timeUnits5.set("Second",1);
timeUnits5.set("Minute",60);
timeUnits5.set("Hour",3600);


console.log("===================================================")

console.log(timeUnits5.get("second"));
console.log(timeUnits5.get("minute"));
console.log(timeUnits5.get("hour"));


console.log("===================================================")

console.log(timeUnits5)
console.log(timeUnits5.size);
console.log(timeUnits5.delete("hour"));
console.log(timeUnits5)
console.log(timeUnits5.size);

console.log("===================================================")

console.log(timeUnits5)
console.log(timeUnits5.size);
timeUnits5.clear();
console.log(timeUnits5)
console.log(timeUnits5.size);