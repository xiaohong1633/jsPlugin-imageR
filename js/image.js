 

$(function(){
//$.log();
var pathArray = new Array("/jsPlugin-imageR/images/1.jpg",
	"/jsPlugin-imageR/images/2.jpg","/jsPlugin-imageR/images/3.jpg",
	"/jsPlugin-imageR/images/4.jpg","/jsPlugin-imageR/images/5.jpg");
//alert(pathArray.length);
//插件调用方式:传入要插入的元素ID ，传入图片路径数组，并传入每张照片的大小width，height
jQuery(".imagesR").imagesR(pathArray,200,150);
});
