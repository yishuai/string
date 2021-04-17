/* 中级算法：短线连接

https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

输入字符串中的单词，通过以下方式区分
1）空格
2）下划线
3）驼峰命名法

把输入字符串转换为“短线连接格式”，即：
1）所有字母小写
2）单词用 - 连接

如，
Hello World 转换为 hello-world
I love_Javascript-VeryMuch，转换为 i-love-javascript-very-much。

提示
- 正则表达式
- replace

伪码：
- 找到小写字母和大写字母相连的模式，在中间加入空格
- 将空格和下划线都替换为 -

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function spinalCase(str) {


}

console.log(spinalCase("This Is Spinal Tap") == "this-is-spinal-tap");

console.log(spinalCase("thisIsSpinalTap") == "this-is-spinal-tap");

console.log(spinalCase("The_Andy_Griffith_Show" == 回"the-andy-griffith-show");

console.log(spinalCase("Teletubbies say Eh-oh") == "teletubbies-say-eh-oh");

console.log(spinalCase("AllThe-small Things") == "all-the-small-things");

