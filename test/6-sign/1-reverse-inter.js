/*
翻转整数

输入一个 32 bit 的 有符号 整数，将它的数字进行反转。

https://101.zoo.team/zi-fu-chuan

console.log(reverse(123) == 321)
console.log(reverse(123) == -321)
console.log(reverse(120) == 21)

注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31, 2^31−1]。
即 [-2147483648, 2147483647];

因此，如果我们翻转 2147483639 (它小于 2147483647，因此是一个有效的32位整数），
得到的数 9363848412 会大于 2147483647，这就是“溢出”现象。

请进行判断，如果反转后 整数 溢出，就返回 0。

思路1：

- 设置边界极值；
- 使用字符串的翻转函数进行翻转: split, reverse, join
  把 123 变为 ”321“
- 补充符号
  判断 123 的符号，如果大于 0， 用 parseInt 将 ”321“ 转为 数字
  否则，用 parseInt 将 0 - 321 转为 数字
- 拼接最终结果

知识点：
  三元操作符
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

  条件（三元）运算符是 JavaScript 仅有的使用三个操作数的运算符。一个条件后面会跟一个问号（?），如果条件为 truthy ，则问号后面的表达式A将会执行；表达式A后面跟着一个冒号（:），如果条件为 falsy ，则冒号后面的表达式B将会执行。本运算符经常作为 if 语句的简捷形式来使用。

  result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10);

parse：解析
int：整数

思路2：
  y = 0
  123 模 10 得到 3, 整除 10 得到 12 （Math.floor)
  y = y * 10 + 3 = 3
  12 模 10 得到 2, 整除 10 得到 1 （Math.floor)
  y = y * 10 + 2 = 32
  1 模 10 得到 1, 整除 10 得到 0 （Math.floor)
  y = y * 10 + 1 = 321
*/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  // 代码
};

console.log(reverse(123) == 321)
console.log(reverse(-123) == -321)
console.log(reverse(120) == 21)
