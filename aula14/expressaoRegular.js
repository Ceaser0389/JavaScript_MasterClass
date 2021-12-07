//. qualquer tipo de caractere 
// \ escapar de carac especiais
// ^ inicializa um carac
// $ ffim de determinado carac 
// grupo de carac  [abc] [^abc] n aceito [0-9]  [^0-9]

// quantificadores 
// {n} quant um numero especifico
// {n,} quant um numero minimo
// {n,m} quant um numero mim e um max
// ?- zero ou um
// *- zero ou mais
// +- um ou mais 

// metaCaracteres  \W \w \D \d \S \S \n \t
// grupos de captura ()

let regExp = /^john@gmail\.com$/

let result =regExp.exec("john@gmail.com")
console.log(result[0]);
console.log(resul.index);
console.log(result.input);



