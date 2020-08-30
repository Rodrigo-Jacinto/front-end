//Efeitos Basicos
$("button:eq(0)").click(function(){
    $("img").hide(3000);//Parametros - normal,fast, slow - 3000 milisegundos
});

$("button:eq(1)").click(function(){
    $("img").show(3000);//Parametros - normal,fast, slow - 3000 milisegundos
});

$("button:eq(2)").click(function(){
    $("img").toggle("fast");//Parametros - normal,fast, slow - 3000 milisegundos
});

//Efeitos de Opacidade
$("button:eq(3)").click(function(){
    $("img").fadeOut(1000);//Faz desaparecer elemento que esteja visível, Parametros - normal,fast, slow - 3000 milisegundos
    $("img").fadeIn(1000);//Faz aparecer elemento que esteja invisível, Parametros - normal,fast, slow - 3000 milisegundos
    $("img").fadeTo(1000, 0.5);//Faz desaparecer ou dasaparecer dependendo da visibilidade do elemento = Parametros - normal,fast, slow - 3000 milisegundos | Opcacidade - 0 á 1
    $("img").fadeToggle(1000);//Faz desaparecer ou dasaparecer dependendo da visibilidade do elemento =  Parametros - normal,fast, slow - 3000 milisegundos
});

// Efeitos de Slide

$("button:eq(4)").click(function(){
      $("img").slideUp(1000);//Parametros - normal,fast, slow - 3000 milisegundos
      $("img").slideDown(1000);//Parametros - normal,fast, slow - 3000 milisegundos
      $("img").slideToggle(1000);//Parametros - normal,fast, slow - 3000 milisegundos
});
