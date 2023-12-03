// Strings
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'

var text = "A new line character is written like \\"\n"\ .";

console.log(text);

// Practice:
var text = "I want to add \"\\n\" in my book.";

console.log(text); //

var message = `Half of 100 is ${100 / 2}`;

console.log(message);

// Practice:
var message = "Enter your salary and I will tell you the half of amount of it:";
var quit = "Enter 'quit' to stop the program.";

while (true) {
	sallary = prompt(message + '\n' + quit);
	if (sallary === 'quit') {console.log("Quit!"); break;}
	else {
		sallary = Number(sallary);
		console.log(`The half amount of your salary is ${sallary / 2}.`); // Only works by using ``,
	}																		// $ and {}.
}	//

// Unary operators
console.log(typeof 4.5);

console.log(typeof "x");

console.log(- (10 - 2));

// Practice:
console.log(typeof 13);
console.log(typeof "Hello world!");
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {name: "john"}); //

console.log(- (-10 - 3)); // -13

// Boolean values
// Comparison
console.log(3 > 2);
// → true
console.log(3 < 2);
// → false

console.log("Aardvark" < "Zoroaster");

// Practice:
console.log("name" > "Name"); // → true
console.log("hello" > "Hello World"); // → true //

console.log("Itchy" != "Scratchy");
// → true
console.log("Apple" == "Orange");
// → false

// Practice:
console.log("Itchy" == "Itchy");
console.log("apple" != "Apple"); //

console.log(NaN == NaN);
// → false

// Logical operators
console.log(true && false);
// → false
console.log(true && true);
// → true

// Practice
var weightRequirement = 60;
var heightRequirement = 170;

var weightP = "Enter your weight:";
var heightP = "Enter your height:";
var quitP = "Enter 'quit' to end the program.";
var eligible = "You are eligible to ride a rollercoaster.";
var ineligible = "You are not eligible to ride a rollercoaster.";

while (true) {
	weight = prompt(weightP + '\n' + quitP);
	if (weight === 'quit') {console.log("Quit!"); break;}
	else {
		weight = Number(weight);
		height = prompt(heightP + '\n' + quitP);
		if (height === 'quit') {console.log("Quit!"); break;}
		else {
			height = Number(height);
			if (weight === weightRequirement && height === heightRequirement) {
				console.log(eligible);
			}
			else {console.log(ineligible);}
		}
	}
} //

console.log(false || true);

console.log(false || false);

// Practice:
var gradeP = "Tell me your grades and I will tell you whether you pass or fail.\nYour first grade:";
var gradeP2 = "Your second grade:";
var quitP = "Enter 'quit' to end the program.";
var pass = "Congratulations!\nYou pass the final exams!";
var fail = "Sorry, you fail your final exams.";

while (true) {
	grade1 = prompt(gradeP + '\n' + quitP);
	if (grade1 === 'quit') {console.log("Quit!"); break;}
	else {
		if (grade1 === 'a') {grade1 = true;}
		else if (grade1 === 'b') {grade1 = true;}
		else {grade1 = false;}
		
		grade2 = prompt(gradeP2 + '\n' + quitP);
		if (grade2 === 'quit') {console.log("Quit!"); break;}
		else {
			if (grade2 === 'a') {grade2 = true;}
			else if (grade2 === 'b') {grade2 = true;}
			else {grade2 = false;}

			var result = grade1 || grade2;
			if (result === true) {console.log(pass);}
			else {console.log(fail);}
		}
	}
} //

1 + 1 == 2 && 10 * 10 > 50;

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

// Practice:
var myAge = 25;
var prediction = 23;

console.log(true ? myAge : prediction);
// → 25
console.log(false ? myAge : prediction);
// → 23 //

// Automatic type conversion
console.log(8 * null);
// → 0
console.log('4' - 1);
// → 3
console.log('5' + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true

// Practice:
console.log(13 * null);
console.log('9' - 1);
console.log('10' + 1);
console.log("ten" * 10);
console.log(true == 1); //

console.log(null == undefined);
// → true
console.log(null == 0);

// Practice:
console.log(null == null);
// → true
console.log(undefined == undefined);
// → true
console.log(undefined == 1);
// → false //

// Short-circuiting of logical operators
console.log(null || "user");
// → user
console.log("Agnes" || "user");
// → Agnes

// Practice:
console.log(null || "person");
console.log(undefined || "person");
console.log("john" || "joseph");

console.log(0 || -1);
console.log(NaN || "john");
console.log("" || "!?");

console.log(0 && 1);
console.log(null && "person");
console.log(-100 && -20); //


