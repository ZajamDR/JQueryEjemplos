$(document).ready(function(){

   $("button").click(function(){

    //Mostrando el valor de lo especificado en attr
    //var x = "El valor del atributo es " +$("input").attr("id");
    //$("#info").html(x);

    //cambiar el valor del atributo id="miID"  por el de id="Codigo" en todos los id de los input existentes
    //verificar en inspeccionar el cambio al presionar el boton
    //$("input").attr("id", "Codigo");

    //solo se modifica los input del tipo text
    //$("input[type='text']").attr("id", "Codigo");

    solo se modifica los input con id='miID'
    $("input[id='miID']").attr("id", "Codigo");

   });
});
