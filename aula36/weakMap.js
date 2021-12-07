/**
 * weakMap é um obj, similar o map, que permite apenas chaves do tipo
 * object  e mantem as refs de forma fraca, sendo volátil e n interável
 * 
 * set=> add um par de chave e valor
 * has=> retorna true  se a chave existir
 * get=> retorna o valor de uma determinada chave
 * delete=> remove um par de chave e valor
 * 
 * sem a ref p a chave não é possivel acessar o valor 
 * 
 * weakMap poder incrementar uma colecao por uma ref fraca 
 * 
 */

const wm1 = new WeakMap();

const obj1 ={};
const obj2 ={};

wm1.set(obj1,"obj1");
wm1.set(obj2,"obj2");
console.log(wm1)
console.log('===========================')

console.log(wm1.has(obj1));
console.log(wm1.has(obj2));
console.log('===========================')

console.log(wm1.get(obj1));
console.log(wm1.get(obj2));
console.log('===========================')

console.log(wm1.delete(obj1));
console.log(wm1.delete(obj2));
console.log(wm1)
console.log(wm1.get(obj1));
console.log(wm1.get(obj2));
console.log('===========================')

const areas = new WeakMap();
const rectagle1 ={
    x:10,
    y:2
};

const rectagle2 ={
    x:5,
    y:3
};

function calculateArea(rectagle){
    if(areas.has(rectagle)){
        console.log("Using cache...");
        return areas.get(rectagle)
    }
    const area = rectagle.x * rectagle.y;
    areas.set(rectagle,area);
    return area;
}

console.log(calculateArea(rectagle1));
console.log(calculateArea(rectagle1));
console.log(calculateArea(rectagle2));
console.log(calculateArea(rectagle2));

rectagle1 =null;
rectagle2 = null;