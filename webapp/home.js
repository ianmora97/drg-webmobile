$(document).ready(function(){
    $("#menu").click(function(){
        $("#table").fadeToggle('slow');
    });
});
      $(document).ready(function(){
   $("#menu").click(function () {
      $("body").each(function() {
        over = $("body").css("overflow-y");
        if(over == "hidden") {
          $("#menu").fadeOut(function() {
           $("body").css("overflow-y","auto");
          });
        } else  {
          $("#menu").fadeIn(function() {
            $("body").css("overflow-y","hidden")
            ;
          });
        }
      });
    });
  });
    $(document).ready(function(){
   $("#menu").click(function () {
      $("#menu").each(function() {
        menu = $("#menu").css("display");
        if(menu == "auto") {
          $("#menu").fadeOut('slow',function() {
           $("#menu").css("display","auto");
          });
        } else {
          $("#menu").fadeIn('slow',function() {
            $("#menu").css("display","auto")
            ;
          });
        }
      });
    });
  });
    $(document).ready(function(){
    $("#meals").click(function(){
        $(".wrap").slideToggle('slow');
    });
});
$(document).ready( function() {
  $("#meals").click(function () { 
     $('html, body').animate({ scrollTop: $("#meals").offset().top}, 1000);
  });
});
    $(document).ready(function(){
    $("#diet").click(function(){
        $(".wrapdiet").slideToggle('slow');
    });
});
    $(document).ready( function() {
  $("#diet").click(function () { 
     $('html, body').animate({ scrollTop: $("#diet").offset().top}, 1000);
  });
});
        $(document).ready(function(){
    $("#breakfast").click(function(){
        $(".break").slideToggle('slow');
    });
});
    $(document).ready( function() {
  $("#breakfast").click(function () { 
     $('html, body').animate({ scrollTop: $("#breakfast").offset().top}, 1000);
  });
});

        $(document).ready(function(){
    $("#mid1").click(function(){
        $(".mid").slideToggle('slow');
    });
});
    $(document).ready( function() {
  $("#mid1").click(function () { 
     $('html, body').animate({ scrollTop: $("#mid1").offset().top}, 1000);
  });
});
 $(document).ready(function(){
    $("#lunch1").click(function(){
        $(".lunch").slideToggle('slow');
    });
});
    $(document).ready( function() {
  $("#lunch1").click(function () { 
     $('html, body').animate({ scrollTop: $("#lunch1").offset().top}, 1000);
  });
});
$(document).ready(function(){
    $("#coffe1").click(function(){
        $(".coffe").slideToggle('slow');
    });
});
    $(document).ready( function() {
  $("#coffe1").click(function () { 
     $('html, body').animate({ scrollTop: $("#coffe1").offset().top}, 1000);
  });
});
 $(document).ready(function(){
    $("#dinner1").click(function(){
        $(".dinner").slideToggle('slow');
    });
});
    $(document).ready( function() {
  $("#dinner1").click(function () { 
     $('html, body').animate({ scrollTop: $("#dinner1").offset().top}, 1000);
  });
});