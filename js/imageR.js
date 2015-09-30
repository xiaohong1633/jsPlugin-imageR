/*image.js*/
//第一种扩展方式，直接给jquery扩展中传入参数方法对象
/*$.extend({
	log:function(){
		alert('log');
	}
});*/
//自调用包裹住函数，并传入适当的参数
;(function(window,document,$,undefined){
function produceTable(pathArray,width,height){
	$table = $("<table class='imagesT'></table>");
	var length = pathArray.length;
	//alert(length)
	var tr = "<tr >";
	for(var i=0;i<length;i++){
		tr += "<td><img width='"+width+"' height='"+height+"' src='"+pathArray[i]+"'/></td>"
	}
	tr=tr+"</tr>";
	//console.log(tr);
	$table = $(tr).appendTo($table);
	//初始化外层table
	$oTable = $("<table></table>");
	$oTr = $("<tr id='FF'></tr>");
	$oTdF1 = $("<td id='F1'></td>");
	$oTdF2 = $("<td id='F2'></td>");
	$oTdF1=$table.appendTo($oTdF1);
	//console.log("table: "+$table.html());
	$oTr = $oTdF1.appendTo($oTr);
	console.log("td1: "+$oTdF1.html());
	//$oTdF2.html($oTdF1.html());
	$oTdF2=$table.appendTo($oTdF2);
	console.log("td2: "+$oTdF2.html());
	$oTdF2.appendTo($oTr);
	console.log("$otr: "+$oTr.html());
	$oTable=$oTr.appendTo($oTable);
	console.log("$otable: "+$oTable.html());
	return $oTable;
};
function Run(){
		//var tab = window.document.getElementById('FF');
		var tab = document.getElementById("FF")
		tab.scrollLeft++;
}
function runLeft(width,stime){
	//获取容器的宽度
	var run = new Run();		 
	setInterval("run()",100);
};

//第二种扩展方法，可以调用jquery的选择器功能
$.fn.imagesR=function(pathArray,width,height){
	var defaultPath = {};
	//参数的第一个空对象是为了保护好默认参数不被污染
	//需注意合并的是对象而不是数组，若是数组，则会合并失败
	//var pathArrays = $.extend({},defaultPath,pathArray);
	//alert(pathArrays.length);
	//调用一个函数产生table
	produceTable(pathArray,width,height).appendTo(this);
	//对产生的table中的td向左侧移动，并触发时间
	var cwidth = this.css("width");
	//alert("容器宽度为："+cwidth);
	runLeft(parseInt(cwidth),100);
}
})(window,document,jQuery,undefined);
