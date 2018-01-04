$(document).ready(function(){

    //podemos ver las coordenadas x y y
    var posicionDelParrafo = $("#id1").offset();
    console.log(posicionDelParrafo.top);

    $(window).scroll(function(){
      var posicionDelParrafo = $("#id1").offset();
      console.log("Window" + $(window).scrollTop());

      var posicionDeWindow = $(window).scrollTop();

      if(posicionDelParrafo.top < posicionDeWindow + 250){
        $("#id1").addClass("miClase");
      }

      else if(posicionDelParrafo.top > posicionDeWindow){
        $("#id1").removeClass("miClase");
      }

    });


});
