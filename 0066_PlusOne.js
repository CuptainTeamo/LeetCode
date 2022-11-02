//!!!!!!Dont convert string to an number because the number could exceed the max value of this data type!!!!!!!!!!

// How this work
// Get the last digit of array, add one to it, put it to a new array
// If the last digit is 9, use recursive function to add the carryOut to next digit, until add to a not 9 number, or reaching all digits
// reaching all digits, set 0 to the pop value, and add 1, then push to new array
// using a for loop to pop and push every digit back to original array to get the right order

var plusOne = function (digits) {
  let digit = 0;
  let newArray = [];
  let carryOut = 1; // Tracking the adding carry out
  var recur = function (digits) {
    // Pop the last digit, add one carry out, push to a new array (will be opposite order)
    digit = digits.pop();
    if (digit) {
      if (digit + carryOut == 10) {
        // if equal to 10, keep the carry out and add to next last digit
        newArray.push(0); // push 0 to the new Array becasue 1+ 9 == 10;
        recur(digits); // call the function for adding  carryout to next digit
        return null; // exit from the function
      }
    } else {
      digit = 0; // if no digit, set it to 0, it means reaching the last digit of original array.
    }
    digit = digit + carryOut;
    newArray.push(digit); // push the added digit to the new Array
  };

  // call the recursion function
  recur(digits);

  // for loop to pop from new array and push to original array
  for (let i = newArray.length; i > 0; i--) {
    digits.push(newArray.pop());
  }
  return digits;
};

// test
//let array = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
let array = [9];
console.log(plusOne(array));
