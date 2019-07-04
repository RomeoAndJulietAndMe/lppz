
// require('./jquery-1.8.3');

//账号注册
$('.reg_finish').click();

//立即注册 点击事件触发
$('.register input[type="button"]').click(function(){
    // console.log($('.register input[type="text"]'));
    var phone= $('.register input[type="text"]').attr('value');
    var login_reg =  $('.login_reg');
    var login_reg_span = $('.login_reg span');
    var phoneReg = /^[1][3-9][0-9]{9}$/;
    console.log( phoneReg.test(phone) );
    if( phone == null || phone=="" ){ 
        login_reg.css('visibility','visible');  
        login_reg_span.html("手机号码不能为空");   
    }else{  
        if( phoneReg.test(phone) ){  //符合正则           
            login_reg.css('visibility','hidden');
            window.location.href="../html/register.html";           
        }else{//格式不对
            login_reg_span.html("手机号码格式不正确");
        }
        
    }
});


/* //马上登录
$('.register-reg .register-to-login').click(function (){ 
    window.location.href = "../html/login.html";
}); */

$('.login-to-register').click(function (){
    $('.register').css('display','block');
    $('.login').css('display','none');
    $('.register-reg').css('display','block');
    $('.login-to-register').css('display','none');
});


//您的手机号码input格式判断
$('.register .register_phone').blur(registerPh);

//立即注册 
$('.register input[type="button"]').click(function(){
    var phone= $('.register input[type="text"]').attr('value');
    var register_pw = "";
    var login_reg =  $('.login_reg');
   var login_reg_span = $('.login_reg span');
    $.ajax({
        type:'post',
        url:'../data/php/login.php',
        data:{register_phone:phone,sql_act:'isinsert'} ,
        success:function (json){                  
            console.log(json.err);
            console.log('---------注册----');
            if(json.err == '1') {
            login_reg.css('visibility','visible');  
             login_reg_span.html("此号码已经注册");
             console.log(json.msg); 
            }
            else{
                window.location.href="../html/register.html";
            }
                         
        },
        fail: function (err){
            console.log(err.responseText);
            $("body").html(err.responseText);
        
        }
    });  
    
});

//您的手机号码input格式判断
function registerPh(){
    var phone = $('.register input[type="text"]').attr('value');;
    console.log("inputpanudan"+typeof phone);
    console.log(phone);
   var login_reg =  $('.register .login_reg');
   var login_reg_span = $('.login_reg span');
   var phoneReg = /^[1][3-9][0-9]{9}$/;
   console.log('正则'+ phoneReg.test(phone) );
   if( phone == null || phone=="" ){
   login_reg.css('visibility','visible');  
   login_reg_span.html("手机号码不能为空");  
   return false;
    }else{  
       if( !phoneReg.test(phone) ){  // 格式不正确   
        login_reg.css('visibility','visible');       
         login_reg_span.html("手机号码格式不正确");   
         return false; 
       }else{
        login_reg.css('visibility','hidden');
        return true;
       }
       
   }
   localStorage.setItem('register_phone',phone);
   login_reg.css('visibility','hidden');  
   return true;
}

