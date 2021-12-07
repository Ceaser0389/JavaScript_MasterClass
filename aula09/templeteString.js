/* um templete literal é uma forma  de declarar uma String  que permite  a interpolação de expressões

SINTAXE `${}`

além da interpolação de expressôes é possivel tbm declarar uma String  mult linha  ,sem a necessidade de caracteres especiais
*/

let host = "localhost"
let port = "3000"
let resource = "users";
let url = `http://${host}:${port}:${resource}`;
console.log(url)
