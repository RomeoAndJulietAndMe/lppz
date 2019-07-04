$('.w_move').onloadAnimate(function(){
    this.addClass('animated fadeInUpSmall')
},30);
$('.w_right').onloadAnimate(function(){
    this.addClass('animated fadeInRightSmall')
},30);
$('.w_dade').onloadAnimate(function(){
    this.find('li').eq(0).addClass('animated fadeInUpSmall').next().addClass('animated fadeInUpSmall').css('animation-delay','.2s').next().addClass('animated fadeInUpSmall').css('animation-delay','.4s').next().addClass('animated fadeInUpSmall').css('animation-delay','.6s')   
},30);




