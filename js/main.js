
$(document).ready(function () {
  $(".openNav").on("click", function () {
    if ($(".menu").width() === 0) {
      $(".menu").animate({ width: "250px" }, 1000);
      $(".home-content").animate({ marginLeft: "+=250px" }, 1000);
    }
  });
  
  $(".close-btn").on("click", function () {
    $(".menu").animate({ width: "0" }, 1000);
    $(".home-content").animate({ marginLeft: "0" }, 1000);
  });
  
  $(".menu a").on ("click",function(e){
    e.preventDefault();
    let targetId = $(e.target).attr("href");
    let targetElement = $(targetId);
    let targetOffset = targetElement.offset().top;
    $("html,body").animate({scrollTop:targetOffset},500);
    $(e.target).addClass("active").siblings().removeClass("active")
  })
  
  $(".slider").on("click", function (e) {
    let clickedItem = $(e.target);
    let content = clickedItem.next();

    if (!clickedItem.hasClass("selected")) {
      $(".slider.selected").removeClass("selected").next().slideUp(1000);
      clickedItem.addClass("selected");
      content.slideDown(1000);
    } else {
      clickedItem.removeClass("selected");
      content.slideUp(1000);
    }
  });

  (function calculateDate() {
    setInterval(function () {
      let event = new Date("Oct 25, 2024");
      let currentDate = new Date();
      let remaining = event - currentDate;
      let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      let formattedHours = (hours < 10) ? "0" + hours : hours;
      let formattedMinutes = (minutes < 10) ? "0" + minutes : minutes;
      let formattedSeconds = (seconds < 10) ? "0" + seconds : seconds;

      $(".days").html(days + ' D');
      $(".hours").html(formattedHours + ' h');
      $(".minutes").html(formattedMinutes + ' m');
      $(".seconds").html(formattedSeconds + ' s');

    }, 1000);
  })();

  $("#message").on("keyup", function () {
    let characters = $(this).val().length;
    let remainingChars = 100 - characters;
    if (remainingChars < 0) {
      remainingChars = 0;
    }
    $(".characters").html(remainingChars);
  });
});
