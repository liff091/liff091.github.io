/*$(document).ready(function(){
	$.ajax({
	   async : false,//����Ϊfalse����Ȼ���첽���е��º���ĳ����ȡ��һ��û�������ģ��
	   type: "get", //���������ʽ��ǰ����˵������ʽһ��
        url: 'http://api.a20safe.com/api.php?api=9&key=7d06a110e9e20a684e02934549db1d3d&lx=mcjiang', //url���ǹ����api����ӿ�
        dataType: "json", //���󷵻����ݸ�ʽ
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
//ʧ�ܣ�ԭ��˾���js���ǲ�ʶ�𷵻ص�json��������imgurl��Ǿͷ���δ����
//��Դ��api.api20safe.com