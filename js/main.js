$(function() {

	
/* Mostrar navegación lateral al hacer clic en el botón de menú de navegación. */
$('.burger-container').on('click', function() {
$('.main-navigation').toggle('slow');
if($('#myBtn').hasClass('change')) {
	$('body').addClass('stop-scroll');
} else {
	$('body').removeClass('stop-scroll');
}
});

/* About me slider */
$('.about-me-slider').slick({
	slidesToShow: 1,
	prevArrow: '<span class="span-arrow slick-prev"><</span>',
	nextArrow: '<span class="span-arrow slick-next">></span>'
});

/* Blog slider */
$('.blog-slider').slick({
	slidesToShow: 2,
	prevArrow: '<span class="span-arrow slick-prev"><</span>',
	nextArrow: '<span class="span-arrow slick-next">></span>',
	responsive: [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1
		}
	}
	]
});

});

