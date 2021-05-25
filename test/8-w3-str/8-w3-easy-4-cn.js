// 9 道题

// 706	JavaScript: Check 检查 if 如果 a string ends 结尾 with specified 固定 的 suffix 后缀
// "Write a JavaScript function check if a string ends with specified suffix.

console.log(string_endsWith('JS PHP PYTHON','PYTHON') == true);
console.log(string_endsWith('JS PHP PYTHON','') == false);

// 707	JavaScript: Escapes 逃脱 special 特殊 characters 字符 for use 使用 in HTML
// "Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML.

console.log(escape_html('PHP & MySQL') == "PHP &amp; MySQL");
console.log(escape_html('3 > 2') == "3 &gt; 2");

// 712	JavaScript: Create a Zero filled 填充 value
// "Write a JavaScript function to create a Zerofilled value

console.log(zeroFill(120, 5) == "00120");
console.log(zeroFill(29, 4) == "0029");

// 716	JavaScript: Uncapitalize 变成小写 the first 第一个 letter 字母 of each 每一个 word 单词 of a string

// "Write a JavaScript function to Uncapitalize the first letter of each word of a string.

// Cap 键：大小写的那个键
// capitalize： 动词，变成大写
// Un 否定

console.log(unCapitalize_Words('Js String Exercises') == "js string exercises");

// 720	JavaScript: Test 测试 whether 是否 the character 字母 at 在 the provided 给定的 character index 位置 is lower case
// "Write a JavaScript function to test whether the character at the provided character index is lower case.

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1) == true);

// 713	JavaScript: Test case insensitive (except 除了 special 特别的 Unicode characters) string comparison
// "Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// make sense
// sense 意识
// sensitive 敏感
// insensitive 敏感
// case insensitive 大小写 不敏感的
// compare 比较

console.log(compare_strings('abcd', 'AbcD') == true);
console.log(compare_strings('ABCD', 'Abce') == false);

// 709	JavaScript: Remove 移走 non 不是 -word 单词 characters 的字母
// "Write a JavaScript function to remove non-word characters.
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL') == "PHP - MySQL");

// 717	JavaScript: Capitalize 转换成大写 each 每一个 word 单词 in the string
// "Write a JavaScript function to capitalize each word in the string.

console.log(capitalizeWords('js string exercises') == "JS STRING EXERCISES");

// 718	JavaScript: Uncapitalize each word in the string
// "Write a JavaScript function to uncapitalize each word in the string.

console.log(unCapitalizeWords('JS STRING EXERCISES') == "js string exercises");