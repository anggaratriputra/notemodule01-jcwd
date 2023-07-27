//  create displaythe multiplication table of a given integer   
const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
    console.log(`${input} * ${i} = ${input * i}`)
}


let text = "Hello World";
let text2 = "";
console.log(text);
console.log(text.length);
console.log(text[text.length - 1]);


for (let i = 0; i < text.length; i++) {
    // console.log(text[i]);
    if (text[i] === "e") {
        text2 = text2 + "*"
    } else {
        text2 += text[i]
    }
}
console.log(text2)


// palindrome version 1
let inputText = "katak";
let reverseText = "";

for (let x = inputText.length - 1; x >= 0; x--) {
    console.log(inputText[x])
    reverseText += inputText[x]
}
console.log(reverseText)
if (inputText === reverseText) {
    console.log(`${inputText} is palindrome`)
} else {
    console.log(`${inputText} is not palindrome`)
}

// palindrome ver2
const text3 = "katak";
const middle = Math.floor(text3.length / 2);

let isPalindrome = true;

for (let i = 0; i < middle; i++) {
    const leftCharacter = text3[i];
    const rightCharacter = text3[text3.length - 1 - i];

    if (leftCharacter !== rightCharacter) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`${text3} is palindrome`)
} else {
    console.log(`${text3} is not palindrome`)
}

// convert from cm to km

let jarakCm = 1000
let jarakKm;

jarakKm = jarakCm / 100000

console.log(`${jarakCm} cm = ${jarakKm} km`)


// convert to rupiah 


const number = 150500;
let result = ""
const numberStr = number.toString();

for (let i = 0; i < numberStr.length; i++) {
    const nLast = numberStr.length - 1;
    const nLastI = nLast - i;
    console.log(nLastI)
    const current = numberStr[nLastI];
    console.log(current)

    if (i % 3 === 0 && i !== 0) {
        result = current + "." + result;
    } else {
        result = current + result;
    }
}

console.log(result);
console.log(`Rp. ${result},00`)


// remove the first occurrence of a given "search string" from a string

const text4 = "hello world, welcome to hell"
const search = "ell"
const removed = text4.replaceAll(search, "")
console.log(removed)


// write a code to capitalize the first letter of each word in a string


let sentence = "welcome to jakarta";
const words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
console.log(words.join(" "))


// ver 2

const text5 = "hello world my name is anggara"
let result2 = text5[0].toUpperCase();

let flag = false;

for (let i = 1; i < text5.length; i++) {
    if (flag) {
        result2 += text5[i].toUpperCase();
        flag = false;
    } else {
        result2 += text5[i]
    }
    if (text5[i] == " ") {
        flag = true;
    }
}
console.log(result2);

// write code to reverse a string

let str = "bagus"
let strReversed = ""
for (let a = str.length - 1; a >= 0; a--) {
    console.log(str[a])
    strReversed += str[a]
}
console.log(strReversed)


// write a code to swap the case of each character from string 

const inputString = "The QuiCk BrOwN FoX";
let swappedResult = '';

for (let i = 0; i < inputString.length; i++) {
    const capitalize = inputString[i].toUpperCase();
    if(capitalize === inputString[i]){
        swappedResult += inputString[i].toLowerCase();
    } else {
        swappedResult += inputString[i].toUpperCase();
    }
}

console.log(swappedResult);

// write a code to find the largest of two given integer


a = 50;
b = 40;

console.log(a > b ? "num1 bigger than num2" : "num1 lower smaller than num2")

// write a conditional statement to sort three number

let num1 = 10;
let num2 = 5;
let num3 = 8;

if (num1 > num2) {
    // Swap num1 and num2
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

if (num2 > num3) {
    // Swap num2 and num3
    let temp = num2;
    num2 = num3;
    num3 = temp;
}

if (num1 > num2) {
    // Swap num1 and num2 again (if needed)
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

console.log(num1, num2, num3);

// write a code that shows 1 if the input a string, 2 if the input is a number, and 3 for other data type

const var1 = 2
if (typeof var1 === "string") {
    console.log(`${var1} is a string`)
} else if (typeof var1 === "number") {
    console.log(`${var1} is a number`)
} else {
    console.log(`${var1} is other data type`)
}


// write a code to change every letter a into * from a string of input

const sentences = "An apple a day keeps the doctor away"
let sentences2 = ""

for (let i = 0; i < sentences.length; i++) {
    // console.log(text[i]);
    if (sentences[i] === "a" || sentences[i] === "A" ) {
        sentences2 = sentences2 + "*"
    } else {
        sentences2 += sentences[i]
    }
}
console.log(sentences2)