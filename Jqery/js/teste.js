window.onload = function(){

  $("#lista").on("dblclick", "li", function(){
    $(this).animate({"margin-left" : "50px"}, function(){
      $(this).remove();
    });

  });

  $("button").click(function(){
    var nome = $("input").val();
    $("<li>").text(nome).appendTo("#lista");
  });

}
