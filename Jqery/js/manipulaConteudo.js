$(document).ready(function(){

  $("#btn").click(function(){

    var cont = $("p");
    alert($("p").html());//Recupera todo o conteudo da tag p
    cont.html("<h1>Usando jquery-3</h1>");//Adiciona texto e tags ao documento

    alert($("div").text());//Pega o texto contido na div
    $("div").text("Adicionando texto simples na div");//Adiciona texto ao documento, não reconhece tags
    cont.text(cont.text() + "Adicionei mais texto");//Adicionando mais texto, sem substituir por outro texto

    alert($("textarea").val());//Retorna o valor do textarea

    $("p").html($("textarea").val());//Adicona valor da textarea na tag p, aceitando tags

    $("div").replaceWith("<p class='conteudo'>Substituindo a tag div e seu valor, pela tag p e seu valor</p>");//Substitui tag div e seu valor, pela tag P e seu valor

  });

});
