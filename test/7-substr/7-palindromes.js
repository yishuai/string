/* 基本算法：检查回文

回文是指”从前向后读“和”从后向前读“，是一样的，的字符串。比如 "eye", "carac"

编写程序，如果给定的字符串是回文，则返回true。否则，返回false。

检查时，请忽略标点，大小写和空格。

应该支持各种格式的字符串，例如

  "racecar”，"RaceCar”和"race CAR” 是回文字符串

还支持带特殊符号的字符串，例如

  "2A3 *3a2”，"2A3 3a2”和" 2_A3 *3＃A2" 也是回文字符串

思路提示：

1）删除输入字符串中所有非字母、非数字的字符，包括标点，空格和符号

2）将输入字符串转换为小写

3）检查回文：反转后，如果和原来的字符串相同，就是回文

函数提示：

String.prototype.replace() 代替
String.prototype.toLowerCase() 转换为小写

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function palindrome(str) {

}

console.log(palindrome("eye") == true);
console.log(palindrome("racecar") == true);
console.log(palindrome("RaceCar") == true);
console.log(palindrome("race CAR") == true);
console.log(palindrome("2A3 *3a2") == true);
console.log(palindrome("2A3 3a2") == true);
console.log(palindrome(" 2_A3 *3＃A2") == true);
console.log(palindrome("ey1e") == false);
console.log(palindrome("rac2ecar") == false);
console.log(palindrome("Race4Car") == false);
console.log(palindrome("race 5CAR") == false);
console.log(palindrome("2A3 *36a2") == false);
console.log(palindrome("2A3 3af2") == false);
console.log(palindrome(" 2_A3 *s*3＃A2") == true);