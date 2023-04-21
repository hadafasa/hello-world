// Question #1: Only Odds


// const operatingSystems = ["windows", "linux", "mac"];

// for(let index = 0; index < operatingSystems.length; index++) {
//     console.log(operatingSystems[index ]);
// };

// const animal = "giraffe";
// for(let i = 0; i < animal.length; i++) {
//     console.log(animal[i]);
// }

// const countdown = [1, 2, 3, 4, 5];
// for(let index = countdown.length - 1; index >= 0; index--) {
//     console.log(countdown[index]);
// };

// function getOddNumbers(arr) {
//     const oddNumbers = arr.filter(num => num % 2 !== 0);
//     return oddNumbers.length === 1 ? oddNumbers : oddNumbers.length > 0 ? oddNumbers : [];
//   }
  
//   console.log(getOddNumbers([2, 4, 6, 8, 11, 20, 15, 22])); // [11, 15]
// console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
// console.log(getOddNumbers([70, 42, 55, 81, 21, 91, 34])); // [55, 81, 21, 91]
// console.log(getOddNumbers([2, 4, 6, 8, 10, 11, 12])); // [11]


// let num = 5;
// while (num > 0) {
//   console.log("our current number is " + num);
//   num--;
// }
// console.log("end of loop");

// "There once was a donkey named Eeyore"

// you would use a for loop for this practice question
// const sentence = "There once was a donkey named Eeyore";
// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] === "e" || sentence[i] === "E") {
//     count++;
//   }
// }
// console.log(count);
// think how you would solve this problem on a piece of paper
// pseudoecode - how would you teach the computer to solve the problem
// code --
// return/console.log the result
const sentence = "There once was a donkey named Eeyore";
const count = (sentence.match(/e/ig) || []).length;

console.log(count); // Output: 5
