// Question #1 Only Odds

let numbers = [2, 4, 6, 8, 11, 20, 15, 22];
let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    result.push(numbers[i]);
  }
}

if (result.length === 1 && result[0] % 2 !== 0) {
  result = [result[0]];
}

console.log(result);

// numbers input : [2, 4, 6, 8, 11, 20, 15, 22] expected output:  	[ 11, 15]
// numbers input : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] expected output:  	[1, 3, 5, 7, 9]
// numbers input : [70, 42, 55, 81, 21, 91, 34] expected output:  [55, 81, 21, 91]
// numbers input : [2, 4, 6, 8, 10, 11, 12]  expected output:  [11]

// Question #2 Vowel vs Consonant

let consonantCount = 0;
let vowelCount = 0;

const inputString = "onomonopia";

for (let i = 0; i < inputString.length; i++) {
  const currentChar = inputString[i];
  if (currentChar === "a" || currentChar === "e" || currentChar === "i" || currentChar === "o" || currentChar === "u") {
    vowelCount++;
  } else {
    consonantCount++;
  }
}

console.log(inputString + " has " + consonantCount + " consonants and " + vowelCount + " vowels")
// inputString : "hello" expected output: "hello has 3 consonants and 2 vowels"
// inputString : "ukelele" expected output: "ukelele has 3 consonants and 4 vowels"
// inputString : "awesome" expected output: "awesome has 3 consonants and 4 vowels"
// inputString : "onomonopia" expected output: "onomonopia has 4 consonants and 6 vowels"
// inputString : "textbook" expected output: 	"textbook has 5 consonants and 3 vowels"

//Question #3 Reverse Array

const inputArray = [1, 2, 3];
const reversedArray = [];

for (let i = inputArray.length - 1; i >= 0; i--) {
  reversedArray.push(inputArray[i]);
}
console.log(reversedArray);

// inputArray : [1, 2, 3]  expected output: [3, 2, 1]
// inputArray : [1, 3, 5, 7, 9, 11]  expected output: [11, 9, 7, 5, 3, 1]
// inputArray : [20, 50, 30, 60, 200]  expected output: [200, 60, 30, 50, 20]
// inputArray : [1, -1, 2, -3, 5, -8, 13]  expected output: [13, -8, 5, -3, 2, -1, 1]

// Question #4 FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
