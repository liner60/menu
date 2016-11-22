// JavaScript Document
window.onload=function(){
	var btn=document.getElementsByClassName("list");
	var menuBox=document.getElementsByClassName("menuBox");
	var menuList=document.getElementsByClassName("menuList");
	for(var i=0;i<4;i++){
		(function(index){
			var oldClass=menuBox[index].className;
			//点击事件
			btn.item(index).onclick=function(){	
			  var menu=menuBox[index];
			  var menuLi=menuList[index];
			  var menuHeight=parseInt(menu.style.height);
			  if(menu.className.indexOf("collapsed")==-1){
				 //伸长状态下点击就收缩 
			   menuBox[index].className+=" collapsed"; 
				timer=setInterval(function(){ 
				 var height=menu.offsetHeight;
				  menu.style.height=height-32;
				  if(height<=26){
					 clearInterval(timer);
				  }	
				},100) 
			  }else{
				 //收缩状态下点击就伸长
				var menuHeight=parseInt(menuLi.style.height);
				timer=setInterval(function(){ 
				 var height=menu.offsetHeight;
				  menu.style.height=height+32;
				  if(height>=menuHeight-6){
					 menuBox[index].className=oldClass;
					 clearInterval(timer); 	
				  }
				},100) 	
			  }
			}
		})(i)
		
	}
}