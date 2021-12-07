/**
 * Um set é um obj  que armaszena elementos unicos,que podem ser 
 * de qualquer tipo de dado.
 * 
 * set=> retorna uma qtd de elementos
 * add=> add um elemento
 * forEach=> intera sobre o set 
 * has=> retorna true se o elemento existir
 * delete=> remove um elemento
 * clear=> remove todos os elementos
 * 
 * diferença entre set e array , não permitir elementos duplicados
 * 
 */

const charsets = new Set(["ASII","ISO-8899-1","UTF-8"])
console.log(charsets);

console.log("========================================================");
console.log(Array.from(charsets));

console.log("========================================================");
console.log(charsets);
console.log(charsets.size);

console.log("========================================================");
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets);

console.log("========================================================");
charsets.forEach(function(){
    console.log(charsets);
})

console.log("========================================================");
console.log(charsets.has("ASCII"));
console.log(charsets.has("CP-1252"));

console.log("========================================================");
charsets.add("ASCII");
charsets.add("ISO-8859-1");
console.log(charsets.delete("ISO-8859-1"));
console.log(charsets.has("ISO-8859-1"));
console.log(charsets.has("CP-1252"));

console.log("========================================================");
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets);
console.log(charsets.size);
charsets.clear();
console.log(charsets);
console.log(charsets.size);

console.log("========================================================");

const set2 = new Set();

set2.add(10);
set2.add(10);
set2.add(10);

console.log("========================================================");
let array = [10,10,10];
console.log(array);
console.log(array.length);
const set3 = new Set(array);
console.log(set3);
console.log(set3.size);
array = Array.from(set3);
console.log(array);
console.log(array.length);

console.log("========================================================");
let array2 = [10,10,10];
let set4 =[];
array2.forEach(function(element){
    if(!set4.includes(element)){
        set4.push(element);
    }
});
console.log(set4);