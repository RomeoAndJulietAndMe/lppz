<?php
/*
method: post


return:	{err: 0/1, msg: 文字描述信息}
			 err:
				  0	 成功——具体参考msg
                  1	 失败——具体参考msg
                  2 可以注册

*/
$register_phone = "";
$register_pw = "111111";
$sql_act = "";
$login_phone ="";
$login_pw ="";

$register_phone = $_POST['register_phone'];
$register_pw = $_POST['register_pw'];
$sql_act = $_POST['sql_act']; 
$login_phone = $_POST['login_phone'];
$login_pw = $_POST['login_pw'];


// echo "register_phone"

// error_reporting(0);//设置报警级别 避免一些语法报警
error_reporting(E_ALL ^ E_DEPRECATED);//设置报警级别 避免一些语法报警

$db=mysql_connect('', 'root', '');//连接数据库

mysql_query("set names utf8");//设置编码

mysql_query('CREATE DATABASE lppz');//创建数据库

mysql_query('use lppz');//选择数据库

$sql= <<< END
CREATE TABLE `user` (
`ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`phone` VARCHAR( 255 ) NOT NULL ,
`password` VARCHAR( 255 ) NOT NULL
) ENGINE = INNODB CHARACTER SET utf8 COLLATE utf8_general_ci
END;

mysql_query($sql);//创建表并添加字段


header('Content-type:bk/json');//设置头
// header('Content-type:text/html');//设置头

switch($sql_act){
   /*  case 'isinsert':
        $sql = "select count(*) from user where phone='{$register_phone}'";
        $res = mysql_query($sql);
        $row = mysql_fetch_array($res);
        if((int)$row[0]>0){
			echo '{"err":"1","msg":"此电话已注册"}';
			exit();
        }else{
            echo '{"err":"2","msg":"可以注册"}';
        }  
       
        break; */
    case 'isinsert': 
        $sql = "select count(*) from user where phone='{$register_phone}'";
        $res = mysql_query($sql);
        $row = mysql_fetch_array($res);//从结果集中取得
        if((int)$row[0]>0){
            echo '{"err":"1","msg":"db此电话已注册"}';
            exit();
        }
        echo '{"err":"2","msg":"db可以注册"}';
        break;

    case 'insert': 
        $sql = "select count(*) from user where phone='{$register_phone}'";
        $res = mysql_query($sql);
        $row = mysql_fetch_array($res);//从结果集中取得
        if((int)$row[0]>0){
			echo '{"err":"1","msg":"db此电话已注册"}';
			exit();
        }
        
        $sql = "insert into user(phone,password) values('{$register_phone}','{$register_pw}')";
        mysql_query($sql);
        //返回
        echo '{"err":"0","msg":"db注册成功"}';
        break;

    case 'login': 
        $sql = "select user.password from user where phone = '{$login_phone}'";
        $res = mysql_query($sql);        
       $row = mysql_fetch_array($res);
        if( $row[password] == $login_pw ){
            echo '{"err":"0","msg":"登录成功"}';
            exit();
        }else{
            echo '{"err":"0","msg":"用户名或密码有误"}';
            exit();
        }
        break;
}
?>