// Program Structure
// Expressions and statements
1;
!false;

// Bindings
let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);
// → 100

// Practice:
let nine = 9;
console.log(nine * nine); //

// Practice 2:
let price = 1000000;
let discountRate = 0.15;
let discount = price * discountRate;

price = price - discount;

console.log(price); //

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1, two = 2;
console.log(one + two);
// → 3

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);

// Functions
prompt("Enter passcode");

// Return values
console.log(Math.max(2,4));

console.log(Math.min(2,4) + 100);

// Control flow
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

// Conditional execution
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {	// 1*
	console.log("Your number is the square root of " + theNumber * theNumber);
}
// 1: "Unless theNumber is not a number(NaN)." → the code becomes Positive statement: 
// It is a number.
// 1: "If it is not a string → It is a number." //

// Practice:
let theNumber = Number(prompt("Pick a number"))
if (!Number.isNaN(theNumber)) {
	console.log("Your number is the square root of " + theNumber * theNumber);
}
else if (Number.isNaN(theNumber)) {
	console.log("Make sure you enter number not other characters.");
} //

if (1 + 1 == 2) console.log("It's true");

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN) {
	console.log("Your number is the square root of " + theNumber * theNumber);
}
else {
	console.log("Hey. Why didn't you give me a number?");
}

let num = Number(prompt("Pick a number"));

if (num < 10) {
	console.log("Small");
}
else if (num < 100) {
	console.log("Medium");
}
else {
	console.log("Large");
}

// Practice:
var menu = "Enter 'sq' to get square number, 'minmax' to get greatest & least number.";
var square = "Pick any number to get the square number.";
var minMax = "Enter 'min' in order to get the minimum number and 'max' for the maximum number.";
var firstMin = "Enter two numbers and I will tell you which one is the least.";
var firstMax = "Enter two numbers and I will tell you which one is the greatest.";
var first = "Enter the first number:";
var second = "Enter the second number:";
var quit = "Enter 'quit' to end the program.";
var least = "The least number is ";
var greatest = "The greatest number is ";

while (true) {
	menuP = prompt(menu + '\n' + quit);
	if (menuP === 'quit') {console.log("Quit!"); break;}
	else if (menuP === 'sq') {
		squareP = prompt(square + '\n' + quit);
		if (squareP === 'quit') {console.log("Quit!"); break;}
		else {
			squareP = Number(squareP * squareP);
			console.log("The square of your number is " + squareP);
		}
	}
	else if (menuP === 'minmax') {
		minMaxP = prompt(minMax + '\n' + quit);
		if (minMaxP === 'quit') {console.log("Quit!"); break;}
		else if (minMaxP === 'min') {
			firstMinP = prompt(firstMin + '\n' + first + '\n' + quit)
			if (firstMinP === 'quit') {console.log("Quit!"); break;}
			else {
				firstMinP = Number(firstMinP);
				secondMinP = prompt(second + '\n' + quit);
				if (secondMinP === 'quit') {console.log("Quit!"); break;}
				else {
					secondMinP = Number(secondMinP);
					console.log(least + Math.min(firstMinP, secondMinP))
				}
			}
		}
		else {
		firstMaxP = prompt(firstMax + '\n' + first + '\n' + quit)
		if (firstMaxP === 'quit') {console.log("Quit!"); break;}
		else {
			firstMaxP = Number(firstMaxP);
			secondMaxP = prompt(second + '\n' + quit);
			if (secondMaxP === 'quit') {console.log("Quit!"); break;}
			else {
				secondMaxP = Number(secondMaxP);
				console.log(greatest + Math.max(firstMaxP, secondMaxP))
			}
		}
	}		
	}	
} //

// while and do loops
let number = 0;
while (number <= 12) {
	console.log(number);
	number = number + 2;
}

// Practice:
var number = 0;

while (number < 20) {
	number += 1;
	if (number % 2 === 0) {
		console.log(number);
	}
} //

let result = 1;
let counter = 0;

while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}

console.log(result);

// Practice:
// Make lines of number with power from 1 to 10 of number 2.
let exponent = 1;
let number = 2;

while (exponent < 10) {
	console.log(number);
	exponent = exponent + 1;
	number = number * 2;
} //

// Practice 2:
function generateEvenNumber(number, maxNum) {
	while (number < maxNum) {
		number = number + 1;
		if (number % 2 === 0) {
			console.log(number);
		}
	}
}

function generateOddNumber(number, maxNum) {
	while (number < maxNum) {
		number = number + 1;
		if (number %2 !== 0) {
			console.log(number);
		}
	}
} //

let yourName;

do {
	yourName = prompt("Who are you?");
} while (!yourName);

console.log(yourName);

// Indenting Code
if (false != true) {
	console.log("That makes sense.");
	if (1 < 2) {
		console.log("No surprise there.");
	}
}

// for loops
for (let number = 0; number <= 12; number = number + 2) {
	console.log(number);
}

// Practice (lines of number with power):
for (let counter = 0, result = 1; counter < 10; counter = counter + 1) {
	result = result * 2;
	console.log(result);
} //

let result = 1;

for (let counter = 0; counter < 10; counter = counter + 1) {
	result = result * 2;
}

console.log(result);

// Practice (build function to generate number with power):
function generatePowerResult(number, power) {
	let result = 1;
	for (let counter = 0; counter < power; counter = counter + 1) {
		result = result * number;
	}
	alert("The result of " + number + " power to " + power + " is:\n" + result);
	console.log("The result of " + number + " power to " + power + " is:\n" + result);
}

var num = "Enter a number to power:";
var pow = "Enter the number's power:";
var quit = "Enter 'quit' to end the calculator.";

while (true) {
	numP = prompt(num + '\n' + quit);
	if (numP === 'quit') {alert("Quit!"); console.log("Quit!"); break;}
	else {
		numP = Number(numP);
		powP = prompt(pow + '\n' + quit);
		if (powP === 'quit') {alert("Quit!"); console.log("Quit!"); break;}
		else {
			powP = Number(powP);
			generatePowerResult(numP, powP)
		}
	}
} //

// Breaking Out of a Loop
for (let current = 20; ;current = current + 1) {
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}

// Practice:
for (let number = 20; ;number = number + 1) {
	if (number % 7 == 0) {
		console.log(number);
		break;
	}
}

// Updating bindings succinctly
for (let number = 0; number <= 12; number += 1) {
	console.log(number);
}

// Practice:
for (let number = 0; number <= 9; number++) {
	console.log(number);
}

for (let number = 20; number != 0; number--) {
	console.log(number);
}

// Dispatching on a value with switch
switch (prompt("What is the weather like?")) {
	case "rainy":
	console.log("Remember to bring an umberella.");
	break;

	case "sunny":
	console.log("Dress lightly.");
	break;

	case "cloudy":
	console.log("Go outside.");
	break;

	default:
	console.log("Unknown weather type!");
	break;
}

// Practice:
switch (prompt("Choose your language:")) {
	case "spanish":
	console.log("Hola!");
	alert("Hola!");
	break;

	case "french":
	console.log("Bonjour!");
	alert("Bonjour!");
	break;

	case "german":
	console.log("Guten tag!");
	alert("Guten tag!");
	break;

	case "italian":
	console.log("Salve!");
	alert("Salve!");
	break;

	case "chinese":
	console.log("Nǐn hǎo!");
	alert("Nǐn hǎo!");
	break;

	default:
	console.log("Unknown language!");
	alert("Unknown language!");
	break;
} //

// Comments
//
/* */

// Exercises
// Looping a triangle
// Using for loop
for (let char = "", hash = "#"; char.length <= 7; char += hash) {
	console.log(char);
} 

for (let line = "#"; line.length < 8; line += "#")
console.log(line); //

// Using while loop
let char = "", hash = "#";

while (char.length < 7) {
	char += hash;
	console.log(char);
} 

let hash = "";

while (hash.length < 7) {
	hash += "#";
	console.log(hash);
} //

// FizzBuzz
for (let counter = 1; counter <= 100; counter++) {
	if (counter % 3 == 0 && counter % 5 == 0) {console.log("FizzBuzz");}
	else if (counter % 3 == 0) {console.log("Fizz");}
	else if (counter % 5 == 0) {console.log("Buzz");}
	else {console.log(counter);}
} //

for (let n = 1; n <= 100; n++) {
	let output = "";
	if (n % 3 == 0) {output += "Fizz";}
	if (n % 5 == 0) {output += "Buzz";}
	console.log(output || n);	//* Numbers: 15, 30, etc  = FizzBuzz. How "Fizz" & "Buzz" can be concatenated is due to the fact that
} //								the 1st if statement works so the output becomes output = "Fizz", so does the 2nd if statement
								//	that turns output = "Fizz" becomes output = "Fizz" + "Buzz". Below is the process:
								
								//	output = output("") + "Fizz"; (Due to the 1st if statement)
								//	 → output = "Fizz"  
								//	output = "Fizz" + "Buzz"; (Due to the 2nd if statement) 
								//	 → output = "FizzBuzz". 

// Chessboard
function generatePatterns(width, height) {
	let pattern = "", counter = 0, width2 = width, pattern2 = pattern;

	while (width > counter) {
		if (width % 2 != 0) {pattern = pattern + " ";}
		else {pattern = pattern + "#";}
		width--;
	}

	while (width2 > counter) {
		if (width2 % 2 != 0) {pattern2 = pattern2 + "#";}
		else {pattern2 = pattern2 + " ";}
		width2--;
	}

	while (height > counter) {
		if (height % 2 != 0) {console.log(pattern);}
		else {console.log(pattern2);}
		height--
	}
}

generatePatterns(8, 8); //

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {	//* Firstly, the 1st for loop runs (y++) which results in y = 1.
			board += " ";		// Then, the 2nd for loop runs(x++) that results in x = 1.
		} else {				// Next, inside the 2nd for loop: (x(1) + y(1)) = 2 % 2 == 0 generates
			board += "#";		// board = board + " " that results in board = " ". At this point,
		}						// the program still runs within the range of the 2nd for loop, that 
	}							// the beginning in this stage starts from the x++ not from y++,
	board += "\n";				// that in effect resulting in the increments of x :2(x) + 1(y), 3(x) + 1(y), 4(x) + 1(y), etc.,
}								// and at the same time concatenate the board with respective character. 
								
console.log(board); // The whole process can be explained by this example:				
					// The 1st stage (started from the 1st loop):
					// y++ = 1, x++ = 1.
					// (1(x) + 1(y)) = 2.
					// 2 % 2 == 0 → board = "" + " " → board = " ".
								
					// 2nd stage (started from the 2nd loop):
					// x++ → 2(x) + 1(y) = 3. 
					// 3 % 2 != 0 → board = " " + "#" → board = " #".

					// 3rd stage:
					// x++ → 3(x) + 1(y) = 4.
					// 4 % 2 == 0 → board = " #" + " " → board = " # ".

					// 4th, 5th, etc.

					// The 1st line of pattern would still run within the 2nd for loop 
					// until it reaches 9(x). After finishing all the works in the 
					// 2nd loop, the program reaches code board += "\n" which works to
					// enter a new pattern. Then, the program reaches the console.log
					// code that only prints the completed pattern that consists of 8 characters.
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {board += "#";}
	}
	board += "\n";
}

console.log(board);

// 1st stage (make a pattern):
let board = "";
for (let x = 0, count = 8; x < count; x++) {
	if (x % 2 == 0) {
		board += " ";
	} else {board += "#";}
}

console.log(board);

// 2nd stage (make 8 patterns → build one more for loop to generate more patterns.):
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if (x % 2 == 0) {
			board += " ";
		} else {board += "#";}
	}
	board += "\n";
}

console.log(board);
/* → # # # #
	 # # # #
	 # # # #
	 # # # #
	 # # # #
	 # # # #
	 # # # #
	 # # # #

The reason why the 1st character is " " is because the value of x in x % 2 == 0 is 0.
This is proven in the following example of a somewhat similar line of code:

for (let x = 0, count = 5; x < 5; x++) {
	console.log(x);
}
→ 0
  1
  2
  3
  4

Although within the for loop bracket there is x++, still the first output that comes
out is 0 and not x++ = 1, which then resulting in:
0 % 2 == 0 
→ board = (board)"" + " " = " ".

But at this point each pattern is the same with the 1st pattern,
so you need to write code that produce "#" as the 1st character out of odd number.
The method is to add x value with y value within the if's bracket: */

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {board += "#";}
	}
	board += "\n";
}

console.log(board);

/* The intention to use (x + y) is to generate even & odd values:
1. 1st for loop y = 0. (Y value is situated on the right position of the addition.)
2. 2nd for loop x = 0. (x value is situated on the left position of the addition.)
3. if ((0 + 0) = 0 % 2 == 0) {board = " "} → " ".
4. if ((1 + 0) = 1 % 2 != 0) {board = " " + "#"} → " #".
5. if ((2 + 0) = 2 % 2 == 0) {board = " #" + " "} → " # ".
6. etc. the 2nd for loop keeps repeating until x = 7. The 1st pattern is " # # # #".

7. The 2nd pattern starts with y++ → 1.
8. else ((0 + 1) % 2 != 0) {board = "" + "#"} → "#".
9. if ((1 + 1) % 2 == 0) {board = "#" + " "} → "# ".
10. else ((2 + 1) % 2 != 0) {board = "# " + "#"} → "# #".
11. etc. the 2nd for loop keeps repeating until x = 7. The 1st pattern is "# # # # ".

Both looping process can be summarized as follows:
(x(numbers on the left) + y(numbers on the right)):
0 = 1 + 0
	2 + 0
	3 + 0
	etc.	" # # # #" + "\n"

1 = 1 + 1
	2 + 1
	3 + 1
	etc.	" # # # #"
			"# # # # " + "\n"			
2 = 1 + 2
	2 + 2
	3 + 2
	etc.	" # # # #"
			"# # # # "
			" # # # #" + "\n"
			etc. */