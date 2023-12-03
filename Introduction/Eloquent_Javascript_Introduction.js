// Introduction
// On programming
let total = 0, count = 1;
while (count <= 10) {
	total += count;
	count += 1;
}

console.log(total);

// Practice:
let result = 0, array = 1;
while (array <= 10) {
	result += array;
	array += 1;
}

console.log(result); //

console.log(sum(range(1,10)));

// Typographic conventions
function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return factorial(n - 1) * n;
	}
}

console.log(factorial(8));

// The factorial function (symbol: !) says to multiply all whole numbers from our chosen number 
// down to 1.

// Examples:

//    4! = 4 × 3 × 2 × 1 = 24
//    7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
//    1! = 1

// Practice:
function factorial(number) {
	if (number == 0) {
		return number = 1;
	}
	else {
		return factorial(number - 1) * number;
	}
}

console.log(factorial(8)); //

// Practice 2:
function factorial(number) {
	var count = number;
	while (count >= 2) {
		count = count - 1;
		number = count * number;
	}
	return number;
}

factorial(8) //

