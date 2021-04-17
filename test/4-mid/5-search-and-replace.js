/* 中级算法：搜索和替换

https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

函数第一个参数为待替换的句子。

第二个参数为句中需要被替换的单词。

第三个参数为替换后的单词。

返回值为完成替换后的新字符串。

需要保留被替换单词首字母的大小写格式。如：如果传入的第二个参数为 "Book"，第三个参数为 "dog"，那么替换后的结果应为 "Dog"

提示：

indexOf
Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet

伪码：
- 在输入句子中查找要替换的单词
- 判断该单词的首字母是不是大写
  - 替换单词首字母大写
- 否则
  - 替换单词首字母小写
- 替换

*/

function myReplace(str, before, after) {

}

console.log(myReplace("Let us go to the store", "store", "mall") == "Let us go to the mall");

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting") == "He is Sitting on the couch");

console.log(myReplace("This has a spellngi error", "spellngi", "spelling") == "This has a spelling error");

console.log(myReplace("His name is Tom", "Tom", "john") == "His name is John");

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms") == "Let us get back to more Algorithms");