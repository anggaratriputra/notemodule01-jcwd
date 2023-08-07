let palindrome = "race, car"
let arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
palindrome = palindrome.split("")
palindrome = palindrome.filter((char) => {
    return arrAlpha.includes(char)
})
palindrome = palindrome.join("")
console.log(palindrome);

// create variable to store reversed input
const reversed = palindrome.split("").reverse().join("")
// create condition to chek reversed input is matched with original input;
// using if statement
// return the output
console.log(palindrome === reversed)