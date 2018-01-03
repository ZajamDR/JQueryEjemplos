$(document).ready(function(){

 $("button").click(function(){

   //itineración explicita-asigna los id en momento de ejecución
    $("p").attr("id",function(index){
      return "p" + (index + 1);
    });
 });

});
