$(document).ready(function(){

 $("#buscador").keyup(function(){
   var nombre = $("#buscador").val();

   if($.trim(nombre) != ""){
     $("#nombres li:not(:contains('"+nombre+"'))").hide();

   }

  else {
    $("#nombres li").show();
  }

 });

});
