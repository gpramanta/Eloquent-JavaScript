/* Chapter 3 
Functions */

// Arrow functions
const power = (number, exponent) => {
	let result = 1;
	while (exponent > 0) {
		result *= number;
		exponent--;
	}
	return result;
}

console.log(power(2, 10));

// Recursion
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}

console.log(power(2, 10));

/* Notes: The code "exponent - 1" at the 2nd return statement cannot be simplyfied
into "exponent--" as it results in error.

This type of recursion in which 'base' is multiplied by the same 'base' at the return
statement is used usually in a function in which there is a same mathematical
operation that involves some number. E.g. power, 2^3 = 2 x 2 x 2. Thus the function
shold have a system within it that operates using the same number. 