/*JSON troca de dados entre sistemas,aceita =>Number,String,Object,Boolen,Array,null
o método JSON.stringify converte determinado tipo de dado(obj) p json

o metodo JSON.parse converte um json p um determinado tipo de dado
JSON e formato de troca de dado em string
Object representação do obj em memoria 
*/ 

JSON.stringify(10)  // sai uma string 
JSON.stringify("javasript") // sai '"javasript"'
JSON.stringify(true) // 'true'
JSON.stringify(false) // 'false'
JSON.stringify({name:"self" ,paradigm:"OO"}) // '{}' string cont o obj
JSON.stringify([1,2,3,4,5,6,7,8,9])  // '[1,2,3,4,5,6,7,8,9]'
JSON.stringify(null)  // 'null'

console.log("=======================================================")

JSON.parse('10')  // sai uma string 
JSON.parse('"javasript"') // sai '"javasript"'
JSON.parse('true') // 'true'
JSON.parse('false') // 'false'
JSON.parse('{name:"self" ,paradigm:"OO"}') // '{}' string cont o obj
JSON.parse('[1,2,3,4,5,6,7,8,9]')  // '[1,2,3,4,5,6,7,8,9]'
JSON.parse('null')  // 'null'

const book1 ={
    name:"Refactoring",
    author:"Martin Fower"
}

const book2 ={
    name:"Refactoring",
    author:"Martin Fower"
}

console.log(JSON.stringify(book1) === JSON.stringify(book2))

const book3 = JSON.parse(JSON.stringify(book2))
console.log(book2 === book3)