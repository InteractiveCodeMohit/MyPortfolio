console.log("welcome")

$("#clk").click(function(){
    $("nav").toggle("slow");
    $("nav").css("position: 'absolute'");
    // $( "#profile-sec" ).toggle.css('margin-top','270px');
});

// $("#clk").click(function(){
//     $( "#profile-sec" ).toggle.css('margin-top','270px');
// });


$(document).ready(function(){
    $("#clk").toggle(
      function(){$("#profile-sec").css({"margin-top": "260px"});},
      function(){$("#profile-sec").css({"margin-top": "70px"});})
   
  });