$(function() {
	$(".temp_trigger").click(function() {
		triggerTempLayer(this);
	});

	$(".temp_mask").click(function() {
		isEasyClose();
	});

	$(".nav_sub_item").click(function() {
		closeNav();
	});

	function triggerTempLayer(obj) {
		$(".temp").show();

		$(".nav_main_item").each(function() {
			var that = $(this);
			if(that.hasClass("active")) {
				that.next().show();
			}
		});

		if($(obj).hasClass("nav_trigger")) {
			triggerNav();	
		}
	}

	function closeTempLayer() {
		$(".temp").hide();
	}

	function triggerNav() {
		$(".nav").animate({
			left: "0"
		}, 400, "easeInOutCubic").addClass("active");
	}

	function closeNav() {
		$(".nav").animate({
			left: "-241"
		}, 400, "easeInOutCubic", function() {
			closeTempLayer();
		}).removeClass("active");
	}

	function isEasyClose() {
		if($(".temp_item.active").data("easy-close")) {
			if($(".temp_trigger").hasClass("nav_trigger")) {
				closeNav();
			}
		}
	}
})