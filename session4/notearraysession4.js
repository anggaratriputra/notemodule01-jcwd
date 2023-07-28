// change string to array with split by space
const text = "Hello World"
console.log(text[1]);
console.log(text.split(" "));

const listNumber = [1, 2, 3, 4, 5, 18, 20];
const index = 5;
listNumber[0] = 10;
console.log(listNumber[index]);
console.log(listNumber.length)
console.log(listNumber[listNumber.length - 1]);
console.log(listNumber)

const arrInArr = [
    [1, 2, 3],
    [4, 5, 6]
];

for (let i = 0; i < arrInArr.length; i++) {
    const value = arrInArr[i];
    for (let o = 0; o < value.length; o++) {
        console.log(value[o])
    }
}

console.log(`${arrInArr[0][1]} ${arrInArr[1][2]}`)


const arrNumber = [5, 12, 6, 5, 8, 9, 5, 10, 20, 5]
arrNumber.pop() // delete last array value
console.log(arrNumber);
arrNumber.push(20) // insert value to the last array
console.log(arrNumber);
arrNumber.unshift(21); // insert value to the first array
console.log(arrNumber);
// console.log(arrNumber.toString()) // convert array to string
// console.log(arrNumber.join(" ")) // gabungkan value array ke string dengan params spasi
arrNumber.splice(1, 2) //delete index 1 and 2 value
console.log(arrNumber)
console.log(arrNumber.indexOf(5))
console.log(arrNumber.lastIndexOf(5))

//reverse
const str = "bagus"
const strReversed = str.split("").reverse().join("");

console.log(strReversed)


const arr1 = ["a", "happy"]
const arr2 = ["puppy", "is", "full"]
const arr3 = ["and", "very", "happy"]
const result =
    console.log();


// NOTE

//untuk membuat array
const arr = new Array();
const blankArr = [];

// index array
const arrNum = [1, 2, 3, 4, 5];
console.log(arrNum[0]);
console.log(arrNum[1]);
console.log(arrNum[arrNum.length - 1])

// untuk mengghapus item dalam array
arrNum.pop();
console.log(arrNum);

arrNum.shift();
console.log(arrNum)

// untuk menambah item dalam array
arrNum.push(5);
console.log(arrNum)
arrNum.unshift(1);
console.log(arrNum)


// pop quiz
let kalimat = "A puppy is really sad"

arrayKalimat = kalimat.split(" ").reverse().join(" ");
console.log(arrayKalimat)

// looping

// regular loop
let fruits = ["Apple", "Orange", "Plum", "Melon", "Durian"]
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if(i % 2 == 0)
    console.log(fruit)
}

// syntax for.. of 
for (let fruit of fruits) {
    console.log(fruit);
}

// symtax for.. of with index

for (let [i, fruit] of fruits.entries()) {
    console.log(i);
    if (i % 2 == 0) {
        console.log(fruit);
    }
}


// nested loop using for.. of

const products = [
    ["Apple", "Orange", "Plum", "Melon", "Durian"],
    ["Egg", "Rice", "Wheat"]
];

for (let product of products) {
    console.log(product);
    for(let item of product){
        console.log(item)
    }
}

// sample callback in built-in method
let myFruits = ["Apple", "Orange", "Plum", "Melon", "Durian","Mango"]

// function filteringFruits(item) {
//     console.log(item)
//     if (item[0] === "M") {
//         return true;
//     }
//     return false;
// }
// let filteredFruits = myFruits.filter(filteringFruits)
// console.log(filteredFruits)

// using arrow function
let filteredFruits = myFruits.filter((item) => item[0] === "M")
console.log(filteredFruits)

let mappedFruits = filteredFruits.map((item) => "Buah " + item);
console.log(mappedFruits)

// map -> 
const sentence = "The QuiCk BrOwN Fox";
const resultSwapped = sentence.split("").map((character) => {
    if (character === character.toUpperCase()) {
        return character.toLowerCase();
    }
    return character.toUpperCase();
}).join("");

console.log(sentence)
console.log(resultSwapped)


const logger = function (text) {
    console.log(text);
};

const greeting = function (cb) {
    cb("anggara")
};

greeting(logger)
