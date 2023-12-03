/* Chapter 5 
Higher-Order Functions */

// 1st Program
function sum(start, end) {
	let result = 0, count = start;
	while (total <= end) {
		result += total;
		total += 1;
	}
	return result;
}

console.log(sum(1, 5));

// 2nd Program
function range(start, end) {
	let array = [];
	for (let i = start; i <= end; i++) {
		array.push(i);
	}
	return array;
}

function sum(range) {
	let result = 0;
	for (let n of range) {
		result += n;
	}
	return result;
}

console.log(sum(range(1, 5)));

/* If we count the size of the definitions of sum and range, 
the second program is also big—even bigger than the first. 
But still, I’d argue that it is more likely to be correct.

It is more likely to be correct because the solution is 
expressed in a vocabulary that corresponds to the problem 
being solved. Summing a range of numbers isn’t about loops 
and counters. It is about ranges and sums. */

// Practice:
function sum(start, end) {
	let result = 0, count = start;
	while (count <= end) {
		result += count;
		count += 1;
	}
	return result;
}

console.log(sum(1, 5)); //

/* Abstraction
Abstracting repetition */
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

function repeatLog(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

repeating(10);

function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

repeat(10, console.log);

function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

/* "We don’t have to pass a predefined function to repeat. 
Often, it is easier to create a function value on the spot instead." EJ pg.135*/

let labels = [];

repeat(5, i => {
	labels.push(`Unit ${i + 1}`);
})

console.log(labels);

// Practice
// Sum :
function repeat(end, action) {
	for (let i = 0; i < end; i++) {
		action(i);
	}
}

let result = 0;
repeat(5, i => {
	result += i;
	i + 1;
})
console.log(result); //

// Higher-order functions
function greaterThan(n) {
	return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Practice
function smallerThan(n) {
	return a => a < n;
}

let smallerThan5 = smallerThan(5);
console.log(smallerThan5(4)); //

// Practice 2
function addition(a) {
	return b => a + b;
}

let addB = addition(5);
console.log(addB(2)); //

// Practice 3
function addN(n) {
	return m => m + n;
}
let addM = addN(10);
console.log(addM(5)); //

function noisy(f) {
	return (...args) => {
		console.log("calling with ", args);
		let result = f(...args);
		console.log("called with ", args, ", returned", result);
		return result;
	};
}

noisy(Math.min)(3, 2, 1);

// Practice
function noisy(f) {
	return (...args) => {
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with ", args, ", returned ", result);
		return result;
	}
}

noisy(Math.min)(3, 2, 1); //

// Practice 2
function noisy(f) {
	return (...args) => {
		console.log("calling with ", args);
		let result = f(...args);
		console.log("called with ", args, ", returned ", result);
		return result;
	}
}

noisy(Math.max)(1, 8, 9); //

// Practice 3
function noisy(f) {
	return (...args) => {
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with", args, "return", result);
		return result;
	};
}

noisy(Math.min) (3, 2, 1); //

function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

function unless(test, then) {
	if (!test) then();
}

repeat(3, n => {
	unless(n % 2 == 1, () => {
		console.log(n, " is even.");
	});
});

// Practice
function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

function unless(test, then) {
	if(!test) then();
}

repeat(3, n => {
	unless(n % 2 == 1, () => {
		console.log(n, " is even.");
	});
}); //

// Practice 2
function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}	
}

function unless(test, then) {
	if(!test) then();
}

repeat(10, n => {
	unless(n % 2 == 0, () => {
		console.log(`${n} is odd.`);
	});
}); //

["A", "B"].forEach(l => console.log(l));

// Practice
let array = ["John", "Joseph", "McGowann"];
array.forEach(name => console.log(name)); //

// Filtering arrays
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(filter(SCRIPTS, script => script.living));

// Practice
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(filter(SCRIPTS, script => script.living));

function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (!test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(filter(SCRIPTS, script => script.living)); //

// Practice 2
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (!test) passed.push(element);
	}
	return passed;
}

console.log(filter(SCRIPTS, script => script.living));

function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(SCRIPTS.filter(s => s.direction == "ttb"));

// Transforming with map
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(passed)) {
			passed.push(element);
		}
	}
	return passed;
}

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));

/* Function map is a good way if we want to take out data in an object, 
which is also within an array and put it into another array.*/

// Summarizing with reduce
function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// Practice
function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log(reduce([6, 7, 8, 9, 10], (a, b) => a + b, 0)); //

function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log([1, 2, 3, 4].reduce((a, b) => a + b)); //

/* If your array contains at least one element, 
you are allowed to leave off the start argument. 
The method will take the first element of the array 
as its start value and start reducing at the second element.*/

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0); 
}

console.log(SCRIPTS.reduce((a, b) => {
	return characterCount(a) < characterCount(b) ? b : a;
}));

// Practice
function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
	return characterCount(a) < characterCount(b) ? b : a;
})); //

// Composability
function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

let biggest = null;
for (let script of SCRIPTS) {
	if (biggest == null || characterCount(biggest) < characterCount(script)) {
		biggest = script;
	}
}

console.log(biggest);

// Practice
function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

let smallest = null;
for (let script of SCRIPTS) {
	if (smallest == null || characterCount(smallest) > characterCount(script)) {
		smallest = script;
	}
}

console.log(smallest); //

// Practice 2
function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

var units = [];
repeat(5, i => {
	units.push(`Unit ${i + 1}`);
});

console.log(units);

function filter(script, test) {
	let passed = [];
	for (let element of script) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

var livingScripts = SCRIPTS.filter(s => s.living);
console.log(map(livingScripts, s => s.name));

function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
	return characterCount(a) < characterCount(b) ? b : a;
})); //

function filter(script, test) {
	let passed = [];
	for (let element of script) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));

// Practice
function filter(script, test) {
	let passed = [];
	for (let element of script) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)))); //

let total = 0, count = 0;
for (let script of SCRIPTS) {
	if (script.living) {
		total += script.year;
		count += 1;
	}
}

console.log(Math.round(total / count));

// Practice
function average(scripts, category) {
	let total = 0, count = 0, test;	
	for (let script of scripts) {
		if (category == "living") test = script.living;
		else if (category == "dead") test = !script.living;
		else return "undefined";
		if (test) {
			total += script.year;
			count += 1;
		}
	}
	return Math.round(total / count);
}

console.log(average(SCRIPTS, "living")); //

// Strings and character codes
function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to; 
		})) {
			return script;
		}
	}
	return null;
}

console.log(characterScript(121));

// Practice
function characterScript(scripts, amount) {
	for (let script of scripts) {
		if (script.ranges.some(([from, to]) => {
			return amount >= from && amount < to;
		})) {
			return script;
		}
	}
	return null;
}

console.log(characterScript(SCRIPTS, 121)); //

let emojis = "🫁🧠";
console.log(emojis.length);
console.log(emojis[0]);
console.log(emojis.charCodeAt(0));
console.log(emojis.codePointAt(0));

let expressions = "😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹";
for (let expression of expressions) {
	console.log(expression);
}

// Recognizing text
function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

// Practice
function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2)); //

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

function characterScript(amount) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {	//*
			return amount >= from && amount < to;
		})) {
			return script;
		}
	}
	return null;
}

/* The codes at line 635 is the key to access items within ranges array. if (script.ranges.some(([from, to]) uses 
some() method that can return boolean values of an array. Indirectly, it can be translated as 
if (script.ranges.some(True)) {return script}; 
*/

function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");

	let total = scripts.reduce((n, {count}) => n + count, 0);
	if (total == 0) return "No scripts found";

	return scripts.map(({name, count}) => {
		return `${Math.round(count * 100 / total)}% ${name}`;
	}).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

/* Explanation
In order to understand what happen within the textScripts function, first of all we must see textScripts 
function as a function that is composed by the same functions and methods that can be found in the previous pages.
It's recommended that before analyzing the textScripts function we must understand how functions such as 
countBy, characterScript, filter, reduce, map and methods such as codePointAt, Math.round and join work. 

In the beginning, when one looks for just a few moments on the countBy calling, the very first question one may 
ask is how does the characterScript function take each character out of the text without loop within the 
Let scripts binding? The answer is the for loop that processes character are there within the countBy function. 

But then how does the char arrow function work within the countBy function? How does it process a character 
within the countBy function? The processes can be shown in this way: */

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

/* In the for loop, the 1st number taken is 1. Then, in the Let name binding there is groupName(item);. In this 
context, the groupName refers to the given groupName argument, that is n => n > 2. n in this case means number 
taken through for loop from items argument and currently it is 1. So, n => n > 2 means 1 => 1 > 2, 2 => 2 > 2, 
3 => 3 > 2, etc. Now, see how the same process works with an argument for groupName parameter in textScripts 
function. */

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = 英 => {
			let script = characterScript(英.codePointAt(0));
			return script ? script.name : "none";
		};
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

console.log(countBy('英国的狗说"woof", 俄罗斯的狗说"тяв"', char => {
	let script = characterScript(char.codePointAt(0));
	return script ? script.name : "none";
});

/* For the next explanation, we will explain the codes by adding or removing the discussed code and observe each 
result. By observing the result we can understand the purpose of adding a particular code. */

function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script;
	});
	return scripts;
}

textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"');

/* → Run using Mozilla
Array(4) [ {…}, {…}, {…}, {…} ]
0: Object { name: {…}, count: 11 }
count: 11
name: Object { name: "Han", direction: "ltr", year: -1100, … }
<prototype>: Object { … }
1: Object { name: null, count: 6 } null because quotation mark ("") is also taken into account.
2: Object { name: {…}, count: 4 }
3: Object { name: {…}, count: 3 } */

function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	});
	console.log(scripts);
}

textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"');

/* → Run using Mozilla
Array(4) [ {…}, {…}, {…}, {…} ]
0: Object { name: "Han", count: 11 }
1: Object { name: "none", count: 6 }
2: Object { name: "Latin", count: 4 }
3: Object { name: "Cyrillic", count: 3 } */

function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");
	console.log(scripts);
}

textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"');

/* → Run using Mozilla
Array(3) [ {…}, {…}, {…} ]
0: Object { name: "Han", count: 11 }
1: Object { name: "Latin", count: 4 }
2: Object { name: "Cyrillic", count: 3 } */

function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");

	let total = scripts.reduce((n, {count}) => n + count, 0);
	if (total == 0) return "No scripts found";
	console.log(total);
}

textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"');
// → 18

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  });
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → (3)['61% Han', '22% Latin', '17% Cyrillic']

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic 

// Practice
// → 61% Han, 22% Latin, 17% Cyrillic 33521
function analyzeUnicode(script, unicode) {
	let ranges = script.ranges, result;
	for (let range of ranges) {
        if (unicode >= range[0] && unicode <= range[1]) {
            result = script.name;
            break;
        }
    }
    return result;
}

function accessUnicodeInScript(unicode) {
	let result;
	for (let script of SCRIPTS) {
		let analyze = analyzeUnicode(script, unicode);
		if (analyze == script.name) {
            result = script.name;
            break;
        } else result = "Script not found in the data.";
	}
    return result;
}

function returnUnicodes(text) {
	let unicodes = [];
	for (let char of text) {
		let unicode = char.codePointAt(0);
		unicodes.push(unicode);
	}
	return unicodes;
}

function analyzeText(text) {
	let scriptNames = [], unicodes = returnUnicodes(text);
	for (let unicode of unicodes) {
		let name = accessUnicodeInScript(unicode);
		if (name != "Script not found in the data.") scriptNames.push(name);
	}
	return scriptNames;
}

function scriptFound(scriptNames, array) {
	let names = [], counts = [];
	for (let scriptName of scriptNames) {
		if (!(names.includes(scriptName))) {
			names.push(scriptName);
			counts.push(0);
		}
	}
	if (array == "names") return names;
	else if (array == "counts") return counts;
}

function countScript(scriptNames) {
	let counts = scriptFound(scriptNames, "counts"),
	names = scriptFound(scriptNames, "names");
	for (let scriptName of scriptNames) {
		if (names.includes(scriptName)) {
			let index = names.indexOf(scriptName);
			counts[index] += 1;
		}
	}
	return counts;
}

function scriptPercentage(numbers, scriptLength) {
	let percentages = [];
	for (let n of numbers) {
		let percent = Math.round((n * 100) / scriptLength);
		percentages.push(percent);
	}
	return percentages;
}

function showAnalysis(array1, array2) {
	let message = "";
	for (let i = 0; i < array1.length; i++) {
		let string = `${array1[i]}: ${array2[i]}%\n`;
		message += string;
	}
	return message;
}

function textAnalysis(text) {
	let scripts = scriptFound(analyzeText(text), "names"),
	totalScripts = countScript(analyzeText(text));

	let percentages = scriptPercentage(totalScripts, analyzeText(text).length),
	message = showAnalysis(scripts, percentages);
	return message;
}

console.log(textAnalysis('ᬅᬓ᭄ᬱᬭᬯ᭄ᬬᬜ᭄ᬚᬦ꧅ ꦟ꧀ꦢꦿ ꧅देवनागरी'));

// Exercises
// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce(arrays, (a, b) => [].concat(a, b), [])); //

// Your own loop
// Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function loop(value, test, update, body) {
	for (let i = value; test(i); i = update(i)) {
		body(i);
	}
}

loop(3, n => n > 0, n => n - 1, console.log);

function loop(value, test, update, body) {
	for (; test(value); value = update(value)) {
		body(value);
	}
}

loop(3, n => n > 0, n => n - 1, console.log); //

// Everything
function every(array, test) {
  // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

function every(array, test) {
	let result;
	if (array.length == 0) return true;
	else {
		for (let element of array) {
			if (test(element) == false) return false;
			else result = true;
		}		
	}
	return result;
}

console.log(every([], n => n < 10));

function every(array, test) {
	let result;
	if (array.length == 0) return true;
	else {
		for (let element of array) {
			if (test(element) == false) return false;
			else result = array.some(test);
		}		
	}
	return result;
}

console.log(every([2, 4, 16], n => n < 10)); //

// Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

function convertUnicodeToScript(unicode) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return unicode >= from && unicode < to;
		})) {
			return script;
		}
	}
	return null;
}

function convertCharToScriptName(text) {
	let scriptByChar = [];
	for (let char of text) {
		let script = convertUnicodeToScript(char.codePointAt(0));
        if (script != null) scriptByChar.push(script["name"]);
	}
	return scriptByChar;
}

function reduce(array) {
	let scriptFound = [], scriptCount = [], objects = [];
	SCRIPTS.forEach(script => {
		if (array.includes(script.name)) {
			scriptFound.push(script.name);
			scriptCount.push(0);
		}		
	});
	array.forEach(name => {
		let index = scriptFound.findIndex(script => script == name);
		scriptCount[index] += 1;
	});
	for (let i = 0; i < scriptFound.length; i++) {
		objects.push({script: scriptFound[i], total: scriptCount[i]});
	}
	return objects;
}

function dominantDirection(text) {
	let scripts = reduce(convertCharToScriptName(text)), 
	character = 0, name, direction;
	scripts.forEach(s => {
		if (s.total > character) {
			character = s.total;
			name = s.script;
		}
	});
	SCRIPTS.forEach(s => {
		if (s.name == name) direction = s.direction;
	})
	return direction;
}

console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(dominantDirection("ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ"));
console.log(dominantDirection("𞤀𞤣𞤤𞤢𞤥 𞤆𞤵𞤤𞤢𞤪"));
