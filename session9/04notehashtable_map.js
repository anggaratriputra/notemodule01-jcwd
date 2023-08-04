const haloTable = {
    id: "halo",
    en: "hello"
};

console.log(haloTable.id);
haloTable.fr = "bonjour";
console.log(haloTable);

const data = new Object();
const dataMap = new Map();

dataMap.set("a", "A");
dataMap.set("a", "AA");
dataMap.get("a");
console.log(dataMap.size);

for(let [key, value] of dataMap) {
    console.log(key);
    console.log(value);
}
