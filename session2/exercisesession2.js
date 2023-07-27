// code to convert celcius to fahrenheit

let celcius = 100;
let fahrenheit = 0;

fahrenheit = (9 / 5) * celcius + 32

console.log(fahrenheit);


// write a code to check wheter the number is odd or even

let x = 20;

// if (x % 2 == 0){ 
//     console.log(`bilangan ${x} adalah genap`)
// } else {
//     console.log(`bilangan ${x} adalah ganjil`)
// }

console.log(`${x} is ${x % 2 === 0 ? "Even" : "False"}`)

// WRITE A CODE TO CHECK WHETER THE NUMBER IS PRIME OR NOT


let pembagi = 0;
let number = 15;

for (i = 1; i <= number; i++) {
    // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
    if (number % i == 0) {
        // pembagi : 1,3,5,15 -> ada 4 value -> nilai pembagi = 4
        pembagi++
        // ada 4 value -> nilai pembagi = 4
    }
} if (pembagi === 2) {
    console.log(`bilangan ${number} merupakan bilangan prima`)
} else {
    console.log(`bilangan ${number} bukan bilangan prima`)
}

// version2 using break;

const num = 5;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "number is prime" : "number is not prime")

// WRITE A CODE TO FIND THE SUM OF THE NUMBER 1 TO N 

let inputedNumber = 5
let sum = 0
for (i = 1; i <= inputedNumber; i++) {
    sum += i
} console.log(sum)

// write a code to find factorial of a number

let result = 1;
let numbers = 5;
for (let i = 1; i <= numbers; i++) {
    result *= i
}
console.log(result)

// write code to print the first N fibonacci numbers
// const N = 4;
// let first = 1;
// let second = 1;

// if (N === 1) {
//     console.log(first);
// } else if (N === 2) {
//     console.log(second);
// } else {
//     for (let i = 3; i <= N; i++) {
//         let dumpFirst = first;
//         first = second;
//         second = dumpFirst + second;

//     }
//     console.log(second)
// }



// version 2 to check value N of fibonacci sequence
const N = 7;
let n1 = 1;
let n2 = 1;
let fibN;

for (let i = 1; i <= N; i++){
    console.log(n1);
    fibN = n1;
    const next = n1 + n2;  
    n1 = n2;
    n2 = next; 
} 
console.log(fibN)

