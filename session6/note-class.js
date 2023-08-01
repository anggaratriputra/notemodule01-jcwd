// class declaration
const Userr = class { };

class User {
    nama = "No Name";
    umur = 21
    hobi = "sepakbola"
    #password;

    static RAS = "human";

    constructor(nama, umur, hobi) {
        this.nama = nama;
        this.umur = umur ? umur : this.umur; // using ternary ? for default value
        this.hobi = hobi || this.hobi; // using pipe || for default value
        this.#password = nama + "kuda";
    }
    static sebutRasSaya() {
        return `saya adalah ${User.RAS}`
    }
    greeting() {
        return "Hello World"
    }

    getPassword() {
        return this.#password
    }
}

const user1 = new User("jaka", 20, "badminton");
console.log(user1.nama)
console.log(user1.umur)
console.log(user1.hobi)
console.log(user1.getPassword())
console.log(user1.greeting());

const user2 = new User("tarub");
console.log(user2.nama);
console.log(user2.umur);
console.log(user2.hobi);
console.log(user2.greeting())

console.log((User.RAS))
console.log(User.sebutRasSaya())


// ENCAPSULATION


class Employee {
    constructor() {
        this.employeeName;
    }

    getEmployeeName() {
        return this.employeeName;
    }

    setEmployeeName(newName) {
        if (newName) {
            this.employeeName = newName;
        }
    }
}
const employee1 = new Employee();
employee1.setEmployeeName("brodi");
console.log(employee1.getEmployeeName())

// INHERITANCE

class Product {

    constructor() {
        this.productName = "sidu";
        this.price = 5000;
    }
}

class Book extends Product {

    constructor() {
        super(); // calling constructor of its parents
        this.authorName;
    }

    setAuthorName(name) {
        this.authorName = name;
    }
}

const book1 = new Book();
console.log(book1.productName)
console.log(book1.price)
book1.productName = "Harry Potter";
book1.price = 75000;
book1.authorName = "J.R Tolkien"


console.log(book1.productName)
console.log(book1.price)
console.log(book1.authorName)

//  check type class yang dipakai

class Animal {}
class Rabbit extends Animal {}
class Sheep extends Animal {}
class Tree {}

const rambo = new Rabbit();
const shaun = new Sheep();
console.log(rambo instanceof Rabbit);
console.log(shaun instanceof Rabbit);
console.log(rambo instanceof Animal);
console.log(shaun instanceof Animal);
console.log(shaun instanceof Tree);