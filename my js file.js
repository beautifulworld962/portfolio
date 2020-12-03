  var container = document.querySelector('.filter-all');
  var mixer = mixitup(container, {
    selectors: {
      control: '[hm-aminur]'
    }   
  });


  // এটার অরজিনাল কোড
  // var mixer = mixitup('.filter-all');
   //বিস্তারিত জানতে 6 নম্বর ভিডিওটি দেখুন।


// top form
   $('.form-icon').click(function(){
   	$('.form-box').toggleClass('form-box-1');
   });


// scroll bar icon
    $('.top-arrow').click(function(){
    $('html, body').animate({
      scrollTop: 0,
    },1000);
  });
  $(window).scroll(function(){
  var windows =$(this).scrollTop();

  if (windows<150) {
    $('.top-arrow').fadeOut();
  }
  else{
    $('.top-arrow').fadeIn();
  }



  // manu bar
  $('.navbar-nav li').click(function(){
  $(this).addClass('active').siblings().removeClass();
});

  if (windows>100) {
    $('body').addClass('fixed')
  }
  else{
    $('body').removeClass('fixed')
  }
  
});


$('.navbar-nav a[href^="#"]').click(function(e){
  e.preventDefault();

   var recent = this.hash;

   $('html, body').animate({
     scrollTop: $(recent).offset().top -70
   }, 1000);
})

$('a[href^="#"]').click(function(e){
  e.preventDefault();

})
///////////wow plagein///////////////////

new WOW().init();
