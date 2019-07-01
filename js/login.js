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

