$(document).ready(function(){
 $("button").click(function(){
   var texto = "";
   texto += $("#caja").width() + "px" + "<br>";
   texto += $("#caja").height() + "px";
   $("#detalles").html(texto);
 });

});
