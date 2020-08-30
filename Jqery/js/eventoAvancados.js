$(document).ready(function(){

  /*
  $(":text").bind("keyup", function(){//Outra de adicionar evento a um elemento

      $("div").text($(this).val());

  });

  //Forma Tradicional
  $(":text").keyup(msg).focus(foca).blur(tiraFoca);

  //Outra forma
  $(":text").bind("keyup focus", msg);
*/


$("fieldset").delegate(":text", "keyup", msg);//Adiciona evento mesmo dps do elemento tenha sido criado
//undelegate - retira o evento
$("#btn1").bind("click", function(){

    $(":text").unbind("keyup", msg);//Retira o evento keyup do campo texto

    $(":text").val("Texto incluido com Jquery");
    $(":text").trigger("focus");//Dispara evento sem precisa da interação do usario

});


$("#btn2").click(function(){

      $("fieldset").prepend("Outro:<input type='text' name='nome'>");

  });

});


function msg()
{

  $("div").text($(this).val());

}

function foca()
{
  $(this).css("background", "yellow");
  // $("div").text("Focus");
}

function tiraFoca()
{
  $(this).css("background", "purple");
}
