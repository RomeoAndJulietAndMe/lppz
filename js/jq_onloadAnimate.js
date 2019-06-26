(function ($) {
	$.fn.extend({
		onloadAnimate: function (callBack, addH) {
			var _this = this;
			var addH = isNaN(addH) ? 0 : parseInt(addH);
			var win = $(window);
			nowMove ();
			onscroll = function () {
				nowMove ();
			}
			function nowMove () {
				//upView > 0 表示目标元素在视口下边缘的上方
				var upView = (win.scrollTop() + win.height()) - (_this.offset().top + addH);
				//downView > 0 表示目标元素在视口上边缘的下方
				var downView = _this.offset().top + _this[0].offsetHeight - addH - win.scrollTop();
				if (upView > 0 && downView > 0) {
					callBack();
					nowMove = function () {}
				}
			}
		}
	})
})(jQuery)
//使用说明:
//1.在jQuery后引入
//2.jq对象.onloadAnimate(回调函数（必填），额外显示量（选填，默认0）)