$(document).ready(function(){

//a diferencia del evento click focusin muestra el texto sin necesidad de hacer click sobre el input

 $("#nombre").focusin(function(){
    $("#id1").html("Ingrese su Nombre");
 });


 $("#apellido").focusin(function(){
    $("#id2").html("Ingrese su Apellido");
 });

});
