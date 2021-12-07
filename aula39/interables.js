/**
 * são convenções implementadas por arrays, Maps,sets e Strings que tornam
 * iteráveis  por meio de um protocolo de interação
 * 
 * 
 * além do Array é possivel  utilizar o protocolo de interação
 * dos objs  Map,set e string;
 * 
 * 
 * todo interable tem uma propriedade de chave Symbol.interator que 
 * define o protocolo de interação para o obj 
 * 
 */

const languages = ["fortran","lisp","cobol"]

for(let i=0 ;i< languages.length;i++){
    console.log(languages[i]);
}
console.log("========================================================")
for(let i in languages){
    console.log(languages[i])
}

console.log("========================================================")
languages.forEach((languages)=>{
    console.log(languages);
})

console.log("========================================================")
for(let language of languages){
    console.log(language);
}

console.log("========================================================")

const classicLanguages = ["fortran","lisp","cobol"]
const modernlanguages = ["JAVA","Python","JavaScript"]

const languages1 = classicLanguages.concat(modernlanguages);
console.log(languages1);


console.log("========================================================")
const languages2 = [...classicLanguages,...modernlanguages];
console.log(languages2);

console.log("========================================================")

const languages3 = new Map([["fortran",1957],["lisp",1958],["cobol",1959]])
console.log(languages3)

console.log("========================================================")
for(let [language,year] of languages3){
    console.log(language,year)
}

console.log("========================================================")
console.log([...languages3])

console.log("========================================================")
const languages4 = new Set(["fortran","lisp","cobol"])
for(let language of languages4){
    console.log(language)
}

console.log("========================================================")
const languages5 = new Set(["fortran","lisp","cobol"])
console.log(...languages5);

console.log("========================================================")
const languages6  = ["fortran","lisp","cobol"];
const iterator  = languages6[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log("========================================================")
const languages7 =new Map([["fortran",1957],["lisp",1958],["cobol",1959]])
const iterator1  = languages7[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

console.log("========================================================")
const languages8 =new Set(["fortran","lisp","cobol"])
const iterator2 = languages8.entries()
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());