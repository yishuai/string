/* 最长公共前缀

输入为一个字符串数组。

编写函数，找出输入字符串数组中，各字符串的最长公共前缀（就是从第一个字母开始，最长的、相同的子字符串）。

如：

  输入: ["flower","flow","flight"]
  输出: "fl"

如果不存在公共前缀，返回空字符串 ""。

思路：

取第一个字符串，从长度 0 到 (为该字符串长度），循环取出其前缀字符串，用该字符串来扫描数组中的其它字符串，看是否都有该前缀，直到找到不满足的为止。

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {

};

console.log(longestCommonPrefix(["flower","flow","flight"]) == "fl")
console.log(longestCommonPrefix(["flower","slow","xlight"]) == "")
console.log(longestCommonPrefix(["flower","flow","floght"]) == "flo")