$(document).ready(function(){
  $("#B1").click(function(){
    $("p:first").css("color","red");
    $("p:last").css("color","blue");
  });

  $("#B2").click(function(){
    $("p").addClass("nuevaClase");
  });

  $("#B3").click(function(){
    $("p").addClass(function(index){
      return "miclase" + (index + 1);
    });
  });

});
