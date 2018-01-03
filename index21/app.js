$(document).ready(function(){
  $("#p1").mouseover(function(){
    $(this).css("background-color","red");
  })

  $("#p1").mouseout(function(){
    $(this).css("background-color","yellow");
      $(this).css("width","200px");
  });

});
