$("#jogador thead tr th").each(function(i){

  var n = i + 1 ;
  var nomeC = $(this).text();

  $("tr td:nth-child("+ n +")").hover(
    function(){
      var nomeCe = $(this).text();
      $(this).addClass("destaque").prepend("<div class='tooltip'>Coluna "+nomeC+" <br/>Celula "+nomeCe+"</div>");
    },

    function(){

      $(this).removeClass("destaque");
      $(".tooltip").remove();
    }

  );

});
