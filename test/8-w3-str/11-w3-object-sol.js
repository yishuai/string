// 1. Write 写 a JavaScript program 程序 to list 列出 the properties 属性 of a JavaScript object 对象.

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(Object.keys(student));

// 2. Write a JavaScript program to delete 删除 the rollno property 属性 from the following object.Also print the object before or after deleting the property.

delete student.rollno;

console.log(Object.keys(student));

// 3. Write a JavaScript program to get 获得 the length of a JavaScript object.

console.log(Object.keys(student).length);

// 4. Write a JavaScript program to display 显示 the reading status(i.e.display book name, author name and reading status) of the following books.

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

// Already read 'Bill Gates' by The Road Ahead.
// Already read 'Steve Jobs' by Walter Isaacson.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Already read " + book);
    } else {
        console.log("You still need to read " + book);
    }
}

// 5. Write a JavaScript program to get the volume 容积 of a Cylinder 柱体 with four decimal places 四位小数 using object classes.
// Volume of a cylinder: V = π * r ^ 2 * h
// where r is the radius 半径 and h is the height 高度 of the cylinder.
// 创建对象，加 method
function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
};
// 怎么声明对象
var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));

// 6. Write a Bubble 冒泡 Sort 排序 algorithm in JavaScript.
//     Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
//         Sample Data: [6, 4, 0, 3, -2, 1]
// Expected Output: [-2, 0, 1, 3, 4, 6]

Array.prototype.bubbleSort_algo = function () {
    var is_sorted = false;
    while (!is_sorted) {
        is_sorted = true;
        for (var n = 0; n < this.length - 1; n++) {
            if (this[n] > this[n + 1]) {
                var x = this[n + 1];
                this[n + 1] = this[n];
                this[n] = x;
                is_sorted = false;
            }
        }
    }
    return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort_algo());

// 7. Write a JavaScript program which returns a subset 子集 of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

String.prototype.sub_String = function () {
    var subset = [];
    for (var m = 0; m < this.length; m++) {
        for (var n = m + 1; n < this.length + 1; n++) {
            subset.push(this.slice(m, n));
        }
    }
    return subset;
};

console.log("dog".sub_String());

// 8. Write a JavaScript program to create a Clock.
//     Note: The output will come 来 every second.
// Expected Console Output:
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

function my_Clock() {
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}
my_Clock.prototype.run = function () {
    setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function () {
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};
my_Clock.prototype.updateTime = function (secs) {
    this.seconds += secs;
    if (this.seconds >= 60) {
        this.minutes++;
        this.seconds = 0;
    }
    if (this.minutes >= 60) {
        this.hours++;
        this.minutes = 0;
    }
    if (this.hours >= 24) {
        this.hours = 0;
    }
};
var clock = new my_Clock();
clock.run();

// 9. Write a JavaScript program to calculate the area 面积 and perimeter 周长 of a circle.
//     Note : Create two methods to calculate the area and perimeter.The radius of the circle will be supplied by the user.

function circle(radius) {
    this.radius = radius;
    // area method
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // perimeter method
    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

// 10. Write a JavaScript program to sort 排序 an array of JavaScript objects.
// Sample Object:

// var library = [
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];
// Expected Output:

// [[object Object] {
//     author: "Walter Isaacson",
//     libraryID: 4264,
//     title: "Steve Jobs"
// }, [object Object] {
//     author: "Suzanne Collins",
//     libraryID: 3245,
//     title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//     author: "The Road Ahead",
//     libraryID: 1254,
//     title: "Bill Gates"
// }]

var sort_by = function (field_name, reverse, initial) {

    var key = initial ?
        function (x) {
            return initial(x[field_name]);
        } :
        function (x) {
            return x[field_name];
        };

    reverse = !reverse ? 1 : -1;

    return function (x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
    };
};

var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);

// 11. Write a JavaScript function to print 打印 all the methods 方法 in an JavaScript object.
// Test Data:
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

console.log(Object.getOwnPropertyNames(Math));

console.log(Object.getOwnPropertyNames(Math).filter(function (property) {
    return typeof Math[property] == "function";
}));

var 是不是3 = function(x) {
    return x == 3;
}
是不是3(0)
是不是3(1)

var 上周同学们的作业量 = [1,2,3,1,3,0];
上周同学们的作业量.filter(是不是3)


// 12. Write a JavaScript function to parse 解析 an URL.

// 下面的代码，要在浏览器里执行，才有 document

// function parse_URL(url) {
//     var a = document.createElement('a');
//     a.href = url;
//     return {
//         source: url,
//         protocol: a.protocol.replace(':', ''),
//         host: a.hostname,
//         port: a.port,
//         query: a.search,
//         params: (function () {
//             var ret = {},
//                 seg = a.search.replace(/^\?/, '').split('&'),
//                 len = seg.length,
//                 i = 0,
//                 s;
//             for (; i < len; i++) {
//                 if (!seg[i]) {
//                     continue;
//                 }
//                 s = seg[i].split('=');
//                 ret[s[0]] = s[1];
//             }
//             return ret;
//         })(),
//         file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
//         hash: a.hash.replace('#', ''),
//         path: a.pathname.replace(/^([^\/])/, '/$1'),
//         relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
//         segments: a.pathname.replace(/^\//, '').split('/')
//     };
// }

// console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));

// 13. Write a JavaScript function to retrieve 列出 all the names of object's own 自己的 and inherited 继承的 properties.

function Student(name) {
    this.name = name;
}
Student.prototype.rollno = true;

// getOwnPropertyNames 只会打印 自己 的属性，不打印继承的属性
console.log(Object.getOwnPropertyNames(new Student("Sara")));

// 用 for 循环
sara = new Student("Sara");

var keys = [];
for (var key in sara)
{
    keys.push(key);
}
console.log(keys)

// 14. Write a JavaScript function to retrieve all the values 值 of an object's properties 属性 .

// 用 for 循环
sara = new Student("Sara");

var values = [];
for (var key in sara) {
    values.push(sara[key]);
}
console.log(values)

// 15. Write a JavaScript function to convert 转换 an object into a list 列表 of `[key, value]` pairs 对.

// 类似上面的

// 16. Write a JavaScript function to get 获得 a copy 拷贝 of the object where the keys have become 变成 the values 值 and the values the keys.

var result = {};
for (var key in sara) {
    result[sara[key]] = key;
}
console.log(result)

// 17. Write a JavaScript function to check 检查 whether 是否 an object contains 包括 given 给定的 property 属性.

console.log(sara.hasOwnProperty('name'));

// 18. Write a JavaScript function to check whether a given 给定的 value is a DOM element 元素.

// 下面的代码，要在浏览器里执行，才有 document
var a = document.createElement('a');
console.log(a.nodeType === 1)