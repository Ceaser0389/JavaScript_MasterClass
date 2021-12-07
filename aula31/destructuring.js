/**
 * é possivel extrair valores  de um array criando  variaveis em ordem
 * de acordo com a posicação de cada elemento
 * 
 * assim como nas funçõês , é possivel definir valores padrão para cada
 * uma das variaveis
 * 
 * para extrair os valores de um obj  é necessario ref  a chave de cada
 *  umas das propriedades
 * 
    é possível definir nomes diferentes  p as variaveis em relação
    as chaves das propriedades do obj
 * 
    tbm podemos ref as propriedades de obj q estão dentro de outros obj

  podemos aplicar destructuring tbm nos parametros de uma função ,tanto com arrays quanto com objetos
 */

/*
const languege ="C;Dennis Ritchie;1972".split(";");
const name =languege[0];
const author =languege[1];
const year =languege[2];
console.log(name,author,year);
*/

/*
const [name, ,year] = "C;Dennis Ritchie;1972".split(";");
console.log(name,year);
*/

/*
const language = "C;Dennis Ritchie;1972".split(";");
const [name="-", author="-",year="-"] = language;
console.log(name,author,year);
*/

/*
const language = {
    name:"C",
    author:"Dennis Ritchie",
    year:1972
};

// const name = language.name; forma normal

//const{name,author,year} =language
//console(name,author,year);

   //chave:n recebe o valor da propriedade name
const{name:n,author:a,year:y} =language
console(n,a,y);
*/

/*
const language = {
    name:"C",
    author:"Dennis Ritchie",
    year:1972,
    company:{
        name:"bell labs",
    }
};

const{name:n,author:a,year:y,company:{name:c}} =language
console(n,a,y,c);
*/


const sum = function({a,b}){
    return a+b;
}
console.log(sum({a:2,b:2}))














