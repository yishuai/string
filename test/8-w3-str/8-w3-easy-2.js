// =====
// 711	JavaScript: Remove HTML/XML tags from string
// "Write a JavaScript function to remove HTML/XML tags from string.

// 英语单词
//      move：移动
//      remove：移走

// 题目中文提示
//      从 字符串 中 移走 HTML tag 标签
//      比如 <p> 就是一个标签
//      &lt; 是 小于号 <
//          lower than
//      &gt; 是 大于号 >
//          greater than (比)
//          great wall 长城
//      所以 &lt;p&gt; 即 <p> 段落标签

// 编程提示：
//      找到 <> 括号，把 它们 替换为 ""
//      replace()
//          两个参数
//              1）匹配的规则
//                  比如 /<.+>/g
//              2）把匹配的东西要替换的字符

strip_html_tags = function(input) {

}

console.log(strip_html_tags('&lt;p&gt;&lt;strong&gt;&lt;em&gt;PHP Exercises&lt;/em&gt;&lt;/strong&gt;&lt;/p&gt;') == "PHP Exercises");

// =====
// 714	JavaScript: Create a case-insensitive search
// "Write a JavaScript function to create a case-insensitive search.

// 英语单词
//      case：字母大小写
//          Upper Case: 大写
//          lower Case：小写
//      create：
//          动词
//          创建
//      make sense： 很有道理，很有感觉
//      sense：感觉
//      sensitive：敏感
//      insensitive：不敏感的

// 题目中文提示
//      创建一个 对 字母大小写的 不敏感 的搜索

// 编程提示：
//      加一个 /i
// search

case_insensitive_search = function(input) {

}

console.log(case_insensitive_search('JavaScript Exercises', 'exercises') == true);

console.log(case_insensitive_search('JavaScript Exercises', 'Exercises') == true);

console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess') == false);

// =====
// 719	JavaScript: Test whether the character at the provided character index is upper case
// "Write a JavaScript function to test whether the character at the provided (character) index is upper case.

// 英语单词
// whether：是否
// character：字母
//      Char: 字母
// provide：提供
//      provided

// 题目中文提示
//      测试 提供的 字符 索引 处 的字母 是否 为 大写

// 编程提示：
//      test
//      .charAt()
//      split("")

isUpperCaseAt = function(input) {

}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1) == false);
console.log(isUpperCaseAt('Js STRING EXERCISES', 4) == true);

// =====
// 721	JavaScript: Get humanized number with the correct suffix
// "Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.

// 英语单词
// human：人（名词）
//      humanize：（动词）
// 1 第一：1st
//      first prize 一等奖
//      1st prize
// 2 第二 second 2nd
// 3: third 3rd
// 4: four fourth
// 5: five fifth
// 6: sixth 6th
// 20: 20th
// 302: three hundred and two
//      302nd

humanize = function(input) {

}


console.log(humanize(1) == "1st");
console.log(humanize(20) == "20th");
console.log(humanize(302) == "302nd");

// =====
// 722	JavaScript: Test whether a string starts with a specified string
// "Write a JavaScript function to test whether a string starts with a specified string.

// 英语单词
// specify 指定
//      specified

// 题目中文提示
//      测试 字符串 的开头 是不是 一个 指定 的字符串

// 编程提示：
//      substr
//      test
//      search

startsWith = function(input) {

}


console.log(startsWith('js string exercises', 'js') == true);

// ====
// 723	JavaScript: Test whether a string ends with a specified string
// "Write a JavaScript function to test whether a string ends with a specified string.

// 英语单词
// with 用
//     I eat rice with 。。。

// 题目中文提示
//      检测 一个 字符串 是否 以 指定的 字符串 结束

// 编程提示
//      endsWith()
//      slice
//      substr

endsWith = function(input) {

}


console.log(endsWith('JS string exercises', 'exercises') == true);

// =====
// 725	JavaScript: Get unique guid of the specified length, or 32 by default
// Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier’) of the specified length, or 32 by default.

// 英语单词
// unique
//     唯一的、独一无二的
// guid
//     全局唯一的ID
// get
//     get up
//     获得，懂了
// default
//     默认的

// 编程提示：
// math 数学
//     random() 随机
// ASCII 码
//     给定范围

guid = function(input) {

}


console.log(guid())
console.log(guid(15))

// 中级

// =====
// 702	JavaScript: Remove the first occurrence of a given 'search string' from a string
// "Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

// 英语单词
// occurrence   发生
// give 给
//      given 给定的

remove_first_occurrence = function(input) {

}


console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the') == "The quick brown fox jumps over lazy dog");

// ======
// 679	JavaScript: Split a string and convert it into an array of words
// "Write a JavaScript function to split a string and convert it into an array of words.

// 英语单词
// convert
//     转化

string_to_array = function(input) {

}


console.log(string_to_array("Robin Singh") == ["Robin", "Singh"]);

// ==========
// 681	JavaScript: Convert a string in abbreviated form
// Write a JavaScript function to convert a string in abbreviated form.

// 英语单词

// abbreviated
//     缩写
// form
//     形式

abbr = function(input) {

}

console.log(abbr("Shi Wu Xue Tang") == "SWXT");