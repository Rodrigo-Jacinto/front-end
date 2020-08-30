$(document).ready(function(){

  $("#btn").click(function(){

    var img = $("img");

    /* Altera atibutos css
    img.css("width", "415px");//Altera a largura da Imagem
    img.css("height", "415px");//Altera altura da imagem
    */

    //Outra forma de Alterar Atributos css
    img.css({
      width:"200px",
      height:"200px"
    });

    /*
    img.width();--Mostra a largura
    img.height();--Mostra a Altura
    */

    alert(img.offset().top);//da a distancia do topo para impressão
    alert(img.offset().left);//da a distancia do la esquerdo para impressão

    alert(img.innerWidth());//retorna a largura com o padding
    alert(img.outerWidth(true));//retorna a largura com o padding e a borda true - conta margem

    alert(img.position().top);//Mostra a distancia da imagem do topo
    alert(img.position().left);//Mostra a distancia da imagem do lado esquerdo

    alert($("img").css("width"));//Mosta a Largura da Imagem
    alert($("img").css("height"));//Mostra a altura da Imagem
  });

});
