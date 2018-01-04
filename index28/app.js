$(document).ready(function(){

 $("#buscador").keyup(function(){
   var nombre = $("#buscador").val();

   if($.trim(nombre) != ""){
     $("#nombres li:contains('"+nombre+"')").addClass("miClase");

   }

  else {
    $("#nombres li").removeClass("miClase");
  }

 });

});
