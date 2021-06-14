// 中级题

// 7	JavaScript: Sort the items of an array
// "Write a JavaScript program to sort the items of an array.

<i>Sample array</i> : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

<i>Sample Output</i> : -4,-3,1,2,3,5,6,7,8"
// 10	JavaScript: Print the elements of an array
// "Write a JavaScript program which prints the elements of the following array.

Note : Use nested for loops.

Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

<i>Sample Output</i> :

"row 0"

" 1"

" 2"

" 1"

" 24"

"row 1"

------

------"
// 15	JavaScript: Display the colors entered in an array by a specific format
	// "Write a JavaScript program to display the colors in the following way:

<i>Here is the sample array:</i>

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

o = ["th","st","nd","rd"]

<i>Output</i>

"1st choice is Blue ."

"2nd choice is Green."

"3rd choice is Red."

- - - - - - - - - - - - -"
// 17	JavaScript: Randomly arrange or shuffle an array	Write a JavaScript program to shuffle an array.
// 20	JavaScript: Find duplicate values in a array	Write a JavaScript program to find duplicate values in a JavaScript array.
// 21	JavaScript: Flatten a nested array
// "Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

Sample Data:

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));

[1, 2, 3, 4, 5, 6]

console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));

[1, 2, 3, [[4]], 5, 6]"
// 22	JavaScript: Compute the union of two arrays
// "Write a JavaScript program to compute the union of two arrays.

Sample Data:

console.log(union([1, 2, 3], [100, 2, 1, 10]));

[1, 2, 3, 10, 100]"
// 26	JavaScript: Find a pair of elements from an specified array whose sum equals a specific target number
// "Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
Input: numbers= [10,20,10,40,50,60,70], target=50

Output: 2, 3"
// 29	JavaScript: Fill an array with values on supplied bounds
// "Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

console.log(num_string_range('a', "z", 2));

["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]"
// 34	JavaScript: Get nth largest element from an unsorted array
// "Write a JavaScript function to get nth largest element from an unsorted array.

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

89"
// 36	JavaScript: Create a specified number of elements and pre-filled numeric value array
// "Write a JavaScript function to create a specified number of elements and pre-filled numeric value array.

console.log(array_filled(6, 0));

[0, 0, 0, 0, 0, 0]

console.log(array_filled(4, 11));

[11, 11, 11, 11]"
// 38	JavaScript: Move an array element from one position to another
// "Write a JavaScript function to move an array element from one position to another.

console.log(move([10, 20, 30, 40, 50], 0, 2));

[20, 30, 10, 40, 50]

console.log(move([10, 20, 30, 40, 50], -1, -2));

[10, 20, 30, 50, 40]"
// 42	JavaScript: Find the unique elements from two arrays
// "Write a JavaScript function to find the unique elements from two arrays.
Test Data :

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

["1", "2", "3", "10", "100"]

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

["1", "2", "3", "4", "5", "6"]

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

["1", "2", "3", "10", "100"]"
// 9	JavaScript: Swap the case of each character of a string, upper case to lower and vice versa	Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.