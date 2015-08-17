# js-printer
一个用于实现打字机效果的javascript库

#用法

1.在自己的html里导入printer.js文件，例如：      \<script src='printer.js'\>\<\/script\>

2.在自己的js文件里设置好下列属性：

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
