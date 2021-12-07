/**
 * O execution context é o ambiente onde o código é executado,sendo
 * composto pelo varible object ,scope chain e this 
 * dentro de uma função é possível acessar variáveis existentes fora dela 
 * por meio do scope chain
 * 
 * Não é possível acessar de fora  uma variável que foi declarada dentro
 * dentro de uma função 
 * 
 * toda função tem uma variaável  this que contém a ref para o obj
 * respónsavel pela sua invocação
 */

const v1 = 10;
const fn1 = function () {
    const v1 =100;
    const fn2 = function() {
        const v1 =1000;
        console.log(v1);
    }
    fn2()
}

fn1(1);

const obj1 = {
 p1 :10,
 getP1:function(params) {
     const that = this;
     const fn1 = function() {
        return this.p1
      }
      return fn1();
    }
}
console.log(obj1.getP1());