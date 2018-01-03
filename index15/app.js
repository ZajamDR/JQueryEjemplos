$(document).ready(function(){

  //Se ejecuta cuando se presiona cualquier tecla
   $("input").keydown(function(){
     $(this).css("background-color","yellow");
   })

   $("input").keyup(function(){
     $(this).css("background-color","Red");
   })

});
