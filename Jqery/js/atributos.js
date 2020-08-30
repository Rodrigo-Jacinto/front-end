$(document).ready(function(){

  $("#botao").click(function(){

    //função attr() - retorna os atributos das tags, que podem se modifcado
    alert($("img").attr("src"));

    $("img").attr("src", "img/iconjquery.png")
    .attr("title", "Jquery, escreva menos, faça mais");

    //Outra forma
    $("img").attr({
      src:"img/iconjquery.png",
      title:"Jquery, escreva menos, faça mais"
    });

    //Removendo atributos
    $("img").removeAttr("src")

    //Verifica se a class exista na tag, retorna true or false
    $("img").hasClass("destaque");

    //Adicionando uma classe a uma tag html
    $("img").addClass("destaque");

    //Caso a class destaque não exista na tag, cria a classe destaque, caso exista remove ela
    $("img").toggleClass("destaque");


  });

});
