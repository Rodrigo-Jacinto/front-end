$(document).ready(function(){

    //Seleciona todas tags <a> que contem o atributo name
    $("a[name]").css("background-color", "#CCC");

    //Seleciona todas as tags <a> que contem o valor menu em name
    $("a[name=menu]").css("background-color", "#CCC");

    //Seleciona todas as tags <a> que contem o dentro de href o valor www
    $("a[href *=www]").css("background-color", "#CCC");

    //Seleciona todo mundo que acabar com o valor br
    $("a[href$=br]").css("background-color", "#CCC");

    //Seleciona todomundo que contem o valor http no começo
    $("a[href^=http]").css("background-color", "#CCC");

    //Seleciona todo mundo que não o valor meenu como valor
    $("a[name!=menu]").css("background-color", "#CCC");

});
