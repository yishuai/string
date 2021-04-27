/*
Javascript Easy 习题课第一讲

677-687

链接：https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php

*/

/* 课程代码

677	JavaScript: Check whether an 'input' is a string or not

"Write a JavaScript function to check whether an 'input' is a string or not.

知识点：
	toString 判断是不是字符
*/

is_string = function(input) {
	if (Object.prototype.toString.call(input) === '[object String]')
		return true;
	else
		return false;
};
console.log(is_string('w3resource') == true);
console.log(is_string([1, 2, 4, 0]) == false);

// 678	JavaScript: Check whether a string is blank or not
// "Write a JavaScript function to check whether a string is blank or not.
// 单词
// 	 blank 空
// 知识点
// 	length

is_Blank =  function(input) {
	if (input.length === 0)
		return true;
	else
		return false;
}
console.log(is_Blank('') == true);
console.log(is_Blank('abc') == false);

// 680	JavaScript: Extract a specific number of characters from a string
// Write a JavaScript function to extract a specified number of characters from a string.
// 单词
// 	extract 抽取
// 	specific 特定的
//  character 字母
// 知识点
// 	slice

truncate_string = function (str1, length) {
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));

// 683	JavaScript: Parameterize a string
// "Write a JavaScript function to parameterize a string.
// 单词
// 	parameter 参数
// 	parameterize 参数化
// 知识点
// 	replace
string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, “").replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA.") == "robin-singh-from-usa");

// 684	JavaScript: Make capitalize the first letter of a string
// "Write a JavaScript function to capitalize the first letter of a string.
// 单词
// 	capitalize 大写化
// 	lower case 小写
// 	upper case 大写
// 	CAP键：大写
// 	make 制造，创造
// 	letter 字母
// 知识点
// 	charAt
capitalize = function(str1){
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}
console.log(capitalize('js string exercises') == "Js string exercises");

// 686	JavaScript: Input a string and converts upper case letters to lower and vice versa
// "Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// 单词
// 	low 低
// 	lower low的比较级
// 	lowest low的最高级
// 	high 高
// 	convert 转换
// 	vice versa 反之亦然
// 知识点
// 	toUpperCase
// 	replace 函数输入，捕获组。参数里面是捕获到的字符串
// 		https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E6%8C%87%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0

swapcase = function swapcase(str) {
    return str.replace( /([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbc') == "aAbBC");

// 687	JavaScript: Convert a string into camel case
// "Write a JavaScript function to convert a string into camel case.
// camel 骆驼
// camel case 驼峰命名法
// white 白色
// whitespace 空格

camelize = function camelize(str) {
  return str.replace(/\W+(.)/g, function(match, chr)
   {
        return chr.toUpperCase();
    });
}

console.log(camelize("JavaScript Exercises") == "JavaScriptExercises");
console.log(camelize("JavaScript exercises") == "JavaScriptExercises");
console.log(camelize("JavaScriptExercises") == "JavaScriptExercises");

/*

