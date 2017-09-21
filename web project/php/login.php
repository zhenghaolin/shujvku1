<?php
	if($_SERVER["REQUEST_METHOD"] == "POST")
	{
		if(!empty($_POST["user"]))
		{
			$user = test_input($_POST["user"]);	
		}
		else
		{
			echo "用户名不能为空";
			exit;
		};
		if(!empty($_POST["pas"]))
		{
			$pas = test_input($_POST["pas"]);
		}
		else
		{
			echo "密码不能为空";
			exit;
		};
		if(!empty($_POST["deal"]))
		{
			$deal = test_input($_POST["deal"]);
		}
		else
		{
			echo "请阅读协议";
			exit;
		};
	};
	$s = 0;
	$file = fopen("userinfo.txt","r");
	while($str = fgets($file))
	{
		$arr = explode('*',$str );
		if($arr[0] != $user )
		{
			continue;
		}
		else
		{
			$s++;
		};
		if($arr[0] == $user && $arr[1] == $pas)
		{
			echo "登陆成功";	
		};
		if($arr[0] == $user && $arr[1] != $pas)
		{
			echo "密码不正确";	
		};
		
	};
	fclose($file);
	
	if($s == 0)
	{
		echo "用户名不存在";	
	};
	
	function test_input($data)
	{
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;	
	};
?>