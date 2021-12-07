/**
 * uma proxy é capaz de interceptar diversos tipos de operações
 * em um objeto alvo
 * 
 * 
 * existem metodos ,chamados de trap , para diversos tipos de eventos 
 * relacionados a um obj como:
 * 
 * apply,construct,defineProperty,deleteProperty,get,getOwnPropertyDescriptor,getPrototypeOf,has,isExtensible, ownKeys
 * preventExtensions, set , setPrototypeOf
 * 
 * o metodo set  é invocado  quando uma  propriedade  é definida como obj
 * 
 * deleteProperty é inovcado quando uma prop é deletada
 * 
 * o get é invocado quando uma propriedade é acessada 
 * 
 * A reflect API  tem os mesmos ,metodos que existem no Proxy, permitindo a execução  de diversos tipos  de operaçoes no objeto alvo
 * 
 */

function createArray(){
    return  new Proxy({},{
        set(target,key,value){
           target.length =target.length || 0;
           target.length++;
           target[key] =value;
        },
        get(target,key){
           if(typeof key == "String" && key.math(/\d+/)){
             if(!key in target){
                throw `Property ${key} not found`;
             }
           }
        },

        deleteProperty(target,key){
            if(key in target){
                target.length--
                delete target[key];
            }
        }
    })
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "javaScript";
console.log(languages);
console.log(languages.length);
delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
console.log(languages.length);
console.log(languages[0]);
console.log(languages[3]);