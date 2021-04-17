/* 基本算法：重复字符串

https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

将一个给定的字符串（第一个参数， str)重复 num（第二个参数）次。如果 num不是一个正数，返回一个空字符串。

请不要使用内置的 repeat() 方法。

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function repeatStringNumTimes(str, num) {
  // 请在这里写代码

}

console.log(repeatStringNumTimes("*", 3) == "***");

console.log(repeatStringNumTimes("abc", 3) == "abcabcabc");

console.log(repeatStringNumTimes("abc", 4) == "abcabcabcabc");

console.log(repeatStringNumTimes("abc", 1) == "abc");

console.log(repeatStringNumTimes("*", 8) == "********");

console.log(repeatStringNumTimes("abc", -2) == "");

// 鲁棒 Robust 健壮