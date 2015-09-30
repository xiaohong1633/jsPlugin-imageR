$(document).ready(function(){
//$.log();
var pathArray = new Array("/jsPlugin-imageR/images/1.jpg",
	"/jsPlugin-imageR/images/2.jpg","/jsPlugin-imageR/images/3.jpg",
	"/jsPlugin-imageR/images/4.jpg","/jsPlugin-imageR/images/5.jpg");
//alert(pathArray.length);
$(".imagesR").imagesR(pathArray,200,150);
});