/* a forma mais simples de converter  um número é  por meio da invocação
da função construtora number */

Number("10");
Number("9.9");
Number("0oFF");
Number("0b10");
Number("0o10");
Number();
Number("javaScript")

//um outro jeito de fazer conversões é por meio  dos operadores numéricos

~~"10";
+"10";
"10" -0;
"10" *1;
"10" /1;

/*O metodo ToString de um número, permite  converte-lo para qualquer sistema de numeração , bastando indicar qual é a base desejada */ 

(0.10).toString(8);

// o metodo parseInt , permite converter uma string para um int 
parseInt("10",2);

// o metodo parsefloat
parseFloat("10")