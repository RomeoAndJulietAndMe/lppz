// $("td").hover(
//     function () {
//        $(this).addClass("hover");
//     },
//     function () {
//        $(this).removeClass("hover");
//     }
//  );
$('.x-figure').each(function(){
    var $this=$(this);
   
    $this.hover(function(){
         $this.find('.x-text-left').css('background','red');
    })

},function(){
    console.log($this);
    $this.find('.x-text-left').css('background','blue');
})

// $('.x-footer').each(function(){
//     var $this=$(this);
//     console.log($this);
//     $this.hover(function(){
//             $this.find('h3').css('color','red');
//             $this.find('span').css({'background':'#e1251b url(http://www.517lppz.com/themes/cn/default/assets/images/bg_02.svg)	no-repeat center center',
//             'background-size':'150px'
//             })
//             $this.find('.x-footer-left').css('border','1px solid red');
//             // $this.find('.x-footer-left').append("<style>.x-footer-left:before{background:red}</style>");
//     },function(){
//             $this.find('h3').css('color','#b2b2b2');
//             $this.find('span').css({'background':'#b2b2b2  url(../img/a2019.jpg)	no-repeat center center',
            
//             })
//             $this.find('.x-footer-left').css('border','1px solid #b2b2b2');
//             // $this.find('.x-footer-left').append("<style>.x-footer-left:before{background:#b2b2b2}</style>");

//     })
// })