const students = [
    {
        name: "joko",
        email: "joko@gmail.com",
        age: 23,
        score: 70
    },
    {
        name: "putra",
        email: "putra@gmail.com",
        age: 25,
        score: 80
    },
    {
        name: "agus",
        email: "agus@gmail.com",
        age: 20,
        score: 75
    },
    {
        name: "dodo",
        email: "dodo@gmail.com",
        age: 21,
        score: 90
    }
]

function calculate(students) {
    let scoreHighest = students[0].score;
    let scoreLowest = students[0].score;
    let scoreTotal = 0;
    let ageHighest = students[0].age;
    let ageLowest = students[0].age;
    let ageTotal = 0;


    for (let student of students) {
        scoreTotal += student.score
        ageTotal += student.age

        if (student.score > scoreHighest) {
            scoreHighest = student.score
        } else if (student.score < scoreLowest) {
            scoreLowest = student.score
        }

        if (student.age > ageHighest) {
            ageHighest = student.age
        } else if (ageLowest < student.age) {
            ageLowest = student.age
        }
    }
    let scoreAverage = scoreTotal / students.length
    let ageAverage = ageTotal / students.length

    return {
        "score": {
            Highest: scoreHighest,
            Lowest: scoreLowest,
            Average: scoreAverage
        },
        "age": {
            Highest: ageHighest,
            Lowest: ageLowest,
            Average: ageAverage

        }
    }
}

console.log(calculate(students))




//02.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


class Transaction {
    #cart = [];
    constructor() {
        this.total = 0;
        this.product = {};
    }
    addToCart(product, qty) {
        if (!(product instanceof Product)) {
            return;
        }
        
        this.#cart.push({
            product: product,
            qty: qty
        });
    }

    getCart() {
        return this.#cart
    }
}
const product1 = new Product("shampoo", 5000);
const product2 = new Product("deodorant", 2000);
const product3 = new Product("soap", 3000);
const product4 = new Product("toothpaste", 1000);
const product5 = new Product("lotion", 6000);


const t1 = new Transaction();
t1.addToCart(product1, 5);
t1.addToCart(product2, 3);
t1.addToCart(product3, 2);

const t2 = new Transaction();
t2.addToCart(product1, 2)
t2.addToCart(product3, 1)
t2.addToCart(product5, 10)

console.log(t1.getCart());