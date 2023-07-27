// IF STATEMENT

let age = 12;

if (age >= 17) {
    console.log("You can create an ID Card");
} else {
    console.log("You can't create an ID Card")
}

// IF ELSE STATEMENT
if (age >= 15 && age <= 18) {
    console.log("Highschooler")
} else if (age >= 12 && age <= 14) {
    console.log("Middleschool")
} else if (age >= 5 && age <= 11) {
    console.log("Elementary school")
} else {
    console.log("Not in school")
}

// SWITCH CASE STATEMENT

const grade = "A";

switch (grade) {
    case "A":
    case "A+":
    case "A-":
        console.log("Excellent Result!");
        break;
    case "B":
    case "B+":
    case "B-":
        console.log("Great Result!");
        break;
    case "C":
    case "C+":
    case "C-":
        console.log("Average Result!");
        break;
    default:
        console.log("Invalid Grade!")

}

// TRUTHY / FALSY VALUE

let text = "abc";

if (text) {
    console.log(text);
} else {
    console.log("text is empty")
}



let number = 10;
if (number >= 8) {
    console.log(" number is less than 8")
}



// TERNARY OPERATOR

const str = "javascript";

if (str === "javascript") {
    console.log("javascript")
} else {
    console.log("not javascript")
}


/* 
(condition) ? (value if true) : (value if false)
*/

console.log(str === "javascript" ? "javascript" : "not javascript")