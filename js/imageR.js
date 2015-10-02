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
	//alert($('body').text());
	//$证明 jquery对象已经成功传入！
	this.oTable = $("<table></table>");
	this.oTr = $("<tr id='FF'></tr>");
	this.oTdF1 = $("<td id='F1'></td>");
	this.oTdF2 = $("<td id='F2'></td>");
	//var table = "";
	var length = pathArray.length;
	//alert(length)
	var tr = "<table class='imagesT'><tr >";
	for(var i=0;i<length;i++){
		tr += "<td><img width='"+width+"' height='"+height+"' src='"+pathArray[i]+"'/></td>";
	}
	tr=tr+"</tr></table>";
	//console.log(tr);
	this.table = $(tr);
	//console.log("tr: "+table.html());
	//table = tr.appendTo(table);
	//return $table;
	//console.log("table: "+this.table.html());
	//初始化外层table
	
	(this.table).appendTo(this.oTdF1);
	//console.log("table: "+$table.html());
	this.oTdF1.appendTo(this.oTr);
	//console.log("td1: "+this.oTdF1.html());
	//console.log("otr: "+this.oTr.html());
	//$oTdF2.html($oTdF1.html());
	//(this.table).appendTo(this.oTdF2);
	//console.log("td2: "+this.oTdF2.html());
	//console.log("table: "+this.table.html());
	this.oTdF2.appendTo(this.oTr);
	//console.log("otr: "+this.oTr.html());
	this.oTr.appendTo(this.oTable);
	//console.log("otable: "+this.oTable.html());
	return this.oTable;
};
function run(){
		//var tab = window.document.getElementById('FF');
		var tab = document.getElementById("parent");
		var tab1 = document.getElementById("F1");
		var tab2 = document.getElementById("F2");
		if(tab1.offsetWidth-tab.scrollLeft<0){
			tab.scrollLeft = 0;	
		}else{
		tab.scrollLeft++;
		}
}
function runLeft(stime){
	//获取容器的宽度,直接写方法名称即可不用加引号		 
	return setInterval(run,stime);
};
function stopRun(){
	clearInterval(intervalFlag);	
}
$("body").off("mouseover","#parent").on("mouseover","#parent",function(){
	//alert("mouserover");
    stopRun();
});
$("body").off("mouseout","#parent").on("mouseout","#parent",function(){
	//alert("mouserover");
    intervalFlag = runLeft(10);
});
var intervalFlag;
//第二种扩展方法，可以调用jquery的选择器功能
$.fn.imagesR=function(pathArray,width,height){
	//var defaultPath = {};
	//参数的第一个空对象是为了保护好默认参数不被污染
	//需注意合并的是对象而不是数组，若是数组，则会合并失败
	//调用一个函数产生table
	produceTable(pathArray,width,height).appendTo(this);
	$("#F2").append($("#F1").html());
	//对产生的table中的td向左侧移动，并触发时间
	var cwidth = this.css("width");
	intervalFlag = runLeft(10);
}
})(window,document,jQuery);

