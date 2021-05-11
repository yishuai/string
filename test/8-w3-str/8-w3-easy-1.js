/* 练习：1 题

688

JavaScript: Make a string uncamelize

"Write a JavaScript function to uncamelize a string.

*/

// function uncamelize() {return }

console.log(uncamelize('helloWorld') == "hello world");
console.log(uncamelize('helloWorld','-') == "hello-world");
console.log(uncamelize('helloWorld','_') == "hello_world");

/* 练习：2 题

690
JavaScript: Insert a string within a specific position in another string

"Write a JavaScript function to insert a string within a string at a particular position (default is 1).

*/

// function insert() {return }

console.log(insert('We are doing some exercises.') == "We are doing some exercises.");
console.log(insert('We are doing some exercises.','JavaScript ') == "JavaScript We are doing some exercises.");
console.log(insert('We are doing some exercises.','JavaScript ',18) == "We are doing some JavaScript exercises.");

/* 练习：3 题

692
JavaScript: Truncate a string if it is longer than the specified number of characters

"Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

*/

// function text_truncate() {return }

console.log(text_truncate('We are doing JS string exercises.') == "We are doing JS string exercises.")
console.log(text_truncate('We are doing JS string exercises.',19) == "We are doing JS ...")
console.log(text_truncate('We are doing JS string exercises.',15,'!!') == "We are doing !!")

/* 练习：4 题

700
JavaScript: Truncate a string to a certain number of words

"Write a JavaScript function to truncate a string to a certain number of words.

*/

// function truncate() {return }

console.log(truncate('The quick brown fox jumps over the lazy dog', 4) == "The quick brown fox");

/* 练习：5 题

701
JavaScript: Alphabetize a given string

"Write a JavaScript function to alphabetize a given string.

Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.

*/

// function alphabetize_string() {return }

console.log(alphabetize_string('United States') == "SUadeeinsttt");

/* 练习：6 题

703
JavaScript: Convert ASCII to Hexadecimal format

"Write a JavaScript function to convert ASCII to Hexadecimal format.ASCII (Listeni/??ski/ ass-kee), abbreviated from American Standard Code for Information Interchange, is a character encoding standard. ASCII codes represent text in computers, telecommunications equipment, and other devices. Most modern character-encoding schemes are based on ASCII, although they support many additional characters.

*/

// function ascii_to_hexa() {return }

console.log(ascii_to_hexa('12') == "3132");
console.log(ascii_to_hexa('100') == "313030");

/* 练习：7 题

704
JavaScript: Convert Hexadecimal to ASCII format"Write a JavaScript function to convert Hexadecimal to ASCII format.

*/

// function hex_to_ascii() {return }

console.log(hex_to_ascii('3132') == "12");
console.log(hex_to_ascii('313030') == "100");

/* 练习：8 题

710
JavaScript: Convert a string to title case"Write a JavaScript function to convert a string to title case.

*/

// function sentenceCase() {return }

console.log(sentenceCase('PHP exercises. python exercises.') == "Php Exercises. Python Exercises.");