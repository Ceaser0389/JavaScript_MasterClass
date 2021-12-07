/**
 * as promisses são obj responsaveis  por modelar comportamento assincrono
 * permitindo o seu tratamento de uma forma mais facil e direta 
 * 
 * para criar uma promisse  basta instancia-la , executando a função resovle em caso de  sucesso ,sendo  tratado por meio de then 
 * 
 * em caso de fracaso ,a função reject de ve ser executada ,sendo tratada por meio de  catch 
 * 
 * 
 * e possivel centraizar o tratamento de uma promise encadenado seus retornos
 * 
 * podemos executar  varias  promises ao mesmo tempo , retornando
 * após todas terem sucesso usando Promise.all
 * 
 * tbm podemos  executar varias promises ao memso tempo, retornando após
 * a primeira ter  sucesso usando  Promise.race
 */


/* exemplo com callback
function sum (a,b,callback){
    setTimeout(() => {
        callback( a + b);
    },1000);
}

sum(2,2,function(a){
   sum(4,2,function (b){
     sum(a,b, function(result){
        console.log(result);
     })
   });  
});
*/

Promise.all([
    sum(2,2),
    sum(4,4)
]);

function sum(a,b){
    return new Promise(function(resolve,reject){
        if(!a || !b ) return reject("Invalid Input")
        setTimeout(function() {
            resolve(a+b);
        }, 1000);
    });
}

sum (2,2).then (function(a){
   return sum(4,4).then(function(b){
    return  sum(a,b).then(function(result){
            console.log(result)
        }).catch(function (e){
            console.log(e);
        })
       
    })
})

