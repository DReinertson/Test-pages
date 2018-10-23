$('.who-we-are-page').hide();
$('.contact-page').hide();
$('.dropdown-menu').hide();

$('.home').on('click', function(){
  $('.home-page').show();
  $('.who-we-are-page').hide();
  $('.contact-page').hide();
});

$('.who-we-are').on('click', function() {
  $('.who-we-are-page').show();
  $('.home-page').hide();
  $('.contact-page').hide();
});

$('.contact').on('click', function(){
  $('.contact-page').show();
  $('home-page').hide();
  $('who-we-are-page').hide();
});

$('.title').on('click',function(){
  $(this).next('.dropdown-menu').toggle();
});

$('.innerdrop').hover(function(){
  $(this).next('ul').show();
});

$('ul').mouseleave(function(){
  $('ul').hide();
})
