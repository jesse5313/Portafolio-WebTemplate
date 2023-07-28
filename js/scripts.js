﻿jQuery(function($){

'use strict';
/* Preloader */
(function () {
$(window).load(function() {
    $('#pre-status').fadeOut();
    $('#st-preloader').delay(350).fadeOut('slow');
});
}());

/* Animated scrolling / Scroll Up */
(function () {
$('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
});
}());

/* Full Screen */
(function () {
$(".st-fullHeight").height($(window).height());
$(window).resize(function(){
    $(".st-fullHeight").height($(window).height());
});
}());

/* Parallax */
(function () {
$(window).bind('load', function () {
    parallaxInit();						  
});
function parallaxInit() {		
$(".subscribe").parallax("50%", 0.3);
}	
parallaxInit();
}());
});