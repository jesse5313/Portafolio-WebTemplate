(function( $ ){
'use strict';
var $window = $(window);
var windowHeight = $window.height();

$window.resize(function () {
	windowHeight = $window.height();
});

$.fn.parallax = function(xpos, speedFactor, outerHeight) {
	var $this = $(this);
	var getHeight;
	var firstTop;
	var paddingTop = 0;
		
//Obtén la posición de inicio de cada elemento para aplicarle el efecto de paralaje.	
function update (){
$this.each(function(){
					
	firstTop = $this.offset().top;
});

if (outerHeight) {
	getHeight = function(jqo) {
		return jqo.outerHeight(true);
	};
} else {
	getHeight = function(jqo) {
		return jqo.height();
	};
}
			
// Configura valores predeterminados si no se especifican argumentos.
if (arguments.length < 1 || xpos === null) xpos = "50%";
if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
if (arguments.length < 3 || outerHeight === null) outerHeight = true;

// Función que se llamará cada vez que la ventana se desplace o cambie de tamaño.

var pos = $window.scrollTop();				

$this.each(function(){
var $element = $(this);
var top = $element.offset().top;
var height = getHeight($element);

// Comprueba si está completamente arriba o completamente abajo del área visible (viewport).
if (top + height < pos || top > pos + windowHeight) {
	return;
}
$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
});}		

$window.bind('scroll', update).resize(update);
update();
};
})(jQuery);