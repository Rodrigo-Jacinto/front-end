$("#num").bind("keydown", function(e){

    var code = e.which;
    var validaNum = code > 47 && code < 58;
    var validaOutro = (",8,46,37,38,39,40,").indexOf(","+ code + ",") > -1;

      if(validaNum || validaOutro)
      {
        return true;
      }
      else {
        return false;
      }

});



$("#numNew").bind("keydown", function(e){

    var code = e.which;
    var validaNum = code > 47 && code < 58;
    var validaOutro = (",8,46,37,38,39,40,").indexOf(","+ code + ",") > -1;

      if(validaNum || validaOutro)
      {
        return true;
      }
      else {

        alert("Apenas Numeros");
        return false;
      }

});


$("#texto").bind("keydown", function(e){

    var code = e.which;
    var validaNum = (code > 47 && code < 58);
    var validaOutro = (",8,46,37,38,39,40,").indexOf(","+ code + ",") > -1;

      if(!validaNum || validaOutro)
      {
        return true;
      }
      else {

        alert("Apenas Letras");
        return false;
      }

});
