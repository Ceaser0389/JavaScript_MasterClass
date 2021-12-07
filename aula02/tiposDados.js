/*Os tipos de dados no js  se dividem em  primitivos e objs */
/* os primitivos são imultáveis  , ou seja  , ao  longo do tempo seu valor não é alterado 
 */
/*
typeof 10;              
typeof "javaScript" 
typeof true;        
typeof symbol("interetor")   
typeof null                
typeof undefined  

*number   *string   *boolean *symbol  *null *undefined
typeof -> serve p ver tipo de dado 
*/

(10).toFixed(2)
('javaScript').replace('a',4)
(true).toString();
(Symbol('iterator')).toString()

/*  os objetos  são valores  que representam  uma referência em memória que pode ser alterada  (pode mudar o contúdo do obj)*/

/*
typeof  function sum(a,b) {return a+b};    função     
typeof  {nome:"Cesar Alves"};       objeto
typeof  [1,2,3,4,5]             instancia array   tipo obj
typeof  /[a-zA-Z]+/           expressão regular
typeof  (new data())          instanciação     
 
*/