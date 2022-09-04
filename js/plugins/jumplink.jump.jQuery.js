$(document).ready(function(){
$("li").click(function(){
	var hyperlink=$(this).attr("hyperlink");
	window.open(hyperlink)
    //$("#gamePanel").slideToggle("slow");
  });
});