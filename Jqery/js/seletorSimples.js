$(document).ready(function(){

  //$("*").css("color", "blue");//Seletor universal
  $("#titulo").css("color", "green");//Seletor ID do elemento
  $("a").css("color", "red");//Seletor tag do elemento <a>, aplica a todas as tag <a>
  $(".linkado").css("color", "black");//Seletor class. class="linkado"
  $("h1, a").css("background-color", "yellow");//Seleciona varia tags, e aplica efeitos ao mesmo tempo
});
