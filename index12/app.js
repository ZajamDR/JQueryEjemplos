$(document).ready(function(){
 $("button").click(function(){
   //Se pueden remover varios atributos al mismo tiempo solo dejando un espacio
   $("p").removeAttr("id class");
 })
});
