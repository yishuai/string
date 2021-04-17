/* 中级算法: 转换HTML实体

https://dev.w3.org/html5/html-author/charref

https://learn.freecodecamp.one/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

需要转换的 HTML entity 有 &、<、>、"（双引号）和'（单引号）

提示：

  利用正则表达式， String.prototype.replace() 函数进行替换
  replace 有两个参数：正则表达式，要换成的字符串

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet

伪码
- 构造正则表达式数组，[/</g, />/g]
- 对输入字符串的每一个字母
  - 对每一个正则表达式
    - 替换 replace

*/

function convertHTML(str) {


}

console.log(convertHTML("Dolce & Gabbana") == "Dolce &​amp; Gabbana");

console.log(convertHTML("Hamburgers < Pizza < Tacos") == "Hamburgers &​lt; Pizza &​lt; Tacos");

console.log(convertHTML("Sixty > twelve") == "Sixty &​gt; twelve");

console.log(convertHTML('Stuff in "quotation marks"' == "Stuff in &​quot;quotation marks&​quot");

console.log(convertHTML("Schindler's List") == "Schindler&​apos;s List");

console.log(convertHTML("<>") == "&​lt;&​gt;");

console.log(convertHTML("abc") == "abc");

