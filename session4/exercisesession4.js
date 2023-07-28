// create triangle using regular function and arrow function

const height = 5;

function triangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
}

triangle(height);

