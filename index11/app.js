$(document).ready(function(){

    $("#B1").click(function(){
        $("p").removeClass("nuevaClase");
    });

    $("#add").click(function(){
      $("#caja").addClass("miClase");
    });

    $("#remove").click(function(){
      $("#caja").removeClass("miClase");
    });

});
