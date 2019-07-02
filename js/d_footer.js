(function ($) {
	$(".d_footer-code").hover(function () {//微信微博移入显示二维码
		$(this).find(".d-code-img").css("display","block");
		var img = $(this).find(".d-code-img img");
		img.stop();
		setTimeout(function () {
			img.animate({opacity: 1,width: "100px"},"fast");
		},100);
	},function () {
		var imgBox = $(this).find(".d-code-img");
		var img = $(this).find(".d-code-img img");
		img.stop();
		setTimeout(function () {
			img.animate({opacity: 0,width: "0"},function () {
				imgBox.css("display","none");
			});
		},100);
	});
	$(".d_footer-gotop a").click(function () {//返回顶部
		$("html,body").animate({scrollTop: 0});
	});
})(jQuery);
