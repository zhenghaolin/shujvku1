<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
	if(!empty($_POST['user'])){
		$user = test_input($_POST['user']);
		$re1 = "/^[a-zA-Z]\w{5,17}$/";	
		if(!preg_match($re1,$user)){
			echo "用户名格式不正确";
			exit;
		};
	}else{
		echo "用户名不能为空"	;
		exit;
	};
	if(!empty($_POST['pas'])){
		$pas = test_input($_POST['pas']);
		$re2 = "/^[a-zA-Z0-9]{6,8}$/";
		if(!preg_match($re2,$pas)){
			echo "密码格式不正确";
			exit;
		};
	}else{
		echo "密码不能为空";
		exit;
	};	
	if(!empty($_POST['pas1'])){
		$pas1 = test_input($_POST['pas1']);
		$re2 = "/^[a-zA-Z0-9]{6,8}$/";	
		if(!preg_match($re2,$pas1)){
			echo "密码格式不正确";
			exit;
		};
	}elseif($pas1 !== $pas){
		echo('密码不一致');
		exit;
	}else{
		echo "密码不能为空";
		exit;
	};	
	if(!empty($_POST['email'])){
		$email = test_input($_POST['email']);
		$re3 = "/^\w+\@\w+\.\w+$/";	
		if(!preg_match($re3,$email)){
			echo "用邮箱格式不正确";
			exit;
		};
	}else{
		echo "邮箱不能为空"	;
		exit;
	};
	if(!empty($_POST['tel'])){
		$tel = test_input($_POST['tel']);
		$re4 = "/^(13|15|17|18)\d{9}$/";	
		if(!preg_match($re4,$tel)){
			echo "用电话格式不正确";
			exit;
		};
	}else{
		echo "电话不能为空"	;
		exit;
	};
	$sex = $_POST["sex"];
	$hobby = $_POST["hobby"];
	$hobbyStr = '';
	for($i = 0; $i < count($hobby);$i++)
	{
		empty($hobbyStr)? ($hobbyStr .= $hobby[$i]) : ($hobbyStr .= '|'.$hobby[$i]) ; 		
	};
	$Deal = $_POST["deal"];
	$pro = $_POST["pro"];
};




$strArr = array($user,$pas,$email,$tel,$pro,$sex,$hobbyStr,$Deal,date("Y-m-d H:i:sa"));
$str = '';
foreach($strArr as $key => $val)
{
	$str .= $val.'*';	
};
$file = fopen("userinfo.txt","a+");
$s = 0;
while($info = fgets($file))
{
	$newInfo = explode("*",$info);
	if($newInfo[0] != $user)//不存在用户名.$s有只
	{
		continue;
	}
	else
	{
		$s++;	
	};	
};
if($s == 0)
{
	fwrite($file,"$str\r\n");
	fclose($file);
	echo "注册成功";
	
}
else
{
	echo "用户名已经存在";
	exit;	
};
	
			


function test_input($data){
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}
	
?>