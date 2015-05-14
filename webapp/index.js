$(document).ready(function(){
    $("#menu").click(function(){
        $("#table").fadeToggle('slow');
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