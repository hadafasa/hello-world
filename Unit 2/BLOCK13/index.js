// // Class demo 1

// // take two values
// let num1 = 0;
// let num2 = 0;
// // if both values are greater than or equal to 5
// if (num1 >= 5 && num2 >= 5) {
//     // log out true
//     console.log(true)
// } else {
//     // else false
//     console.log(false)
// }

// console.log (num1 >= 5 && num2 >= 5) ? console.log(true) : console.log(false)
// end of class demo 1


// Question #1: Is Truthy

// going about this with a if else with the input of "checkTruthy" it will take whatever input and checks whether it is truthy or falsy and will print to whichever it is
// since we are placing input values and having an expected exact print i will be using === to be absolute
function checkTruthy(input) {
    if (input) {
      console.log(true);
    } else if (input === false) {
      console.log("The boolean value false is falsy");
    } else if (input === null) {
      console.log("The null value is falsy");
    } else if (input === undefined) {
      console.log("undefined is falsy");
    } else if (input === 0) {
      console.log("The number 0 is falsy (the only falsy number)");
    } else if (input === "") {
      console.log("The empty string is falsy (the only falsy string)");
    }
  }

// here is where i will put the values in inputs so that the function above can be ran and shown in the debug console
// values put to test
checkTruthy("I am a string"); // expected output: true
checkTruthy(false); // expected output: The boolean value false is falsy
checkTruthy(null); // expected output: The null value is falsy
checkTruthy(undefined); // expected output: undefined is falsy
checkTruthy(0); // expected output: The number 0 is falsy (the only falsy number)
checkTruthy(""); // expected output: The empty string is falsy (the only falsy string)

// End of Question #e

// Question #2: Number Line

// will be going about this problem the same way as before
function sumResult(num1, num2) {
    // having this let statement makes it easier combining num1 and num2
    let sum = num1 + num2;

    // now using sum we can just add that with the string with each one pretaining to each set value
    if (sum < -1000) {
      console.log(sum + " is less than -1000");
    } else if (sum < 0) {
      console.log(sum + " is a negative number");
    } else if (sum === 0) {
      console.log(sum + " is equal to 0");
    } else if (sum > 0 && sum <= 100) {
      console.log(sum + " is larger than 0");
    } else if (sum > 100) {
      console.log(sum + " is greater than 100");
    }
  }

// values to test
sumResult(50, 51); // expected output: 101 is greater than 100
sumResult(99, -2); // expected output: 97 is greater than 0
sumResult(0, 101); // expected output: 101 is greater than 100
sumResult(500, -500); // expected output: 0 is equal to 0
sumResult(-1000, 0); // expected output: -1000 is a negative number
sumResult(-5, 0); // expected output: -5 is a negative number

// End of Question #2

// Question #3: Greater than or Equal

// same go about question same as the previous two
function checkGreaterOrEqual(num1, num2) {
    // if number 1 is greater than or equal to 5 and number 2 greater than or equal to 5 then print true else print false
    if (num1 >= 5 && num2 >= 5) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// values to test
checkGreaterOrEqual(5, 6); // expected output: true
checkGreaterOrEqual(10, 11); // expected output: true
checkGreaterOrEqual(0, 0); // expected output: false
checkGreaterOrEqual(1000, -1000); // expected output: false
checkGreaterOrEqual(6, 4); // expected output: false
checkGreaterOrEqual(5, 5); // expected output: true

// i notice when i run the debug console it shows me 2 true 3 false true so i assume that the program is shortning it because of what is in order from top to bottom
// End of Question #3

// Question #4: Pair and Compare

// im going to go about this kind of the same way as previous question but using checkTruthy instead

function checkTruthy(param1A, param1B, param2A, param2B) {
    if ((param1A && param1B) || (param2A && param2B)) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  
  checkTruthy("cat", "cat", 6, "6"); // expected output: true
  checkTruthy("five", 5, "dog", "dawg"); // expected output: false
  checkTruthy(0, false, "horse", "horse"); // expected output: true
  checkTruthy("eight", "eight", "ate", "ate"); // expected output: true
  checkTruthy(11, "eleven", "four", "for"); // expected output: false
  checkTruthy("cake", "cake", "pie", "pie"); // expected output: true

  //  none of these for the last question are printing as expected but rather they are printing all true.. this i will need help with