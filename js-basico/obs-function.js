//Variávies declaraddas dentro de uma funcação sem utilizar as palavras reservadas 'VAR', 'LET' OU 'CONST', viram variável global
//Má prática de programação

function soma(b) {
  a = 10;
  return a + b;
}
soma();
console.log(a);
