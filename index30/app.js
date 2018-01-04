$(document).ready(function(){

      $("#caja").scroll(function(){
        var posicionVertical =  $(this).scrollTop();
        $("#info").html(" Posición Vertical es: " + posicionVertical);
      });

});
