// https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php

// 16 题

// 563	JavaScript: Convert 转换 a number from one base 基数to another 另一个
// Write a JavaScript function to convert a number from one base to another.
// 提示：parseInt，toString

console.log(base_convert('E164',16,8) == "160544");
console.log(base_convert(1000,2,8) == "10");

// 564	JavaScript: Convert 转换 a binary 二进制 number to a decimal 十进制 number	"
// Write a JavaScript function to convert a binary number to a decimal number.
// 不是二进制数的字符要忽略

console.log(bin_to_dec('110011') == 51);
console.log(bin_to_dec('100') == 4);
console.log(bin_to_dec('100a') == 4);

// 565	JavaScript: Convert a decimal number to binary, hexadecimal 十六进制 or octal 八进制 number
// Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.
// 提示：parseInt，toString

console.log(dec_to_bho(120,'B') == "1111000" );
console.log(dec_to_bho(120,'H') == "78");
console.log(dec_to_bho(120,'O') == "170");

// 566	JavaScript: Generate 产生 a random 随机 integer 整数
// Write a JavaScript function to generate a random integer.
// 两个参数，分别是 最大值 和 最小值
//      参数可以不提供
//      如果只有一个参数，那就只有最大值
// 提示： math.floor 向下取整, math.random 随机数

console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());

// 574	JavaScript: Find out 找出 if 是否 a number is a natural number 自然数 or not
// Write a JavaScript function to find out if a number is a natural number or not.
// nature：自然

// Note:

// Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ...
// or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
// No negative 负 numbers and no fractions 小数.
//

console.log(is_Natural(-15) == false);

console.log(is_Natural(1) == true);

console.log(is_Natural(10.22) == false);

console.log(is_Natural(10/0)== false);

// 575	JavaScript: Test 测试 if a number is a power 幂 of 2
// 2 的 2 次幂：2*2
// 2 的 3 次幂：2*2*2

console.log(power_of_2(16) == true);
console.log(power_of_2(18) == false);
console.log(power_of_2(256) == true);

// 577	JavaScript: Check whether 是否 a value 值 is an integer 整数 or not	"
// Write a JavaScript function to check whether a value is an integer or not.
// 提示： parseInt, isNaN, typeof 变量类型

console.log(is_Int(23) == true);
console.log(is_Int(4e2) == true);
console.log(is_Int(NaN) == false);
console.log(is_Int(23.75) == false);
console.log(is_Int(-23) == true);

// 586	JavaScript: Round 四舍五入 a number to a specified 给定的 number of digits and strip 去掉 extra 额外的 zeros
// Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any).
// 提示：parseFloat, toFixed

console.log(rnd(-4.55555,4) == -4.5556);
console.log(rnd(5.0001000,4) == 5.0001);

// 591	JavaScript: Convert a positive 正 number to negative 负 number 	"
// Write a JavaScript function to convert a positive number to negative number.
// 负数还是要转换为负数
// 提示：Math.abs 绝对值

console.log(pos_to_neg(15) == -15);
console.log(pos_to_neg(-15) == -15);

// 593	JavaScript: Get 获得 the highest 最高的 number from three different 不同的 numbers
// Write a JavaScript function to get the highest number from three different numbers.
// 提示：Math.max 最大的
// high：高

console.log(highest_of_three(-5, 4, 2) == 4);

// 594	JavaScript: Calculate 计算 the percentage 百分比 of a number
// Write a JavaScript function to calculate the percentage (%) of a number.
// 第一个参数表示 分母
// 第二个参数 表示 百分数
// 47.12% = 0.4712 = 千分之 471.2

console.log(percentage(1000, 47.12) == 471.2);

// 599	JavaScript: Limit 限制 a value inside 在...里 a certain 一定的 range 范围
// Write a JavaScript function to limit a value inside a certain range.
// Note : If the value is higher than max it will return max. and if the value is smaller than min it will return the min.

console.log(value_limit(7, 1, 12) == 7 );
console.log(value_limit(-7, 0, 12) == 0);
console.log(value_limit(15, 0, 12) == 12);

// 603	JavaScript: Count 计数 the digits 数字 of an integer
// Write a JavaScript function to count the digits of an integer.

console.log(digits_count(12112) == 6);
console.log(digits_count(457) == 3);

// 576	JavaScript: Round a number to a given specific decimal 小数 places
// Write a JavaScript function to round a number to a given decimal places.
// 提示：Math.round, Math.pow, toFixed

console.log(precise_round(12.375,2) == "12.38");

console.log(precise_round(12.37499,2) == "12.37");

console.log(precise_round(-10.3079499, 3) == "-10.308");

// 580	JavaScript: Calculate the product 乘积 of values in an array 数组
// Write a JavaScript function to calculate the product of values in an array.
// 如果不是数字，要忽略

console.log(product([1,2,3]) == 6);

console.log(product([100,-200,3]) == -60000);

console.log(product([1,2,'a',3]) == 6);

// 587	JavaScript: Currency 货币 math (add 加, subtract 减, multiply 乘, division 除 etc.)
// Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

console.log(moneymath('$40.24', '$21.57') == '$61.81');