$(document).ready(function(){

    $("#btn").click(function(){

        $("div").text("Você clicou").css("color", "blue").css("height", "90px");

    }).dblclick(function(){

        $("div").text("Você deu double click").css({ height:"120px", color:"purple"});

    });

    $("#btn2").mouseover(function(){

          $("div").text("Passou o mouse").css({color:"pink", height:"120px"});

    }).mouseout(function(){

          $("div").text("tirou o mouse").css({color:"black", height:"90px"});

    });


      $("#btn3").mouseup(function(){

        $("div").text("Mouse Up").css({color:"yellow"});


      }).mousedown(function () {

        $("div").text("Mouse Down").css({color:"green"});

      });


      $("#btn4").mousemove(function(p){

        $("div").text("X: "+ p.pageX + " Y: "+ p.pageY ).css({color:"black"});

      });

});
