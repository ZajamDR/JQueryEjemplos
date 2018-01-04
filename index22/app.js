$(document).ready(function(){

    $("#boton1").click(function(){
      //Ingresa un texto al final del parrafo en negritas
        $("p").append(" <b>Hola</b>");
    });

    $("#boton2").click(function(){
      //Ingresa un texto al inicio del parrafo en negritas
        $("p").prepend(" <b>Hola</b>");
    });

      //Ingresa un elemento de la lista al final n veces sea presionado el boton
    $("#boton3").click(function(){
       $("ol").append("<li>Nuevo Elemento</li>");
    });

    $("#boton4").click(function(){
      //Ingresa un elemento de la lista al principio n veces sea presionado el boton
      $("ol").prepend("<li>Nuevo Elemento</li>");
    });

});
