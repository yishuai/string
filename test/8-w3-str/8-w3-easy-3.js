// 16题
// 参考链接：https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php

// 682

// "Write a JavaScript function to hide email addresses to protect from unauthorized user.

// 英语单词

// hide & seek
// 藏猫猫
// hide：藏
// seek：找
// email addresses 邮箱地址
// to 为了
// protect 保护
// from 从
// unauthorized 未授权的
// authorized 动词。授权的
// author 作者
// user 用户

console.log(protect_email("robin_singh@example.com") == "robin...@example.com");

// 685

// "Write a JavaScript function to capitalize the first letter of each word in a string.

// Make capitalize 大写
// the first letter of each word in a string

console.log(capitalize_Words('js string exercises') == "Js String Exercises");

// 689

// JavaScript: Concatenate 粘贴 a specific 特别的 string for a specific number of times

// "Write a JavaScript function to concatenates a given string n times (default is 1).

// 函数参数：
// 第二个参数：可以不提供。如果不提供，就返回自身字符串

console.log(repeat('Ha!') == "Ha!"); 

console.log(repeat('Ha!',2) == "Ha!Ha!"); 

console.log(repeat('Ha!',3) == "Ha!Ha!Ha!");

// 691

// JavaScript: Formats 格式化 a number to a human-readable string
// read 读
// readable 能读的

// "Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

// 函数参数：
// 可以不提供。如果不提供，就返回空字符串

console.log(humanize_format() == ""); 

console.log(humanize_format(1) == "1st"); 

console.log(humanize_format(8) == "8th"); 

console.log(humanize_format(301) == "301st"); 
 
console.log(humanize_format(402) == "402nd"); 


// 693

// JavaScript: Chop 砍 a string into chunks 块 of a specific 特定的length

// "Write a JavaScript function to chop a string into chunks of a given length.

// 函数参数：
// 第二个参数：可以不提供。如果不提供，就返回全部字符串

console.log(string_chop('w3resource') == ["w3resource"]); 

console.log(string_chop('w3resource',2) == ["w3", "re", "so", "ur", "ce"]); 
 
console.log(string_chop('w3resource',3) == ["w3r", "eso", "urc", "e"]);

// 694

// JavaScript: Count 计数 the occurrence 发生 of a substring 子串 in a string

// "Write a JavaScript function to count the occurrence of a substring in a string.

// 不区分大小写

console.log(count("The quick brown fox jumps over the lazy dog", 'the') == 2);

console.log(count("The quick brown fox jumps over the lazy dog", 'fox') == 1);

// 696

// JavaScript: Pad 垫子 (left, right) a string to get to a determined 特定的 length 

// "Write a JavaScript function that can pad (left, right) a string to get to a determined length.

// 函数参数：
// 		第三个参数：如果是 'l', 在左边填充0；
// 				如果是 'r'，在右边填充0；默认是 'r'

console.log(formatted_string('0000',123,'l') == "0123");
 
console.log(formatted_string('00000000',123,'') == "12300000");


// 698
// JavaScript: Get a part of string after a specified character 字母
// 找到一个字符串

// "Write a JavaScript function to get a part of string after a specified character.

// 函数参数：
// 		第二个参数：要搜索的字母
// 		第三参数：'a' 取搜索到的字母前面的字符串；
// 				'b' 取搜索到的字母后面的字符串；

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a') == "w3resource"); 

console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b') == "xercises");


// 699	

// JavaScript: Strip leading and trailing spaces from a string	

// strip：去掉
// leading：头部的
// trailing：尾部的
// space：空格

// "Write a JavaScript function to strip leading and trailing spaces from a string.

console.log(strip('w3resource ') == "w3resource"); 

console.log(strip(' w3resource') == "w3resource"); 

console.log(strip(' w3resource ') == "w3resource");

// 705	

// JavaScript: Find a word within a string	
// find 找到
// within 里

// "Write a JavaScript function to find a word within a string.

console.log(search_word('The quick brown fox', 'fox') == "'fox' was found 1 times."); 

console.log(search_word('aa, bb, cc, dd, aa', 'aa') == "'aa' was found 2 times.");

// 708	

// JavaScript: Remove non-printable ASCII chars	"
// print 打印
// printable 可打印的
// non-printable 不可打印的

// Write a JavaScript function to remove non-printable ASCII chars

console.log(remove_non_ascii('????ééêPHP-MySQL??úú') == "PHP-MySQL");

// 715

// JavaScript: Uncapitalize the first character of a string
// Uncapitalize：转小写

// "Write a JavaScript function to uncapitalize the first character of a string.

console.log(Uncapitalize('Js string exercises') == "js string exercises");

// 724	

// JavaScript: Get the successor of a string	
// successor：下一个

// "Write a JavaScript function to get the successor of a string.

console.log(successor("abcd") == "abce");

console.log(successor("THX1138") == "THX1139");

// 注意：要进位

console.log(successor("1999zzz") == "2000aaa");

console.log(successor("ZZZ9999") == "AAAA0000");

console.log(successor('3456') == "3457")

// 697	

// JavaScript: Repeat a string a specified times

// "Write a JavaScript function to repeat a string a specified times.

// 函数参数：
// 如果缺少第二个参数，返回错误提示

console.log(repeat_string('a', 4) == "aaaa"); 

console.log(repeat_string('a') == "Error in string or count.");

// 706	
// JavaScript: Check if a string ends with specified suffix	
// check 检查
// end 结束
// suffix 后缀

// "Write a JavaScript function check if a string ends with specified suffix.

console.log(string_endsWith('JS PHP PYTHON','PYTHON') == true); 

console.log(string_endsWith('JS PHP PYTHON','') == false);

// 707	
// JavaScript: Escapes special characters for use in HTML	

// 转换特殊字符

// "Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.

console.log(escape_html('PHP &amp; MySQL') == "PHP &amp;amp; MySQL"); 

console.log(escape_html('3 &gt; 2') == "3 &amp;gt; 2");
