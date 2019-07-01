$(function(){




    // 线上商城入口悬浮效果
    $('.l_links li a').hover(function(){
        $(this).parent().find('.show').css('display','none');
        $(this).parent().find('.hoverShow').css('display','block');
    },function(){
        $(this).parent().find('.hoverShow').css('display','none');
        $(this).parent().find('.show').css('display','block');
    })
})