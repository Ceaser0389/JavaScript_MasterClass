const book1 ={
    title: "Clean Code",
    author: "Robert C Martin",
  }

  const book2 ={
    title: "Clean Code",
    author: "Robert C Martin",
  }
  //console.log(book1 == book1) aki comparo ref
 // console.log(book2 === book2)

  /* umas das formas de comparar objs é analisando cada uma das 
  propriedades por meio da comparação das chaves e valores */
  // todos os valores e chaves tem que ser iguais 

  let equal =true;

  for( let  key in book1){
     if( book1[key] !== book2[key]) equal =false;
  }
  for( let  key in book2){
    if( book1[key] !== book2[key]) equal =false;

 }

  console.log(equal)