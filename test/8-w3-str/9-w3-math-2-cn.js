// 14道 难度为中等的数学题
// https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php

// 600	JavaScript: Check if a number is a whole 整体的 number or has a decimal place 小数
// "Write a JavaScript function to check if a number is a whole number or has a decimal place.
// Note : Whole Numbers are simply the numbers 0, 1, 2, 3, 4, 5, ... (and so on). No Fractions!
// 提示
//      Math.floor

console.log(number_test(25.66) == "Number has a decimal place.");
console.log(number_test(10) == "It is a whole number.");

// 567	JavaScript: Format 给...一个特定的格式 a number up to specified 设定的 decimal 小数点 places 位置
// "Write a JavaScript function to format a number up to specified decimal places.
// 提示
//      parseFloat
//      toFixed

console.log(decimals(2.100212, 2) == 2.10);
console.log(decimals(2.100212, 3) == 2.100);
console.log(decimals(2100, 2) == 2100.00);

// 568	JavaScript: Find 找出 the highest 最高 value 值 in an array 数组
// high 高
// highest 最高的
// low 低

// "Write a JavaScript function to find the highest value in an array.
// 提示
//      Math.max 最大

console.log(max([12,34,56,1]) == 56);
console.log(max([-12,-34,0,-56,-1]) == 0);

// 569	JavaScript: Find the lowest value in an array
// "Write a JavaScript function to find the lowest value in an array.
// 提示
//      Math.min 最小的

console.log(min([12,34,56,1]) == 1);
console.log(min([-12,-34,0,-56,-1]) == -56);

// 579	JavaScript: Calculate 计算 the sum 总和 of values in an array
// calculator 计算器
// "Write a JavaScript function to calculate the sum of values in an array.

console.log(sum([1,2,3]) == 6);
console.log(sum([100,-200,3]) == -97);
console.log(sum([1,2,'a',3]) == 6);

// 588	JavaScript: Calculate the nth n次方 root 根 of a number
// "Write a JavaScript function to calculate the nth root of a number.
// 平方根
// 8*8 = 64
// 8的平方等于64
// 64的平方根等于8
// 2的平方等于4
// 16的平方根等于4
// 16的2次方根等于4
// 2的立方等于8
// 2的三次方等于8
// 8的三次方根等于2
// 8的立方根等于2
// 2的四次方等于16
// 16的四次方根等于2

// 2的2次方等于4
// 2的1次方等于2
    // *2
// 2的-1次方等于
    // 1/2 = 0.5
// 2的-2次方等于
    // 2的2次方 = 4
    // 1/4
// 2的-3次方等于
    // 2的3次方 = 8
    // 1/8

// 64的-2次方根
    // 64的2次方根 8
    // 1/8 = 0.125

// sqrt
//      square 正方形 root 根

console.log(nthroot(64, 2) == 8);
console.log(nthroot(64, -2) == 0.125);

// 590	JavaScript: Round up 向上 取整 an integer 整数 value to the next 下一个 multiple 倍数（名词）of 5
// multiply 乘（动词）

// "Write a JavaScript function to round up an integer value to the next multiple of 5.
// 提示
//      Math.ceil

console.log(int_round5(32) == 35);
console.log(int_round5(137) == 140);

// 607	JavaScript: Subtract 减 elements 元素 from 从 one another 另外一个 in an array 数组
// Write a JavaScript function to subtract elements from one another in an array.

console.log(subtraction([7,3,2,-1]) == 3);

// 608	JavaScript: Calculate 计算 the divisor 除数 and modulus 模2/余数 of two integers 整数
// Write a JavaScript function to calculate the divisor and modulus of two integers.
// 提示
//      isInt

console.log(div_mod(17, 4) = [4,1]);

// 601	JavaScript: Print 打印 an 一个 integer 整数 with 用 commas 逗号 as thousands 千 separators 分隔符
// ten 十
// period 句号
// separate 分隔

// "Write a JavaScript function to print an integer with commas as thousands separators.

console.log(thousands_separators(1000) == "1,000");
console.log(thousands_separators(10000.23) == "10,000.23");
console.log(thousands_separators(100000) == "100,000");

// 605	JavaScript: Get 得到 all prime 质数 numbers from 0 to a specified 给定的 number
// "Write a JavaScript function to get all prime numbers from 0 to a specified number

console.log(primeFactorsTo(5) == [2, 3, 5]);
console.log(primeFactorsTo(15) == [2, 3, 5, 7, 11, 13]);

// 578	JavaScript: Check 检查 whether 是否 a variable 变量 is numeric 数字的 or not
// number 数字

// "Write a JavaScript function to check whether a variable is numeric or not.

console.log(is_Numeric(12) == true);
console.log(is_Numeric('abcd') == false);
console.log(is_Numeric('12') == true);
console.log(is_Numeric(' ') == false);
console.log(is_Numeric(1.20) == true);
console.log(is_Numeric(-200) == true);

// 592	JavaScript: Cast 投射 a square root 平方根 of a number to an integer
// "Write a JavaScript function to cast a square root of a number to an integer.
// cast a square root of a number to an integer.
// cast x to y 把 x 映射 为 y
// x: a square root 平方根 of a number 数
// y：an integer 整数

console.log(sqrt_to_int(17) == 4);

// 598	JavaScript: Return 返回 values that are powers 幂 of two
// 64是2的几次幂？
// 2的4次方是16
// 2的5次方是16*2 = 32
// 2的6次方是32*2 = 64
// 64是2的6次幂

// "Write a JavaScript function which will return values that are powers of two.

console.log(isPower_of_two(64) == true);
console.log(isPower_of_two(94) == false);