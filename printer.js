var printer = new Object();

printer.str = 'hello,world!';   //要实现打字机效果的文字
printer.speed = 50;		//文字的速度
printer.toId = 'body';		//要打印到的标签的ID			
printer.startIndex = 0		//从第几个字符开始打印
printer.endIndex = 0;		//打印到第几个字符结束
printer.hasCur = true;		//是否有光标
printer.curId = 'cur';		//光标的ID
printer.curStr = '_';		//光标字符
printer.curStyle = 'font-weight: bold;';	//光标的样式（CSS样式）
printer.curSpeed = 500;		//光标的速度（ms）
printer.index = 0;
printer.toObj;
printer.curSwitch = false;
printer.curObj;
printer.reStr = '';
printer.flwCurTimer;

printer.init = function(){	//初始化一些内容
	printer.toObj = document.getElementById(printer.toId);
	printer.index = printer.startIndex;
	if(printer.endIndex == 0){
		printer.endIndex = printer.str.length;
	}
}

printer.print = function(){	//打印函数
	if(printer.index == printer.endIndex){
		if(printer.hasCur){
			clearTimeout(printer.flwCurTimer);
			printer.curObj = document.getElementById(printer.curId); 
			printer.chCur();
		}
		return;
	} else if (printer.str.charAt(printer.index) == '\n'){
		printer.reStr += '<br>';
		printer.index++;
		printer.toObj.innerHTML = printer.reStr;
	} else {
		printer.reStr += printer.str.charAt(printer.index++);
		printer.toObj.innerHTML = printer.reStr;
	}
	setTimeout(function(){printer.print()}, printer.speed);
}

printer.flwCur = function(){	//跟随光标
	printer.toObj.innerHTML += '<span id="'+printer.curId+'" style="'+printer.curStyle+'">'+printer.curStr+'</span>';
	printer.flwCurTimer = setTimeout(function(){printer.flwCur()}, 1.5 * printer.speed);
}

printer.chCur = function(){	//闪烁光标
	if(printer.curSwitch){
		printer.curSwitch = false;
		printer.curObj.innerHTML = printer.curStr;
		setTimeout(function(){printer.chCur()}, printer.curSpeed);
	} else {
		printer.curSwitch = true;
		printer.curObj.innerHTML = '';
		setTimeout(function(){printer.chCur()}, printer.curSpeed);
	}
}

printer.start = function(){	//开始打印
	printer.init();
	if(printer.hasCur){
		printer.flwCur();
	}
	printer.print();
}



