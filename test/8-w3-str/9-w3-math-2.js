// 14道 难度为中等的数学题
// https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php

// 600	JavaScript: Check if a number is a whole number or has a decimal place
// "Write a JavaScript function to check if a number is a whole number or has a decimal place.
// Note : Whole Numbers are simply the numbers 0, 1, 2, 3, 4, 5, ... (and so on). No Fractions!
// 提示
//      Math.floor

console.log(number_test(25.66) == "Number has a decimal place.");
console.log(number_test(10) == "It is a whole number.");

// 567	JavaScript: Format a number up to specified decimal places
// "Write a JavaScript function to format a number up to specified decimal places.
// 提示
//      parseFloat
//      toFixed

console.log(decimals(2.100212, 2) == "2.10");
console.log(decimals(2.100212, 3) == "2.100");
console.log(decimals(2100, 2) == "2100.00");

// 568	JavaScript: Find the highest value in an array
// "Write a JavaScript function to find the highest value in an array.
// 提示
//      Math.max

console.log(max([12,34,56,1]) == 56);
console.log(max([-12,-34,0,-56,-1]) == 0);

// 569	JavaScript: Find the lowest value in an array
// "Write a JavaScript function to find the lowest value in an array.
// 提示
//      Math.min

console.log(min([12,34,56,1]) == 1);
console.log(min([-12,-34,0,-56,-1]) == -56);

// 579	JavaScript: Calculate the sum of values in an array
// "Write a JavaScript function to calculate the sum of values in an array.

console.log(sum([1,2,3]) == 6);
console.log(sum([100,-200,3]) == -97);
console.log(sum([1,2,'a',3]) == 6);

// 588	JavaScript: Calculate the nth root of a number
// "Write a JavaScript function to calculate the nth root of a number.

console.log(nthroot(64, 2) == 8);
console.log(nthroot(64, -2) == 0.125);

// 590	JavaScript: Round up an integer value to the next multiple of 5
// "Write a JavaScript function to round up an integer value to the next multiple of 5.
// 提示
//      Math.ceil

console.log(int_round5(32) == 35);
console.log(int_round5(137) == 140);

// 607	JavaScript: Subtract elements from one another in an array
// Write a JavaScript function to subtract elements from one another in an array.

console.log(subtraction([7,3, 2,-1]) == 3);

// 608	JavaScript: Calculate the divisor and modulus of two integers
// Write a JavaScript function to calculate the divisor and modulus of two integers.
// 提示
//      isInt

console.log(div_mod(17, 4) = [4,1]);

// 601	JavaScript: Print an integer with commas as thousands separators
// "Write a JavaScript function to print an integer with commas as thousands separators.

console.log(thousands_separators(1000) == "1,000");
console.log(thousands_separators(10000.23) == "10,000.23");
console.log(thousands_separators(100000) == "100,000");

// 605	JavaScript: Get all prime numbers from 0 to a specified number
// "Write a JavaScript function to get all prime numbers from 0 to a specified number

console.log(primeFactorsTo(5) == [2, 3, 5]);
console.log(primeFactorsTo(15) == [2, 3, 5, 7, 11, 13]);

// 578	JavaScript: Check whether a variable is numeric or not
// "Write a JavaScript function to check whether a variable is numeric or not.

console.log(is_Numeric(12) == true);
console.log(is_Numeric('abcd') == false);
console.log(is_Numeric('12') == true);
console.log(is_Numeric(' ') == false);
console.log(is_Numeric(1.20) == true);
console.log(is_Numeric(-200) == true);

// 592	JavaScript: Cast a square root of a number to an integer
// "Write a JavaScript function to cast a square root of a number to an integer.

console.log(sqrt_to_int(17) == 4);

// 598	JavaScript: Return values that are powers of two
// "Write a JavaScript function which will return values that are powers of two.

console.log(isPower_of_two(64) == true);
console.log(isPower_of_two(94) == false);