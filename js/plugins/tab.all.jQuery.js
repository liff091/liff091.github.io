$(document).ready(function(){
  $("#HomeBtn").mouseenter(function(){
     $("#HomeBtn").attr("class","tabSlide");
	 $("#HomeBtn").attr("bgcolor","ffe67f");
    });
  $("#HomeBtn").mouseleave(function(){
     $("#HomeBtn").attr("class","tabManual");
	 $("#HomeBtn").attr("bgcolor","#d0000F");
    }); 
  $("#HomeBtn").click(function(){
     window.location.href = './index.html';
    }); 
  $("#AboutBtn").mouseenter(function(){
     $("#AboutBtn").attr("class","tabSlide");
	 $("#AboutBtn").attr("bgcolor","ffe67f");
    });
  $("#AboutBtn").mouseleave(function(){
     $("#AboutBtn").attr("class","tabManual");
	 $("#AboutBtn").attr("bgcolor","#d0000F");
    });
  $("#AboutBtn").click(function(){
     window.location.href = './about.html';
    }); 
   $("#JumpBtn").mouseenter(function(){
     $("#JumpBtn").attr("class","tabSlide");
	 $("#JumpBtn").attr("bgcolor","ffe67f");
    });
  $("#JumpBtn").mouseleave(function(){
     $("#JumpBtn").attr("class","tabManual");
	 $("#JumpBtn").attr("bgcolor","#d0000F");
    });
  $("#JumpBtn").click(function(){
     window.location.href = './jump.html';
    }); 
  $("#EnterBtn").click(function(){
     window.location.href = './data.html';
    }); 
});