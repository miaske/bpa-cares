/*
 *	this script is to be used only
 *	for each individual awards'
 *	webpage
 */

$(document).ready(function() {
	//award header animation
	$(window).on("scroll touchmove", function() {
		$("#head").toggleClass("scroll", $(document).scrollTop() > 0);
        $("#x").toggleClass("stay", $(document).scrollTop() > 80);
	});

    //block color change
    $("#four").hover(function() {
        $("#one").toggleClass("blockHover");
        $("#two").toggleClass("blockHover");
        $("#three").toggleClass("blockHover");
        $("#five").toggleClass("blockHover");
    });

    $("#four").on("click", function() {
        $("#sampleForm").fadeIn();
        $("#one").toggleClass("blockHover");
        $("#two").toggleClass("blockHover");
        $("#three").toggleClass("blockHover");
        $("#five").toggleClass("blockHover");
    });

	// exit out of sample form
    $("#x").on("click", function() {
        $("#sampleForm").fadeOut();
        $("#one").toggleClass("blockHover");
        $("#two").toggleClass("blockHover");
        $("#three").toggleClass("blockHover");
        $("#five").toggleClass("blockHover");
    });

	// pagination arrow animation
    $("#lArrow").hover(function() {
        $(this).toggleClass("lMove");
    });
    $("#rArrow").hover(function() {
        $(this).toggleClass("rMove");
    });
});