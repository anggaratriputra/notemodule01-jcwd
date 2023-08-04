const fruits = ["banana", "apple", "jackfruit", "apple"];
// declaration to make a new Set
const newFruits = new Set(fruits);
// value of set is unique, so duplicated data will be remove
console.log(newFruits) 
// built-in methods has => to check value in set already there or not
console.log(newFruits.has("banana"))
// console.log(newFruits.add("melon") => built-in methods add => to add new value to set
// console.log(newFruits.delete("melon")) => built-in methods delete => to delete existing value in set
// newFruits.clear() => built- in methods clear => to clear all values in set
// built-in methods size => to check how much value in set
console.log(newFruits.size);

// built-in methods for of entries => looping with output key : value, but in set the key is same with the value
for (let fruit of newFruits.entries()) {
    console.log(fruit)
}

// built-in methods for of values => looping with output only the values
for (let fruit2 of newFruits.values()) {
    console.log(fruit2)
}

// built in forEach => looping with a function
newFruits.forEach((value) => {
    console.log(value);
})
