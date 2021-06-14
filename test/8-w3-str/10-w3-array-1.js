// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 26 道 数组 容易题

// 1	JavaScript: Check whether an 'input' is an array or not.
// Write a JavaScript function to check whether an 'input' is an array or not.
// 提示：
//      toString.call(input) === "[object Array]"

console.log(is_array('w3resource') == false);
console.log(is_array([1, 2, 4, 0]) == true);

// 2	JavaScript: Clone an array
// Write a JavaScript function to clone an array.
// 提示：
//      slice

console.log(array_Clone([1, 2, 4, 0]) == [1, 2, 4, 0]);
console.log(array_Clone([1, 2, [4, 0]]) == [1, 2, [4, 0]]);

// 4	JavaScript: Get the last element of an array
// Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.
// 提示：
//      slice

console.log(last([7, 9, 0, -2]) == -2);
console.log(last([7, 9, 0, -2],3) == [9, 0, -2]);
console.log(last([7, 9, 0, -2],6) == [7, 9, 0, -2] );

// 5.1	JavaScript: Join all elements of an array into a string	"
// Write a simple JavaScript program to join all elements of the following array into a string.
// 提示：
//      toString()
//      join

console.log(join1(["Red", "Green", "White", "Black"]) == "Red,Green,White,Black");

// 5.2	JavaScript: Join all elements of an array into a string	"
// Write a simple JavaScript program to join all elements of the following array into a string.
// 提示：
//      join

console.log(join3(["Red", "Green", "White", "Black"]) == "Red+Green+White+Black");

// 6	JavaScript: Insert dashes (-) between each two even digits of a specific number
// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.
// 提示：
//      push, join

console.log(insert_dash(025468) == "0-254-6-8");

// 8	JavaScript: Find the most frequent item of an array
// Write a JavaScript program to find the most frequent item of an array.
// 提示：
//

console.log(most_freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] == ['a',5]);

// 11	JavaScript: Find the sum of squares of a numeric vector
// Write a JavaScript program to find the sum of squares of a numeric vector.
// 提示：
//      pow

console.log(sum_sq([0,1,2,3,4]) == 30);

// 12	JavaScript: Compute the sum and product of an array of integers
// Write a JavaScript program to compute the sum and product of an array of integers.
// 提示：
//

console.log(sum_prod([1, 2, 3, 4, 5, 6]) == [21, 720])

// 14	JavaScript: Remove duplicate items from an array, ignore case sensitivity
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// 提示：
//

console.log(removeDuplicates([1,2,2,4,5,4,7,8,7,3,6]) == ["1","2","3","4","5","6","7","8"])

// 18	JavaScript: Perform a binary search within an array
// Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// 提示：
//      floor

console.log(binary_Search([1, 2, 3, 4, 5, 7, 8, 9], 1) == 0);
console.log(binary_Search([1, 2, 3, 4, 5, 7, 8, 9], 5) == 4);

// 19	JavaScript: Compute the sum of each individual index value of two or more arrays
//  "There are two arrays with individual values,
//  write a JavaScript program to compute the sum of each individual index value from the given arrays.
// 提示：
//      push

array1 == [1,0,2,3,4];
array2 == [3,5,6,7,8,13];
console.log(Arrays_sum(array1, array2) == [4, 5, 8, 10, 12, 13]);

// 23	JavaScript: Find the difference of two arrays
// Write a JavaScript function to find the difference of two arrays.
// 提示：
//      indexOf
//      sort

console.log(difference([1, 2, 3], [100, 2, 1, 10]) == [3, 10, 100]);
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]) == [6]);

// 25	JavaScript: Sort the specified array of objects by title value
// Write a JavaScript function to sort the following array of objects by title value.
// 提示：
//
// function compare_to_sort(x,y)
//  {
//   if (x.title < y.title)
//     return -1;
//   if (x.title > y.title)
//     return 1;
//   return 0;
//  }

// console.log(library.sort(compare_to_sort));

var library == [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

console.log(sort_title(library) == [{"author":"Suzanne Collins","title":"Mockingjay: The Final Book of The Hunger Games","libraryID":3245},{"author":"Bill Gates","title":"The Road Ahead","libraryID":1254},{"author":"Steve Jobs","title":"Walter Isaacson","libraryID":4264}]);

// 24	JavaScript: Remove null, 0, blank, false, undefined and NaN values from an array
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// 提示：
//      if (NaN)

console.log(clean([NaN, 0, 15, false, -22, '',undefined, 47, null]) == [15, -22, 47])

// 27	JavaScript: Retrieve the value of a specified property from all elements in an array
// Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// 提示：
//      hasOwnProperty(key)

var library == [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

console.log(property_value(library, 'title') == ["The Road Ahead","Walter Isaacson","Mockingjay: The Final Book of The Hunger Games"]);
console.log(property_value(library, 'author') == ["Bill Gates","Steve Jobs","Suzanne Collins"]);

// 28	JavaScript: Find the longest common starting substring in a set of strings
// Write a JavaScript function to find the longest common starting substring in a set of strings.
// 提示：
//      concat
//      sort
//      charAt(i)
//      substring

console.log(longest_common_starting_substring(['go', 'google']) == "go");

// 30	JavaScript: Merge two arrays and removes all duplicates elements
// Write a JavaScript function to merge two arrays and removes all duplicates elements.
// 提示：
//      concat, unshift

console.log(merge_array([1, 2, 3], [2, 30, 1]) == [3, 2, 30, 1]);

// 31	JavaScript: Remove a specific element from an array
// Write a JavaScript function to remove a specific element from an array.
// 提示：
//      indexOf
//      splice

console.log(remove_array_element([2, 5, 9, 6], 5) == [2, 9, 6]);

// 32	JavaScript: Find if an array contains a specific element
// Write a JavaScript function to find an array contains a specific element.
// 提示：
//

console.log(contains([2, 5, 9, 6], 5) == true);

// 35	JavaScript: Get a random item from an array
// Write a JavaScript function to get a random item from an array.
// 提示：
//      Math.floor, Math.random()

console.log(getrandom([254, 45, 212, 365, 2543]))

// 37	JavaScript: Create a specified number of elements and pre-filled string value array
// Write a JavaScript function to create a specified number of elements and pre-filled string value array.
// 提示：
//      Array.apply
//      Array.map

console.log(array_filled(3, 'default value') == ["default value", "default value", "default value"]);
console.log(array_filled(4, 'password') == ["password", "password", "password", "password"]);

// 39	JavaScript: Filter false, null, 0 and blank values from an array
// Write a JavaScript function to filter false, null, 0 and blank values from an array.
// 提示：
//

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]) == [58, "abcd", true]);

// 41	JavaScript: Generate an array between two integers of 1 step length
// Write a JavaScript function to generate an array between two integers of 1 step length.
// 提示：
//

console.log(rangeBetween(4, 7) == [4, 5, 6, 7]);
console.log(rangeBetween(-4, 7) == [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]);

// 40	JavaScript: Generate an array of specified length, the content of the array is integer numbers, increase by one from starting
// Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
// 提示：
//

console.log(array_range(1, 4) == [1, 2, 3, 4]);
console.log(array_range(-6, 4) == [-6, -5, -4, -3]);

// 16	JavaScript: Find the leap years from a given range of years
// Find the leap years in a given range of years.
// 提示：
//  push

console.log(leap_year_range(2000,2012) == [2000,2004,2008,2012]);