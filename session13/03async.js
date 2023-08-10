// 01. set Timeout
console.log("task 1");
// setTimeout(() => console.log("task 2"), 5000);
setTimeout(runTask2, 5000)
console.log("task 3")

function runTask2(){
    console.log("task 2")
}

// 02. set Interval

// setInterval(() => {
//     console.log("hehe")
// }, 1000);


const laughInterval = setInterval(() => {
    console.log("hehe")
}, 1000);

setTimeout(() => {
    clearInterval(laughInterval);
}, 10000);






