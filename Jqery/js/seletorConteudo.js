$(document).ready(function(){

  $("thead tr").css("background-color", "black").css("color", "white");

  //Seleciona os Elementos que contém o texto com nome Pele
  $("td:contains(Pele)").css("background-color", "yellow");
  $("td:contains(1992)").css("background-color", "red");

  //Seleciona os elementos que contém texto vazio
  $("td:empty").css("background-color", "blue");
  //$("td:not(td:empty)").css("background-color", "blue");

  //Seleciona os elementos que tiveram tag outras tag dentro
  $("td:has(strong)").css("background-color", "purple")
});
