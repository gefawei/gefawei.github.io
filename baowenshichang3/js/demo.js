//kissy文档地址是http://docs.kissyui.com/
/*
KISSY.use(["dom", "event"], function (S, DOM, Event) {
    //todo
    KISSY.ready(function (S) {
        //todo

    });
});
*/


//jquery:http://www.php100.com/manual/jquery/

$(document).ready(function(){
	//todo
	$("#dianji li").on("mouseover", function(){
		$("#dianji li").removeClass("active");
		$(this).addClass("active");
		var a=$(this).attr("data-taar");
		$("#four ul").hide();
		$("."+a).show();
	});
	$("#wenzi li").on("mouseover",function(){
		$("#wenzi li").removeClass("active");
		$(this).addClass("active");
		var a=$(this).attr("data-taar");
		$("#tupian a").hide();
		$("."+a).show();
	});
	$("#huhu li").on("mouseover",function(){
		$("#huhu li").removeClass("active");
		$(this).addClass("active");
		var a=$(this).attr("data-taar");
		$("#yuyu ul").hide();
		$("."+a).show();
	});
	$("#yuan li").on("mouseover",function(){
		
		var a=$(this).attr("data-taar");
		$("#suibian a").hide();
		$("."+a).show();
	});
});