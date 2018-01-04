$(document).ready(function(){

  var parent = $("#container");
  var divs =  parent.children();

  //Aqué se generan numeros al azar del 1 al 5 para insertarlos en parent

  parent.append(divs.splice(Math.floor(Math.random()*divs.length),1)[0]);

  //hover nos permite mostrar algo cuando el mouse pase encima de las cajas definidas por .caja
  $(".caja").hover(function(){

    //Aqui nos muestra el mensaje ganaste cuando se encuentre el numero 3 dentro de alguna caja
    if($(this).text()  === "3"){
        $("#info").html("Ganaste");
    }

    //da el color amarillo al pasar el mouse encima de la caja
    $(this).css("background-color", "yellow");

  });

});
