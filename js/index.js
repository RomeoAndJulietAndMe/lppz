$('.c_move_left').onloadAnimate(function(){
    this.addClass('animated fadeInLeft').css('animation-delay','.3s')
},30);
$('.c_move_right').onloadAnimate(function(){
    this.find('p').eq(0).addClass('animated fadeInRightSmall').css('animation-delay','.3s').next().addClass('animated fadeInRightSmall').css('animation-delay','.5s').next().addClass('animated fadeInRightSmall').css('animation-delay','.7s')
},30);
$('.c_move_up').onloadAnimate(function(){
    this.addClass('animated fadeInUpSmall').find('h2').addClass('animated fadeInUpSmall').css('animation-delay','.3s').next().addClass('animated fadeInUpSmall').css('animation-delay','.5s')
},30);
$('.c_move_right-left').onloadAnimate(function(){
    this.addClass('animated fadeInRight').css('animation-delay','.3s')
},30);
$('.c_move_right-right').onloadAnimate(function(){
    this.find('p').eq(0).addClass('animated fadeInRight').css('animation-delay','.3s').next().addClass('animated fadeInRight').css('animation-delay','.5s').next().addClass('animated fadeInRight').css('animation-delay','.7s')
},30);
