$(document).ready(function(){

  $("#btn").click(function(){

    var img = $("<img>", {//Cria um elemento HTML, passando seu atributos
      src:"img/rodrigo.jpeg",
      title:"Rodrigo",
      id:"foto",
      click:function(){alert("Você Clicou na Imagem");}
    });

    // var li = $("<li/>").append("Criando lista com Jquery");
    var ul = $("<ul/>").append($("<li/>").append("Criando lista com jquery-3"));

    $("body").append(img);
    $("body").append(ul);
    
    $("img").addClass("conteudo").attr({
      title:"Rodrigo jacinto da Silva"
    });

  });
});
