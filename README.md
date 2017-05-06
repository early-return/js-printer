# js-printer
一个用于实现打字机效果的javascript库
演示地址：(http://zhiqing-lee.github.io/js-printer/)

## 重构

1.使用闭包
2.规范化


## Usage
```
var printer = Printer(str, [options]);
printer.print();
```
or

```
Printer(str, [options]).print();
```

## Options
```
{
		"speed" : 50,						//文字速度
		"selector" : 'canvas',				//选择器
		"startIndex" : 0,					//从第几个字符开始打印
		"endIndex" : 0,						//打印到第几个字符结束
		"hasCur" : true,					//是否显示光标
		"curId" : 'cur',					//光标的ID
		"curStr" : '_',						//光标字符
		"curStyle" : 'font-weight: bold;',	//光标的样式（CSS样式）
		"curSpeed" : 100,					//光标速度（ms）
		"lnStr": ""							//行首字符
	};
```

## 效果：

![image](http://zhiqing-lee.github.io/js-printer/sample.png)
