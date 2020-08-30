$(document).ready(function(){

  $(":text").keyup(function(){

    $("div").text($(this).val());

  }).focus(function(){//Evento que clica dentro campo

    $(this).css({

      background:"yellow"
    });

    $("div").text("Focus");

  }).blur(function(){//Eventos quando tira o focus do campo

    $(this).css({

      background:"purple"
    });

    $("div").text("Blur");


  });

  $("form").submit(function(){//Dispara caso algum botã do tipo submit, quer submeter o formulário

    if($(":text").val() == "rodrigo")
    {

      $("div").text("Formulário Submtido");
      return true;

    }
    else
    {
      $("div").text("Formulário não Submtido ");
      return false;
    }

  });

  $("select").change(function(){//Dispara o evento quando selecioanr algo

    var valor = $("option:selected").text();
    $("div").text("Selecionou: "+ valor);
  });

  $("textarea").select(function() {//Dispara evneto quando seleciona texto

    $("div").text("Texto Selecionado");
  });

  /*
  $(":text").keypress(function(){//ativa o evento quando pressiona tecla, antes mesmo de soltar a tecla

  $("div").text($(this).val());

});


$(":text").keydown(function(){

$("div").text($(this).val());

});
*/


});
