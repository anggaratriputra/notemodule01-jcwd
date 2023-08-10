// function majorityElement(nums) {
//     let candidate = null;
//     let count = 0;

//     for (const num of nums) {
//         if (count === 0) {
//             candidate = num;
//             console.log(num)
//         }

//         count += (num === candidate) ? 1 : -1;
//         console.log(count)
//     }

//     return candidate;
// }


// console.log(majorityElement([3,2,2,3,2,3,2,2,2,3,3,3,3,1,1]))

function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            console.log(num);  // Output the candidate
        }

        count += (num === candidate) ? 1 : -1;
        console.log(count);  // Output the count
    }

    return candidate;
}

console.log(majorityElement([3, 2, 2, 3, 2, 3, 2, 2, 2, 3, 3, 3, 3, 1, 1]));
console.log(majorityElement([3, 3, 2, 3, 2, 3, 2, 2, 2, 3, 3, 3, 3, 1, 1]));

// timecomplexity O(n)
// spacecomplexity (O(1))

function majorityElement2(array) {
    const n = array.length;
    let table = {};

    for (const el of array) {
        if (table[el]) {
            table[el]++;
        } else {
            table[el] = 1;
        }
    }

    return Object.keys(table).find((key) => table[key] > n / 2);
}

console.log(majorityElement2([3, 2, 3]));




function romanToInteger(s) {
    const mapping = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    let prevValue = 0;

    for (const char of s) {
        const charValue = mapping[char];

        if (charValue > prevValue) {
            total += charValue - 2 * prevValue;
        } else {
            total += charValue;
        }

        prevValue = charValue;
    }

    return total;
}

console.log(romanToInteger("IV"));

// time complexity O(n)
// space compexity (O(1))



function generatePascalsTriangle(numRows) {
    if (numRows <= 0) {
        return [];
    }

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row = [1];
        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
        row.push(1);
        triangle.push(row);
    }

    return triangle;
}

// Example usage
console.log(generatePascalsTriangle(5));

function generatePascalTriangle(numRows) {
    const result = [];
    result.push([1]);
    if (numRows >= 2) {
        result.push([1, 1])
    }

    for (let i = 3; i <= numRows; i++) {
        const current = [];
        const prevRow = result[i - 2];

        for (let o = 0; o <= i - 1; o++) {
            if (o === 0 || o === i - 1) {
                current.push(1)
            } else {
                const num = prevRow[o - 1] + prevRow[0];
                current.push(num);
            }
        }
        result.push(current);
    }
    return result;
}

console.log(generatePascalTriangle(3))

// time complexity O(n^2)
// space complexity O(n)



function maxProfit(prices) {
    if (prices.length === 0) {
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}
// Example usage
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // Output: 0

// time complexity = O(n)
// space complexity = O(1)




function getMaxProfit(priceList) {
    let maxProfit = 0;
    for (let bi = 0; bi < priceList.length; bi++) {
        const buyPrice = priceList[bi];
        for (let si = bi + 1; si < priceList.length; si++) {
            const sellPrice = priceList[si];
            const profit = sellPrice - buyPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

console.log(getMaxProfit([7,10,1,5,3,6,4,8]))


