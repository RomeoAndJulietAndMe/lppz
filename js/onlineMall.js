$(function(){
    // $('.l_header').load('d_lppz_header.html');



    // 线上商城入口悬浮效果
    $('.l_links li a').hover(function(){
        $(this).parent().find('.show').css('display','none');
        $(this).parent().find('.hoverShow').css('display','block');
    },function(){
        $(this).parent().find('.hoverShow').css('display','none');
        $(this).parent().find('.show').css('display','block');
    });


    // 刷新页面上浮动画效果
    $('.l_move').onloadAnimate(function(){
        this.addClass('animated fadeInUpSmall');
    },50);
    $('.l_moveQueue').onloadAnimate(function(){
        this.eq(0).addClass('animated fadeInUpSmall').next().addClass('animated fadeInUpSmall').css('animation-delay','.1s').next().addClass('animated fadeInUpSmall').css('animation-delay','.2s').next().addClass('animated fadeInUpSmall').css('animation-delay','.3s').next().addClass('animated fadeInUpSmall').css('animation-delay','.4s');
    },50);
})