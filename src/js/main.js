$(function () {
  $('.top__tab-switcher').click(function (e) {
    let tab = $(this).data('tab');
    $(tab).fadeIn(500);
    $(tab).siblings().fadeOut();
    $('html,body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 260);
    e.preventDefault();
  })
});