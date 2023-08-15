const { 
checkWeekend, 
findGCD,
findLCM,
mostCommonCharacter,
sortString1,
sortString2,
getMinimumDate,
calculateArray,
longestCommonPrefix,
copyFirstHalf,
getDaysInMonth,
daysPassedSinceBeginningOfYear,
calculateAge
} = require("./exercise");

// no. 1
const inputDate = new Date(); 
console.log(checkWeekend(inputDate));

//no. 2

const num1 = 48;
const num2 = 18;
const gcd = findGCD(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);

//no. 3

const number1 = 20;
const number2 = 28;
const lcm = findLCM(number1, number2);
console.log(`LCM of ${number1} and ${number2} is ${lcm}`);

// no. 4

const inputString = "hello world";
const resultChar = mostCommonCharacter(inputString);
console.log(`The most common character in "${inputString}" is: ${resultChar}`);

// no. 5
const str = "beruk"
const resultSort1 = sortString1(str)
console.log(`sorted of ${str} with sort() methods is ${resultSort1}`)

// no. 5 b
const str2 = "beraks"
const resultSort2 = sortString2(str2)
console.log(`sorted of ${str2} without sort() methods is ${resultSort2}`)

// no 6 

const dates = [
    new Date('2023-08-10'),
    new Date('2023-08-15'),
    new Date('2023-08-05'),
    new Date('2023-08-25')
];

const minimumDate = getMinimumDate(dates).toDateString();
console.log(`Minimum date: ${minimumDate}`);


// no 7

const arr1 = [[1, 4, 5], [2, 5, 6]]
const calculateArr = calculateArray(arr1)
console.log(`sum of 2 dimensional array ${arr1} is ${calculateArr}`)

// no 8
const stringArray = ["flower", "flow", "flight"];
const res = longestCommonPrefix(stringArray);
console.log(`Longest common prefix: ${res}`);

//no 9
const originalArray = [1, 2, 3, 4, 5];
const copiedHalf = copyFirstHalf(originalArray);
console.log(`Original array: ${originalArray}`);
console.log(`Copied half array: ${copiedHalf}`);

//no 10
const month = 1; // January
const year = 2022;

const daysInMonth = getDaysInMonth(month, year);
console.log(`Number of days in the specified month: ${daysInMonth}`);

//no. 11
const daysPassed = daysPassedSinceBeginningOfYear();
console.log(`Number of days passed since the beginning of the year: ${daysPassed}`);

//no. 12
const birthdate = "1998-08-11"; // Example birthdate in YYYY-MM-DD format
const age = calculateAge(birthdate);
console.log(`Age: ${age}`);

