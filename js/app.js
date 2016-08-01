window.onload = (function () {
	$(".Loader").delay(4000).fadeOut("slow");
});

$(document).ready(function () {
	ClickPic();
	OnTargetHover();
});

function ClickPic() {

	var ImgNum = 0;
	var ImageCount = 56;

	$(".ImageDate").click(function (e) {
		e.preventDefault();

		if (ImgNum <= ImageCount) {
			ImgNum += 1;
			location.hash = "#Img" + ImgNum;
		}
	});

}

function OnTargetHover() {
	// $(".ImageDate").hover(function (e) {
	// 	$(".Date").css("display", "block");
	// });

	var Img = $(".ImageDate");

	Img.hover(function (e) {
		$(".Date").css("opacity", "1");
	});

	Img.mouseenter(function (e) {
		$(".Date").css("opacity", "1");
	});

	Img.click(function (e) {
		$(".Date").css("opacity", "1");
	});

	Img.mouseleave(function () {
		$(".Date").css("opacity", "0", "overflow", "hidden");
	});

}
