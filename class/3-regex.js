// search: 搜索，返回 找到的字符串 的 索引（index）
var msg = 'JavaScript is fun';
varstart = msg.search('fun');

// 斜杠：正则表达式
var msg = 'JavaScript is fun';
varstart = msg.search(/fun/);

// 返回找到的第一个
var msg = 'JavaScript is fun, fun, fun!';
varstart = msg.search(/fun/);

// 区分大小写
var msg = 'JavaScript is fun';
varstart = msg.search(/FUN/);

// | 多个规则
var msg = 'JavaScript is fun';
varstart = msg.search(/fun|good/);
var msg = 'JavaScript is good';
varstart = msg.search(/fun|good/);

// 加 i，忽略大小写: ignore case
var msg = 'JavaScript is fun';
varstart = msg.search(/FUN/i);

// [] 字符集，[] 内的任意字母都可以
var msg = 'JavaScript is fun';
varstart = msg.search(/[abc]/)

// test：返回 True 或 False，表示是否找到
var msg = 'JavaScript is fun';
varstart = /fun/.test(msg);

// match: 提取匹配的字符串
// 返回一个数组
var msg = 'JavaScript is fun';
varstart = msg.match(/[abc]/)

// g : global，匹配所有的
varstart = msg.match(/[abc]/g)

// . : 任何字符
var msg = 'JavaScript is fun';
varstart = msg.search(/.un/)

// - 表示范围。字母表范围内的任意一个字母
var msg = 'JavaScript is fun';
varstart = msg.search(/[a-c]/)

// ^ 否定字符集，不在范围，在 [] 内，只要”不是“括号内的条件
// 注意，字符.、!、[、@、/和空白字符等也会被匹配
var msg = 'JavaScript is fun';
varstart = msg.search(/[^0-9a-z]/)

// ^ 表示 句子的开头，匹配的结果必须在句子的开头
// 注意它不在 [] 内。表示一个特殊的字符
var msg = 'JavaScript is fun';
varstart = msg.search(/^fun/)
varstart = msg.search(/^JavaScript/)
varstart = msg.search(/^[0-9a-z]/)

// $ 表示 句子的末尾，匹配的结果必须在句子的末尾
// 注意它不在 [] 内。表示一个特殊的字符
var msg = 'JavaScript is fun';
varstart = msg.search(/[0-9a-z]$/)
varstart = msg.search(/fun$/)

// \w : 字母、数字、加 下划线
let msg = "The five boxing wizards jump quickly.";
msg.match(/\w/g).length;

// \W : 除了 字母、数字、下划线 的其它字符
let msg = "The five boxing wizards jump % quickly.";
msg.match(/\W/g).length;

// \d 数字
// \D 非数字
var msg = 'JavaScript is 111';
varstart = msg.search(/\d/)
varstart = /\d/.test(msg)

// \s: 空格、回车符、制表符、换页符、换行符
// \S: 非上述字母
var msg = 'JavaScript is 111';
varstart = msg.search(/\s/)

// 组合
var msg = 'JavaScript is 111';
varstart = msg.search(/[0-9][a-z][0-9]/);

// 指定个数
// + : 1次，或多次（至少一次），相连
var msg = 'JavaScript is 111';
varstart = msg.search(/[0-9]+/);

// ? : 0次，或1次，即 “可选” ： 可以没有
var msg = 'JavaScript is 111';
varstart = msg.search(/[0-9][a-z]?[0-9]/);

// * ：0次，或多次，相连
var msg = 'JavaScript is 111';
varstart = msg.search(/[0-9]*/);

// {n,m} ：匹配的最小，最大数
var msg = 'JavaScript is 111';
varstart = msg.match(/[0-9]{1,2}/);
varstart = msg.match(/[0-9]{4,6}/);
varstart = msg.match(/[0-9]{2,}/);
varstart = msg.match(/[0-9]{2}/);

// ?：惰性匹配：返回匹配上的最短字符串
// 默认是贪婪的：返回最长的字符串
//
var msg = '<h1>Winter is coming</h1>';
varstart = msg.match(/<.*>/);
varstart = msg.match(/<.*?>/);

// 正向先行断言和负向先行断言
// ?= 需要存在，但只是额外检测，并不匹配返回
// q的后面要跟u，但u不会返回，只返回q
let quit = "qu";
quit.match(/q(?=u)/); // Returns ["q"]

// ?!= 需要”不存在“，但只是额外检测，并不匹配返回
// q的后面不能跟u，但这个字母不会返回，只返回q
let noquit = "qt";
noquit.match(/q(?!u)/); // Returns ["q"]

// 例：密码规则： 3 到 6 个字符，且至少包含一个数字
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

// 捕获组：重用模式
// () 重复字符串 \n 表示第 n 个 () 内指定的子字符串
// 返回数组，包含匹配的字符串及捕获组
let msg = "regex regex";
msg.match(/(\w+)\s\1/); // Returns ["regex regex", "regex"]

// replace 代替
// $ 访问 捕获组
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');