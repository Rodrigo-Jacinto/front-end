$("#jogador tbody tr:nth-child(4n-1)").addClass("impar");
$("#jogador tbody tr:nth-child(4n)").addClass("impar");

//Criando destaque nas linhas da tabela

  $("#jogador tbody tr").hover(

      function(){$(this).addClass("destaque");},
      function(){$(this).removeClass("destaque");}

  );

//Criando açõesp para as colunas

 $("#jogador thead tr th").prepend("<span>+</span>").css("cursor", "pointer");
 $("#jogador thead tr th").each(function(i /* Diz o Indice da coluna que foi clicado */){
      var n = i;
      $(this).click(function(){
          $("td").removeClass("destaque");
          $(this)
          .parents("thead")
          .siblings("tbody")
          .children("tr").each(function(){
              $(this).children("td:eq("+n+")").addClass("destaque");

          });

      });


 });
