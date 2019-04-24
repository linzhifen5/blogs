// loading 效果
$(function(){
  setInterval(function(){
    $(".loading").fadeOut("slow");
    $("body").css("overflow","auto")
  },3000);
})