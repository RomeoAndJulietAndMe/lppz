(function ($) {
	$.fn.extend({
		onloadAnimate: function (callBack, addH,needRepeat) {
			this.each(function () {
				var $this = $(this);
				addH = isNaN(parseInt(addH)) ? 0 : parseInt(addH);
				var win = $(window);
				var isInView = false;
				$this.nowMove = function () {
					//upView > 0 表示目标元素在视口下边缘的上方
					var upView = (win.scrollTop() + win.height()) - ($this.offset().top + addH);
					//downView > 0 表示目标元素在视口上边缘的下方
					var downView = $this.offset().top + $this[0].offsetHeight - addH - win.scrollTop();
					if (upView > 0 && downView > 0 && !isInView) {//元素在窗口内可见
						isInView = true;
						callBack.call($this);
					}else if (!(upView > 0 && downView > 0) && isInView && needRepeat) {
						isInView = false;
					}
				}
				$this.nowMove ();
				window.addEventListener("scroll",function () {
					$this.nowMove ();
				});
			});
		}
	})
})(jQuery);
//使用说明:
//1.在jQuery后引入
//2.jq对象.onloadAnimate(回调函数（必填），额外显示量（选填，默认0）)