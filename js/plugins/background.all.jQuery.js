/*$(document).ready(function(){
	$.ajax({
	   async : false,//必须为false，不然会异步进行导致后面的程序读取了一个没被定义的模块
	   type: "get", //这里的请求方式与前面所说的请求方式一样
        url: 'http://api.a20safe.com/api.php?api=9&key=7d06a110e9e20a684e02934549db1d3d&lx=mcjiang', //url就是购买的api请求接口
        dataType: "json", //请求返回数据格式
        success: function(data) {
            console.log(data);
            //$('#data').html(JSON.stringify(data))
			console.log(JSON.stringify(data))
			//encode data
			//console.log(data["country"]);
			databack=eval(data)
			datacache=data['data']
			alert(JSON.stringify(datacache))
			imgurl="url("+datacache["imgurl"]+")"
			alert(imgurl)
			$('body').css("background-image",imgurl);
    		$('body').css("background-size", "100% 100%");
   	 		$('body').css("background-repeat", "no-repeat");
			//console.log(getData["country"]);
        },
        error: function(e) {
            console.log(e.message);
        }

})
 

});*/
//失败，原因：司马的js就是不识别返回的json，明明有imgurl项但是就返回未定义
//资源：api.api20safe.com