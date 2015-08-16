var printer = new Object();

printer.str = 'hello,world!';
printer.toId = 'body';
printer.toObj;
printer.startIndex = 0
printer.index = 0;
printer.endIndex = 0;
printer.curId = 'cur';
printer.curStr = '_';
printer.curStyle = 'font-weight: bold;';
printer.curObj;
printer.curSpeed = 500;
printer.curSwitch = false;
printer.hasCur = true;
printer.reStr = '';
printer.speed = 50;
printer.reSpeed;
printer.flwCurTimer;

printer.init = function(){
	printer.toObj = document.getElementById(printer.toId);
	printer.index = printer.startIndex;
	printer.reSpeed = printer.speed;
	if(printer.endIndex == 0){
		printer.endIndex = printer.str.length;
	}
}

printer.print = function(){
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
		printer.reSpeed = printer.speed;
	} else {
		printer.reStr += printer.str.charAt(printer.index++);
		printer.toObj.innerHTML = printer.reStr;
		printer.reSpeed = printer.speed;
	}
	setTimeout(function(){printer.print()}, printer.reSpeed);
}

printer.flwCur = function(){
	printer.toObj.innerHTML += '<span id="'+printer.curId+'" style="'+printer.curStyle+'">'+printer.curStr+'</span>';
	printer.flwCurTimer = setTimeout(function(){printer.flwCur()}, 1.5 * printer.speed);
}

printer.chCur = function(){
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

printer.start = function(){
	printer.init();
	if(printer.hasCur){
		printer.flwCur();
	}
	printer.print();
}



