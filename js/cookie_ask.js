// JavaScript Document
//cookis.ask
window.onload = function(){
	var preload_ask = Cookies.get("cookies_ask");
	if (preload_ask != "true"){
	var ask_return = window.confirm("本网站会使用cookie来储存用户缓存（如人机验证、账号信息）\n点击“是”同意\n点击“否”拒绝使用cookie并退出网站");
	if (ask_return == false){
		var userAgent = navigator.userAgent;
	if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") !=-1) {
			window.location.href="about:blank";
			window.close();
	} else {
			window.opener = null;
			window.open("", "_self");
			window.close();
	}	
	}else{
		Cookies.set('cookies_ask', 'true', { expires: 7 });
	}
	}
}