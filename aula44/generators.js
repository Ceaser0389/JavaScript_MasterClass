/**Os generatorns tornam possivel pausar a execução de uma determinada função ,permitindo a utilização de um loop de froma cooperativa  
 * 
 * os generators utilizam  o metodo next para iterar sobre os valores 
 * disponiveis durante a execuçã oda função.
 * 
 * 
 * ao encontrar um yield , a execução da função é pausada até  o 
 * método  next  ser invocado novamente.
 * 
 * O retorno do método  next é o objeto contendo value e done ,seguindo o 
 * protocolo de interação 
 * 
 * 
 * por mei odo yield é possivel retornar valoresde forma  similar ao return
 * 
 * 
 * além disso,também é possivel  enviar um valor  para dentro do generator por meio do metodo next 
 * 
 * metodo throw lança uma execessao dentro do generator  interronpendo o flluxo da execução  caso a execução  não tenha sigo  tratada adequadamente 
 * 
 * com os generators implementam o protocolo de interação  é posisvel 
 * utilizá-los  com Symbol.interator de forma simples
 * 
 * possível utillizar os generators para sincronizar  chamadas assincronas  de forma similar ao async/await
 * 
 * 
 */
/*
function* forever(){
    let value =1;
    while(true){
      const reset =  yield value++;
      if(reset) value =1;
    }
}

function today(){
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
foreverGenerator.next();
today();
console.log(foreverGenerator.throw("error"))
console.log(foreverGenerator.next(true))
*/

function createIterable(...array){
    return{
        *[Symbol.interator](){
            let i =0;
            while(i< array.length){
                yield array[i++];
            }
        }
    }
}

const languages = createIterable("Forfan","Lisp","Cobol");
for(let language of languages){
    console.log(language);
}