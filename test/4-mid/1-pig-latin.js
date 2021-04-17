/* 中级算法: Pig Latin

https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

写一个函数，把传入的一个单词的字符串翻译成“Pig Latin”。

转换规则：

在英语中，字母 a、e、i、o、u 为元音，其余字母为辅音。

1）如果单词以元音开头，只需在结尾加上 way。

2）把输入英文单词的第一个辅音字母或第一组连续辅音字母，移到单词的结尾，并在后面加上ay。

传入的单词一定是英文单词，所有字母小写。

提示：

slice
Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet

伪码：

- 如果第一个字母是元音字母
  - 在后面加 way
- 否则
  - 向后找
  - 如果找到元音字母
    - 把前面的辅音字母串，移到单词后面，加 ay
  - 找到了单词的结尾，还没找到元音字母
    - 加 ay

*/

function translatePigLatin(str) {


}

// 测验
// 第一个字母是元音字母
console.log(translatePigLatin("algorithm") =="algorithmway");

console.log(translatePigLatin("eight") =="eightway");

// 第一个字母是辅音字母
console.log(translatePigLatin("california") =="aliforniacay");

console.log(translatePigLatin("paragraphs") =="aragraphspay");

console.log(translatePigLatin("glove") =="oveglay");

console.log(translatePigLatin("she") == "eshay");

// 单词中不含元音字母
console.log(translatePigLatin("rhythm") =="rhythmay");
