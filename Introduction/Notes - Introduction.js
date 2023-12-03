// Notes

// Introduction
let result = 0, count = 1;
while (count <= 10) {
	result += count;
	count++;
}
console.log(result);

/* Notice that the operator "=" in "<=" or ">=" always have the characteristic that
takes the very same number as the limit. If instead the operator is "<" then the last
number would be 9. <= → 10, < → 9. */

function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return factorial(n - 1) * n;
	}
}

console.log(factorial(8));

/* Check the same code below for a more comprehensive explanation: */
function factorial(number) {
	if (number == 0) {
		return 1;
	} else {
		return factorial(number - 1) * number;
	}
}

console.log(factorial(5));

/* The way how the above program runs can be shown as follows:
function factorial(5) {
	if (5 == 0) {
		return 1;
	} else {
		return factorial(5 - 1) * 5; → (4) * 5 = 20
	}
}

function factorial(4) {
	if (4 == 0) {
		return 1;
	} else {
		return factorial(4 - 1) * 20; → (3) * 20 = 60
	}
}

function factorial(3) {
	if (3 == 0) {
		return 1;
	} else {
		return factorial(3 - 1) * 60; → (2) * 60 = 120
	}
}

function factorial(2) {
	if (2 == 0) {
		return 1;
	} else {
		return factorial(2 - 1) * 60; → (1) * 120 = 120
	}
}

function factorial(1) {
	if (1 == 0) {
		return 1;
	} else {
		return factorial(1 - 1) * 60; → (0) * 120 = 120
	}
}

function factorial(0) {
	if (0 == 0) {
		return 1; → 1 * 120 = 120

at this point n is equal to 0 which makes n becomes 1 (based on code at line 79th).
The thing which is not seen on the surface is that within the code "return 1" 
there is an operation of multiplication of 1 by 120.

This is proven if you change the code "return 1" that results in 120 into "return 2"
that results in 240. Check the following code: */
function factorial(n) {
	if (n == 0) {
		return 2; // 2) 2 * 120 = 240
	} else {
		return factorial(n - 1) * n; // 1) (0) * 120 
	}
}

console.log(factorial(5));
// 3) → 240

/* "How we can determine which operation happen within the return statement of the
first if statement?" It can be answered by the following codes:*/
function addition(n) {
	if (n == 0) {
		return 1;	// 2) 1 + 15 = 16
	} else {
		return addition(n - 1) + n;	// 1) (0) + 15
	}
}

console.log(addition(5));
// 3) → 16

/* The process is the same as how factorial function works but for this example
we change the operator sign to "+". 

We can determine which mathematical operator runs within the return statement at the
1st if statement by looking at the last return statement that is code at line number
104. The operator is " + n", thus making the last return operation as "1 + 15 = 16".