
    $(document).ready(function(){
   $("#menu").click(function () {
      $("#table").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");
          });
        }
      });
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
    $(".aid").click(function(){
        $(".wrap1").slideToggle('slow');
    });
});
$(document).ready( function() {
  $(".aid").click(function () { 
     $('html, body').animate({ scrollTop: $(".aid").offset().top}, 1000);
  });
});