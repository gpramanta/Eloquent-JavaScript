/* Chapter 1 
Values, Types, and Operators */

/* Numbers
2.998e8

e = exponent.
2.998e8 = 2.998 x 10^8.
2.998 x 10^8 = 299,800,000. */

// Strings
/* "A newline character is written like "\n"." */

console.log("A newline character is written like \"\\n\".");

/* Notice that the formula to write special words is \"\word\". */

// Practice:
console.log("My name is \"\Komang Pramanta Gerinata\".");
console.log("My first name is \"\Komang\", middle name is \"\Pramanta\" and " + 
	"my last name is \"\Gerinata\"."); //

// Template Literals / Backtick-quoted strings,
/* "Half of 100 is ${`100 / 2`}." */

console.log(`Half of 100 is ${100 / 2}.`);

/* Note: the template literals always use `` inside the brackets and 
OUTSIDE the ${...} code. The pattern is:

(`${...}`). */

// Unary operators
console.log(typeof 13.5);
// → number
console.log(typeof "Geri");
// → string

/* Note: there is no need to add anything between typeof and the value. */

// Ternary Operator
console.log(true ? "Komang" : "komang");
// → Komang
console.log(false ? 25 : 24);
// → 24

/* Note: The value on the left of the question mark “picks” which of the other 
two values will come out. When it is true, it chooses the middle value, and when 
it is false, it chooses the value on the right. */



