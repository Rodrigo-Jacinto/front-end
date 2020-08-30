$(document).ready(function(){

  $("#btn").click(function(){
    $("h1").remove();//Remove o elemento indicado
    $("h1").remove("#titulo");//Remove o elemento indicado, filtrando pelo ID
    $("ul").empty();//Remove os elementos filhos de <ul>, as <li>
    $("ul").unwrap();//Remove o elemento que envolve ul

  });

  var ul = $("ul");
  ul.prepend("<li>Adiciona no inicio do elemento alvo</li>");//Adiciona no inicio do elemento alvo
  ul.append("<li>Adiciona no Fim do elemento alvo</li>");//Adiciona no fim do elemento alvo
  ul.before("<h1 id='titulo'>Adiciona antes do elemento Alvo e fora dele</h1>");//Adiciona antes do elemento Alvo e fora dele
  ul.after("<h1>Adiciona depois do elemento Alvo e fora dele</h1>");//Adiciona depois do elemento Alvo e fora dele

  ul.wrap("<p></p>");//Envolve o elemento ul dentro de um elemento p
  ul.append($("li").clone());//Clona toda as Li existentes e adiciona dentro de

});
