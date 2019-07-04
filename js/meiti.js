$('.z-fouc').onloadAnimate(function(){
    this.addClass('animated fadeInUpSmall')
},30);
$('ul').onloadAnimate(function(){
    this.find('li').eq(0).addClass('animated fadeInUpSmall').next().addClass('animated fadeInUpSmall').css('animation-delay','.2s').next().addClass('animated fadeInUpSmall').css('animation-delay','.4s').next().addClass('animated fadeInUpSmall').css('animation-delay','.6s')                    
},30);