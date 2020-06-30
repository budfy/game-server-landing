$(function () {
  $('a[href^="#"]').click(function (e) {
    $('html,body').stop().animate({
      scrollTop: ($($(this).attr('href')).offset().top - 180),
    }, 700);
    e.preventDefault();
  });

  $('.top__tab-switcher').click(function (e) {
    let tab = $(this).data('tab');
    $(tab).siblings().slideUp(250);
    setTimeout(() => {
      $(tab).slideDown(250);
    }, 300);
    $('html,body').stop().animate({
      scrollTop: ($($(this).attr('href')).offset().top - 190),
    }, 700);
    e.preventDefault();
  });

});