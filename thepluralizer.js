/*
The Pluralizer

- Write a function named pluralize that:
  - takes 2 arguments, a noun and a number.
  - returns the number and pluralized form, like "5 cats" or "1 dog".
- Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// YOUR CODE GOES HERE
	function pluralize(noun, number) {
		if (number != 1) {
			return number + ' ' + noun + 's';
		} else {
			return number + ' ' + noun;
		}
	}
	console.log('I have ' + pluralize('cat', 1));
	console.log('I have ' + pluralize('dog', 2));
	console.log('I have ' + pluralize('bird', 2));

