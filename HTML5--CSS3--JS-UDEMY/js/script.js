/*alert("Olá Mundo !");

var resposta = confirm("Deseja sair da página ?");
console.log(resposta);


var a = 20;
var b = 40;

function somar (a, b){
  return a + b;
}

console.log(somar(a, b));
 */

document.getElementById("btn").onclick = function(){

    var a = document.getElementById("valorA").value;
    var b = document.getElementById("valorB").value;
    alert(parseInt(a) + parseInt(b));

}
