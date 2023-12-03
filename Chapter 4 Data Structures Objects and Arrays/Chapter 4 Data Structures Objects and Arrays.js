// Data Structures: Objects and Arrays

// Data sets
let arrayOfNumbers = [2, 3, 5, 7, 11];

console.log(arrayOfNumbers[2]);
console.log(arrayOfNumbers[0]);
console.log(arrayOfNumbers[2 - 1]);

// Practice:
function printBits() {
	let bits = [128, 64, 32, 16, 8, 4, 2, 1];
	for (let count = 0; count < bits.length; count++) {
		console.log(bits[count]);
	}
}

printBits(); //

// Practice 2:
function createArray(firstNum, lastNum) {
	let array = [];
	for (; firstNum <= lastNum; firstNum++) {
		array.push(firstNum);
	}
	return array; 
}

console.log(createArray(1, 10));

// Practice 3:
let bits = [128, 64, 32, 16, 8, 4, 2, 1];

console.log(Math.max(bits[0], bits[1]));
console.log(bits.length);
console.log(bits["length"]);

// Methods
let doh = "doh";

console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

// Practice:
let hod = "HOD";

console.log(typeof hod.toLowerCase);
console.log(hod.toLowerCase()); 

let test = ["hello world"];
console.log(test[0].toUpperCase());

let bits = [128, 64, 32, 16, 8, 4, 2, 1]; 

console.log(Math.max(bits[0], bits[1])); /* Notice that the pattern is the following:
											location.function(variable[value]) */
console.log(typeof bits);
console.log(typeof bits[0]); //

// Practice 2:
let power = function (number, exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= number;
	}
	return result;
}

console.log(power(5, 2));
console.log(typeof power); //

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

// Practice:
let bits = [128];
bits.push(64);
bits.push(32);
bits.push(16);
bits.push(8);
bits.push(4);
bits.push(2);
bits.push(1);
console.log(bits); 
console.log(bits.pop());
console.log(bits); //

// Practice 2:
let numbers = [1];

numbers.push(2);
numbers.push(2, 3, 4);

console.log(numbers);

// Practice 3:
function range(min, max) {
	let array = [];
	for (; min <= max; min++) {
		array.push(min);		
	}
	return array;
}

console.log(range(1,5));

// Practice 4:
function quit() {
	alert("Quit!");
	return program = "Quit!";
}

let program = true;
let array = [];
while (program == true) {
	name = prompt("Tell me your name then I will save it in an array.");
	if (name == "quit") {quit();}
	else {
		array.push(name);
		console.log(array);
	}
} 

// Practice 5
let sequence = [];
sequence.push(7,8,9);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

// Objects
let day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;			// On the left side of the dot the word usually refers to location
console.log(day1.wolf);		// day1 as similar to dictionary in Python and console where we
							// we run codes.

// Practice:
let identity = {
	name: "Komang Pramanta Gerinata",
	sex: "Male",
};

console.log(identity.name);
console.log(identity.sex);
console.log(identity.age = 25);
identity.hobbies = ["reading"];
console.log(identity.hobbies);
identity.hobbies.push("listening to music");
console.log(identity.hobbies); //

// Practice 2:
let day1st = {};
day1st.outdoor = false;
day1st.activities = ["wash face", "jogging", "practice programming"];
day1st.activities.push("cooking");

console.log(day1st.outdoor);
console.log(day1st.indoor);
day1st.indoor = true;
console.log(`Indoor activity: ${day1st.indoor}`); //

let descriptions = {
	work: "went to work",
	"touched tree": "Touched a tree"
};

console.log(descriptions);

// Practice:
let fullName = {
	"First Name": "Komang",
	"Middle Name": "Pramanta",
	"Last Name": "Gerinata"
};
console.log(fullName);
console.log(fullName["First Name"]);
console.log(`My name is ${fullName["First Name"]} ${fullName["Middle Name"]} ${fullName["Last Name"]}`);
fullName["First Name"] = "John";
fullName["Middle Name"] = "Joseph";
fullName["Last Name"] = "McGowann";
console.log(fullName); //

let anObject = {left: 1, right: 3};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

// Practice:
let identity = {};
identity.name = "Komang Pramanta Gerinata";
identity.age = 25;
identity.hobbies = ["reading non-fiction books"];
identity.hobbies.push("listening to music");
identity.hobbies.push("playing badminton");
delete identity.hobbies[2]

console.log(identity); //

// Practice 2:
let identity = {
	"name" : "Komang Pramanta Gerinata",
	"city" : "Gianyar",
	"age" : 25
};

console.log(identity);
delete identity["age"];
console.log(identity);
console.log("name" in identity);
console.log("age" in identity);
delete identity["city"];
console.log(identity); //

// Practice 3:
function displayData(key, value) {
	for (let i = 0; i < key.length; i++) {
		console.log(`${key[i]}\'s\ favorite number is ${value[i]}.`);
	}
}

let name = "What's your name:",
number = "What's your favorite number:",
confirmation = "Would you like to let another person respond? (yes/no):",
names = [],
numbers = [];

while (true) {
	nameIn = prompt(name);
	if (nameIn == "quit") {break;}
	names.push(nameIn);

	numberIn = prompt(number);
	if (numberIn == "quit") {break;}
	numbers.push(numberIn);
	
	confirmIn = prompt(confirmation);
	if (confirmIn == "no") {
		displayData(names, numbers);
		break;
	}
	else if (confirmIn == "quit") {break;}
} //

console.log(Object.keys({x: 0, y: 0, z: 2}));

// Practice 4:
function power(base, exponent) {
	let result = 1, obj = {};
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	obj[`${base}^${exponent}`] = result; 
	return obj;
}

console.log(power(5, 2));

// Practice:
let countries = {
	indonesia : "Nusantara",
	malaysia : "Kuala Lumpur",
	singapore : "Singapore"
};

console.log(Object.keys(countries));

// Practice:
let organization = {
	asean : ["indonesia", "malaysia", "singapore", ],
	eu : ["uk", "france", "germany"]
};

console.log(Object.keys(organization)); //

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

// Practice:
let objectId = {
	name: "John Joseph"
};

console.log(objectId);
Object.assign(objectId, {age: 25, birthplace: "Denpasar"});
console.log(objectId);

let hobbies = ["listening to music", "reading non-fiction books", "playing badminton"];

Object.assign(objectId, {hobbies}); // If we want to arrange the data in order, it is wise to
console.log(objectId); //			// to put the new data within curly brackets after coma and
									// the previous value.

// Practice 2:
let id = {};
Object.assign(id, {name: "Komang Pramanta Gerinata"}, {age: 25}, {height: 173});
console.log(id);
Object.keys(id);
delete id.height;
console.log(id); //

// Practice 3:
let organizations = {};

Object.assign(organizations, {asean: []});
Object.assign(organizations, {eu: []});
organizations.asean.push("indonesia", "malaysia", "singapore");
organizations.eu.push("uk", "france", "germany");
console.log(organizations);
Object.keys(organizations);
delete organizations.asean[1];
console.log(organizations); //

let journal = [
	{events: ["work", "touched tree", "pizza"],
	squirrel: false},
	{events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
	squirrel: false},
	{events: ["weekend", "cycling", "break", "peanuts", "beer"]
	squirrel: true}
];

// Practice:
let journal2 = [];
journal2.push({events: ["work", "touched tree", "pizza"], squirrel: false})
console.log(journal2); //

// Practice 2:
let identity = [
	{friday: ["wash face", "learning JavaScript", "cooking", "taking nap", "reding articles"],
	work: false},
	{saturday: [friday],
	work: false}
]; //

// Mutability
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

// Practice:
let identity1 = {age: 25};
let identity2 = identity1;
let identity3 = {age: 25};

console.log(identity1.age == identity2.age); // The result is true because this
console.log(identity1.age == identity3.age); // specifically refers to the value.
											 // Meanwhile if the comparison is 
identity1.age = 26;							 // about the object "identity1 == identity3"
console.log(identity2.age);					 // then the result will be false as it is
console.log(identity3.age);					 // shown in Practice 2:

// Practice 2:
let person1 = {weight: 63};
let person2 = person1;
let person3 = {weight: 63};

console.log(person1 == object3);
// → false
console.log(person1.weight == person3.weight);
// → true //

// Practice 3:
let orgs = {
	asean: ["indonesia", "brunei", "cambodia"],
	un: orgs.asean
};

Object.assign(orgs, {un: [orgs.asean]});
console.log(orgs);
console.log(orgs.asean == orgs.un);
// → false //

const score = {visitor: 0, home: 0};
// This is okay
score.visitor = 1;
// This is not allowed
score = {visitor: 1, home: 1};

// Practice:
const identity = {name: "Komang", age: 25};
console.log(identity);

identity.name = "Pramanta";
identity.age = 26;
console.log(identity); //

// Practice 2:
const info = {height: 173, weight: 70};
info.weight = 63;
console.log(info); //

// The lycanthrope's log
let journal = [];

function addEntry(events, squirrel) {
	journal.push({events, squirrel});
} 

// Practice:
let identity = [];

function addInfo(name, age) {
	identity.push({name, age});
}

addInfo("Komang", 25);

console.log(identity); //

// Practice 2:
let organizations = [];
function orgs(name, country) {
	organizations.push({name: country})
}

orgs("asean", "indonesia");
console.log(organizations); //

// Practice 3:
let schedule = [];
function addActivity(activity, day) {
	schedule.push(activity, day);
}

addActivity(["wash face", "practice JavaScript programming", "cooking"], "monday");
console.log(schedule); //

let journal = [];
function addEntry(events, squirrel) {
	journal.push(events, squirrel);
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brush teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// Practice:
let schedule = [];
function addEntry(day, activities) {
	schedule.push(day, activities);
}
addEntry("friday", ["take bath", "have breakfast", "go to work"]);
addEntry("saturday", ["wash face", "practice programming", "have breakfast"]);
console.log(schedule); //

// Computing correlation
function phi(table) {
	return ((table[3] * table[0]) - (table[2] * table[1])) / 
	Math.sqrt((table[2] + table[3]) * 
		(table[0] + table[1]) * 
		(table[1] + table[3]) * 
		(table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

// Practice:
function phiCoeff(table) {
	return ((table[3] * table[0]) - (table[2] * table[1])) / 
		Math.sqrt((table[2] + table[3]) * 
			(table[0] + table[1]) * 
			(table[1] + table[3]) * 
			(table[0] + table[2]));
}

console.log(phiCoeff([76, 9, 4, 1])); //

// Practice 2:
function phiCff(t) {
	return ((t[3] * t[0]) - (t[2] * t[1])) / 
		Math.sqrt((t[0] + t[1]) *
		(t[2] + t[3]) *
		(t[0] + t[2]) *
		(t[1] + t[3]));
}

console.log(phiCff([76,9,4,1])); //

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) {index += 1;}
		if (entry.squirrel) {index += 2;}
		table[index] += 1;
	}
	return table;
}

console.log(tableFor("pizza", JOURNAL));

/* Practice 1:
This practice is intended to create this table: [6, 0, 0, 0] */
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false}
];

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)) {index += 1;}
		if (entry.squirrel) {index += 2;}
		table[index] += 1; 
	}
	return table;
}

console.log(tableFor("pizza", JOURNAL)); //

// Array loops
for (let i = 0; i < JOURNAL.length; i++) {
	let entry = JOURNAL[i];
}

for (let entry of JOURNAL) {
	console.log(`${entry.events.length} events`);
} 

// Practice (copy paste the array on the My Journal.js to the console):
for (let entry of myJournal) {
	console.log(`${entry.foods.length} foods.`);
} //

// Practice 2:
function printFarmInventory(animals) {
	for (let animal of animals) {
		console.log(`I have a ${animal}.`);
	}
}

printFarmInventory(["dog","cow","cat"]); //

// The final analysis
function journalEvents(journal) {
	let event = [];
	for (let entry of journal) {
		for (let events of entry.events) {
			if (!event.includes(events)) { // If (events) does not exist in event
				event.push(events);		   // do this: event.push(events)
			}
		}
	}
	return event;
}

console.log(journalEvents(JOURNAL));

// Practice:
function eventArray(journal) {
	let event = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!event.includes(event)) {
				event.push(events);
			}
		}
	}
	return event;
}

console.log(eventArray(JOURNAL)); //

// See all the correlation
for (let event of journalEvent(JOURNAL)) {
	console.log(event + ":", phi(tableFor(event, JOURNAL)));
} //

/* Let’s filter the results to show only 
correlations greater than 0.1 or less than -0.1. */
for (let event of journalEvent(JOURNAL)) {
	let correlation = phi(tableFor(event, JOURNAL));
	if (correlation > 0.1 || correlation < -0.1) {
		console.log(`${event}: ${correlation}`);
	}
}

for (let entry of JOURNAL) {
	if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
		entry.events.push("peanut teeth");
	}
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));

// Further arrayology
let todoList = [];
function remember(task) {
	todoList.push(task);
}
remember("wake up");
remember("take a bath");
remember("practice programming in JavaScript");
console.log(todoList);

function getTask() {
	return todoList.shift();
}
console.log(getTask());
console.log(todoList);

function rememberUrgently(task) {
	todoList.unshift(task);
}
rememberUrgently("check smartphone");
console.log(todoList);

// Practice:
let toDoList = [];
function remember(event) {
	toDoList.push(event);
}
remember("take a bath");
remember("practice programming in JavaScript");
remember("have a breakfast");
console.log(toDoList);

function getTask() {
	return toDoList.shift();
}
console.log(getTask());
console.log(toDoList);

function rememberUrgently(task) {
	toDoList.unshift(task);
}
rememberUrgently("wake up");
console.log(toDoList); //

console.log([1,2,3,2,1].indexOf(2));
console.log([1,2,3,2,1].lastIndexOf(2));

// Practice:
function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

let events = journalEvents(JOURNAL);
console.log(events.indexOf("weekend"));
console.log(events.indexOf("brushed teeth"));
console.log(events.lastIndexOf("peanuts")); //

console.log([0, 1, 2, 3, 4].slice(2,4));
console.log([0, 1, 2, 3, 4].slice(2));

// Practice:
function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

let events = journalEvents(JOURNAL);
console.log(events);
console.log(events.slice(0, 4));
console.log(events.slice(4, 9)); //

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1);
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

// Practice
function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}

let events = journalEvents(JOURNAL);
console.log(events);
console.log(remove(events, 2)); //

// Practice 2:
function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}

let foods = journalEvents(myJournal);
console.log(foods);
console.log(remove(foods, 5)); //

// Practice 3:
console.log(remove("foods", 4));
// → food //

// Strings and their properties
console.log("coconuts".slice(4, 7));
console.log("coconut".indexOf("u"));

console.log("one two three".indexOf("ee"));

console.log(" okay \n ".trim());

// Practice:
console.log("Komang Pramanta Gerinata".indexOf("G"));
console.log(" Komang Pramanta Gerinata \n ".trim()); //

console.log(String(6).padStart(3, "0"));

// Practice:
console.log(String(99).padStart(5, "0")); //

let sentence = "Secretarybirds specialize in stomping.";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));

console.log("LA".repeat(3));

let string = "abc";
console.log(string.length);
console.log(string[1]);

// Rest Parameters
function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) {result = number;}
	}
	return result;
}

console.log(max(4, 1, 9, -2));

// Practice:
function maxNum(...numbers) {
	let result = -Infinity;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > result) {result = numbers[i];}
	}
	return result;
}

console.log(maxNum(-1,11,10,9,8,7)); //

function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) {result = number;}
	}
	return result;
}

let numbers = [5, 1, 7];
console.log(max(...numbers));

// Practice:
function maximum(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) {result = number;}
	}
	return result;
}

let num = [2,7,8,9,10,11];
console.log(maximum(5, ...num, 1)); //

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);

// Practice:
let name = ["Komang", "Pramanta", "Gerinata"];
console.log(["My", "name", "is", ...name, "."]); //

// The Math object
function randomPoint(radius) {
	let angle = Math.random() * 2 * Math.PI;
	return {x: radius * Math.sin(angle), y: radius * Math.cos(angle);}
}

console.log(randomPoint(2));

// Practice:
function randomCosSin(radius) {
	let angle = Math.random() * 5 * Math.PI;
	return {x: radius * Math.sin(angle), y: radius * Math.cos(angle)};
}

console.log(randomCosSin(3));

// Practice 2: SohCahToa
function sinCosTan(fnction, angle, opposite, hypotenuse, adjacent) {
	let sin = opposite / hypotenuse,
	cos = adjacent / hypotenuse,
	tan = opposite / adjacent;
	if (fnction == "sin" || fnction == "sine") {
		return `sin ${angle} = ${sin}.`;
	}
	else if (fnction == "cos" || fnction == "cosan") {
		return `cos ${angle} = ${cos}.`;
	}
	else if (fnction == "tan" || fnction == "tangent") {
		return `tan ${angle} = ${tan}.`;
	}
}

console.log(sinCosTan("sin", 35, 2.8, 4.9, 4)); //

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.random() * 10);

// Practice:
console.log(Math.floor(Math.random() * 11)); //

console.log(Math.ceil(Math.random() * 11));

console.log(Math.ceil(9.3));
// → 10
console.log(Math.round(9.3));
// → 9
console.log(Math.abs(-10));
// → 10

// Destructuring
function phiCoefficient(table) {
	return ((table[3] * table[0]) - (table[2] * table[1])) / 
		Math.sqrt(
			(table[2] + table[3]) * 
			(table[0] + table[1]) * 
			(table[1] + table[3]) * 
			(table[0] + table[2]));
}

function phiCoefficient([n11, n00, n10, n01]) {
	return ((n11 * n00) - (n10 * n01)) / 
		Math.sqrt(
			(n01 + n11) * (n00 + n10) *
			(n10 + n11) * (n00 + n01));
}

console.log(phiCoefficient([1, 76, 9, 4]));

// Practice:
function journalEvents(journal) {
	let events = [];
	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}
// E.g. pizza: [1,76,9,4]
function tableFor(event, journal) {
	let table = [0,0,0,0], index;
	for (let entry of journal) {
		if (entry.events.includes(event) && entry.squirrel) {
			index = 0; table[index] += 1;
		}
		else if (!entry.events.includes(event) && !entry.squirrel) {
			index = 1; table[index] += 1;
		}
		else if (entry.events.includes(event) && !entry.squirrel) {
			index = 2; table[index] += 1;
		}
		else if (!entry.events.includes(event) && entry.squirrel) {
			index = 3; table[index] += 1;
		}						 
	}
	return table;
}
// E.g. pizza: [1,76,9,4], 5×85×10×80
function phiCoefficient([n11,n00,n10,n01]) {
	return ((n11 * n00) - (n10 * n01)) / 
	Math.sqrt((n11 + n01) * (n00 + n10) * 
		(n11 + n10) * (n00 + n01));
}

for (let event of journalEvents(JOURNAL)) {
	console.log(`${event}: ${phiCoefficient(tableFor(event, JOURNAL))}`);
} //

let {name} = {name: "Faraji", age: 23};
console.log(name);

// Practice:
let {age} = {name: "Faraji", age: 23};
console.log(age);

let {place, birthdate} = {
	name: "Geri", 
	age: 26, 
	place: "Denpasar", 
	birthdate: "08-12-1996"
};
console.log(place, birthdate); //

// JSON
{
	"squirrel": false,
	"events": ["work", "touched tree", "pizza", "running"]
}

// Practice:
var JOURNAL = {
	squirrel:false,
	events:["peanuts","carrot","exercise","weekend","bread"];
}
console.log(JOURNAL); //

let string = JSON.stringify({
	squirrel:false,
	events:["weekend"]
});
console.log(string);
console.log(JSON.parse(string).events);

// Practice:
let data = JSON.stringify({
	name: "Geri",
	age: 26,
	birthplace: "Denpasar"
})
console.log(data);
console.log(JSON.parse(data).birthplace); //

// Exercises
// The sum of a range
function range(start, end, step) {
	let array = [];
	if (step) {
		if (step < 0) {
			step = Math.abs(step);
			for (let i = start; i >= end; i -= step) {
				array.push(i);
			}
		} else {
			for (let i = start; i <= end; i += step) {
				array.push(i);
			}	
		}
	} else {
		for (let i = start; i <= end; i++) {
			array.push(i);
		}		
	}
	return array;
}

console.log(range(5, 2, -1));

function sum(array) {
	let result = 0;
	for (let number of array) {result += number;}
	return result;
}

console.log(sum(range(1, 10, 2)));

// Reversing an array
function reverseArray(array) {
	const LENGTH = array.length;
	let newArray = [];
	for (let item of array) {
		newArray.unshift(item);
	}
	return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArray(array) {
	let newArray = [];
	for (let i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray(["Komang", "Pramanta", "Gerinata", 
	"John", "Joseph", "McGowann"]));

let names = ["Komang", "Pramanta", "Gerinata", "John", "Joseph", "McGowann"];

function reverseArrayInPlace(array) {
	let half = Math.floor(array.length / 2);
	for (let i = 0; i < half; i++) {
		let tmp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = tmp;
	}
	return array;
}

console.log(reverseArrayInPlace(names));

// Practice
function reverseArrayInPlace(array) {
	let half = Math.floor(array.length / 2);
	for (let i = 0; i < half; i++) {
		let temporary = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temporary;
	}
}

let numbers = [1, 2, 3, 4, 5];
reverseArrayInPlace(numbers);
console.log(numbers); //

// Practice 2:
function chessTable(char1, char2, size) {
	let table = "";
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			if ((x + y) % 2 == 0) {table += char1;}
			else {table += char2;}
		}
		table += "\n";
	}
	return table;
}

console.log(chessTable("&", "#", 10));

// Practice 3:
var wholeNum = [], primeNum = [];

function primeWhole(number) {
	let data = []
	for (let i = 2; i < number; i++) {
		if (number % i == 0) {data.push(true);}
		else {data.push(false);}
	}
	if (!data.includes(true)) {primeNum.push(number);}
	else {wholeNum.push(number);}
}

for (let n = 2; n < 20; n++) {
	primeWhole(n);
}

console.log(primeNum); //

// A List
let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: {
				value: 4,
				rest: null
			}
		}
	}
};

function arrayToList(array) {
	let list;
	for (let i = array.length - 1; i >= 0; i--) {
		list = {value: array[i], rest: list};
		if (list.rest == undefined) {list.rest = null;}
	}
	return list;
}

// A List (A More Readable Version)
function range(start, end) {
	let arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

function arrayToList(arr) {
	let list;
	for (let i = arr.length; i >= 0; i--) {
		list = {value: arr[i], rest: list};
		if (list.value == arr.length) list.rest = null;
	}
	return list;
}

console.log(arrayToList(range(1, 3)));

// A List (Using .slice(-1))
function arrToList(arr) {
	let list;
	for (let i = arr.length - 1; i >= 0; i--) {
		list = {value: arr[i], rest: list};
		if (list.value == arr.slice(-1)) list.rest = null;
	}
	return list;
}

console.log(arrToList([1,2,3])); //

function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

// My Version of ListToArray
function listToArray(list) {
	let arr = [];
	while (typeof list == 'object') {
		if (list.rest == null) {
			arr.push(list.value);
			break;
		} else {
			arr.push(list.value);
			list = list.rest;			
		}
	}
	return arr;
}

console.log(listToArray(arrayToList(range(1, 3))));

function prepend(element, list) {
	return {value: element, rest: list};
}

function nth(list, number) {
	let array = listToArray(list);
	return array[number];
}

function nth(list, n) {
	if (n === 0) {return list.value;}
	else {return nth(list.rest, n - 1);}
}

/* How the recursive version of nth above works is similar to how
many steps one can have in order to move forward to the destination 
based on the total number of dice'eyes in a monopoly game.

Let's say the n parameter is the number of steps given and 
list.rest are boxes that represent locations/destinations in a monopoly game.
If n = 0 that means the goal is to move to the location number 0 
and return its list.value. if n = 3 that means we have 4 steps (0,1,2,3) and 
every one step that we take the recursion also decrement the n until it becomes
0. At that time the recursion finally arrives at the location and return the
list.value. The process can be summarized in this way:

function (list, 3) {
	if (n === 0) {return list.value;}
	else {return nth(list.rest, n - 1);}
	list = {
		value: 10,
		rest: {
		nth(list.rest, 3 - 1 = 2);		
			value: 5,
			rest: {
			nth(list.rest, 2 - 1 = 1);
				value: 9,
				rest: {
				nth(list.rest, 1 - 1 = 0); because n becomes 0
					value: 13,				the recursion returns
					rest: null				list.value based on the
				}							1st condition:
			}							if (n === 0) {return list.value;}	
		}
	};
} 

So the whole point of this particular recursion is the function keeps
running through list.rest and finally stops until the n = 0 */

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 2));
console.log(nth(list, 2));

// GitHub Version:
function prepend(value, rest) {
	return {value: value, rest: rest};
}

function nth(list, n) {
	return listToArray(list)[n];
}

// Practice:
function arrayToList(arr) {
	let list;
	for (let i = arr.length - 1; i >= 0; i--) {
		list = {value: arr[i], rest: list};
		if (list.rest == undefined) {list.rest = null}
	}
	return list;
}

function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function prepend(element, list) {
	return {value: element, rest: list};
}

function nth(list, number) {
	if (number == 0) {return list.value;}
	else {return nth(list.rest, number - 1);}
}

console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(9, list));
console.log(nth(list, 3));

// Deep comparison
// My Version based on codes that I found on Internet
var obj = {here: {is: "an"}, object: 2}; 

function deepEqual(x, y) {
	if (x === y) return true;
	if ((typeof x != "object" || x == null) || 
		(typeof y != "object" || y == null)) return false;
	var propsIn1 = 0, propsIn2 = 0;
		for (var prop in x)
			propsIn1 += 1;
		for (var prop in y) {
			propsIn2 += 1;
			if (!(prop in x) || (!deepEqual(x[prop], y[prop]))) return false; 
		}
	return propsIn1 == propsIn2;
}

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

/* This part of property "here: {is: "an"}" cannot be compared 
directly as it will return false even both are practically the same. 
Thus the solution is to make a deepEqual function for deeper comparison. */

/* One important lesson about this function is that in order to make an
efficient if statements one should prioritize making the negative statement first
as the total probabilities/requirements of condition is less than the one in positve
statements. */

// Other's version:
var obj = {here: {is: "an"}, object: 2};

function deepEqual(a, b) {
	if (a === b) return true;
	if (a == null || typeof a != "object" || b == null || typeof b != "object") 
		return false; 
	var propsInA = 0, propsInB = 0; 
	for (var prop in a) 
		propsInA += 1;    
	for (var prop in b) {
		propsInB += 1; 
		if (!(prop in a) || !deepEqual(a[prop], b[prop])) 
			return false;
	}
	return propsInA == propsInB;
}

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

// From: (https://stackoverflow.com/questions/59218035/eloquent-javascript-exercise-deep-comparison)
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length != keysB.length) return false;
  for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

// Practice
function deepEqual(a, b) {
	if (a === b) return true;
	if (a == null || typeof a != 'object' || b == null || typeof b != 'object') return false;
	let keysA = Object.keys(a), keysB = Object.keys(b);
	for (let key of keysA) {
		if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
	}
	return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
