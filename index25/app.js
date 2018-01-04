$(document).ready(function(){

//el color de fondo cambia de color
 $("#nombre").focusin(function(){
   $(this).addClass("miClase");
    $("#id1").html(" Ingrese su Nombre");
 });

//remover el fondo de color
 $("#nombre").focusout(function(){
    $(this).removeClass("miClase");
    $("#id1").html("");
 });

//el color de fondo cambia de color
 $("#apellido").focusin(function(){
   $(this).addClass("miClase");
    $("#id2").html(" Ingrese su Apellido");
 });

//remover el fondo de color
 $("#apellido").focusout(function(){
   $(this).removeClass("miClase");
   $("#id2").html("");
 });

});
