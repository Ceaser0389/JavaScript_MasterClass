/**
 * a função fabrica, que é um tipo de padrão, retorna um novo objeto
 * após ser invocada diretamente
 * 
 * toda função  tem uma propriedade chamada prototype, que eé vinculada apao __proto__ do obj  criado pelo operador new 
 */

const _new = function(fn, ...params) {
    const obj ={};
    Object.setPrototypeOf(obj, fn.prototype)
    fn.apply(obj,params)
    return obj;
}


const Person = function (name,city,year) {
        this.name=name;
        this.city =city;
        this.year =year;
} ;
    
Person.prototype.getAge = function() {
    return (new Date()).getFullYear() - this.year;
};

const person1 = _new(Person,"Linus Torvalds","helsinki",1969);
const person2 =  _new(Person,"Biil Gates","Seattle",1955);
console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person1.__proto__);
console.log(person2.getAge());
console.log(person1.__proto__ === person2.__proto__);

















/*
const person1 ={
    name:"Linus Torvalds",
    city:"helsinki",
    year:1969,
    getAge(){
        return(new Date()).getFullYear() -this.year
    }
};


const person2 ={
    name:"Biil Gates",
    city:"Seattle",
    year:1955,
    getAge(){
        return(new Date()).getFullYear() -this.year
    }
};
console.log(person1);
console.log(person1.getAge);
console.log(person2);
console.log(person2.getAge);
*/