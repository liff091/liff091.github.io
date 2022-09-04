$(document).ready(function(){
	var getData	
	var totalcured
$.ajax({
	   async : false,//必须为false，不然会异步进行导致后面的程序读取了一个没被定义的模块
	   type: "get", //这里的请求方式与前面所说的请求方式一样
        url: 'https://ncovdata.market.alicloudapi.com/ncov/cityDiseaseInfoWithTrend', //url就是购买的api请求接口
        
        beforeSend: function(request) { //向接口发送身份认证
            request.setRequestHeader("Authorization", "APPCODE " +
                "3389534a54af40aab372cc3c2ea22efb"); //注意这里APPCODE后面有一个空格，不能删掉
        },
        dataType: "json", //请求返回数据格式
        success: function(data) {
            console.log(data);
            //$('#data').html(JSON.stringify(data))
			console.log(JSON.stringify(data))
			//encode data
			//console.log(data["country"]);
			getData=eval(data)
			//console.log(getData["country"]);
        },
        error: function(e) {
            console.log(e.message);
        }

})

totalCured=getData['country']['totalCured']//全国总计治愈
totalDeath=getData['country']['totalDeath']//全国总计死亡
totalDoubtful=getData['country']['totalDoubtful']//全国总计疑似（bug，无权使用）
totalConfirmed=getData['country']['totalConfirmed']//全国总计确诊

dataSource=getData['dataSourceUpdateTime']['dataSource']//数据来源
updateTime=getData['dataSourceUpdateTime']['updateTime']//数据更新时间

$("#nationalDataBlank").append("<h3>数据来源："+dataSource+"</h1>");
$("#nationalDataBlank").append("<h3>更新时间："+updateTime+"</h1>");
$("#nationalDataBlank").append("<h3>全国总计确诊："+totalConfirmed+"</h1>");
$("#nationalDataBlank").append("<h3>全国总计死亡："+totalDeath+"</h1>");
$("#nationalDataBlank").append("<h3>全国总计治愈："+totalCured+"</h1>");
provinceArray=getData['provinceArray']//各省数据，需要单独循环来解析打印，不会预设填充区域，实时解析，可能消耗大量加载时间，可能需要进度条(实际情况在不打印数据的情况下可以在反应时间之内完成解析 &nbsp;
for (i=0;i<provinceArray.length;i++){
	//console.log("for i")
	provinceName=provinceArray[i]['childStatistic']
	provinceTotalConfirmed=provinceArray[i]['totalConfirmed']
	provinceTotalCured=provinceArray[i]['totalCured']
	provinceTotalDeath=provinceArray[i]['totalDeath']
	
	var provinceId = "" 
	if (i<10){
		provinceId="0"+i;
	}else{
		provinceId=i;
	}
	$("#hugeDataBlank").append("<div id='"+ provinceId + "'></div>");
	$("#"+provinceId).append("<p class='flip'>"+provinceName +" 累计确诊人数: "+provinceTotalConfirmed+" 累计死亡人数："+provinceTotalDeath +" 累计治愈人数："+provinceTotalCured+"</p>");
	/*$("#"+provinceId).append("<blockquote><blockquote><h3>" + "累计确诊人数："+ provinceTotalConfirmed +" </h3></blockquote></blockquote>");
	$("#"+provinceId).append("<blockquote><blockquote><h3>" + "累计死亡人数："+ provinceTotalDeath +" </h3></blockquote></blockquote>");
	$("#"+provinceId).append("<blockquote><blockquote><h3>" + "累计治愈人数："+ provinceTotalCured +" </h3></blockquote></blockquote>");*/
	
	provinceCityData=provinceArray[i]['cityArray']//取得城市数据集合
	$("#"+provinceId).append(" <div id='"+ provinceId + "data" + "'class='panel' ></div>");
	for (j=0;j<provinceCityData.length;j++){
		cityName=provinceCityData[j]['childStatistic']
		cityTotalConfirmed=provinceCityData[j]['totalConfirmed']
		cityTotalCured=provinceCityData[j]['totalCured']
		cityTotalDeath=provinceCityData[j]['totalDeath']
		
		var cityId = "" 
		if (j<10){
			cityId="0"+j;
		}else{
			cityId=j;
		}
		
		$("#"+provinceId + "data" ).append("<a >"+cityName +" 累计确诊人数: "+cityTotalConfirmed+" 累计死亡人数："+cityTotalDeath +" 累计治愈人数："+cityTotalCured+"</a><br>");
		 $("#loadCheckerDiv").attr("dataload","1");
		/*$("#"+provinceId + cityId).append("<blockquote><blockquote><blockquote><h3>" + "累计确诊人数："+ cityTotalConfirmed +" </h3></blockquote></blockquote></blockquote>");
		$("#"+provinceId + cityId).append("<blockquote><blockquote><blockquote><h3>"  + "累计死亡人数："+ cityTotalDeath +" </h3></blockquote></blockquote></blockquote>");
		$("#"+provinceId + cityId).append("<blockquote><blockquote><blockquote><h3>"  + "累计治愈人数："+ cityTotalCured +" </h3> </blockquote></blockquote></blockquote>"); */
		//console.log("for j")
	}
}
//console.log(provinceArray[2])
//for(i=0)
//console.log("da!")
	$("p").click(function(){
		parentid=$(this).parent().attr("id")
   		$("#"+parentid+"data").slideToggle("slow");
  });
	 async : true
	
 })