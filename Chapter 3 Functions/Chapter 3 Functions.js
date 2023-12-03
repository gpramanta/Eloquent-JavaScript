// Functions
// Defining a function
const square = function(x) {
	return x*x;
};

console.log(square(12));

// Practice:
function square(number) {
	return number * number;
}

console.log(square(9));

const square = function(number) {return number * number;};

console.log(square(5)); //

const makeNoise = function() {
	console.log("Pling!");
};

makeNoise();

const power = function(base, exponent) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};

console.log(power(2, 10));

// Practice:
function power(number, exponent) {
	let result = 1;
	for (let counter = 0; counter < exponent; counter++) {
		result = result * number;
	}
	return result;
}

console.log(power(2, 5));

function square(number) {
	return number * number;
}

console.log(square(9)); //

// Bindings and scopes
let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
}
// y is not visible here
console.log(x + z);

const halve = function(n) {
	return n / 2;
}

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

// Nested scope
const hummus = function(factor) {
	const ingredient = function(amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += "s";
		}
		console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

// Practice:
const jukutBejeg = function(factor) {
	const ingredient = function(amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) {
			unit += "s";
		}
		console.log(`${ingredientAmount} ${unit} ${name}`); // *
	};
	ingredient(250, "gr", "snake beans");
	ingredient(1, "litre", "fresh water");
	ingredient(0.5, "tsp", "salt");
	ingredient(30, "gr", "shallot");
	ingredient(15, "gr", "garlic");
	ingredient(6, "gr", "chillies");
	ingredient(2, "gr", "turmeric");
	ingredient(4, "gr", "aromatic ginger");
	ingredient(2, "", "candlenuts");
	ingredient(3, "tbsp", "chicken stock");
	ingredient(0.5, "tbsp", "palm sugar");
	ingredient(0.25, "tsp", "shrimp paste");
	ingredient(0.5, "tsp", "salt");
	ingredient(1, "tbsp", "vegetable oil");
	ingredient(60, "ml", "coconut milk");
};

jukutBejeg(2);

// * : ` ` or a string literal allows you to include JavaScript in a string easily.

let x = 10, y = 40;

console.log(`if we add ${x} to ${y} then the result would be ${x + y}.`); //

// Practice:
const sambal = function(factor) {
	let ingredient = function(quantity, unit, name) {
		let ingredientAmount = factor * quantity;
		if (ingredientAmount > 1) {
			unit += "s";
		}
	console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(8, "slice", "tomato");
	ingredient(2, "stick", "chilli");
	ingredient(2, "stick", "balinese chili");
	ingredient(3, "clove", "garlic");
	ingredient(3, "clove", "onion");
	ingredient(3, "seed", "candlenut");
	ingredient(1, "teaspoon", "vegan shrimp paste");
	ingredient(1, "teaspoon", "palm sugar");
	ingredient(1, "teaspoon", "mushroom broth");
	ingredient(1, "teaspoon", "salt");
	ingredient(1, "tablespoon", "sugar");
};

sambal(1); //

// Functions as values
let launchMissiles = function() {
	missileSystem.launch("now");
};
if (safeMode) {
launchMissiles = function() {/* do nothing */};
}

launchMissiles();

// Declaration notation
function square(x) {
	return x * x;
}

console.log(square(9));

console.log("The future says:", future());

function future() {
	return "You will never have flying cars";
}

// Practice:
console.log("Your full name is: ", name());

function name() {
	return "Komang Pramanta Gerinata";
} //

// Arrow functions
const power = (base, exponent) => {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};

console.log(power(2, 10));

// Practice:
const power = (base, exponent) => {
	let result = 1;
	for (let counter = 0; counter < exponent; counter++) {
		result *= base;
	}
	return result;
}

console.log(power(2, 10)); //

const square = (x) => {return x * x};
console.log(square(9));

const square = x => x * x;
console.log(square(5));

// Practice:
const square = (number) => {return number * number};
console.log(square(9));

const square = number => number * number;
console.log(square(5)); //

const horn = () => {
	console.log("Toot");
}

horn();

// Practice:
const fullName = () => {
	console.log("Komang Pramanta Gerinata");
}

fullName(); //

// The call stack
function greet(who) {
	console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");

function chicken() {
	return egg();
}

function egg() {
	return chicken();
}

console.log(chicken() + " came first.");

// Optional Arguments
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog")); //*
//* We defined square with only one parameter. Yet when we call it with three, 
// the language doesn’t complain. It ignores the extra arguments and computes 
// the square of the first one.

function minus(a, b) {
	if (b === undefined) return -a;
	else {return a - b;}
}

console.log(minus(10));

// Practice:
function minus(x, y) {
	if (y === undefined) return -x;
	else {return x - y;}
}

console.log(minus(5));
console.log(minus(5, 4));

function power(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}

console.log(power(4));
console.log(power(2, 6));

// Practice:
const power = function(base, exponent = 10) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	console.log(result);
}

power(2); //

console.log("C", "O", 2);

// Closure
function wrapValue(n) {
	let local = n;
	return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

// Practice:
function display(number) {
	let n = number;
	return () => n;
}

let display1 = display(5);
let display2 = display(9);

console.log(display1());
console.log(display2());

function square(number) {
	let n = number * number;
	return () => n;
}

let square1 = square(5);
let square2 = square(9);

console.log(square1());
console.log(square2()); //

function multiplier(factor) {
	return number => number * factor;
}

let twice = multiplier(2);

console.log(twice(5));

// Practice:
function multiplier(factor) {
	return number => number * factor;
}

let twice = multiplier(10);

console.log(twice(10)); 

// Recursion
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	}
	else {
		return base * power(base, exponent - 1);
	}
}

console.log(power(2, 3));

// Practice:
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	}
	else {
		return base * power(base, exponent - 1);
	}
}

console.log(power(9, 2)); 

function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}

console.log(power(5,3)); //

function findSolution(target) {
	function find(current, history) {	// current = 1 based on code line 390.
		if (current == target) {		// if current(1) == target(1) return history(1)
			return history;
		} else if (current > target) {	// if current (1) > target (e.g 0) return null
			return null;				// or if target is a number which cannot be
		} else {						// given the solution based on codes at lines no. 386 & 387 then the program will return "null."
			return find(current + 5, `(${history} + 5)`) ||
				find(current * 3, `(${history} * 3)`);
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));

Practice:
function findSolution(target) {
	function find(current, history) {
		if (target == current) {
			return history;
		} else if (target < current) {
			return null;
		} else {
			return find(current + 5, `(${history} + 5)`) || 
			find(current * 3, `(${history} * 3)`);
		}
	}
	return find(1, "1");
}

console.log(findSolution(35));

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 2, `(${history} + 2)`) ||
			find(current * 4, `(${history} + 2)`);
		}
	}
	return find(1, "1");
}

console.log(findSolution(10));

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, `(${history} + 5)`) || 
			find(current * 3, `(${history} * 3)`);
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));

function findCalculation(targetNumber) {
	function calculation(standard, operation) {
		if (standard == targetNumber) {
			return operation;
		} else if (standard > targetNumber) {
			return null;
		} else {
			return calculation(standard + 5, `(${operation} + 5)`) || 
			calculation(standard * 3, `(${operation} * 3)`);
		}
	}
	return calculation(1, "1");
}

console.log(findCalculation(24));

// Growing functions
function printFarmInventory(cows, chickens) {
	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(`${cowString} Cows`);

	let chickenString = String(chickens);
	while(chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);


function printZeroPaddedWithLabel(number, label) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {	//* The parameters consist of numbers
	printZeroPaddedWithLabel(cows, "Cows");			//* of the respective animals.
	printZeroPaddedWithLabel(chickens, "Chickens");
	printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);

// Practice:
function printFarmInventory(cows, chickens) {
	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(`${cowString} Cows`);
	let chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11); //

// Practice 2:
function numberAnimals(number, animal) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${number} ${animal}`);
}
function printNumberAnimals(cows, chickens, pigs) {
	numberAnimals(cows, "Cows");
	numberAnimals(chickens, "Chickens");
	numberAnimals(pigs, "Pigs");
}

printNumberAnimals(7, 11, 3); //

// Practice 3:
function numberAndAnimal(number, animal) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${numberString} ${animal}`);
}
function inputNumberAnimal(cows, chickens, pigs) {
	numberAndAnimal(cows, "Cows");
	numberAndAnimal(chickens, "Chickens");
	numberAndAnimal(pigs, "Pigs");
}

inputNumberAnimal(100, 100, 100); //

// Practice 4:
function totalAnimals(number, animal) {
	function noun() {
		if (number > 1) {return animal += "s";}
		else {return animal;}
	}

	if (number >= 100) {
		return String(number + " " + noun());
	} else if (number > 9) {
		return "0" + number + " " + noun();
	} else {return "00" + number + " " + noun();}
}

console.log(totalAnimals(7, "cow"));
console.log(totalAnimals(11, "chicken")); //

function zeroPad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = "0" + string;
	}
	return string;
}
function printFarmInventory(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);

// Practice:
function zeroPad(number, digit) {
	let string = String(number);
	while (string.length < digit) {
		string = "0" + string;
	}
	return string;
}

function printNumberAndAnimal(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printNumberAndAnimal(7, 11, 3); //

// Practice 2:
function printNumber(number, digit) {
	let string = String(number);
	while (string.length < digit) {
		string = "0" + string;
	}
	return string;
}

function numberPhones(huawei, samsung, apple) {
	if (huawei > 1) {
		console.log(`${printNumber(huawei, 3)} Huawei smartphones.`);
	} else {console.log(`${printNumber(huawei, 3)} Huawei smartphone.`);}
	if (samsung > 1) {
		console.log(`${printNumber(samsung, 3)} Samsung smartphones.`);
	} else {console.log(`${printNumber(samsung, 3)} Samsung smartphone.`);}
	if (apple > 1) {
		console.log(`${printNumber(apple, 3)} Apple iPhones.`);
	} else {console.log(`${printNumber(apple, 3)} Apple iPhone.`);}
}

numberPhones(7, 11, 3); //

// Functions and side effects
// Summary

// Define f to hold a function value
const f = function(a) {
	console.log(a + 2);
}

f(2);
// Practice:
const plusTwo = function(x) {
	console.log(x + 2);
}

plusTwo(5); //

// Declare g to be a function
function g(a, b) {
	return a * b * 3.5;
}

g(10, 10);

// Practice:
function multiplication(x, y) {
	return x * y * 0.01;
}

multiplication(10, 10); //

// A less verbose function value
let h = a => a % 3;

console.log(h(3));

// Practice:
let x = y => y % 3;

console.log(x(4));
// → 1

// Exercises
// Minimum
function min(number1, number2) {
	return Math.min(number1, number2);
}

console.log(min(1, 2));

function min(number1, number2) {
	console.log(Math.min(number1, number2));
}

min(1, 10); //

// Recursion
// Stage 1
function isEven(number) {
	if (number == 0) {
		return true;
	} else if (number == 1) {
		return false;
	} else {
		return isEven(number - 2);
	}
}

console.log(isEven(50));

// Stage 2
function isEven(number) {
	if (number == 0) {
		return true;
	} else if (number == 1) {
		return false;
	} else if (number < 0) {
		return isEven(-number);
	} else {
		number = isEven(number - 2);
	}
	return number;
}

isEven(-1);

function isEven(number) {
	if (number == 0) {
		return true;
	} else if (number == 1) {
		return false;
	} else if (number < 0) {
		return isEven(-number);
	} else {
		number = isEven(number - 2);
	}
	return number;
}

isEven(-1);

// Explaination:
function isEven(number) { // In this exercise, the last problem is to find out
	if (number == 0) {		// the solution if the argument given is a negative
		return true;		// number, e.g -1.
	} else if (number == 1) {	// The solution is to write a code that can change
		return false;			// the negative number into a positve one.
	} else if (number < 0) {
		return isEven(-number); // The way to change the negative number into positve
	} else {					// is by putting "-" operator before the parameter.
		number = isEven(number - 2);	// It works this way: --1 = 1
	}									//					  -+1 = -1
	return number;						// The argument can be seen changed into
}										// positive by calling "minus" function (line 731)
										// in the second version of the program.
isEven(-1);

function check(number) {
	let num = number;
	function minus(n) {
		check(-n);
		console.log(-n);
	}
	
	if (number == 0) {
		return true;
	} else if (number == 1) {
		return false;
	} else if (number < 0) {
		return minus(num); 
	} else {
		number = check(number - 2);
	}
	return number;
}

check(-5); //

// Bean counting
function countBs(argument) {
	let string = String(argument), b = "", x;
	for(let count = 0; count < string.length; count++) {
		x = string[count];
		if (x == "B") {
			b += "B";
		}
	}
	return b.length;
}

countBs("BaBi");

// Stage 2:
function countChar(word, character) {
	let string = String(word), char = String(character), result = "", x;
	for (let count = 0; count < string.length; count++) {
		x = string[count];
		if (x == char) {
			result += char;
		}
	}
	return result.length;
}

countChar("Komang Pramanta Gerinata", "a"); //

// Based on the book:
function countChar(string, ch) {
	let counted = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] == ch) {
			counted += 1;
		}
	}
	return counted;
}

function countBs(string) {
	return countChar(string, "B");
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k")); //

// Practice:
function countChar(word, character) {
	let count = 0;
	for (let x = 0; x < word.length; x++) {
		if (word[x] == character) {
			count++;
		}
	}
	return count;
}

function countBs(string) {
	return countChar(string, "B");
}

console.log(countChar("kukluxklan", "k"));

console.log(countBs("BiBiBuBuBuBap")); //

// Random Practices:
function power(number, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		number *= power(number, exponent - 1);
	}
	return number;
}

console.log(power(2, 10));

// Practice 2:
function isEven(number) {
	while(number > 0) {
		number -= 2;
	}
	console.log(number);
	if (number == 0) {
		return true;
	} else {return false;}
}

isEven(9);

function power(number, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		number *= power(number, exponent - 1);
	}
	return number;
}

console.log(power(2, 10));