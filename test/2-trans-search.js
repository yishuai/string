// 字符串变换和搜索

// 五道题

// 1、基本算法：截断字符串

// 如果字符串（第一个参数str）长于给定的最大字符串长度（第二个参数num），则将其截断，返回以...结尾的字符串。

// 提示：你可以使用 slice()

// 测试

console.log(truncateString("A-tisket a-tasket", 8) == "A-tisket...");

console.log(truncateString("A-tisket", 10) == "A-tisket");

// 2、中级算法：中间遗漏的字母

// 在输入的字符串中，找到丢失的字母并返回。

// 如果中间没有遗漏的字母，则返回undefined。

// 提示：你可以用 charCodeAt() 和 fromCharCode()

// 测试：

console.log(fearNotLetter("abce") == "d");

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz") == undefined);

console.log(fearNotLetter("abcdefghijklmnopqrstuvw") == undefined);

console.log(fearNotLetter("cdef") == undefined);

// 3、将二进制表示的字符串，转换为英文句子

// 将字母的二进制表示，转换为字母文字。

// 测试

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101") == "I love");

// 4、基本算法：变异

// 函数的输入是一个数组。该数组中有两个字符串元素

// 忽略字母的大小写，检查第一个字符串是否包含了第二个字符串的所有字母

// 测试

console.log(mut([“hello”，“Hello”]) == True);

// 第一个字符串包含第二个字符串的所有字母，应该返回true

console.log(mut([“hello”，“hey”]) == False);

// 字符串“hello” 不包含 “y”，应该返回false

console.log(mut([“Alien”，“line”]) == True);

console.log(mut(["hello","hey"]) == False);

console.log(mut(["hello","heLLO"]) == True);

console.log(mut(["hello","Hello"]) == True );

console.log(mut(["hello","he"]) == True);

console.log(mut(["Alien","lin"]) == True );

// 因为“line”的所有字母都出现在“Aline”中，应该返回true

// 提示：可以用 indexOf()

// 5、算法101：字符串中的第一个唯一字符

// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。

// 如果不存在，则返回 -1。

// 提示：可以用 indexOf(), lastIndexOf()

// 测试

console.log(finduniq("leetcode") == 0);

// 第一个字母 l 在字符串中没有重复，它的索引是0，所以返回 0

console.log(finduniq("loveleetcode") == 2);

// 第三个字母 v 在字符串中没有重复，它的索引是2，所以返回 2

console.log(finduniq("lovelove") == 2);

// 所有字母都重复，所以返回 2

console.log(buChongFu("leetcode"));
// 返回 0

console.log(buChongFu("loveleetcode"));
// 返回 2

console.log(finduniq("ltcodeltcode") == -1);