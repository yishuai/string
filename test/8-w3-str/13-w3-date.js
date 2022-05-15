// ## 中级：JavaScript Date[53 Exercises with Solution ]

// https://www.w3resource.com/javascript-exercises/javascript-date-exercises.php

// JavaScript 日期对象用于创建日期和时间。日期对象基于时间值，该时间值是自 1970 年 1 月 1 日 UTC 以来的毫秒数。

// new Date();
x = new Date("October 13, 2021 11:13:00");
y = new Date(86400000);
// new Date(dateString);
// new Date(year, month[, day[, hour[, minute[, second[, millisecond]]]]]);

// 1. Write a JavaScript function to check whether an `input` is a date object or not.
// 提示：Object.prototype.toString.call(x)
// 提示：if x instanceof Date

// Test Data:
// console.log(is_date("October 13, 2014 11:13:00") == false);
// console.log(is_date(new Date(86400000)) == true);
// console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0)) == true);
// console.log(is_date([1, 2, 4, 0]) == false);

// 2. Write a JavaScript function to get the current date.
// 提示：   x = new Date()
//         x.getDate()
//         x.getMonth()
//         x.getFullYear()
// Note : Pass a separator as an argument.

// Test Data:
// console.log(curday('/') == "11/13/2014");
// console.log(curday('-') == "11-13-2014");

// 3. Write a JavaScript function to get the number of days in a month.
// 提示：把 day 设为 0
// 提示：new Date(2014,9,0).getDate()

// Test Data:
// console.log(getDaysInMonth(1, 2012) == 31);
// console.log(getDaysInMonth(2, 2012) == 29);
// console.log(getDaysInMonth(9, 2012) == 30);
// console.log(getDaysInMonth(12, 2012) == 31);

// 4. Write a JavaScript function to get the month name from a particular date.
// 提示：
//         x.getMonth()

// Test Data:
// console.log(month_name(new Date("10/11/2009")) == "October");
// console.log(month_name(new Date("11/13/2014")) == "November");

// 5. Write a JavaScript function to compare dates(i.e.greater than, less than or equal to).
// 提示： new Date(2014,8,0) > new Date(2014,8,1)

// Test Data:
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')) == "Date1 = Date2");
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')) == "Date1 > Date2");
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')) == "Date2 > Date1");

// 6. Write a JavaScript function to add specified minutes to a Date object.
// 提示：new Date(dt.getTime() + minutes*60000)
//      单位是毫秒

// Test Data:
// console.log(add_minutes(new Date(2014, 10, 2), 30).toString());
// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)");

// 7. Write a JavaScript function to test whether a date is a weekend.
// 提示：dt.getDay() == 6 || dt.getDay() == 0
// Note : Use standard Saturday / Sunday definition of a weekend.

// Test Data:
// console.log(is_weekend('Nov 15, 2014') == "weekend");
// console.log(is_weekend('Nov 16, 2014') == "weekend");
// console.log(is_weekend('Nov 17, 2014') == undefined);

// 8. Write a JavaScript function to get difference between two dates in days.
// 提示：new Date(2014,8,0) - new Date(2014,8,1)
//      (1000 * 60 * 60 * 24) = 86400000

// Test Data:
// console.log(date_diff_indays('04/02/2014', '11/04/2014') == 216);
// console.log(date_diff_indays('12/02/2014', '11/04/2014') == -28);

// 9. Write a JavaScript function to get the last day of a month.
// 提示：

// Test Data:
// console.log(lastday(2014, 0) == 31);
// console.log(lastday(2014, 1) == 28);
// console.log(lastday(2014, 11) == 31);

// 10. Write a JavaScript function to calculate 'yesterday day'.
// 提示：dt.setDate()

// Test Data:
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 17, 2016'));

// 11. Write a JavaScript function to get the maximum date from an array of dates.
// 提示：new Date(2014,8,0) > new Date(2014,8,1)

// Test Data:
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']) == "2015/02/02");

// 12. Write a JavaScript function to get the minimum date from an array of dates.
// 提示：new Date(2014,8,0) > new Date(2014,8,1)

// Test Data:
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']) == "2015/01/03");

// 13. Write a JavaScript function that will return the number of minutes in hours and minutes.
// 提示：Math.floor

// Test Data:
// console.log(timeConvert(200) == "200 minutes = 3 hour(s) and 20 minute(s).");

// 14. Write a JavaScript function to get the amount of days of a year.
// 提示：闰年 year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)

// Test Data:
// console.log(days_of_a_year(2015) == 365);
// console.log(days_of_a_year(2016) == 366);

// 15. Write a JavaScript function to get the quarter(1 to 4) of the year.
// 提示：date.getMonth(), Math.ceil

// Test Data:
// console.log(quarter_of_the_year(new Date(2015, 1, 21)) == 2);
// console.log(quarter_of_the_year(new Date(2015, 10, 18)) == 4);

// 16. Write a JavaScript function to count the number of days passed since beginning of the year.
// 提示：

// Test Data:
// console.log(days_passed(new Date(2015, 0, 15)) == 15);
// console.log(days_passed(new Date(2015, 11, 14)) == 348);

// 17. Write a JavaScript function to convert a Unix timestamp to time.
// 提示： Unix时标的单位是s
//       getHours()
//       getMinutes()
//       getSeconds()

// Test Data:
// console.log(Unix_timestamp(1412743274) == "10:11:14")

// 18. Write a JavaScript program to calculate age.

// Test Data:
// console.log(calculate_age(new Date(1982, 11, 4)) == 32);
// console.log(calculate_age(new Date(1962, 1, 1)) == 53);

// 19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros.
// 提示：
// Test Data:
// d = new Date(2015, 10, 1);
// console.log(day_of_the_month(d) == "01");

// 20. Write a JavaScript function to get a textual representation of a day(three letters, Mon
// 提示：through Sun).
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(short_Days(dt) == "Sun");

// 21. Write a JavaScript function to get a full textual representation of the day of the week
// 提示：(Sunday through Saturday).
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(long_Days(dt) == "Sunday");

// 22. Write a JavaScript function to get ISO - 8601 numeric representation of the day of the
// 提示：week(1(for Monday) to 7(for Sunday)).
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(ISO_numeric_date(dt) == 7);

// 23. Write a JavaScript function to get English ordinal suffix for the day of the month, 2
// 提示：characters(st, nd, rd or th.).
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(english_ordinal_suffix(dt) == "1st");

// 24. Write a JavaScript function to get ISO - 8601 week number of year, weeks starting on
// 提示：Monday.
// Example : 42(the 42nd week in the year)
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(ISO8601_week_no(dt) == 44);

// 25. Write a JavaScript function to get a full textual representation of a month, such as
// 提示：January or June.
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(full_month(dt) == "November");

// 26. Write a JavaScript function to get a numeric representation of a month, with leading zeros
// 提示：(01 through 12).
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(numeric_month(dt) == "11");

// 27. Write a JavaScript function to get a short textual representation of a month, three
// 提示：letters(Jan through Dec).
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(short_months(dt) == "Nov");

// 28. Write a JavaScript function to get a full numeric representation of a year(4 digits).
// 提示：
// Test Data:
// dt = new Date(2015, 10, 1);
// console.log(full_year(dt) == 2015);

// 29. Write a JavaScript function to get a two digit representation of a year.
// 提示：
// Examples : 79 or 04
// Test Data:
// dt = new Date(1989, 10, 1);
// console.log(sort_year(dt) == "89");

// 30. Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.
// 提示：

// 31. Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.
// 提示：

// 32. Write a JavaScript function to swatch Internet time(000 through 999).
// 提示：
// Test Data:
// dt = new Date(1989, 10, 1);
// console.log(internet_time(dt) == 812);

// 33. Write a JavaScript function to get 12 - hour format of an hour with leading zeros.
// 提示：
// Test Data:
// dt = new Date(1989, 10, 1);
// console.log(hours_with_zeroes(dt) == "12");

// 34. Write a JavaScript function to get 24 - hour format of an hour without leading zeros.
// 提示：
// Test Data:
// dt = new Date(1989, 10, 1);
// console.log(hours_without_zeroes(dt) == 0);

// 35. Write a JavaScript function to get minutes with leading zeros(00 to 59).
// 提示：
// Test Data:
// dt = new Date(1989, 10, 1);
// console.log(minutes_with_leading_zeros(dt) == "00");

// 36. Write a JavaScript function to get seconds with leading zeros(00 through 59).
// 提示：
// Test Data:
// dt = new Date(1989, 10, 1);
// console.log(seconds_with_leading_zeros(dt) == "00");

// 37. Write a JavaScript function to get Timezone.
// 提示：
// Test Data:
// dt = new Date();
// console.log(seconds_with_leading_zeros(dt));

// 38. Write a JavaScript function to find whether or not the date is in daylights savings time.
// 提示：
// Test Data:
// dt = new Date();
// console.log(daylights_savings(dt) == 1);

// 39. Write a JavaScript function to get difference to Greenwich time(GMT) in hours.
// 提示：
// Test Data:
// dt = new Date();
// console.log(diff_to_GMT(dt) == "+05.500");

// 40. Write a JavaScript function to get timezone offset in seconds.
// 提示：
// Note : The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.
// Test Data:
// dt = new Date();
// console.log(timezone_offset_in_seconds(dt) == 19800);

// 41. Write a JavaScript function to add specified years to a date.
// 提示：
// Test Data:
// dt = new Date(2014, 10, 2);
// console.log(add_years(dt, 10).toString());

// 42. Write a JavaScript function to add specified weeks to a date.
// 提示：
// Test Data:
// dt = new Date(2014, 10, 2);
// console.log(add_weeks(dt, 10).toString());

// 43. Write a JavaScript function to add specified months to a date.
// 提示：
// Test Data:
// dt = new Date(2014, 10, 2);
// console.log(add_months(dt, 10).toString());

// 44. Write a JavaScript function to get time differences in minutes between two dates.
// 提示：
// Test Data:
// dt1 = new Date("October 13, 2014 11:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_minutes(dt1, dt2) == 2);

// 45. Write a JavaScript function to get time differences in hours between two dates.
// 提示：
// Test Data:
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_hours(dt1, dt2) == 3);

// 46. Write a JavaScript function to get time differences in days between two dates.
// 提示：
// Test Data:
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_days(dt1, dt2) == 6);

// 47. Write a JavaScript function to get time differences in weeks between two dates.
// 提示：
// Test Data:
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_weeks(dt1, dt2) == 18);

// 48. Write a JavaScript function to get time differences in months between two dates.
// 提示：
// Test Data:
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_months(dt1, dt2) == 5);

// 49. Write a JavaScript function to get time differences in years between two dates.
// 提示：
// Test Data:
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2017 11:13:00");
// console.log(diff_years(dt1, dt2) == 3);

// 50. Write a JavaScript function to get the week start date.
// 提示：

// 51. Write a JavaScript function to get the week end date.
// 提示：

// 52. Write a JavaScript function to get the month start date.
// 提示：

// 53. Write a JavaScript function to get the month end date.
// 提示：