$( window ).scroll(function() { 
	var box = document.getElementById("sb");
	var scrollv = $(document).scrollTop();
	box.style.top = (scrollv) + "px";
});