/*
 *	this script is to be used only
 *	for all awards' program overview
 *	webpages
 */

$(document).ready(function(){
	//jump to link animation
	$(".a").mouseenter(function() {
		$(this).animate({marginLeft: "10px"}, 500);
	});

	$(".a").mouseleave(function() {
		$(this).animate({marginLeft: "0"}, 300);
	});

	//list spacing
	$("#boxes li").append("<br><br>");

	// setting the boxes as original
	$("#box1").data("name", "original").addClass("originalBox");
	$("#box2").data("name", "original").addClass("originalBox");
	$("#box3").data("name", "original").addClass("originalBox");

	// if the first box is clicked
	$("#box1").click(function() {
		// if the first box is an original box
		if ($(this).data("name") == "original") {
			// first box changes
			$(this).removeClass("originalBox").addClass("selectedBox");
			$(this).data("name", "selected");
			$("#boxcontent1").show();
			$(".hiddenContent1").show();

			// second box changes
			$("#box2").removeClass("originalBox").addClass("unselectedBox");
			$("#box2").data("name", "unselected");
			$("#boxcontent2").hide();

			// third box changes
			$("#box3").removeClass("originalBox").addClass("unselectedBox");
			$("#box3").data("name", "unselected");
			$("#boxcontent3").hide();

			// box container width change
			$("#boxes").css({width: "780px"});

		// if the first box is a selected box
		} else if ($(this).data("name") == "selected") {
			$(this).removeClass("selectedBox").addClass("originalBox");
			$(this).data("name", "original");
			$(".hiddenContent1").hide();

			$("#box2").removeClass("unselectedBox").addClass("originalBox");
			$("#box2").data("name", "original");
			$("#boxcontent2").show();

			$("#box3").removeClass("unselectedBox").addClass("originalBox");
			$("#box3").data("name", "original");
			$("#boxcontent3").show();

			$("#boxes").css({width: "1100px"});

		// if the first box is a minimized/unselected box
		} else if ($(this).data("name") == "unselected") {
			$(this).removeClass("unselectedBox").addClass("selectedBox");
			$(this).data("name", "selected");
			$("#boxcontent1").show();
			$(".hiddenContent1").show();

			// if the second box is a selected box
			if ($("#box2").data("name") == "selected") {
				$("#box2").removeClass("selectedBox").addClass("unselectedBox").data("name", "unselected");
				$("#boxcontent2").hide();
				$(".hiddenContent2").hide();
			} else if ($("#box2").data("name") == "unselected") {} else; // nothing changes

			// if the third box is a selected box
			if ($("#box3").data("name") == "selected") {
				$("#box3").removeClass("selectedBox").addClass("unselectedBox");
				$("#box3").data("name", "unselected");
				$("#boxcontent3").hide();
				$(".hiddenContent3").hide();
			} else if ($("#box3").data("name" == "unselected")) {} else; // nothing changes

			$("#boxes").css({width: "780px"}); // box container width changes no matter the case

		/*
		 * for any other unpredictable
		 * case the boxes will all
		 * become original boxes
		 * to avoid errors
		 */
		} else {
			$("#box1.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
			$("#box1.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
			$("#box1.originalBox").data("name", "original");
			$("#boxcontent1").show();
			$(".hiddenContent1").hide();

			$("#box2.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
			$("#box2.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
			$("#box2.originalBox").data("name", "original");
			$("#boxcontent2").show();
			$(".hiddenContent2").hide();

			$("#box3.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
			$("#box3.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
			$("#box3.originalBox").data("name", "original");
			$("#boxcontent3").show();
			$(".hiddenContent3").hide();

			$("#boxes").css({width: "1100px"});
		}
	});

	// if the second (middle) box is clicked
	$("#box2").click(function() {
		if ($("#box2").data("name") == "original") {
			$("#box2").removeClass("originalBox").addClass("selectedBox");
			$("#box2").data("name", "selected");
			$("#boxcontent2").show();
			$(".hiddenContent2").show();

			$("#box1").removeClass("originalBox").addClass("unselectedBox");
			$("#box1").data("name", "unselected");
			$("#boxcontent1").hide();

			$("#box3").removeClass("originalBox").addClass("unselectedBox");
			$("#box3").data("name", "unselected");
			$("#boxcontent3").hide();

			$("#boxes").css({width: "780px"});
		} else if ($("#box2").data("name") == "selected") {
			$("#box2").removeClass("selectedBox").addClass("originalBox");
			$("#box2").data("name", "original");
			$(".hiddenContent2").hide();

			$("#box1").removeClass("unselectedBox").addClass("originalBox");
			$("#box1").data("name", "original");
			$("#boxcontent1").show();

			$("#box3").removeClass("unselectedBox").addClass("originalBox");
			$("#box3").data("name", "original");
			$("#boxcontent3").show();

			$("#boxes").css({width: "1100px"});
		} else if ($("#box2").data("name") == "unselected") {
			$("#box2").removeClass("unselectedBox").addClass("selectedBox");
			$("#box2").data("name", "selected");
			$("#boxcontent2").show();
			$(".hiddenContent2").show();
			if ($("#box1").data("name") == "selected") {
				$("#box1").removeClass("selectedBox").addClass("unselectedBox").data("name", "unselected");
				$("#boxcontent1").hide();
				$(".hiddenContent1").hide();
			} else if ($("#box1").data("name") == "unselected") {} else;

			if ($("#box3").data("name") == "selected") {
				$("#box3").removeClass("selectedBox").addClass("unselectedBox").data("name", "unselected");
				$("#boxcontent3").hide();
				$(".hiddenContent3").hide();
			} else if ($("#box3").data("name") == "unselected") {} else;

			$("#boxes").css({width: "780px"});
		} else {
			$("#box1.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
			$("#box1.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
			$("#box1.originalBox").data("name", "original");
			$("#boxcontent1").show();
			$(".hiddenContent1").hide();

			$("#box2.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
			$("#box2.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
			$("#box2.originalBox").data("name", "original");
			$("#boxcontent2").show();
			$(".hiddenContent2").hide();

			$("#box3.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
			$("#box3.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
			$("#box3.originalBox").data("name", "original");
			$("#boxcontent3").show();
			$(".hiddenContent3").hide();

			$("#boxes").css({width: "1100px"});
		}
	});

	// if the third box is clicked
	$("#box3").click(function () {
		if ($(this).data("name") == "original") {
			$(this).removeClass("originalBox").addClass("selectedBox");
			$(this).data("name", "selected");
			$("#boxcontent3").show();
			$(".hiddenContent3").show();

			$("#box1").removeClass("originalBox").addClass("unselectedBox");
			$("#box1").data("name", "unselected");
			$("#boxcontent1").hide();

			$("#box2").removeClass("originalBox").addClass("unselectedBox");
			$("#box2").data("name", "unselected");
			$("#boxcontent2").hide();

			$("#boxes").css({width: "780px"});
		} else if ($(this).data("name") == "selected") {
			$(this).removeClass("selectedBox").addClass("originalBox");
			$(this).data("name", "original");
			$(".hiddenContent3").hide();

			$("#box1").removeClass("unselectedBox").addClass("originalBox");
			$("#box1").data("name", "original");
			$("#boxcontent1").show();

			$("#box2").removeClass("unselectedBox").addClass("originalBox");
			$("#box2").data("name", "original");
			$("#boxcontent2").show();

			$("#boxes").css({width: "1100px"});
		} else if ($(this).data("name") == "unselected") {
			$(this).removeClass("unselectedBox").addClass("selectedBox");
			$(this).data("name", "selected");
			$("#boxcontent3").show();
			$(".hiddenContent3").show();
			if ($("#box1").data("name") == "selected") {
				$("#box1").removeClass("selectedBox").addClass("unselectedBox").data("name", "unselected");
				$("#boxcontent1").hide();
				$(".hiddenContent1").hide();
			} else if ($("#box1").data("name") == "unselected") {} else;

			if ($("#box2").data("name") == "selected") {
				$("#box2").removeClass("selectedBox").addClass("unselectedBox").data("name", "unselected");
				$("#boxcontent2").hide();
				$(".hiddenContent2").hide();
			} else if ($("#box2").data("name") == "unselected") {} else;

			$("#boxes").css({width: "780px"});
			} else {
				$("#box1.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
				$("#box1.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
				$("#box1.originalBox").data("name", "original");
				$("#boxcontent1").show();
				$(".hiddenContent1").hide();

				$("#box2.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
				$("#box2.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
				$("#box2.originalBox").data("name", "original");
				$("#boxcontent2").show();
				$(".hiddenContent2").hide();

				$("#box3.unselectedBox").removeClass("unselectedBox").addClass("originalBox").data("name", "original");
				$("#box3.selectedBox").removeClass("selectedBox").addClass("originalBox").data("name", "original");
				$("#box3.originalBox").data("name", "original");
				$("#boxcontent3").show();
				$(".hiddenContent3").hide();

				$("#boxes").css({width: "1100px"});
			}
	});
});
