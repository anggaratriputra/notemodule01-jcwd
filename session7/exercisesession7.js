// create a funcion to check two object are equal

let obj1 = { name: "anggara", age: 24, gender: "men" }
let obj2 = { name: "anggara", age: 24, gender: "men" }

const keys1 = Object.keys(obj1)
const keys2 = Object.keys(obj2)

function equalObject(obj1, obj2) {

    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log("Obj1 and Obj2 are equal? ", equalObject(obj1, obj2))


// create intersection of 2 obj

const object1 = { a: 1, b: 2, c: 3 }
const object2 = { a: 1, c: 3 }


function intersectionObj(object1, object2) {
    result = {}
    // const keyObj1 = Object.keys(object1); !! if dont want use this, use for .. in !!
    // for (let key in keyObj1){ 
    for (let key in object1) {
        const value = object1[key]
        console.log(key)
        console.log(value)
        if (object1[key] === object2[key]) {
            result[key] = value
        }
    }
    return result
}

console.log(intersectionObj(object1, object2))




// create a function to merge two array of student data and remove duplicate data
let arr1 = [
    {
        name: "Student 1",
        email: "student1@mail.com"
    },
    {
        name: "Student 2",
        email: "student2@mail.com"
    }
]

let arr2 = [
    {
        name: "Student 1",
        email: "student1@mail.com"
    },
    {
        name: "Student 3",
        email: "student3@mail.com"
    }
]

function mergeArr(arr1, arr2) {

    const resultArray = []

    function checkExist(student) {
        for (let cr of resultArray) {
            if (student.name === cr.name && student.email === cr.email) {
                return true;
            }
        }
        return false;
    }

    for (let student of arr1) {
        let isExist = checkExist(student);
        if (!isExist) {
            resultArray.push(student);
        }
    }

    for (let student of arr2) {
        let isExist = checkExist(student);
        if (!isExist) {
            resultArray.push(student);
        }
    }

    return resultArray;
}


console.log(mergeArr(arr1, arr2))



//     let resultArray = []
//     for (let item1 of arr1) {
//         resultArray.push(item1)
//     }
//     for (let item2 of arr2) {
//         let isExist = false;
//         for (let itemResult of resultArray) {
//             if (item2.name === itemResult.name && item2.email === itemResult.email) {
//                 isExist = true;
//             }
//         }
//         if (!isExist) {
//             resultArray.push(item2)
//         }
//     }
//     return resultArray
// }
// console.log(mergeArr(arr1, arr2))




// create function that can accept input as an array of object and switch all propery and property into value


const arrayData = [
    {
        name: "David",
        age: 25
    }
]

function switchData(arrayData) {
    let switchedArray = []
    let switchedObject = {}
    for (let item of arrayData) {
        console.log(item)
        for (let key in item) {
            console.log(key)
            const value = item[key];
            switchedObject[value] = key;
        }
        switchedArray.push(switchedObject);
    }
    return switchedArray
}


console.log(switchData(arrayData))

// find factorial number using recursion

function getFactorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * getFactorial(n - 1);
}

console.log(getFactorial(1000))


// roman to integer

function romanToInteger(s) {
    const mapping = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0;
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        const charNext = s[i+1];
        if (mapping[char]< mapping[charNext]){
            total -= mapping[char]
        } else {
            total += mapping[char]
        }
    }
    return total
}

console.log(romanToInteger("IX"))
