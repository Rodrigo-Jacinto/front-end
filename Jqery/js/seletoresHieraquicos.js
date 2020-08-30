$(document).ready (function(){

    //Descendente, não precisa ser filho, só está dentro da tag
    $("div span").css("background-color", "yellow");

    //Seletor filho, é obrigado está apenas dentro da Tag
    $("li > ul").css("color", "blue");

    //Seletor irmão
    $("#item1_2 + li").css("color", "red");

    //Seletor irmão, selecionar todos os irmãos
    $("#item1_2 ~ li").css("color", "red");
});
