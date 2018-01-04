$(document).ready(function(){

    //Change Solo se puede usar con input , select y textarea


    $("select[name = 'transporte']").change(function(){
        $("#info").html("Escogiste: " + $("select[name = 'transporte']").val());

    });

});
