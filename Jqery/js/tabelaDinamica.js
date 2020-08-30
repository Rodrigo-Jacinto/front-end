$("#nome").keyup(adicionaNome);
$("#idade").keyup(adicionaIdade);
$("#time").keyup(adicionaTime);


function adicionaNome()
{
    var nome = $("#nome").val();
    $("tbody tr td:first").text(nome);
}

function adicionaTime()
{
    var time = $("#time").val();
    $("tbody tr td:last").text(time);
}

function adicionaIdade()
{
  var idade = $("#idade").val();
  $("tbody tr td:eq(1)").text(idade);
}
