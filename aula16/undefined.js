const book ={
  title: "Clean Code",
  author: "Robert C Martin",
  pages : 464,
  language : "English",
  avalible: "true"
}

console.log("title" in book);
console.log("author" in book);
console.log("publisher" in book)

//book.avalible = undefined /// não apaga a propriedade só define a mesma p undefined
//console.log(book)
//console.log('avalible' in book);

delete book.avalible; 
//console.log(book)
//console.log('avalible' in book);


// qual diferença entre null(ausencia de valor) e undefined(propriedade sequeer existe) // podemos fazer a consulta dessa propriedade pelo operador in 
/// para apagar uma propriedade em um obj usa o delete!!