(function ($) {
	$.fn.extend({
<<<<<<< HEAD
		onloadAnimate: function (callBack, addH,needRepeat) {
			this.each(function () {
				var $this = $(this);
				addH = isNaN(parseInt(addH)) ? 0 : parseInt(addH);
				var win = $(window);
				var isInView = false;
=======
		onloadAnimate: function (callBack, addH) {
			this.each(function () {
				var $this = $(this);
				var addH = isNaN(addH) ? 0 : parseInt(addH);
				var win = $(window);
>>>>>>> 3d3bca5d157d9b790f40c907f9dd58a313f85b02
				$this.nowMove = function () {
					//upView > 0 表示目标元素在视口下边缘的上方
					var upView = (win.scrollTop() + win.height()) - ($this.offset().top + addH);
					//downView > 0 表示目标元素在视口上边缘的下方
					var downView = $this.offset().top + $this[0].offsetHeight - addH - win.scrollTop();
<<<<<<< HEAD
					if (upView > 0 && downView > 0 && !isInView) {//元素在窗口内可见
						isInView = true;
						callBack.call($this);
					}else if (!(upView > 0 && downView > 0) && isInView && needRepeat) {
						isInView = false;
=======
					if (upView > 0 && downView > 0) {
						callBack($this);
						this.nowMove = function () {}
>>>>>>> 3d3bca5d157d9b790f40c907f9dd58a313f85b02
					}
				}
				$this.nowMove ();
				window.addEventListener("scroll",function () {
					$this.nowMove ();
<<<<<<< HEAD
				});
			});
=======
				})
			})
>>>>>>> 3d3bca5d157d9b790f40c907f9dd58a313f85b02
		}
	})
})(jQuery);
//使用说明:
//1.在jQuery后引入
//2.jq对象.onloadAnimate(回调函数（必填），额外显示量（选填，默认0）)