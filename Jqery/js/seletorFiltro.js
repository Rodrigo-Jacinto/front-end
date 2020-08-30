$(document).ready(function(){

    $("thead tr").css("background-color", "black").css("color", "white");

    //seleciona a Primeira tag <tr> que ele encontrar dentro de tbody
    $("tbody tr:first").css("background-color", "#CCC");

    //seleciona a ultima tag <tr> que ele encontrar dentro de tbody
    $("tbody tr:last").css("background-color", "yellow");

    //Seleciona todas as tags <tr> menos a ultima
    $("tbody tr:not(tbody tr:last)").css("background-color", "#CCC");

    //Seleciona todas as tr que tiverem em posições pares
    $("tbody tr:even").css("background-color", "#CCC");

    //Seleciona todas as tr que tiverem em posições impares
    $("tbody tr:odd").css("background-color", "#CCC");

    //Seleciona uma posição especefica
    $("tbody tr:eq(2)").css("background-color", "#CCC");

    //Seleciona todos os itens acima da posição 1
    $("tbody tr:gt(1)").css("background-color", "#CCC");

    //Seleciona todas posições abaixo da posição 3
    $("tbody tr:lt(3)").css("background-color", "#CCC");

});
