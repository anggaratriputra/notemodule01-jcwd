function excelColumnToNumber(title) {
    // Ubah judul kolom ke huruf kapital
    title = title.toUpperCase();
    let result = 0;
    // looping char di string title
    for (let char of title) {
        // Value dari char saat ini 
        const charValue = char.charCodeAt() - 65 + 1;
        // Tambahkan nilai kontribusi angka saat ini ke variabel hasil dengan penyesuaian pangkat
        result = result * 26 + charValue;
    }

    return result;
}

const columnNumber = excelColumnToNumber("AA");
console.log(columnNumber);

function integerToRoman(num) {
    const romanData = [
      { symbol: "M", value: 1000 },
      { symbol: "CM", value: 900 },
      { symbol: "D", value: 500 },
      { symbol: "CD", value: 400 },
      { symbol: "C", value: 100 },
      { symbol: "XC", value: 90 },
      { symbol: "L", value: 50 },
      { symbol: "XL", value: 40 },
      { symbol: "X", value: 10 },
      { symbol: "IX", value: 9 },
      { symbol: "V", value: 5 },
      { symbol: "IV", value: 4 },
      { symbol: "I", value: 1 },
    ];
  
    let result = "";
  
    for (const { symbol, value } of romanData) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
  
    return result;
  }

console.log(integerToRoman(111)); 
console.log(integerToRoman(3)); // Output: "III"
console.log(integerToRoman(9)); // Output: "IX"
console.log(integerToRoman(58)); // Output: "LVIII"
console.log(integerToRoman(1994)); // Output: "MCMXCIV"


function generateParenthesis(n) {
    
    let stack = [];
    let result = [];

    function backtrack(open, close){

        if(open == close && open == n) {
            result.push(stack.join(''));
            return;
        }

        if(open < n){
            stack.push('(');
            backtrack(open+1, close);
            stack.pop()
        }
        if(close < open){
            stack.push(')');
            backtrack(open, close+1);
            stack.pop();
        }

    }
    backtrack(0,0)
    return result
};



console.log(generateParenthesis(3))







