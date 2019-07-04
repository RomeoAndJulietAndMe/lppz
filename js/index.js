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

 