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
				  
				  

		 $('.x-jia i').click(function () {
//        $('.x-footer-bottom').toggle(1000,'swing',function () {
//        	
//        })
				//	$('.x-footer-bottom').animate({width:0},1000,"swing",function(){})
					
   })
//        	console.log($('.x-footer-left:after'))
//        		$('.x-footer-left:after').css('background','red');
//        		$('.x-footer-left:after').toggle(function(){
//        			 $('.x-footer-left').append("<style>.x-footer-left:after{background:red}</style>");
//        			 
//        		},function(){
//        			 $('.x-footer-left').append("<style>.x-footer-left:after{background:#b2b2b2}</style>");
//        		})
          		
          		
          		
          		
        	//	 $('.x-footer-left').append("<style>.x-footer-left:after{background:red}</style>");
//      		  $('.flow_ball1').append("<style>#fafang::after{display:none}</style>");
		 $('.x-jia i').toggle(function(){
		 		$('.x-jia i').html('-');
		 		$('.x-footer-bottom').animate({width:0},1000,"swing",function(){})
		 		 $('.x-footer-left').append("<style>.x-footer-left:after{background:red}</style>");
		 },function(){
		 	$('.x-jia i').html('+');  
		 	$('.x-footer-bottom').animate({width:296},1000,"swing",function(){})
		 	 $('.x-footer-left').append("<style>.x-footer-left:after{background:#b2b2b2}</style>");
		 })
          	
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