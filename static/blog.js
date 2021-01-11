function nav_show() {
	$(".nav_show").fadeOut(0);
	$(".nav_content").fadeIn(1000);
};

function nav_hide() {
	$(".nav_content").animate({
		width: 'toggle'
	}, 300, function() {$(".nav_show").fadeIn(500);});
};