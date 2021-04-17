// 正则表达式

// 四道题

// 1、高级算法：验证美国电话号码

// https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

// 如果传递的字符串是有效的美国电话号码，则返回true。

// 以下是美国电话号码的各种有效格式。用户可以选择任何一种形式

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// 如：

console.log(check1("800-692-7753") == True);

console.log(check1("8oo-six427676") == False);

// 如果提供了国家代码，则必须确认该国家代码为 1。

// 2、罪犯

// https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/regular-expressions/find-one-or-more-criminals-in-a-hunt

// 找到一个或多个C。

// 测试：

console.log(check2('P1P2P3P4P5P6CCCP7P8P9') ==  "CCC");

// 3、用户名验证

// https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames

// 检查用户名，要求：
// 1) 用户名中必须有字母。
// 2）数字必须在最后，且数字可以有零个或多个。
// 3) 用户名字母可以是小写字母和大写字母。
// 4) 用户名长度必须至少为两个字符。两个字符的用户名只能使用字母。

// 比如：

console.log(check3("Oceans11") == True);

console.log(check3("007") == False);

// 4、删除空格

// https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end

// 编写一个正则表达式并使用适当的字符串方法删除字符串开头和结尾的空格。

// 注意：

// .trim()方法在这里也可以实现同样的效果，但是你需要使用正则表达式来完成此项挑战。

// 测试

console.log(check4('  xx  ') == 'xx');