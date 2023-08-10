
// 01

function calculator(a, b) {
    return a + b;
}

function displayer(something) {
    console.log(something);
}

let res = calculator(1, 2);
displayer(res);

// 02. funsi pertama mengeksekusi fungsi lain (hard-coded)

function newCalculator(a, b) {
    const res = a + b;
    displayer(res);
}

newCalculator(5, 5)

// 03. adding callback parameter

function betterCalculator(a, b, callback) {
    const res = a + b;
    callback(res);
}

// arrow function 

const betterCalculator2 = (a, b, callback) => {
    const res = a + b;
    callback(res)
}

function storeResult(something) {
    // ... simpan something ke file
}

betterCalculator(10, 5, displayer);
betterCalculator(20, 5, storeResult);
betterCalculator(20, 5, (res) =>
    console.log(`hasil dari kalkulasi adalah ${res}`))


// arrow function

const formatOutput = (res) => {
    console.log(`hasil kalkulasi adalah ${res}`)
}