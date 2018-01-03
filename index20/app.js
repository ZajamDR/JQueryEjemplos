$(document).ready(function(){

 $(".miClase").mouseover(function(){
    var valorDelAtributo = $(this).attr("data-nuevo");
    $("#" + valorDelAtributo).hide();
 });

});
