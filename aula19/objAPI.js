/* O médoto objetct.assign  faz cópia das prop dos objs passados por param p o obj alvo , que é retornado

o método Object.key  retorna as chaves das propriedades do obj

o método Object.values  retorna os valores  das propriedades do obj

o método Object.entries  retorna as propriedades do obj em pares chave e valor

o método Object.is compara odis objs, considerando os tipos de dados , de forma similar ao operador ===

define property
configurable -> permite que uma determ prop seja apagada
enumerable -> permite que uma deter prop seja emumerada
value ->    define o valor de uma deter prop
wrirable -> permite que uma determ prop tenha seu valor modificado

preventExtensions -> impede que o obj tenha novas prop, mas pertime modificar e remover prop existentes 
seal -> impede que obj  tenha novas propriedades  ou apague prop existnetes , mas permite modificar prop existentes 
freeze -> impede que obj tenha novas prop ,apague ou modifique prop existentes 

não é possivel aauterar o prototipo do obj , que se torna imutavel 

*/


const javascript  =Object.create({});
//  todas as propriedades passadas serão copiadas p obj alvo, 
Object.assign(javascript,{
    name: "javascript",
    year: 1975,
    paradigm:'functional'
},{
    author:'Brendan Eich',
    influencedBy:'Java , scheme and self'
});
console.log(javascript);

console.log('========================================================')

const javascriptA = {
    name: "javascript",
    year: 1975,
    paradigm:'OO and functional'
}
console.log(Object.keys(javascriptA));

console.log('========================================================')

const javascriptB = {
    name: "javascript",
    year: 1975,
    paradigm:'OO and functional'
}
console.log(Object.values(javascriptB));

console.log('========================================================')

const javascriptC = {
    name: "javascript",
    year: 1975,
    paradigm:'OO and functional'
}
console.log(Object.entries(javascriptC));

console.log('========================================================')

const javascriptD = {
    name: "javascript",
    year: 1975,
    paradigm:'OO and functional'
}
console.log(Object.is(javascriptD,javascriptD));

console.log('========================================================')
/*
const javascript2 ={};
Object.defineProperties(javascript2,"name",{
    configurable:true,
    enumerable:true,
    value: "javascript",
    Writable:true
})

console.log(javascript2)
javascript2.name = "ECMAScript"
console.log(javascript2);
console.log(Object.keys(javascript2));
console.log(Object.values(javascript2));
console.log(Object.entries(javascript2));

console.log('========================================================')
*/

/*
const javascript3 = {
    name: "javascript",
    year: 1975,
    paradigm:'OO and functional'
}
Object.preventExtensions(javascript3);
javascript3.name = "ECMAScript"
javascript3.author = "Brendan Eich"
delete javascript3.year
console.log(javascript3);
console.log(Object.isExtensible(javascript3));


console.log('========================================================')
*/

/*
const javascript3 = {
    name: "javascript",
    year: 1975,
    paradigm:'OO and functional'
}
Object.seal(javascript3);
javascript3.name = "ECMAScript"
javascript3.author = "Brendan Eich"
delete javascript3.year
console.log(javascript3);
console.log(Object.isSealed(javascript3));

console.log('========================================================')
 */


const javascript3 = {
    name: "javascript",
    year: 1975,
    paradigm:'OO and functional'
}
Object.freeze(javascript3);
javascript3.name = "ECMAScript"
javascript3.author = "Brendan Eich"
delete javascript3.year
console.log(javascript3);
console.log(Object.isFrozen(javascript3));

//Object.setPrototypeOf(javascript3,{})

console.log('========================================================')