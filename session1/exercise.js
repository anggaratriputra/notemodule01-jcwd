/*

1. write a code to find area of rectangle
pseudo :
 -find length and width the rectangle
 -area of rectangle = length * width
 -show the output

*/

let length = 20;
let width = 5

const areaRectangle = length * width
console.log(areaRectangle)


/* 
2. write code to find perimeter of rectangle

pseudo code: 
- find length and width the rectangle
- perimeter of rectangle rules = 2 * (length + width)
- show the output

*/

let length2 = 10
let width2 = 3

const perimeterRectangle = 2 * (length2 + width2)
console.log(perimeterRectangle)


/* 
3.write a code to find diameter, circumference and area of circle

pseudecode :

- find the r of the circle
- rules of diameter of circle is r + r
- define the phi = 3.14
- rules circumference of circle is 2 * phi * r
- rules area of circle is phi * r * r
- show output 

*/

let r = 7;
const phi = 3.14;
const diameter = r + r;
const circumference = 2 * phi * r;
const areaCircle = phi * r * r;


console.log(`jari jari lingkaran = ${r}, maka diameternya adalah ${diameter}, untuk keliling lingkaran dengan jari jari ${r} adalah ${circumference} dan luasnya adalah ${areaCircle}`)



/* 4. write a code to find angles of triangle if two angles are given

pseudocode : 
- find the value of two angles ( angles 1 = 55 and angles 2 = 60)
- total angles of triangle is 180 degrees so angles1 + angles2 + angles3 = 180
- so to find the angles 3  = 180 - (angles 1 + angles 2)
- show output
*/

let angles1 = 60;
let angles2 = 80;
const degTriangle = 180

let angles3 = 180 - (angles1 + angles2)
console.log(angles3)


/* 5. Write a code to get difference between dates in days.

pseudocode : 
define the 2 values of dates to find the difference
date 2 - date 1
show output


*/

const date1 = new Date("2023-07-20")
const date2 = new Date("2023-07-24")


let diffTime = date2.getTime() - date1.getTime()
console.log(diffTime)

diffDay = diffTime / (24 * 60 * 60 * 1000)
console.log(diffDay)

/* wrote a code to convert days to years, month and days.) 
define years = Math.floor(input / 365)
define month = Math.floor(input % 365 / 30)
define days = Math.floor(input % 365 % 30)
show output
*/

let input = 400;
let years = Math.floor(input / 365)
let month = Math.floor(input % 365 / 30)
let days = Math.floor(input % 365 % 30)

console.log(`${input} hari itu terdiri dari ${years} tahun, ${month} bulan, dan ${days} hari`)














