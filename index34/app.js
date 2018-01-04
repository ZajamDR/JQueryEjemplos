$(document).ready(function(){

  $("#boton1").click(function(){
    $("#caja").slideDown(4000,function(){
      $(this).css("background-color","black")
    });
  });
});
