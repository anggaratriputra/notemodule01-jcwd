const jsonData = `{
    "employees" : [
    {"firstName" : "Jhon", "lastName": "Doe"},
    {"firstName" : "Jane", "lastName": "Doe"}
    ]
}`;



console.log(jsonData);
const objData = JSON.parse(jsonData);
objData.employees.push({
    firstName: "Jaka",
    lastName: "Tarub",
});
console.log(objData);
const jsonData2 = JSON.stringify(objData);
console.log(jsonData2);

// array JSON

const arrJsonData = `["A", "B", "C", "D"]`;
const arrData = JSON.parse(arrJsonData);
arrData.push("E");
console.log(arrData);
const arrJsonData2 = JSON.stringify(arrData);
console.log(arrJsonData2);