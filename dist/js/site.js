$(document).ready(function(){

$('#slides').superslides({
      animation: 'fade',
      pagination: false,
      play: 3500
});
    
// Reveal navigation on mobile
$( ".navtoggle" ).click(function() {
  $( "#nav" ).animate({width: 'toggle'}, 300);
});


// Reveal project copy

$('header').click(function(){
    $(this).next('div').slideToggle("slow");
  });

// Toggle Menu

$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});

// Redirect - smooth transition
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// Back to top reveal
$(window).scroll(function() {
    if ($(this).scrollTop()>1100) {
        $('.to-top').fadeIn();
    } else {
        $('.to-top').fadeOut();
    }
});

});

