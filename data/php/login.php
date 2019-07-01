<?php

//接收请求数据
$sql_insert = $_POST['sql_insert'];//注册过来的
$register_phone = $_POST['register_phone'];//注册的  电话



    //设置响应头，防止乱码
header('Content-type:text/html;charset=utf8');

//连接数据库
$link = mysql_connect('localhost','root','') or die('Error-数据库连接失败')；
if($link){
    echo 'ok-数据库连接成功！';
}else{
    // mysql_query('create database lppz',$link);   //连接不成功就创建数据库
}
mysql_query('use lppz');//选择数据库lppz

$sql='';
switch($sql_insert){
    case 'sql_insert' : $sql='insert into user(phone) values('+$register_phone+')';break;
}



/* $res = mysql_query($sql);//执行sql语句；返回结果集 
$num = mysql_affected_rows();echo $num;//4
//mysql_affected_rows()函数返回前一次 MySQL 操作所影响的记录行数。
$rows = [];
echo "<pre />";//格式化打印，好看些；
//函数从结果集中取得一行作为关联数组。返回根据从结果集取得的行生成的关联数组，如果没有更多行，则返回 false。
while($row = mysql_fetch_assoc($res)){
    $rows[] = $row;
}
print_r($rows); */
?>