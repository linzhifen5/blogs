
$(function () {
  // 刷新页面回到头部
  setTimeout(function(){$(window).scrollTop(0)},10);
  
  // loading 效果
  setInterval(function () {
    $(".loading").fadeOut("slow");
    $("body").css("overflow", "auto")
  }, 3000);

  // 回到首页出现
  var windowVal = $(window).height();
  $(window).scroll(function () {
    var scrollVal = $(document).scrollTop();
    console.log(scrollVal);
    console.log(windowVal)
    if (scrollVal > windowVal) {
      $(".gohome").css("display", "inline-block");
    } else {
      $(".gohome").css("display", "none");
    }
  })

  // 回到首页
  $(".gohome").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 'slow');
  })
})