/** na linguagem js toda funcao permite a utilização de variáveis 
 * que não foram declaradas e nem passadas por parametro 
 *  procura na cadeia de escopo
 * o problema é que  como as funçôes são de primeira classe,dependendo da situação poderia existir uma ambiguidade e isso foi reesolvido com 
 * o conceito de closure
 * 
 * O closure é uma função com um scope chain estático que é definida no momento em que a  função e´criada, por isso ,todas as funções em js 
 * são closures
 * 
 * Apesar do estático, o scope chain  faz ref  p objetos q estão na memória e podem
 * ser compartilhados por mais de uma função
 * 

 */

/*
const v1 =10
function fn1(){
 
    function fn2() {
        console.log(v1);
    }
    fn2();
}
fn1();

console.log("*******************************************************")
*/

/*closures ex1
function fn1() {
    return function() {
        const v1=10;
        console.log(v1);
    }
}

const fn2 = fn1();
const v1 =100;
fn2()

console.log("*******************************************************")
*/


/*closures ex2
const v1 =10;
function fn1() {
  console.log(v1);  
}

function fn2(fn1) {
  const v1 =100;
  fn1();  
}

fn2(fn1);

console.log("*******************************************************")
*/

/*
function fn1(){
    let f1 =10;
    return{
        m1(){
            console.log(++v1);
        },
        m2(){
            console.log(--v1)
        }
    }
}
const obj1 =fn1();
obj1.m1();
*/


const obj1 ={}
for(var v1 =0; v1<3;v1++){
   obj1[v1] = (function(v2){
        return function(){
            console.log(v2)
           } 
   })(v1);
}

obj1[0];
obj1[1];
obj1[2];



















