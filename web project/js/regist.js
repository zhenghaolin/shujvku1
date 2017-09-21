// JavaScript Document
	var oForm = document.getElementById('form1');
	var oUser = oForm.user;
	var oPas = oForm.pas;
	var oPas1 = oForm.pas1;
	var oEmail = oForm.email;
	var oTel = oForm.tel;
	var oPro = oForm.pro;
	var oSex = oForm.sex;
	//var oHobby = document.getElementById('checkbox1').getElementsByTagName('input');
	var oHobby = document.getElementsByName('hobby[]');
	var oDeal = oForm.deal;
	var oRset = oForm.reset1;
	var oSubmit = oForm.registe;
	

	oRset.onclick = function()
	{
		var b = confirm('确定要重置吗');
		return b;	
	};
	oSubmit.onclick = function()
	{
		var Re = /\s+/g;
		if(oUser.value == '')
		{
			alert('你输入的用户名为空');
			return false;	
		}
		else
		{
			oUser.value = oUser.value.replace(Re,'');
			var re = /^[a-zA-Z]\w{5,17}$/;
			if(!re.test(oUser.value))
			{
				alert("你输入的用户名格式不正确");
				return false;	
			};	
		};	
		if(oPas.value == '')
		{
			alert('你输入的密码为空');
			return false;	
		}
		else
		{
			oPas.value = oPas.value.replace(Re,'');
			var re1 = /^[a-zA-Z0-9]{6,8}$/;
			if(!re1.test(oPas.value))
			{
				alert("你输入的密码式不正确");
				return false;	
			};	
		};
		if(oPas1.value == '')
		{
			alert('你输入的密码式不一致');
			return false;	
		}
		else if(oPas1.value !== oPas.value)
		{
			alert('你输入的密码式不一致');
			return false;	
		}
		else
		{
			var re1 = /^[a-zA-Z0-9]{6,8}$/;
			if(!re1.test(oPas1.value))
			{
				oPas1.value = oPas1.value.replace(Re,'');
				alert('你输入的密码式不正确');
				return false;	
			};	
		};
		if(oEmail.value == '')
		{
			alert('你输入的邮箱为空');
			return false;	
		}
		else
		{
			oEmail.value = oEmail.value.replace(Re,'');
			var re2 = /^\w+\@\w+\.\w+$/;
			if(!re2.test(oEmail.value))
			{
				alert("你输入的邮箱格式不正确");
				return false;	
			};	
		};
		if(oTel.value == '')
		{
			alert('你输入的手机为空');
			return false;	
		}
		else
		{
			var re3 = /^1(3|5|7|8)\d{9}$/;
			if(!re3.test(oTel.value))
			{
				oTel.value = oTel.value.replace(Re,'');
				alert("你输入的手机格式不正确");
				return false;	
			};	
		};
		if(oPro.value == '请选择省份')
		{
			alert("请选择地区");
			return false;	
		};
		var s = false;//为选择
		for(var i = 0; i < oHobby.length;i++ )
		{
			if(oHobby[i].checked)
			{
				s = true;	
			};
				
		};
		if(!s)
		{
			alert('请选择爱好')	;
			return false;	
		};
		if(!oDeal.checked)
		{
			alert('请阅读协议')	;
			return false;	
		}
		
	 };
	
/*	oSubmit.onclick = function()
	{
		if(oUser.value == "")
		{
			oUser.value = "请输入用户名";
			oUser.style.color = "red";
			return false;	
		}
		else
		{
			var re = /^[a-zA-Z]\w{5,17}$/;
			if(!re.test(oUser.value))
			{
				oUser.value = "你输入的用户名格式不正确";
				oUser.style.color = "red";
			};	
		};
		if(oPas.value == "")
		{
			oPas.value = "请输入密码";
			oPas.style.color = "red";
			return false;	
		}
		else
		{
			var re1 = /^[a-zA-Z0-9]{6,8}$/;
			if(!re1.test(oPas.value))
			{
				oPas.value = "你输入的密码式不正确";
				oPas.style.color = "red";
			};	
		};
		if(oPas1.value == "")
		{
			oPas1.value = "请输入密码";
			oPas1.style.color = "red";
			return false;	
		}
		else if(oPas1.value !== oPas.value)
		{
			oPas1.value = "你输入的密码式不一致";
			oPas1.style.color = "red";
		}
		else
		{
			var re1 = /^[a-zA-Z0-9]{6,8}$/;
			if(!re1.test(oPas1.value))
			{
				oPas1.value = "你输入的密码式不正确";
				oPas1.style.color = "red";
			};	
		};
		if(oEmail.value == "")
		{
			oEmail.value = "请输入邮箱地址";
			oEmail.style.color = "red";
			return false;	
		}
		else
		{
			var re2 = /^\w\w+@\w+\.\w{2.14}$/;
			if(!re2.test(oEmail.value))
			{
				oEmail.value = "你输入的邮箱格式不正确";
				oEmail.style.color = "red";
			};	
		};
		if(oTel.value == "")
		{
			oTel.value = "请输入手机号";
			oTel.style.color = "red";
			return false;	
		}
		else
		{
			var re3 = /^[1-9](3|5|7|8)\d{9}$/;
			if(!re3.test(oTel.value))
			{
				oTel.value = "你输入的手机格式不正确";
				oTel.style.color = "red";
			};	
		};
	};
	oUser.onfocus = function()
	{
		if(!(oUser.value == ''))
		{
			oUser.value = '';
			oUser.style.color = "#333";	
		}
	};
	oUser.onblur = function()
	{
		if(oUser.value == '')
		{
			oUser.value = "用户名";
			oUser.style.color = "#333";	
		}
	};
	oPas.onfocus = function()
	{
		if(!(oPas.value == ''))
		{
			oPas.value = '';
			oPas.style.color = "#333";	
		}
	};
	oPas.onblur = function()
	{
		if(oPas.value == '')
		{
			oPas.value = "输入密码";
			oPas.style.color = "#333";	
		}
	};
	oPas1.onfocus = function()
	{
		if(!(oPas1.value == ''))
		{
			oPas1.value = '';
			oPas1.style.color = "#333";	
		}
	};
	oPas1.onblur = function()
	{
		if(oPas1.value == '')
		{
			oPas1.value = "确认密码";
			oPas1.style.color = "#333";	
		}
	};
	oEmail.onfocus = function()
	{
		if(!(oEmail.value == ''))
		{
			oEmail.value = '';
			oEmail.style.color = "#333";	
		}
	};
	oEmail.onblur = function()
	{
		if(oEmail.value == '')
		{
			oEmail.value = "Email";
			oEmail.style.color = "#333";	
		}
	};
	oTel.onfocus = function()
	{
		if(!(oTel.value == ''))
		{
			oTel.value = '';
			oTel.style.color = "#333";	
		}
	};
	oTel.onblur = function()
	{
		if(oTel.value == '')
		{
			oTel.value = "Tel";
			oTel.style.color = "#333";	
		}
	};*/
