/* array methods
- foreach
- reduce
- map
- sort
- filter
 */

const customArray = [10, 25, 13];

//foreach is used to loop over an array from front to back

customArray.forEach((currElement, i) => {
    console.log(currElement, i);
});

//reduce => perform an action on your array and return a single value
// sum, multiply
const sum = customArray.reduce((sum, currElement) => (currElement += sum), 0);

console.log("sum: ", sum); // 25 + 13 + 10
console.log("product: ", product);

// map => for example, return a new array with each element doubled

const doubled = customArray.map((currElement, i) => {
    return currElement * 2;
});

console.log("doubled array: ", doubled);

// sort numbers, sort alphabets
customArray.sort((a, b) => a < b); // ascending;

console.log("sort: ", sort);