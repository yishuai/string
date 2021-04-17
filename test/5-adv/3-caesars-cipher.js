/* 基本算法：凯撒密码

https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

问题：

凯撒密码（Caesar cipher）是最简单，最广为人知的密码之一
它是一种在字母表中进行移位的密码。

比如：移动一位
“A” ↔ “B”，“B”↔“C” 等。
“HAPPY” ↔ “IBQQZ”

常用的是ROT13密码，字母值被移动了13位

图：https://en.wikipedia.org/wiki/ROT13

ROT13（“旋转13位”）是一种简单的字母替换密码，是古罗马开发的凯撒密码的特例。

拉丁字母有26个字母（2×13），所以ROT13是它自己的逆。也就是说，要解密ROT13，应用相同算法即可。

将相同的操作用于编码和解码。

“A” ↔ “N”，“B”↔“O”等。

编写函数，该函数将ROT13编码的字符串进行加密和解密。

1）所有输入字母都会是大写
2）不需要转换任何非字母字符（如空格，标点符号），忽略即可，不需要将它们继续传递

提示：

1）String.prototype.charCodeAt(i)

返回字符串中索引为i的字母的码点
at 在

Unicode 码点（code points）的范围从 0 到 1114111 (0x10FFFF）

开头的 128 个 Unicode 编码单元和 ASCII 字符编码一样

  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

"ABC".charCodeAt(0) // returns 65:"A"
"ABC".charCodeAt(1) // returns 66:"B"
"ABC".charCodeAt(2) // returns 67:"C"

如果指定的 index 小于 0 、等于或大于字符串的长度，则 charCodeAt 返回 NaN。

  "ABC".charCodeAt(3) // returns NaN

2）从字母的码点，得到字母

String.fromCharCode()

from: 从
Char：字符串
code：码
ASCII

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

返回由指定的 UTF-16 代码单元序列创建的字符串

console.log(String.fromCharCode(189, 43, 190, 61));

扩展：

JavaScript 标准内置对象

  String

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function rot13(str) {
  // 请在这里写作代码
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC") == "FREE CODE CAMP")
console.log(rot13("SERR CVMMN!") == "FREE PIZZA!")
console.log(rot13("SERR YBIR?") == "FREE LOVE?")
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") == "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")