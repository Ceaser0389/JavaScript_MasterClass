/**
 Com operador instanceOf é possível verificar se um obj foi criado por meio de uma determinada função construtora análisando a sua cadeia de protótipos

diferneça entre typeOf e instanceOF
typeOf revela o tupo de dado de um dado

 * 
 */


const _instanceof = function(obj,fn) {
    if(obj === fn.prototype) return true;
    if(obj === null) return false;
    return _instanceof(obj.__proto__,fn)
}



const date = new Date();
console.log(date instanceof Data);
console.log(date instanceof Object);
console.log(date instanceof Array);
console.log(typeof date);
console.log(_instanceof(data,Date));
console.log(_instanceof(data,Object));
console.log(_instanceof(data,Array));
