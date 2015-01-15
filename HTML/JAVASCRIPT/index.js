$(function() {
	var offsetPixels = 50; 

	$(window).scroll(function() {
		if ($(window).scrollTop() > offsetPixels) {
			$( ".container" ).css({
				"position": "fixed",
				"top": "15px",
   				"width": "45px",
 				"height": "130px",
   				"left": "10px"
			});
		} else {
			$( ".container" ).css({
				"position": "relative",
				"top": "0"
			});
		}
	});
});