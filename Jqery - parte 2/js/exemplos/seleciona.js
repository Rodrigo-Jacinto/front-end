$("#seleciona").click(function(){
    $(":input[name='tecnologia']").attr("checked", "checked");
});

$("#deseleciona").click(function(){
    $(":input[name='tecnologia']").removeAttr("checked", "checked");
});

$(":input[name='seleciona']").change(function(){

      if(this.checked)
      {
          $(":input[name='tecnologia']").attr("checked", "checked");
      }
      else
      {
        $(":input[name='tecnologia']").removeAttr("checked", "checked");
      }
});


$("select").change(function(){

        alert($("option:selected").text());
});
