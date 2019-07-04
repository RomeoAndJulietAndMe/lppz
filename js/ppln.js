
$('.x-section-h3,.x-section-h4,.x-nav,.x-article-left').onloadAnimate(function(){
    this.addClass('animated bounceInLeft')
},30);
$('.x-section-p,.x-footer-left').onloadAnimate(function(){
    this.addClass('animated bounceInUp')
},30);
$('.x-section-right,.x-article-right,.x-footer-right').onloadAnimate(function(){
    this.addClass('animated bounceInRight')
},30);






//鼠标滑上改变颜色
 $('.x-figure-leftall').each(function(){
     var $this=$(this);
    
     $this.hover(function(){
         $this.find('.x-text-left').css('background','#e1251b');
         $this.find('h3,h4,h5,h6,.iconfont').css('color','#fff');
     },function(){
        $this.find('.x-text-left').css('background','rgba(242,242,242,0.85)');
        $this.find('h3,h4,h5,h6,.iconfont').css('color','#808080');
     })
 });
 $('.x-figure-rightall').each(function(){
   var  $this=$(this);
     console.log($this);
    $this.hover(function(){
        $this.find('.x-text-right').css('background','#e1251b');
        $this.find('h3,h4,h5,h6,.iconfont').css('color','#fff');
    },function(){
       $this.find('.x-text-right').css('background','rgba(242,242,242,0.85)');
       $this.find('h3,h4,h5,h6,.iconfont').css('color','#808080');
    })
})




