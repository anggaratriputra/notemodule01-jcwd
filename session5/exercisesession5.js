// write a function to get the lowest, hightst and average value in the array (with anda without sort function)
// without sort 

function findLowest(arr) {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    console.log(lowest);
}

function findHighest(arr) {
    let highest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    console.log(highest);
}

function findAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    avg = total / arr.length;
    console.log(avg);
}



const arr = [150, 30, 10, 20, 8, 6, 2, 14, 16, 19, 7,];
findLowest(arr);
findHighest(arr);
findAverage(arr);


// lowest and highest using sort



function findLowest2(arr) {
    arr.sort((a, b) => a - b);
    lowest = arr[0]
    console.log(lowest)
}

function findHighest2(arr) {
    arr.sort((a, b) => a - b);
    highest = arr[arr.length - 1];
    console.log(highest)
}

findLowest2(arr)
findHighest2(arr)


// version 2

const input = [21, 4, 5, 21, 6, 6, 8, 20];
function findMinMaxAvg(arrNumber) {
    // with sort
    // const sortedArrNumber = arrNumber.sort((a,b) => a-b);
    // console.log(sortedArrNumber)
    // let highest = sortedArrNumber[sortedArrNumber.length - 1];
    // let lowest = sortedArrNumber[0];

    // without sort 
    let highest = arrNumber[0];
    let lowest = arrNumber[0];
    let sum = 0;

    for (let number of arrNumber) {
        if (number > highest) {
            highest = number;
        }

        if (number < lowest) {
            lowest = number;
        }

        sum += number;
    }

    const average = sum / arrNumber.length;
    console.log([lowest, highest, average])

}

findMinMaxAvg(input)



// write a function that takes an array of owrds and return a string by concatenating the words in the array, separated by commas and - the last word - by an "and"



// let words = ["Jakarta", "Bandung", "Malang", "Jogja", "Bali"]
// result = "";
// function concatArray() {
//     for (let [i, word] of words.entries()) {
//         if (i === words.length - 1) {
//             result += " and " + word
//         } else if (i != 0) {
//             result += ", " + word;
//         } else {
//             result += word 
//         }
//     }
//     console.log(result)
// }

// concatArray()


const kota = ["Jakarta", "Bandung", "Malang", "Bali"]
function concatWords(arrWords) {
    let result = "";
    for (let i = 0; i < arrWords.length; i++) {
        const word = arrWords[i];
        if (i !== 0) {
            if (i === arrWords.length - 1) {
                result += " and "
            } else {
                result += ", "
            }
        }
        result += word;
    }

    return result;
}
console.log(concatWords(kota))



// write a function to split a string and convert it into an array of words


function splitArray(text) {
    splitedText = text.split(" ");
    console.log(splitedText);
}

splitArray("Hello World")

function splitArray2(words, flagSplitter = false) {
    const result = [];
    let word = "";

    for (let i = 0; i < words.length; i++) {
        const characters = words[i];
        if (characters !== flagSplitter) {
            word += characters;
        } else {
            result.push(word);
            word = "";
        }

        if (i === words.length - 1) {
            result.push(word)
        }
    }
    return result;
}

console.log(splitArray2("Hello World", " "))

// write a function to calculate each element in the same position from two arrays of integer assume both arrays are of the same length

resultArray = [];
function calculateArray(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        resultArray.push(arr1[i] + arr2[i])
    }
    console.log(resultArray);
}

calculateArray([1, 2, 3], [3, 2, 1])

// write a function that adds an element to the end of an array, However the element should only be added if it is not already in array.


function addElements(myArray, elements) {
    if (!myArray.includes(elements)) {
        myArray.push(elements)
    }
    return myArray
}

let myArray = [1, 2, 3, 4, 5];
let elements = 5


console.log(addElements(myArray, elements))

// using for loop

function addUnique(myArray, elements) {
    let allowed = true;
    for (let item of myArray) {
        if (item === elements) {
            allowed = false;
            break;
        }
    }
    if (allowed) {
        myArray.push(elements);
    }

    return myArray;
}

console.log(addUnique(myArray, 6))

//create function to remove odd number in an array and return a new array that containts even numbers only


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function angkaGenap() {
    let resultEven = [];
    for (let number of numbers) {
        if (number % 2 == 0) {
            resultEven.push(number);
        }
    }
    // one liner
    // const result = arrNumber.filter((v) => v % 2 === 0)
    return resultEven;
}

console.log(angkaGenap())


// write a function to insert multiple given integer to an array and have a maximum size output. 

function fitArray(maxSize, ...input) {
    let resultNumber = [];
    for (let [i, number] of input.entries()) {
        if (i < maxSize) {
            resultNumber.push(number)
        }
    }
    return resultNumber
}
console.log(fitArray(5, 5, 10, 24, 3, 6, 7, 8))


// version2

function fitArray2(maxSize, ...numbers) {
    let resultNumber = [];
    for (let i = 0; i < maxSize; i++) {
        resultNumber.push(numbers[i])
    }
    return resultNumber
}

console.log(fitArray2(5, 5, 10, 24, 3, 6, 7, 8))

// write a function that will combine 2 given array into one array

function combineArray(array1, array2) {
    return array1.concat(array2)
}

let array1 = ["mangga", "melon", "markisa"]
let array2 = ["sirsak", "jeruk", "semangka"]

console.log(combineArray(array1, array2))


// write a function to find duplicate values in a array

function findDuplicateValue(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i], i + 1) && !result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const data = ["jeruk", "mangga", "melon", "mangga", "mangga", "melon"]
console.log(findDuplicateValue(data))



// write a function to difference values in a array

function findDifference(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            result.push(arr1[i], arr2[i]);
        }
    }
    return result;
}

const arr1 = ["kucing", "kerbau", "kelinci"];
const arr2 = ["kucing", "monyet", "kelinci"];
console.log(findDifference(arr1, arr2))