$('.z-fouc').onloadAnimate(function(){
    this.addClass('animated fadeInUpSmall')
},30);
$('ul').onloadAnimate(function(){
    this.find('li').eq(0).addClass('animated fadeInUpSmall').next().addClass('animated fadeInUpSmall').css('animation-delay','.2s').next().addClass('animated fadeInUpSmall').css('animation-delay','.4s').next().addClass('animated fadeInUpSmall').css('animation-delay','.6s').next().addClass('animated fadeInUpSmall').css('animation-delay','.8s').next().addClass('animated fadeInUpSmall').css('animation-delay','.10s').css('animation-delay','.12s').next().addClass('animated fadeInUpSmall').css('animation-delay','.14s').next().addClass('animated fadeInUpSmall').css('animation-delay','.16s').next().addClass('animated fadeInUpSmall').css('animation-delay','.18s')                          
},30);