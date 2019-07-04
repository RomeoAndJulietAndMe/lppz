var imgList1 = document.querySelector('.img_list1');
var imgList2 = document.querySelector('.img_list2');
var imgList3 = document.querySelector('.img_list3');
var imgList4 = document.querySelector('.img_list4');
var imgList5 = document.querySelector('.img_list5');


var index1 = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var index5 = 0;

var timer1 = setInterval(autoPlay1,2000);
var timer2 = setInterval(autoPlay2,2000);
var timer3 = setInterval(autoPlay3,2000);
var timer4 = setInterval(autoPlay4,2000);
var timer5 = setInterval(autoPlay5,2000);


// 坚果类轮播动画
function autoPlay1(){
    if(index1 == 6){
        index1 = 1;
        imgList1.style.left = 0;
    }else{
        index1++;
    }
    animate(imgList1,{left:-304*index1},10);
}
// 鼠标移上动画停止
imgList1.onmouseover = function(){
    clearInterval(timer1);
}
// 鼠标移出动画再开始
imgList1.onmouseout = function(){
    timer1 = setInterval(autoPlay1,2000);
}

// 海味零食类轮播动画
function autoPlay2(){
    if(index2 == 6){
        index2 = 1;
        imgList2.style.left = 0;
    }else{
        index2++;
    }
    animate(imgList2,{left:-304*index2},10);
}
// 鼠标移上动画停止
imgList2.onmouseover = function(){
    clearInterval(timer2);
}
// 鼠标移出动画再开始
imgList2.onmouseout = function(){
    timer2 = setInterval(autoPlay2,2000);
}

// 肉类零食类轮播动画
function autoPlay3(){
    if(index3 == 6){
        index3 = 1;
        imgList3.style.left = 0;
    }else{
        index3++;
    }
    animate(imgList3,{left:-304*index3},10);
}
// 鼠标移上动画停止
imgList3.onmouseover = function(){
    clearInterval(timer3);
}
// 鼠标移出动画再开始
imgList3.onmouseout = function(){
    timer3 = setInterval(autoPlay3,2000);
}

// 炒货系列类轮播动画
function autoPlay4(){
    if(index4 == 6){
        index4 = 1;
        imgList4.style.left = 0;
    }else{
        index4++;
    }
    animate(imgList4,{left:-304*index4},10);
}
// 鼠标移上动画停止
imgList4.onmouseover = function(){
    clearInterval(timer4);
}
// 鼠标移出动画再开始
imgList4.onmouseout = function(){
    timer4 = setInterval(autoPlay4,2000);
}

// 红枣干果类轮播动画
function autoPlay5(){
    if(index5 == 6){
        index5 = 1;
        imgList5.style.left = 0;
    }else{
        index5++;
    }
    animate(imgList5,{left:-304*index5},10);
}
// 鼠标移上动画停止
imgList5.onmouseover = function(){
    clearInterval(timer5);
}
// 鼠标移上动画停止
imgList5.onmouseout = function(){
    timer5 = setInterval(autoPlay5,2000);
}








var index = 0;
$('.l_container').on('mousewheel',function(evevt){
    if(event.wheelDelta == -120){
        $('.img_slide').eq(index).slideUp(500,'swing')   
        $('.titleColor').eq(index).css('color','#808080');
        $('.titleMove').eq(index-1).slideUp(500,'swing');   
        // console.log(index);
        if(index > 6){
            index = 6;
        }else{
            index++;
        }

    }else if(event.wheelDelta == 120){
        $('.img_slide').eq(index-1).slideDown(500,'swing');
        $('.titleColor').eq(index-1).css('color','#e1251b');
        $('.titleMove').eq(index-2).slideDown(500,'swing');
        // console.log(index);
        if(index < 0){
            index = 0;
        }else{
            index--;
        }
    }
})





