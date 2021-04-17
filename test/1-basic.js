// 字符串赋值和基本操作练习

// 1、基本算法：反转字符串

// 反转输入的字符串，输出反转后的字符串。

// 提示：您可能需要将字符串转换为数组，然后才能将其反转。

// String.prototype.split 拆分()
//     Split就是根据输入的参数字符，把一个字符串，拆分成数组。

// Array.prototype.reverse 翻转()
// Array.prototype.join 联合 ()

// 测试：

console.log(reverseString("hello")=='olleh');

// 应该输出 "olleh"

// 2、基本算法：查找字符串中最长的单词

// 返回提供的句子中最长单词的长度，输出是一个数字。

// 提示：
// String.prototype.split()
// String.length

// 测试：

console.log(findLongestWord("May the force be with you")==5);

// 3、基本算法：标题大小写句子

// 将输入字符串中的每个单词的首字母变为大写，其余字母变为小写。

// 提示：String.prototype.split()

// 测试

console.log(titleCase("I'm a little tea pot")=="I'm A Little Tea Pot");

// 4、基本算法：确认结局

// 检查函数的第一个字符串输入参数 str 是否以第二个字符串输入参数 target 结尾

// 提示：可以通过ES2015中引入的.endsWith（）方法解决此挑战。但是出于此挑战的目的，我们希望您改用 JavaScript 子字符串方法 substr() 或 substring()

// 测试

console.log(confirmEnding("Bastian", "n")==True);

