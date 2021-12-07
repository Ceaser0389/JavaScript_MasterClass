/**
 * as classes são um tipo especial de função q atuam como um template
 * p a criação de objs
 * 
 * as classes não sofrem hoinsting,não importando a forma como 
 * foram declaradas
 * não podem ser pre inicializadas
 * 
 * 
 * as classes são formadas por 3 tipos de membros:constructor,
 * prototype, methods e static methods
 * 
 * O constructor é invocado no momento da instanciação de uma classe
 * e serve para inicializar  um determinado objeto.
 * 
 * os prototype methods dependem de uma  instância para servem 
 * invocados
 * 
 * os static methods  não dependem de instância p serem invocados
 * 
 * as classes funcionam  de forma  similar as funções construtoras
 * 
 * é possivel criar uma hierarquia de classes por meio da palavra-chave 
 * extends
 * 
 * ao declarar um construtor na subclass é necessario invocar o constructor da superclass  por meio do super() antes de utilizar a
 * ref this
 * 
 */
/*
class Square {

}
console.log(Square)
*/


//class expression
/*
const Square = class{

}
const square = new Square();
console.log(square); */


class Square{
   constructor(side){
    this.side =side;
   }
   toString(){
       return `side: ${this.side}`;
   }
   calculateArea(){
       return Math.pow(this.side,2);
   }

   static fromArea(area){
       return new Square(Math.sqrt(area))
   }
   
}
const square = new Square(4);
console.log(square.toString());
console.log(square.calculateArea());

const square2 = Square.fromArea(16)
console.log(square2.toString());
console.log(square2.calculateArea());















