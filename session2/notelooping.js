// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i)
}


for (let i = 10; i >= 0; i--) {
    console.log(i)
}

// while loop

let n = 0;
while (n <= 10) {
    console.log(n);
    n++;
}

let i = 0;
while (i < 3) {
    console.log("hello")
    i++;
}


// do while loop

let a = 0;
do {
    console.log("hai");
    a++;
} while (a < 2);


// break

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}


// continue
for (let x = 0; x < 10; x++) {
    if (x === 5) {
        continue;
    }
    console.log(x);
}





// penjumlahan angka ganjil dari 1 sampai 100

let sum = 0;
for (let i = 1; i  <= 100; i++) {
    // seleksi untuk angka ganjil diantara angka 1 sampai 100
    if (i % 2 === 1) {  
        console.log(i)
        continue;
    }
    sum += i
}
console.log(sum)


// factorial from inputed number
// for loop
let result = 1;
let number = 6;
for (let i = 1; i <= number; i++) {
    result *= i
} 
console.log (result)



//while loop







