 
$('.dian2 a').click(function (){
    // $('html,body').animate({scrollTop: '549px' });
    $('html,body').animate({scrollTop: $('.shou_banner').css('height')}); 
});
$('.dian3 a').click(function (){
    // $('html,body').animate({scrollTop: '1049px' });
    var height3 = parseFloat( $('.shou_kingdom').css('height'))+ parseFloat($('.shou_banner').css('height') );
    $('html,body').animate({scrollTop: height3 }); 
});
$('.dian4 a').click(function (){
    // $('html,body').animate({scrollTop: '1647px' });//多加了170，原本1647px
    height4 = parseFloat($('.shou_kingdom').css('height')) + parseFloat($('.shou_banner').css('height'))+parseFloat($('.shou_zhuanqu').css('height'));
    $('html,body').animate({scrollTop: height4 });
});

$(window).scroll(function(){ 
     var $scrollTop = $(this).scrollTop();
     console.log( $scrollTop );
        // if( scrollTop < )
    var  banner = $('.shou_banner').css('height');
    var gaoduan = $('.shou_gaoduan').css('height');
    var kingdom = $('.shou_kingdom').css('height');
    var zhuanqu = $('.shou_zhuanqu').css('height');
    $('.c_slider_bar a').css('background','0')
      console.log(zhuanqu + kingdom+ gaoduan + banner+$('.shou_banner').css('height') )  ;
      console.log( "===="+parseInt($scrollTop) + parseInt(banner) );
      if( parseFloat($scrollTop) <= parseFloat(banner) ) {
          $('.dian1 a').css('background','#fff');
          $('.c_slider a').css('border','1px solid #fff');
          $('.c_slider_bar span').css('borderLeft','1px dashed #fff');
      }else{
        $('.c_slider_bar span').css('borderLeft','1px dashed #e1251b');
        $('.c_slider a').css('border','1px solid #e1251b');
        
      }
      if( parseFloat($scrollTop) > parseFloat(banner)-20 && parseFloat($scrollTop)<= parseFloat(banner) + parseFloat(gaoduan)){
        
          $('.dian2 a').css('background','#e1251b');
      }
      if( parseFloat($scrollTop) >  parseFloat(banner) + parseFloat(gaoduan) -20 && parseFloat($scrollTop) <= parseFloat(banner) + parseFloat(gaoduan) +parseFloat(kingdom) ){
        $('.dian3 a').css('background','#e1251b');
      }
      if( parseFloat($scrollTop) > parseFloat(banner) + parseFloat(gaoduan) +parseFloat(kingdom) ){
        $('.dian4 a').css('background','#e1251b');

      }


});

//专区
$('.shou_zhuanqu').onloadAnimate(function(){
    this.find('li').eq(0).addClass('animated fadeInUpSmall').next().addClass('animated fadeInUpSmall')
    .css('animation-delay','.3s').next().addClass('animated fadeInUpSmall')
    .css('animation-delay','.6s').next().addClass('animated fadeInUpSmall')
    .css('animation-delay','.9s')   
},30);
/* $('.shou_zhuanqu li').onloadAnimate(function(){
    this.addClass('animated fadeInUp');
}); */

// $('.shou_kingdom_imgs').on("mouseover",".shou_kingdom_img",function () {
//     var _this = $(this);
//     _this.next().css('display','block');
//     _this.mouseout(function(){
//         _this.next().css('display','none');   
//      })
// })
$('.shou_kingdom_imgs').mouseover(function (e){
    //  console.log(e.target);
     if( e.target.className == 'shou_kingdom_img' ){        
          $(e.target).next().css('display','block');   
          $(e.target).mouseout(function(){
            $(this).next().css('display','none');   
         });
     }   
}) ;

 
//高端零食
$('.gaoduan_left').onloadAnimate(function(){
    this.addClass('animated fadeInLeft').css('animation-delay','.5s')
},30);
$('.gaoduan_right .gaoduan_main').onloadAnimate(function(){
    this.find('p').eq(0).addClass('animated fadeInRightSmall').css('animation-delay','.5s').next().addClass('animated fadeInRightSmall').css('animation-delay','.5s').next().addClass('animated fadeInRightSmall').css('animation-delay','.7s')
},30);
$('.gaoduan_left').onloadAnimate(function(){
    this.addClass('animated fadeInUpSmall').addClass('animated fadeInUpSmall').css('animation-delay','.5s').next().addClass('animated fadeInUpSmall').css('animation-delay','.5s')
},30);
/* $('.gaoduan_right h1').onloadAnimate(function(){
    this.addClass('animated fadeInRight').css('animation-delay','.3s')
},30); */
$('.gaoduan_left .gaoduan_main').onloadAnimate(function(){
    this.find('p').eq(0).addClass('animated fadeInRight').css('animation-delay','.5s').next().addClass('animated fadeInRight').css('animation-delay','.5s').next().addClass('animated fadeInRight').css('animation-delay','.7s')
},30);
/* $('.c_move_left').onloadAnimate(function(){
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
},30); */
