$(function() {
  $('.hamburger-menu').on('click', function(){
      $('.toggle').toggleClass('open');
      $('.nav-list').toggleClass('open');
  });
  $('.nav-list>li>a').on('click', function(){
    $('.nav-list').toggleClass('open');
  });
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

