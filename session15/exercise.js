// no. 1

const checkWeekend = date => {
  const isWeekend = date => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  if (isWeekend(date)) {
    return "The date is a weekend.";
  } else {
    return "The date is not a weekend.";
  }
};

// no. 2

const findGCD = (a, b) => {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

// no. 3

const findLCM = (num1, num2) => {
  let max = Math.max(num1, num2);

  do {
    if (max % num1 === 0 && max % num2 === 0) {
      return max;
    }
    max++;
  } while (true);
}



// no. 4

const mostCommonCharacter = (str) => {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let mostCommonChar = '';
  let maxCount = 0;

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      mostCommonChar = char;
      maxCount = charCount[char];
    }
  }

  return mostCommonChar;
};

// no 5 with sort methods.
const sortString1 = (str) => {
  return sortedString1 = str.split("").sort().join("")
}

// no 5 without sort methods.
const sortString2 = (str2) => {
  let charArray = [...str2];
  let swapped;

  for (let i = 0; i < charArray.length - 1; i++) {
    swapped = false;

    let currentIndex = 0;
    for (const [index, currentChar] of Object.entries(charArray)) {
      let nextIndex = currentIndex + 1;

      if (nextIndex < charArray.length && currentChar > charArray[nextIndex]) {
        [charArray[currentIndex], charArray[nextIndex]] = [charArray[nextIndex], charArray[currentIndex]];
        swapped = true;
      }

      currentIndex = nextIndex;
    }

    if (!swapped) {
      break;
    }
  }

  return charArray.join('');
}
// no. 6
const getMinimumDate = (dateArray) => {
  let minDate = dateArray[0];

  for (let i = 1; i < dateArray.length; i++) {
    if (dateArray[i] < minDate) {
      minDate = dateArray[i];
    }
  }

  return minDate;
}

// no. 7
function calculateArray(arr) {
  let sum = 0;

  for (let row of arr) {
      for (let element of row) {
          sum += element;
      }
  }

  return sum;
}

// no. 8
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
}

let prefix = strs[0];

for (let i = 1; i < strs.length; i++) {
    let j = 0;

    while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
        j++;
    }

    prefix = prefix.slice(0, j);

    if (prefix === '') {
        return '';
    }
}

return prefix;
}

//no. 9
function copyFirstHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const copiedArray = [];

  for (let i = 0; i <= middleIndex; i++) {
      copiedArray.push(arr[i]);
  }

  return copiedArray;
}

// no. 10

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}


// no. 11 

function daysPassedSinceBeginningOfYear() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1); // January 1st of the current year

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const daysPassed = Math.floor((today - startOfYear) / oneDayInMilliseconds);

  return daysPassed;
}

function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  return age;
}


module.exports = { 
  checkWeekend, 
  findGCD, 
  findLCM, 
  mostCommonCharacter, 
  sortString1, 
  sortString2, 
  getMinimumDate, 
  calculateArray,
  longestCommonPrefix,
  copyFirstHalf,
  getDaysInMonth,
  daysPassedSinceBeginningOfYear,
  calculateAge
 }