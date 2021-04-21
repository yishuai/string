/* 字符串查找

函数有两个参数：haystack 和 needle，都是字符串

编写函数，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。

例：
  haystack = 'hello world', needle = 'll'
  返回：2

如果不存在，则返回 -1。
如果 needle 是空字符串时，返回 0。

*/

const strStr = function (haystack, needle) {

};

console.log(strStr('hello world','ll') == 2)
console.log(strStr('hello world','worx') == -1)
console.log(strStr('hello world','') == 0)
