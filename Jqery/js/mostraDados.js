$("#envia").click(function(){

  var nome = $(":text").val();
  var idade = $("#idade").val();
  var sexo =  $(":radio:checked").val();
  var time = $("select").val();

  addTabela(nome,idade,sexo,time);

});

$("#removePrimeiro").click(function(){
  removePrimeiro();
});

$("#removeUltimo").click(function(){
    removeUltimo();
});


function addTabela(nome,idade,sexo,time)
{
  var linha = $("<tr/>");
  linha.append($("<td/>").append(nome))
  .append($("<td/>").append(idade))
  .append($("<td/>").append(sexo))
  .append($("<td/>").append(time));

  $("tbody").append(linha);
}

function removePrimeiro()
{
    $("tbody tr:first").remove();
}

function removeUltimo()
{
  $("tbody tr:last").remove();
}
