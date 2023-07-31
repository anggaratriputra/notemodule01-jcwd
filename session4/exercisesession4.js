// making triangle with output 1,12,123,1234,12345
const height = 5

function triangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row)
    }
}

triangle(5);

// create triangle with output 01, 02 03,04 05 06,07 08 09 10
function triangle2(height2) {
    let output = '';
    let currentNumber = 1;
    for (let i = 1; i <= height2; i++) {
        for (j = 1; j <= i; j++) {
            if (currentNumber < 10) {
                output += "0";
            }
            output += currentNumber + " ";
            currentNumber++;
        }
        output += "\n";
    }
    console.log(output)
}

triangle2(4)

// create loop the number of times according to the input replace multiples of 3 to "Fizz" multiple with 5 to "Buzz" and multiples 3 and 5 with "FizzBuzz"

function fizzBuzz(num) {
    let output = "";

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz ";
        } else if (i % 3 === 0) {
            output += "Fizz ";
        } else if (i % 5 === 0) {
            output += "Buzz "
        } else {
            output += i + " ";
        }
    }
    return output;
}

console.log(fizzBuzz(20))

// create function to calculate Body Mass Index (BMI)

function bmi(weight, height) {
    bodyMassIndex = weight / ((height / 100) ** 2)
    if (bodyMassIndex < 18.5) {
        console.log(bodyMassIndex)
        return result = "less weight"
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
        console.log(bodyMassIndex)
        return result = "ideal"
    } else if (bodyMassIndex >= 25 && bodyMassIndex <= 29.9) {
        console.log(bodyMassIndex)
        return result = "overweight"
    } else if (bodyMassIndex >= 30 && bodyMassIndex <= 39.9) {
        console.log(bodyMassIndex)
        return result = "very overweight"
    } else {
        console.log(bodyMassIndex)
        return result = "obesity"
    }
    return result;
}

console.log(bmi(120, 175))



//create function to remove odd number in an array and return a new array that containts even numbers only


function angkaGenap() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let [i, number] of numbers.entries()) {
        if (number % 2 != 0) {
            console.log(number)
        }
    }
}

angkaGenap()

// create function to spliot a string and convert it to an array of words


function splitArray(text) {
    splitedText = text.split(" ");
    console.log(splitedText);
}

splitArray("Hello World")

