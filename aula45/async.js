/**
 * O async/ await  facilita a interação  com chamadas assincronas
 * aguardando  o retorno de uma  determinada promise
 * 
 * usamos exceçoes para tratar chamadas assincronas é possivel utilizar
 *  um bloc try/catch
 * 
 * é possivel interar usando await e async
 * 
 * é possivel usar o bloco for-await-of para interar sobre  um interador de promises 
 * para utilizar é necessario usar uma flag  --harmony-async-interation
 */

function sum(a,b,callback){
    return new Promise(function(resolve,reject){
    if(!a || !b) return reject("Invalid input");
    setTimeout(function(){
       callback(a+b)
    },1000)
  })
}

(async function() {
    try{
    const a  = await sum(2,2);
    const b  = await sum(4,4);
    const result =await sum(a,b);
    console.log(result);
    }
    catch(e){
        console.log(e);
    }
})

