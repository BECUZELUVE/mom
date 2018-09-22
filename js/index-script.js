$(function(){	
//	分享页面切换
	var num = 0;
	$(".shareBtn").on("touchstart",function(){
		num++;
		if(num%2){
			$(".share").fadeIn();
			$(".shareBtn").html("<i class='glyphicon glyphicon-remove'></i>")
		}else{
			$(".share").fadeOut();
			$(".shareBtn").html("<i class='glyphicon glyphicon-plus'></i>")
		}	
	})
//banner区轮播图
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        loop: true,
        autoplay: 1000
    });
    
})
//	动态获取根节点字体大小
var dpr = window.devicePixelRatio;
var scale = 1 / dpr;
var viewport = document.getElementById("viewport");
viewport.setAttribute("content", "width=device-width,initial-scale=" + scale + ",minimum-scale=" + scale + ",maximum-scale=" + scale + ",user-scalable=no");
var w = document.documentElement.clientWidth || document.body.clientWidth;
var html = document.documentElement;
html.style.fontSize = w / 10 + "px";

//loading动画加载
document.onreadystatechange = function(){
	var gif = document.getElementsByClassName("gif")[0];
	if(document.readyState=="complete"){
		gif.style.display = "none";
	}
}
	