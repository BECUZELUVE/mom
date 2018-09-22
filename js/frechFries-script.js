//	动态获取根节点字体大小
var dpr = window.devicePixelRatio;
var scale = 1 / dpr;
var viewport = document.getElementById("viewport");
viewport.setAttribute("content", "width=device-width,initial-scale=" + scale + ",minimum-scale=" + scale + ",maximum-scale=" + scale + ",user-scalable=no");
var w = document.documentElement.clientWidth || document.body.clientWidth;
var html = document.documentElement;
html.style.fontSize = w / 10 + "px";

	