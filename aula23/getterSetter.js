/**
 * as funções do tipo do getter e setter  servem para interceptar o acesso as prop de determinado um obj
 * 
 * utilize chaves  diferentes para a função  setter e a prop do obj
 * 
 * por meio da operação defineProperty  da object API, também  é possivel
 * definir funções do tipo getter e setter 
 */

const rectangle ={
   set x(x) {
       this._x =x;
   },

   set y(y){
       this._y =y;
   },

    get area() {
        return this._x  * this._y;
    }
};
rectangle.x =10
rectangle.y =2
console.log(rectangle.area);

console.log("====================================================")

const rectangle2 ={};

Object.defineProperty(rectangle2,"x",{
    set(x){
        if(x >0){
         this._x =x;
        }else{
            console.log("Invalid value for x")
        } 
    }
});

Object.defineProperty(rectangle2,"y",{
    set(y){
        if(y>0){
         this._y =y;
        }
        else{
            console.log("Invalid value for y")
        }
       
    }
});

Object.defineProperty(rectangle2,"area",{
    get(){
        return this._x  * this._y;
    }
})

rectangle2.x =10
rectangle2.y = 2
console.log(rectangle2.area)
