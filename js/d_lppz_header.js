(function ($) {
	var nav = $(".d_nav");
	var navSelect = $(".d_nav_select, .d_follow_select");
	var flag = false;//小页面时菜单是否展开的控制开关
	navSelect.each(function () {//鼠标移入移出显示隐藏下拉菜单
		var $this = $(this);
		$this.parent().hover(function () {
			$this.stop().css("display","block").animate({opacity: 1,top:"80px"},"fast");
		},function () {
			$this.stop().animate({opacity: 0,top:"70px"},"fast").css("display","none");
		});
	});
	$(".d_nav_select").each(function () {//鼠标点击透明与否
		var $this = $(this);
		var pBottom = $this.find("p");
		var pHeight = pBottom.css("height");
		$this.parent().children("a").toggle(function () {
			$(this).parent().find("p").stop().animate({height: 0});
		},function () {
			$(this).parent().find("p").stop().animate({height: pHeight});
		})
	})
	$(".d_follow_select li:nth-child(3)").hover(function () {//微信二维码的显示隐藏
		$(".d_follow_code").stop();
		$(".d_follow_code").animate({height:"88px"});
	}, function () {
		$(".d_follow_code").stop();
		$(".d_follow_code").animate({height:"0"});
	});
	$(".d_menu").toggle(function () {//小窗口时点击菜单栏收放菜单
		$(this).children().eq(0).css("transform","rotate(45deg)");
		$(this).children().eq(1).css("opacity","0");
		$(this).children().eq(2).css("transform","rotate(-45deg)");
		$(".d_big_nav").css({display: "block"});
		flag = true;
	},function () {
		$(this).children().eq(0).css("transform","rotate(0)");
		$(this).children().eq(1).css("opacity","1");
		$(this).children().eq(2).css("transform","rotate(0)");
		$(".d_big_nav").css({display: "none"});
		flag = false;
	});
	$(".d_big_select").each(function () {//小窗口时缩放下拉菜单
		var $this = $(this);
		var selH = parseInt($this.find("a").css("height")) * $this.find("a").size() + "px";
		$this.parent().toggle(function () {
			$(this).toggleClass("d_active");
			$this.css("height", "0").animate({height: selH});
		},function () {
			$this.animate({height: "0"},function () {
				$this.parent().toggleClass("d_active");
			});
		});
	});
	$(window).resize(function () {//缩放窗口时页面结构
		if (window.innerWidth <= 1100 && flag) {
			$(".d_big_nav").css({display: "block"});
		} else {
			$(".d_big_nav").css({display: "none"});
		}
	});
})(jQuery)
