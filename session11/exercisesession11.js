// create function return single count of array number
function singleNumber (num){
    let result = 0;

    for (let nums of num){
        result ^= nums
    }
    return result;
}


console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));

// create function to return true/false the given two string is an anagram or not
function checkAnagram (s, t){
    if (s.length !== t.length){
        return false;
    }

    const sortedS = s.split("").sort().join("") 
    const sortedT = t.split("").sort().join("")
   
    return sortedS === sortedT
}


console.log(checkAnagram("kasur","rusak"))
console.log(checkAnagram("bisa","sabi"))
console.log(checkAnagram("makan","nakam"))
console.log(checkAnagram("hello","holla"))
console.log(checkAnagram("car","acr"))
    


function climbStairs(n) {
    if (n <= 2) {
        return n;
    }

    let prev = 1;
    let current = 2;

    for (let i = 3; i <= n; i++) {
        let next = prev + current;
        console.log(next)
        prev = current;
        console.log(prev)
        current = next;
        console.log(current)
    }

    return current;
}

// Test cases
console.log(climbStairs(2)); 
console.log(climbStairs(7)); 
