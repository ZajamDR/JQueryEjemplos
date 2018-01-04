$(document).ready(function(){

  $("#formulario").submit(function(event){

    event.preventDefault();
    var correo =  $("#correo").val();
    $("#info").html(" Gracias " + correo + " tu correo acaba de ser enviado");
  });

});
