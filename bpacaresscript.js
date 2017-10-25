/*
 *	this script is to be
 *	used for all web pages
 */

$(document).ready(function() {
	//header nav animation
	$(window).on("scroll touchmove", function() {
		$("#headerNav").toggleClass("tiny", $(document).scrollTop() > 0);
	});

	//scrolling transition
	$(".a1").on("click", function() {
		$("html, body").animate({
			scrollTop: $("#info").offset().top
		}, 500);
	});
	$(".a2").on("click", function() {
		$("html, body").animate({
			scrollTop: $("#awardSection").offset().top
		}, 500);
	});
});
