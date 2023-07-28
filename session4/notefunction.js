// FUNCTION


// function declaration
function square(num) {
    console.log(num * num);
}

square(4)

function reverseText(text) {
    console.log(text.split("").reverse().join(""));
}

reverseText("bagus yuk")


function add(num1, num2) {
    return num1 + num2;
}

resultAdd = add(1, 2);
console.log(resultAdd);

// function expression

const substract = function (a, b) {
    return a - b;
}

console.log(substract(3, 2))

const capitalizeText = function (text) {
    return text.toUpperCase();
}

console.log(capitalizeText("hallo"));

// function scope
let data = "halo function";

function greeting(name) {
    const middleText = ", my name is ";
    return data + middleText + name;
}

console.log(greeting("anggara"));

// default parameter function

function multiply(a, b = 1) {
    console.log(a * b)
}
multiply(5, 2)
multiply(5)


// rest parameter function

function sum(...num) {
    let total = 0;
    for (let n of num) {
        total += n;
    }
    return total;
}
console.log(sum(1,2,4,10,20))


// nested function

function getMessage(firstName) {
    const textHello = "hello "

    function sayHello() {
        return textHello + firstName;
    }

    function welcomeMessage() {
        const message = "welcome to purwadhika";
        return message;
    }

    return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("anggara"))


// closure function

function greeting(name) {
    const defaultMessage = "Hello";
    const defaultMessageSP = "Hola";
    const defaultMessageID = "Halo";
    const defaultMessageFR = "Bonjour";

    return function (lang) {
        if (lang === "sp") {
            return defaultMessageSP + " " + name;
        } else if (lang === "id") {
            return defaultMessageID + " " + name;
        } else if (lang === "fr") {
            return defaultMessageFR + " " + name;
        } else
            return defaultMessage + " " + name;
    }
}

const callGreeting = greeting("anggara");
console.log(callGreeting())
console.log(callGreeting("sp"))
console.log(callGreeting("id"))
console.log(callGreeting("fr"))


console.log(greeting("anggara")("id"))

// currying function

function multiplier(num){
    return function(number){
        return num * number;
    }
}

const mul3 = multiplier(3);
console.log(mul3(5));
console.log(mul3(6));
console.log(mul3(4));
console.log(mul3(2));

const mul5 = multiplier(5);
console.log(mul5(2));
console.log(mul5(100));
console.log(mul5(10000));

console.log(multiplier(6)(7))


//recursive function
function countDown(inputNumber) {
    console.log(inputNumber);
    
    const nextNumber = inputNumber - 1;
    if(inputNumber > 0) {
        countDown(nextNumber);
    }    
}
countDown(5)

// fibonaci using recursive function

function fib(n) {
    if(n <= 1 ){
        return n
    }

    return fib(n-2) + fib(n-1);
}

console.log(fib(7))

// arrow function
const sq = function(number) {
    return number * number;
}
const sqr = (number) => number * number;
console.log(sq(5))
console.log(sqr(5)) 


