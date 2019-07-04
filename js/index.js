<<<<<<< HEAD
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
$('.c_move_right-up').onloadAnimate(function(){
    this.addClass('animated fadeInUpSmall').find('h2').addClass('animated fadeInUpSmall').css('animation-delay','.3s').next().addClass('animated fadeInUpSmall').css('animation-delay','.5s')
},30);
=======
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

 
>>>>>>> 717feee03a1636c0bb098d235b82aa03612d7a0f
