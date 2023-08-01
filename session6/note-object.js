// untuk membuat object kosong

const obj = {};
const obj2 = new Object();


// object declaration

const user = {
    //properties
    firstName: "anggara",
    lastName: "tri putra",
    "full name": "anggara tri putra",
    isAlive: true,
    age: 24,
    nickname: ["gara", "gar"],
    family: {
        abang1: "adit",
        abang2: "dika"
    },
    peliharaan: {
        kucing: {
            ras: "persia",
            umur: 2
        }
    },
    // methods
    shout: () => {
        return "WOI!";
    },
    greet: function () {
        return "halo";
    },
    greet() {
        return "halo";
    }
};

// how to access property / methods
console.log(user.firstName);
console.log(user.shout());
console.log(user.greet());
console.log(user.nickname);
console.log(user.family.abang1);


// cara ke 2
console.log(user["firstName"])
console.log(user["full name"])
console.log(user["shout"]())
const key = "lastName";
console.log(user[key])


// set new property object
console.log(user.firstName);
user.firstName = "angga";
console.log(user.firstName);
// add new key of property
console.log(user.id);
user.id = "JCWD-004"
console.log(user.id)

// delete property in object
console.log(user.family)
console.log(user.family.abang1)
delete user.family;
console.log(user.family?.adek) // using optional chaining (?) in the keys if the program run time error 
delete user["full name"];
console.log(user["full name"])

// object.keys + loop object data

console.log(Object.keys(user));
for (let key of Object.keys(user)) {
    const value = user[key];
    console.log(key)
    console.log(value)
}

// object entries

for (let [key, value] of Object.entries(user)) {
    console.log(key);
    console.log(value)
}

// for.. in loop -> specific for object data type.
for (let key in user) {
    console.log(key)
    const value = user[key];
    console.log(value)
}


// getter & setter
const newUser = {
    firstName: "jaka",
    lastName: "tarub",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const arrName = value.split(" ");
        this.firstName = arrName[0];
        this.lastName = arrName[1];
    }
}
console.log(newUser)
console.log(`${newUser.firstName} ${newUser.lastName}`)
console.log(newUser.fullName)
newUser.fullName = "si pitung";
console.log(newUser.fullName)
console.log(newUser)


this

// function getMyTipe(){
//     return `${this.tipe} makan pelet`
// }

// this cannot work using arrow function

const ikan = {
    tipe: "lele",
    makan() {
        return `${this.tipe} makan pelet`;
    }
    // makan : getMyTipe
}

console.log(ikan.makan())




// built in method object

// Object.assign() 
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

Object.assign(target, source);

console.log(target)

// copying object, careful of reference data type, dont use abc = target
const abc = Object.assign({}, target)
abc.a = 15
console.log(abc)
console.log(target)

// descructure syntax

// for array
const listName = ["jaka", "tarub", "patimura"]
// const name1 = listName[0];
// const name2 = listName[1];
// const name3 = listName[2];

const [name1, name2, name3] = listName;
console.log(name1, name2, name3);

// for object
const pegawai = {
    nama: "jaka",
    umur: 20,
    list: "rajin dan tekun"
};
// const nama = pegawai.nama;
// const umur = pegawai.umur;
// const ListPegawai = pegawai.list
const { nama, umur, list: listPegawai } = pegawai;
console.log(nama, umur, listPegawai)


// spread operator

// array
const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6];
const merged = [...dataOne, ...dataTwo];
console.log(merged)

const sum = (number, number2) => {
    return number + number2;
}

console.log(sum(...dataOne), sum(...dataTwo))

// object

const object1 = {
    name: "agus",
    age: 20
}
const object2 = {
    email: "agus@gmail.com",
    age: 23
}
const mergedObject = {...object1, ...object2};

console.log(mergedObject)


