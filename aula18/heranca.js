/* o principal objetivo da herança é perrmitir o reudo de código por meio do compartilhamento de propriedades entre obj, evitando a duplicação
no js a herança é realizada entre obj  e não classes

1-a propriedade __proto__ é uma ref para o protótipo do objeto
console.log só exibe as propriedades do proprio obj

o método hasOwnProperty  pode ser utilizado  p determinar se a propriedade pertence ao objeto

2- os métodos Object.setPrototypeOf  e Object.getPrototypeOf permitem
a interação com o protótipo do objeto

3-com o método create  é possível  criar um objeto passando o seu prótotipo
por par

caso a mesma prop  exista no obj  e no seu protótipo, a propriedade do próprio  objeto é retornada, fazendo sombra á propriedade do protótipo 

*/

const functionalLanguage ={
  paradigm:"Functional"
}
//3 form de heranca
const scheme = Object.create(functionalLanguage)
   scheme.name = "Scheme";
   scheme.year =1975;
 
const javascript = Object.create(functionalLanguage)
javascript.name ="javascript";
javascript.year =1975;



for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
   }

/*
const scheme = {
    name: "Scheme",
    year: 1975,
 //  __proto__: functionalLanguage
}
Object.setPrototypeOf(scheme,functionalLanguage); //opcao ao __proto__

const javascript = {
    name: "javascript",
    year: 1975,
 //   __proto__:functionalLanguage
}
Object.setPrototypeOf(javascript,functionalLanguage);
*/




//console.log(scheme);
//console.log(javascript);
//console.log(javascript.paradigm);
//console.log(scheme.paradigm);

