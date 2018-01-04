$(document).ready(function(){

    $("#password").focusin(function(){
      $(this).addClass("miClase");
    });

    $("#password").focusout(function(){
      if($(this).val().length > 0 && $(this).val().length <= 3){
        $("#id3").html("<span style =  'color:#BA1C2E;'> Contraseña muy corta</span>");
      }

      else if($(this).val().length > 3 && $(this).val().length <= 8){
        $("#id3").html("<span style =  'color:green;'> Contraseña valida! ");
      }

      else {
        $("#id3").html("<span style =  'color:#BA1C2E;'>Error: (maximo 8 caracteres)</span>");
      }
    });

    $("#confirmacion").focusin(function(){
      $(this).addClass("miClase");
    });

    $("#confirmacion").focusout(function(){
      if($(this).val().length == 0){
          $("#id4").html("");
      }

      else if($(this).val().length > 3 && $(this).val().length <= 8){
          if($("#password").val() === $("#confirmacion").val()){
            $("#id4").html("<span style = 'color: green;'> Tus Constraseñas son iguales ! </span> ");
          }
          else{
            $("#id4").html("<span style = 'color: red;'> Error: las Constraseñas no coinciden ! </span> ");
          }
      }

      else{
        $("#id4").html("<span styel='color: red;'> Error: (maximo 8 caracteres)</span>");
      }
    });
});
