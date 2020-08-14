$(window).on('load',function(){

  $(".js-bg").each(function () {
      $(this).css('background-image', 'url(' + $(this).data("preload") + ')');
  });
  $(".js-img").each(function () {
      $(this).attr('src', $(this).data("src"));
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('body').addClass('ios');
        
  } else{
  $('body').addClass('web');
    $(window).bind('resize', handler);    
  };

  setTimeout(function () {
     $('body').removeClass('loaded');
  }, 900);

  ///------------------------
	$('.numb').each(function() {  
	  var asd = $(this);  
	  asd.find('span.minus').click(function() {
	   var data = asd.find('input').val();
	   if(data > 0) {
		asd.find('input').val(parseInt(data) - 1);
	   }
	   return false
	  });  
	  asd.find('span.plus').click(function() {
	   var data = asd.find('input').val();
	   asd.find('input').val(parseInt(data) + 1);
	   return false
	  });	  
  });





});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
document.addEventListener("touchstart", function(){}, true);

$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/ 


  //


  function showDiv() {
    if($(window).scrollTop() > 0 && $('.header').data('positioned') == 'false') {
      $(".header").data('positioned', 'true');
      $(".header").addClass('fix');
    }
    else if($(window).scrollTop() <= 0 && $('.header').data('positioned') == 'true') {
      $(".header").removeClass('fix').data('positioned', 'false');
    }
  }
  $(window).scroll(showDiv);
  //$(window).load(showDiv);
  $('.header').data('positioned', 'false');

  //
  $('.mobile-button').on('click', function(){
    $(this).toggleClass('open'); 
    $('.mobile_nav').toggleClass('open'); 
    return false;    
  });

  //
  $('select:not(.dream_sel), .styler').styler();

 
  //
  if ($('.fancybox').length) {
    $('.fancybox').fancybox({touch: false});
  }


});

//

document.addEventListener('DOMContentLoaded', function () {
  
});

var handler = function(){
	
	var height_footer = $('.footer').height();	
	var height_header = $('.header').height();		
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

  $('.js-vh').css({'height': $(window).height()});

	if (viewport_wid <= 1023) {
	}
	else if (viewport_wid > 1023){

	}

}
$(window).bind('load', handler);

$(window).on('resize', function() {
  $('.js-vh').css({'height': $(window).height()});
});

$(window).on('orientationchange', function() {
  setTimeout(function() {
    handler();
  }, 100);
});
 


