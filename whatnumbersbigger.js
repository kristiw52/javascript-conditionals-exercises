/*
What number's bigger?

- Write a function named greaterNum that:
  - takes 2 arguments, both numbers.
  - returns whichever number is the greater (higher) number.
- Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// YOUR CODE GOES HERE


function greaterNumber(number1, number2) {
	if (number1 > number2) {
		return number1;
	} else {
		return number2;
	}
}
console.log(greaterNumber(10, 3));
console.log(greaterNumber(3, 10));
console.log(greaterNumber(10, 20));
