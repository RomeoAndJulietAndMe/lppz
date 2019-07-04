function animate(ele,params,speedTime,callBack){//ele == li0 li1 
	/*
	 * var callBack = function(){alert("执行完了")};
	 * callBack();
	 */
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var flag = true;
		for(var attr in params){
			var current = 0;
			if(attr === "opacity"){
				current = getStyle(ele,attr)*100;
			}else{
				current = Math.ceil(parseFloat(getStyle(ele,attr)));
				// if(attr == "width"){
				// 	console.log(current,getStyle(ele,attr))
				// }
			}
			var speed = (params[attr] - current)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(current != params[attr]){//没有到达目标值
				flag = false;
			}
			
			if(attr === "opacity"){
				ele.style[attr] = (current + speed)/100;
			}else if(attr === "zIndex"){//zIndex的处理
				ele.style[attr] = params[attr];
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
		
		if(flag){//true所有的属性都到达了目标值 
			//清除定时器
			clearInterval(ele.timer);
			if(callBack){
				callBack();
			}
		}
	},speedTime);
}
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}