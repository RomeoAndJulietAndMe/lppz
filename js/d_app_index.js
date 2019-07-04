(function ($) {
	
//	d_head_top_wrap star

	var index = 0;
	var topTimer = setInterval(autoPlay,3000);
	function autoPlay () {//自动播放
		if (index == 3) {
			index = 0;
			$(".d_img_content").css("left", 0);
		}
		index++;
		move (index);
	}
	function move (index) {//运动到index处
		$(".d_img_content").animate({"left": -250 * index + "px"});
		$(".d_top_active").toggleClass("d_top_active");
		$(".d_right_view ul li").eq(index == 3 ? 0 : index).addClass("d_top_active");
	}
	$(".d_right_view ul").hover(function () {
		clearInterval(topTimer);
	},function () {
		topTimer = setInterval(autoPlay,3000);
	}).on("click","li",function () {
		if (index == 3) {
			index == 0;
			$(".d_img_content").css("left", 0);
		}
		index = $(this).index();
		move (index);
	})
	
//	d_head_top_wrap end
	
//	d_box_wrap star
	
	$(".d_mall_ani").onloadAnimate(function () {//第一个动画
		this.children(".d_mall_img2, .d_mall_img3").addClass("d_animate_tr");
	},0,function () {
		this.children(".d_mall_img2, .d_mall_img3").removeClass("d_animate_tr");
	});
	$(".d_member_ani").onloadAnimate(function () {//第二个动画
		this.addClass("d_animate_tt");
	},0,function () {
		this.removeClass("d_animate_tt");
	});
	$(".d_community_ani").onloadAnimate(function () {//第二个动画
		this.children().not(".d_community_phone").addClass("d_animate_tb");
	},0,function () {
		this.children().not(".d_community_phone").removeClass("d_animate_tb");
	});
	
//	d_box_wrap end
	window.addEventListener("scroll",function () {
		$(".d_first_bg").css("background-position-y",getSpace ($(".d_first_bg")));
		$(".d_second_bg").css("background-position-y",getSpace ($(".d_second_bg")));
		$(".d_third_bg").css("background-position-y",getSpace ($(".d_third_bg")));
	});
	function getSpace ($ele) {//获取元素顶部到窗口顶部的距离的十分之一
		return ($ele.offset().top - $(window).scrollTop()) / 10 + "px";
	}
})(jQuery);
