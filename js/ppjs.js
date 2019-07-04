 
 //swiper运动
 var mySwiper = new Swiper ('.swiper-container', {
				    on:{
				      init: function(){
				        swiperAnimateCache(this); //隐藏动画元素 
				        swiperAnimate(this); //初始化完成开始动画
				      }, 
				      slideChangeTransitionEnd: function(){ 
				        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
				      } 
				    }
				  }) 





//swiper轮播
var mySwiper = new Swiper ('.swiper-container', {
	//  direction: 'verticalhb', // 垂直切换选项
  //  autoplay:true,//自动播放
//   autoplay: {
// 	  delay: 1000,
// 	 stopOnLastSlide: false,
// 	  disableOnInteraction:false,
//  },
  
  
	// direction:'horizontal',
	//  loop: true, // 循环模式选项
	 
	 // 如果需要分页器
//				    pagination: {
//				      el: '.swiper-pagination',
//				      clickable :true,
//				    },
	 
	 // 如果需要前进后退按钮
	 navigation: {
	   nextEl: '.swiper-button-next',
	   prevEl: '.swiper-button-prev',
	 },
	 
	 // 如果需要滚动条
//				    scrollbar: {
//				      el: '.swiper-scrollbar',
//				    }
//				  


})        




//底部轮播图中，加变减，线条变长短，圆圈变红和灰色
		// $('.x-footer').each(function(){
			//var $this=$(this);	
		 $('.x-jia i').toggle(function(){
				 $(this).html('-');
		 		$(this).parent().next().animate({width:0},1000,"swing",function(){})
				 $(this).parent().parent().prev().addClass("x-after");
					
		 },function(){
		 	$('.x-jia i').html('+');  
		 	$(this).parent().next().animate({width:296},1000,"swing",function(){})
			 $(this).parent().parent().prev().removeClass("x-after");
		 })
		// })

		//  $('.x-footer').each(function(){
		// 	var $this=$(this);
			
		// 	$this.toggle(function(){
		// 			$this.html('-');
		// 	})

		//  })


	//轮播图中，鼠标移入移出改变颜色			
		//  $('.x-footer-one').hover(function(){
		// 	 $('.x-footer-one h3').css('color','red');
		// 	 $('.x-footer-one span').css({
		// 		 'background':'#e1251b url(http://www.517lppz.com/themes/cn/default/assets/images/bg_02.svg)	no-repeat center center',
		// 		'background-size':'150px'			
		// 		});
		// 	$('.x-footer-left').css('border','1px solid red');
		// 	$('.x-footer-left').append("<style>.x-footer-left:before{background:red}</style>");
		//  },function(){
		// 	 $('.x-footer-one h3').css('color','#b2b2b2');
		// 	 $('.x-footer-one span').css('background',' url(../img/a2019.jpg)	no-repeat');
		// 	 $('.x-footer-left').css('border','1px solid #b2b2b2');
		// 	 $('.x-footer-left').append("<style>.x-footer-left:before{background:#b2b2b2}</style>");
		//  })

//轮播图中，鼠标移入移出改变颜色	
		$('.x-footer').each(function(){
			var $this=$(this);
			console.log($this);
			$this.hover(function(){
					$this.find('h3').css('color','red');
					$this.find('span').css({'background':'#e1251b url(http://www.517lppz.com/themes/cn/default/assets/images/bg_02.svg)	no-repeat center center',
					'background-size':'150px'
					})
					$this.find('.x-footer-left').css('border','1px solid red');
					// $this.find('.x-footer-left').append("<style>.x-footer-left:before{background:red}</style>");
					$this.find('.x-footer-left').addClass("x-before")
			},function(){
					$this.find('h3').css('color','#b2b2b2');
					$this.find('span').css({'background':'#b2b2b2  url(../img/a2019.jpg)	no-repeat center center',
					
					})
					$this.find('.x-footer-left').css('border','1px solid #b2b2b2');
					 //$this.find('.x-footer-left').append("<style>.x-footer-left:before{background:#b2b2b2}</style>");
					 $this.find('.x-footer-left').removeClass("x-before")
			})
		})



			// $this.find('span').hover(function(){
			// 		$(this).css({'background':'#e1251b url(http://www.517lppz.com/themes/cn/default/assets/images/bg_02.svg)	no-repeat center center',
			// 		'background-size':'150px'
			// 		})
			// 		},function(){
			// 			$(this).css({'background':'#b2b2b2 url(http://www.517lppz.com/themes/cn/default/assets/images/bg_02.svg)	no-repeat center center',
			// 			'background-size':'150px'
			// 		})
			// })
		






		// $('.x-footer').each(function(){
		// 	var $this=$(this);
		// 	console.log($this);
		// 	$this.find('h3').hover(function(){
		// 			$(this).css('color','red');
		// 	},function(){
		// 			$(this).css('color','#b2b2b2')
		// 	})

		// 	$this.find('span').hover(function(){
		// 			$(this).css({'background':'#e1251b url(http://www.517lppz.com/themes/cn/default/assets/images/bg_02.svg)	no-repeat center center',
		// 			'background-size':'150px'
		// 			})
		// 			},function(){
		// 				$(this).css({'background':'#b2b2b2 url(http://www.517lppz.com/themes/cn/default/assets/images/bg_02.svg)	no-repeat center center',
		// 				'background-size':'150px'
		// 			})
		// 	})
		// })

				// 	$('.x-footer-one h3').hover(function(){
				// 		$('.x-footer-one h3').css('color','red');
				// 	})

				// 	$('.x-footer-one span').hover(function(){				
				// 	$('.x-footer-one span').css({
				// 		'background':'#e1251b url(http://www.517lppz.com/themes/cn/default/assets/images/bg_02.svg)	no-repeat center center',
				// 		'background-size':'150px'		
				// 	})					
				// })
				// $('.x-footer-left').hover(function(){
				// 	$('.x-footer-left').css('color','red');
				// })

		




//						$('.x-jia i').toggle(function(){
//							$('.x-jia i').html('-');
//						},function(){
//							$('.x-jia i').html('+');
//						}//.html('-');
						
//						$('.x-footer-left:after').css('background','red');
//						}
//        },function(){
//        	$('.x-jia i').html('+');  
//        });