$(".Part-Two-Yes").hide();
$(".yes-button").click(function() {
    $(".firstclass").hide();
    $(".Part-Two-Yes").fadeIn();
    
    
});

$(".no-button").click(function() {
    $(".firstImage").hide();
    $(".title").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".help").hide();
    $(".bye").fadeIn();
    $(".restart").fadeIn();
  
});
$(".bye").dblclick(function(){
    $(".firstImage").show();
    $(".title").show();
    $(".yes-button").show();
    $(".no-button").show();
    $(".help").show();
    $(".bye").hide();
    $(".restart").hide();
});
$(".map1").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("Cookie Monster wants to see Cookies");
    $(".hide").css("color","white");
    $(".hide1").text("*Hover Over Cookie Monster to Eat*");
    $("body").css("background-image","url(https://thumbs.dreamstime.com/b/chocolate-chip-cookies-cookie-full-frame-background-215624666.jpg)");
    $(".fly").show();
});
$(".map2").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("Cookie Monster became strong ");
    $(".hide1").hide();
    $(".hide").css("color","white");
    $(".hide1").css("color","white");
    $("body").css("background-image","url(https://media.timeout.com/images/105928521/750/422/image.jpg)");
    $(".end").slideDown("slow");
    $(".restart1").slideDown("slow");
    
});
$(".fly").mouseenter(function(){
    $(".hide").text("Cookie Monster Must Be Strong");
    $(".hide1").text("*Double Click Cookie Monster to GET STRONG*");
    $(".hide1").css("color","white");
    $("body").css("background-image","url(https://media.timeout.com/images/105928521/750/422/image.jpg)");
});
$(".fly").dblclick(function(){
    $(".hide").text("Cookie Monster must use the Weights");
    $(".hide1").text("*Unhover to use Weights*");
    $(".hide1").css("color","white");
    $("body").css("background-image","url(https://cdn.media.amplience.net/i/thegymgroup/The_Gym_Group-Dorchester-Dumbbells_2?fmt=auto&h=545&w=1440&sm=c&qlt=default&$qlt$&$poi$)");
});
$(".fly").mouseleave(function(){
    $("body").css("background-image","url(https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvd2QlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D)");
    $(".fly").hide();
    $(".end").show();
    $(".hide1").text("Click Text To Hide Him From the Crowd");
    $(".hide").text("Cookie Monster is loved by all");
});
$(".hide").click(function(){
    $(".end").toggle();
});


