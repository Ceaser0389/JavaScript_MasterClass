/**
 * os mutatos  quando invocados modificam o array
 * 
 * push -> add um elemento no final 
 * pop -> remove um elemento no final
 * unshift-> adiciona um elemento no inicio
 * shift -> remove um elemento no inicio
 * splice -> remove, subustitui ou adiciona  um ou mais elementos em uma determinada posição
 * sort-> ordena os elementos  de acordo com a função de ordenação
 * reverse -> inverte a ordem dos elementos
 * fill -> Preeche os elementos de acordo com a posição  de inicio e fim
 * 
 * 
 */

const languages = ["python","C","java"]
console.log(languages)
console.log(languages.push("Ruby"));
console.log(languages.push("GO"));
console.log(languages);
console.log(languages.pop);

console.log("=============================================")

const languages1 = ["python","C","java"]
console.log(languages1)
console.log(languages1.unshift("Ruby"));
console.log(languages1.unshift("GO"));
console.log(languages1);
console.log(languages1.shift);
console.log(languages1.shift);
console.log(languages1);

console.log("=============================================")

const languages2 = ["python","C","java"]
console.log(languages2)
console.log(languages2.splice(1,1))
console.log(languages2.splice(1,0,"C#","C++"))
console.log(languages2.splice(1,2,"C"))
console.log(languages2)

console.log("=============================================")

const languages3 = [
    {
        name: "Python",
        year: 1991
    },
    {
        name : "C",
        year :1972
    },
    {
        name: "Java",
        year: 1995
    }
]

languages3.sort(function(a,b){
    return a.name.localeCompare(b.name)* -1;
});

console.log(languages3)

console.log("=============================================")

const languages4 = ["python","C","java"]
console.log(languages4)
languages4.reverse();
console.log(languages4);
languages4.reverse();
console.log(languages4);

console.log("=============================================")

const languages5 = ["python","C","java"]
languages5.fill("javaScript",0,2);
console.log(languages5);