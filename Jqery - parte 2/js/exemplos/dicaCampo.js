$(":input + span").css({
  display:"none"
});

$(":input").focus(function(){

    $(this).next().fadeIn(1500);

}).blur(function(){

    $(this).next().fadeOut(1500);

});
