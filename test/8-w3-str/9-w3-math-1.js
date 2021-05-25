// https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php

// 563	JavaScript: Convert a number from one base to another
// Write a JavaScript function to convert a number from one base to another.
// 提示：parseInt，toString

console.log(base_convert('E164',16,8) == "160544");
console.log(base_convert(1000,2,8) == "10");

// 564	JavaScript: Convert a binary number to a decimal number	"
// Write a JavaScript function to convert a binary number to a decimal number.
// 不是二进制数的字符要忽略

console.log(bin_to_dec('110011') == 51);
console.log(bin_to_dec('100') == 4);
console.log(bin_to_dec('100a') == 4);

// 565	JavaScript: Convert a decimal number to binary, hexadecimal or octal number
// Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.
// 提示：parseInt，toString

console.log(dec_to_bho(120,'B') == "1111000" );
console.log(dec_to_bho(120,'H') == "78");
console.log(dec_to_bho(120,'O') == "170");

// 566	JavaScript: Generate a random integer
// Write a JavaScript function to generate a random integer.
// 两个参数，分别是 最大值 和 最小值。
//      参数可以不提供
// 提示： math.floor, math.random

console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());

// 574	JavaScript: Find out if a number is a natural number or not
// Write a JavaScript function to find out if a number is a natural number or not.

// Note:

// Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ...
// or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
// No negative numbers and no fractions.

console.log(is_Natural(-15) == false);

console.log(is_Natural(1) == true);

console.log(is_Natural(10.22) == false);

console.log(is_Natural(10/0)== false);


// 575	JavaScript: Test if a number is a power of 2

console.log(power_of_2(16) == true);
console.log(power_of_2(18) == false);
console.log(power_of_2(256) == true);

// 577	JavaScript: Check whether a value is an integer or not	"
// Write a JavaScript function to check whether a value is an integer or not.
// 提示：parseInt, isNaN, typeof

console.log(is_Int(23) == true);
console.log(is_Int(4e2) == true);
console.log(is_Int(NaN) == false);
console.log(is_Int(23.75) == false);
console.log(is_Int(-23) == true);

// 586	JavaScript: Round a number to a specified number of digits and strip extra zeros
// Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any).
// 提示：parseFloat, toFixed

console.log(rnd(-4.55555,4) == -4.5556);
console.log(rnd(5.0001000,4) == 5.0001);


// 591	JavaScript: Convert a positive number to negative number 	"
// Write a JavaScript function to convert a positive number to negative number.
// 负数还是要转换为负数
// 提示：Math.abs

console.log(pos_to_neg(15) == -15);
console.log(pos_to_neg(-15) == -15);

// 593	JavaScript: Get the highest number from three different numbers
// Write a JavaScript function to get the highest number from three different numbers.
// 提示：Math.max

console.log(highest_of_three(-5, 4, 2) == 4);

// 594	JavaScript: Calculate the percentage of a number
// Write a JavaScript function to calculate the percentage (%) of a number.
// 第一个参数表示 分母
// 第二个参数 表示 百分数

console.log(percentage(1000, 47.12) == 471.2);

// 599	JavaScript: Limit a value inside a certain range 	"
// Write a JavaScript function to limit a value inside a certain range.
// Note : If the value is higher than max it will return max. and if the value is smaller than min it will return the min.

console.log(value_limit(7, 1, 12) == 7 );
console.log(value_limit(-7, 0, 12) == 0);
console.log(value_limit(15, 0, 12) == 12);

// 603	JavaScript: Count the digits of an integer
// Write a JavaScript function to count the digits of an integer.

console.log(digits_count(12112) == 6);
console.log(digits_count(457) == 3);

// 576	JavaScript: Round a number to a given specific decimal places	"
// Write a JavaScript function to round a number to a given decimal places.
// 提示：Math.round, Math.pow, toFixed

console.log(precise_round(12.375,2) == "12.38");

console.log(precise_round(12.37499,2) == "12.37");

console.log(precise_round(-10.3079499, 3) == "-10.308");

// 580	JavaScript: Calculate the product of values in an array
// Write a JavaScript function to calculate the product of values in an array.
// 如果不是数字，要忽略

console.log(product([1,2,3]) == 6);

console.log(product([100,-200,3]) == -60000);

console.log(product([1,2,'a',3]) == 6);

// 587	JavaScript: Currency math (add, subtract, multiply, division etc.)
// Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

console.log(moneymath('$40.24', '$21.57') == '$61.81');