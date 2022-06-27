#__Exercício Módulo 14__

###Lista de exercícios

1. Resolva as operações:
* 10 + 15 = __25 (integer)__
* “10” + 2 = __“102” (string)__
* “10” * 2 = __20 (integer)__
* “10” / 3 = __3.3333333333333335 (float)__
* “10” % 3 = __1 (integer)__
* 10 + true = __11 (integer)__
* 10 == ”10” = __true (boolean)__
* 10 === “10” = __false (boolean)__
* 10 < 11 = __true (boolean)__
* 10 > 12 = __false (boolean)__
* 10 <= 10.1 = __true (boolean)__
* 10 > 9.99 = __true (boolean)__
* 10 != “dez” = __true (boolean)__
* 10 + true = __11 (integer)__
* “dez” + true = __“deztrue” (string)__
* 10 + false = __10 (integer)__
* 10 * false = __0 (integer)__
* true + true = __2 (integer)__
* 10++ = __Uncaught SyntaxError: invalid left-hand side operation__
* 10-- = __Uncaught SyntaxError: invalid left-hand side operation__
* 1 & 1 = __1 (integer)__
* 1 & 0 = __0 (integer)__
* 0 & 0 = __0 (integer)__
* 1 & 0 = __0 (integer)__
* 0 / 1 = __0 (integer)__
* 5 + 5 == 10 = __true (boolean)__
* “5” + ”5” == 10 = __false (boolean)__
* “5” * 2 > 9 = __true (boolean)__
* (10 + 10) * 2 = __40 (integer)__
* 10 + 10 * 2 = __30 (integer)__

2. Responda as perguntas de acordo com as variáveis:
var branco = “preto”; 
var preto = “cinza”; 
var cinza = “branco”; 
var carro = “preto”; 
var valor = 30000; 
var prestacao = 750;

* a) branco == “branco” 
	__Falso, pois branco é “preto” portanto não pode ser igual a “branco”__
* b) branco == cinza 
	__Falso, pois branco é “preto” e cinza é “branco” portanto não são iguais__
* c) carro === branco 
	__Verdadeiro, pois carro é “preto” e branco também é “preto”, tanto a palavra quanto o tipo dela que é uma string.__
* d) var cavalo = carro == “preto” ? “cinza” : “marrom”;
	__Cinza, pois se a variável carro for “preto” cavalo recebe “cinza” senão receberia “marrom”__
* e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação. 
	__A entrada de 3.000 deixa o valor em 27.000 e cada prestação tem o valor de 750.__ 
	__750 * x = 27.000__
	__x = 27.000 / 750__
	__x = 2.700 / 75__
	__x = 36 prestações serão necessárias.__
* f) Somando as variáveis de cores é formada uma string de quantos caracteres?
    __“preto” + “cinza” + “branco” + “preto”__
    __“pretocinzabrancopreto”__
    __Uma string de 21 caracteres__


