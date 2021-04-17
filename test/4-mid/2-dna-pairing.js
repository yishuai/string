/* 中级算法: DNA 配对

https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

接收一个表示碱基的字符串为参数，返回完成配对的二维数组。

如，传入参数 GCG，返回值为 [["G", "C"], ["C","G"],["G", "C"]]

碱基有四种，分别为 A（腺嘌呤）、T（胸腺嘧啶）、G（鸟嘌呤）和 C（胞嘧啶）。

配对原则是：A 与 T 配对，C 与 G 配对。

每个传入的碱基，返回一个二维数组。传入的碱基是数组的第一个元素，配对的是第二个元素。

提示：

Array.prototype.push()
String.prototype.split()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet

伪码：

- 初始化一个空的数组，存储返回的结果
- 将输入字符串 split 为字母数组
- 对数组中的每一个字母
  - 查找配对的碱基（用给一个函数实现， switch 选择各种情况）
  - 把结果插入返回的数组中

*/

function pairElement(str) {


}


console.log(pairElement("GCG") == [["G", "C"], ["C","G"],["G", "C"]]);

console.log(pairElement("ATCGA") == [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);

console.log(pairElement("ACGA") == [["A","T"],["C","G"],["G","C"],["A","T"]]);

console.log(pairElement("TTGAG") == [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);

console.log(pairElement("CTCTA") == [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
