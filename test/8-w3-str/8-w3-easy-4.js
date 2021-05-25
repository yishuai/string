// 9 道题

// 706	JavaScript: Check if a string ends with specified suffix
// "Write a JavaScript function check if a string ends with specified suffix.

console.log(string_endsWith('JS PHP PYTHON','PYTHON') == true);
console.log(string_endsWith('JS PHP PYTHON','') == false);

// 707	JavaScript: Escapes special characters for use in HTML
// "Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.

console.log(escape_html('PHP & MySQL') == "PHP &amp; MySQL");
console.log(escape_html('3 > 2') == "3 &gt; 2");

// 712	JavaScript: Create a Zero filled value
// "Write a JavaScript function to create a Zerofilled value

console.log(zeroFill(120, 5) == "00120");
console.log(zeroFill(29, 4) == "0029");

// 716	JavaScript: Uncapitalize the first letter of each word of a string
// "Write a JavaScript function to Uncapitalize the first letter of each word of a string.

console.log(unCapitalize_Words('Js String Exercises') == "js string exercises");

// 720	JavaScript: Test whether the character at the provided character index is lower case
// "Write a JavaScript function to test whether the character at the provided character index is lower case.

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1) == true);

// 713	JavaScript: Test case insensitive (except special Unicode characters) string comparison
// "Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.

console.log(compare_strings('abcd', 'AbcD') == true);
console.log(compare_strings('ABCD', 'Abce') == false);

// 709	JavaScript: Remove non-word characters
// "Write a JavaScript function to remove non-word characters.

console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL') == "PHP - MySQL");

// 717	JavaScript: Capitalize each word in the string
// "Write a JavaScript function to capitalize each word in the string.

console.log(capitalizeWords('js string exercises') == "JS STRING EXERCISES");

// 718	JavaScript: Uncapitalize each word in the string
// "Write a JavaScript function to uncapitalize each word in the string.

console.log(unCapitalizeWords('JS STRING EXERCISES') == "js string exercises");