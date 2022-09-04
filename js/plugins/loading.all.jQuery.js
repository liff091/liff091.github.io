$(document).ready(function(){
		 var loadp =$("#loadCheckerDiv").attr("fullload");
		 var progressNum = 0;
		 for ( i=0;loadp=0;i++ ){
			 loadp =$("#loadCheckerDiv").attr("fullload");
			 if(progressNum<=95){
				 progressNum +=1;
			 }
			 $("#progress").animate({width:progressNum + "%"},"slow");
		 }
			  $("#progress").animate({width:"100%"},"slow");
			 //$("#progress").fadeOut(1500);
			 $("#progressBar").fadeOut(2000);
			// $("#progress").hide()
			// $("#progressBar").hide()
		 
});