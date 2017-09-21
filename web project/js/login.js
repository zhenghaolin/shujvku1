// JavaScript Document
var oDeal = document.getElementsByName("deal")[0];
var oLog = document.getElementsByName("login")[0];

oLog.onclick = function()
{
if(!oDeal.checked)
	{
		alert('请阅读协议');
		return false;	
	};
};
