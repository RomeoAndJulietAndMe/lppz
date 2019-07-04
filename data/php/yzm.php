<?php
header('Content-type:text/html');
// header('Content-type:image/png');
//验证码text内容
$text = array('1','0','2','3','4','5','6','7','8','9');
$index_text='';

for($i=0; $i<4; $i++){
    $index_text.=$text[rand(0,9)];
}

/* if(function_exists('gd_info')){
    echo '<pre>';
    print_r(gd_info());
}else{
    echo '没有开启gd库';
    extension = php_gd2.dll;
} */



// 创建真彩图像
$xian = imagecreatetruecolor(120,40);
 
imagefill($xian,0,0,setColorLight($xian));

//字体内容
imagettftext($xian,18,mt_rand(-5,5),rand(0,30),rand(14,30),setColorDark($xian),'../../css/font/segoesc.ttf',$index_text);

//控制线条的粗细
 imagesetthickness($xian,rand(2,4));
for($j=0;$j<5;$j++){
    //线条随机起来
    imageline($xian, mt_rand(0,50),mt_rand(0,15),mt_rand(51,120),mt_rand(15,40),setColorLight($xian));
} 

//画点
for($j=0;$j<100;$j++){
    //随机起来
    imagesetpixel($xian, mt_rand(0,120),mt_rand(0,40),setColorLight($xian));
}



// imagepng($xian);//浏览器输出图像
imagepng($xian,'../../img/yzm.png');
echo $index_text;

imagedestroy($xian);//销毁图像在内存中的占用

//分配浅颜色
function setColorLight($i){
    return imagecolorallocate($i,mt_rand(128,255),mt_rand(128,255),mt_rand(128,255));
}
//分配深颜色
function setColorDark($i){
    return imagecolorallocate($i,mt_rand(0,128),mt_rand(0,128),mt_rand(0,128));
}


?>