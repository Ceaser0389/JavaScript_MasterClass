/** no ES6, ou ECMAScript 2015 ,foi especificado na propria linguagem
 baseado no conceito de importação  e exportação* 

 por meio da palavra chave export é  possivel exportar qualquer tipo de dado existnete dentro do modulo 

por meio da paavra chave-import faz a importação  de qualquer tipo de dado  exportando  para dentro do modulo 

para utilizar  modules  no Node.Js os arquivos  devem ter a extensão
.mjs  ae´m de executar co ma flag --experimental-modules

é possivel utillizar um alias  na importanção ,  renomeando  oque estiver 
sendo importado 

por meio do *  é possivel  importar  tudo que estiver  sendo exportado 
 em um unico objeto 

tbm  podemos importar e exportar de forma padrão utilizando a 
palavra-chave default

não é permitido a importação e exportação dentro de blocos 
*/


import *as math from './math';

export default class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get area(){
        return math.PI * math.pow(this.radius,2);
    }
}
