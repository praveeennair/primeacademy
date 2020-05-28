$(function() {
  $('.hamburger-menu').on('click', function(){
      $('.toggle').toggleClass('open');
      $('.nav-list').toggleClass('open');
  });
  $('.nav-list>li>a').on('click', function(){
    $('.nav-list').toggleClass('open');
  });
});


