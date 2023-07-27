console.log("hello world")
console.log("anggara")

// this is a comment. 

/* comment line
comment line
*/

//membuat declare var

let message = "hello world";
//isi message dengan pesan
console.log(message)



let message2 = "hello"
let message3 = "anggara"

console.log(`${message2} selamat datang, ${message3}`)


// data types

// PRIMITIVE TYPE DATA

// 1. string

const stringType = "text 1";

// 2. number
const numberType = 255;

// 3. boolean
const booleanType1 = true;
const booleanType2 = false;

// 4. null
const nullType = null;

// 5. undefined
const undefinedType = undefined;


// NON PRIMITIVE DATA TYPES 

// 1. object 

const objectType = { first: "item1", number: 20 };

// 2. array

const arrayType = ["item1", "item2"];


// how to check variable type data
// console.log(typeof "variable");



// Immutable / value Type -> primitive type

let personName = "Jhon doe";
let newPersonName = personName;
personName = "Jane doe;"
console.log(newPersonName)




// Mutable / Reference Type -> non primitive type
let personData = { name: "jhon", age: 26};
let newPersonData = personData;
personData.name = "doe";
console.log(newPersonData.name)


let numberList = [1,2,3,4,5];
let newNumberList = numberList;
numberList[2] = 6;
console.log(numberList);
console.log(newNumberList)

//trim
const title = " Kebakaran di Jakarta ";
const bigTitle = title.trim();
console.log(bigTitle)

//substring
const title2 = "Kebakaran di jakarta, terus ga ada yang madamin";
const bigTitle2 = title2.substring(0,9);
console.log(bigTitle2)

//replace
const title3 = "Kebakaran di jakarta, terus ga ada yang madamin";
const bigTitle3 = title3.replace("jakarta", "depok");
console.log(bigTitle3)

//split
const title4 = "Kebakaran di jakarta, terus ga ada yang madamin";
const bigTitle4 = title4.split(" ");
console.log(bigTitle4)

//charat
const title5 = "Kebakaran di jakarta, terus ga ada yang madamin";
const bigTitle5 = title5.charAt(4);
console.log(bigTitle5)

//lenght
const title6 = "Kebakaran di jakarta, terus ga ada yang madamin";
const bigTitle6 = title6.length;
console.log(bigTitle6)


// template literal
const firstName = "Anggara"
const lastName = "Tri Putra"
const bio = `student at purwadhika,
sudah makan siang hari ini`

const fullname = `${firstName} ${lastName}`
console.log(fullname.toUpperCase())
console.log(bio)

const number = 5;
const strNumber = number.toString()
console.log(strNumber)

const x = "3.14";
const numX = Number(x);
const intX = parseInt(x);
const floatX = parseFloat(x);
console.log(intX + 5)
console.log(numX + 5)
console.log(floatX + 5)

const strX = String(numX);
console.log(strX)


console.log(Boolean(""))
console.log(Boolean(" "))
console.log(Boolean(0))
console.log(Boolean(3))

const now = new Date();
console.log(now)
console.log(now.getTime())
const zeroDate = new Date(0);
console.log(zeroDate)
console.log(zeroDate.getTime())
const oneHourAfterZeroDate = new Date(100 * 1 * 3600)
const merdeka = new Date("1945-08-17")
console.log(merdeka)
const yesterday = new Date("2024-02-24")
yesterday.setDate(29)
console.log(yesterday)
console.log(yesterday.getFullYear())
console.log(yesterday.getMonth())
console.log(yesterday.getDay())

