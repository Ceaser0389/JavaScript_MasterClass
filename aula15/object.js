// obj é uma coleção chave valor 

//{} // obj -> forma usual 
//new Object(); //função construtora ou usado por class
//Object.create(null); //obj api // especificar o prototipo 

/* 
const title = "clean code";
const pages = 464;
const laguage = "English";
const autor = "Robert martin";
const  avalible = true;

const book ={
    title,
    autor,
    pages,
    laguage,
    avalibleue
};

console.log(book);
 */

/*
const book = {}
book.title = "clean code"
book.autor = "Robert martin"
book.pages = 456
book.language = "English"
*/

/*
const key1 = "title"
const key2 = "autor"
const key3 = "pages"
const book = {}

book[key1] = " clean code ";
book[key2] = "Robert martin";
book[key3] =  456;

console.log(book)
*/

const book = {}
book.title = "clean code"
book.autor = "Robert martin"
book.pages = 456
book.language = "English"

//for in percorrer chaves 
for (let key in book) {
    console.log(book[key]);
}

const book2 = {}
for (let key in book1) {
    book2[key] = book1[key]
}

console.log(boo2);