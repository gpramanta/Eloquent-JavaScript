// TEST
function quit() {
	alert("Quit!");
	return program = "Quit!";
}

// Looping a triangle (EJ pg.59)
function loopTriangle(character, numberLoop) {
	for (let count = 0, char = ""; count < Number(numberLoop); count++) {
		char += character;
		console.log(char); 
	}
}

let charType = "Enter your selected character:";
let numLoop = "Enter number of loop:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	charTypeIn = prompt(charType + "\n" + quit);
	if (charTypeIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	numLoopIn = prompt(numLoop + "\n" + quit);
	if (numLoopIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}	
	loopTriangle(charTypeIn, numLoopIn);
}

// My Version of Triangle with improvements
function triangle(size, character) {
	let result = character, array = [];
	while (result.length <= size) {
		array.push(result);
		result += character;
	}
	let rightTriangle = "";
	for (let char of array) {
		rightTriangle += char;
		rightTriangle += "\n";
	}
	return rightTriangle;
}

console.log(triangle(5, "%")); //

// FizzBuzz (EJ pg.59)
function printFizzBuzz(limit1, limit2, divNum1, divNum2) {
	for (let count = Number(limit1); count <= Number(limit2); count++) {
		if (count % Number(divNum1) == 0 && count % Number(divNum2) == 0) {
			console.log("FizzBuzz");
		} else if (count % 3 == 0) {
			console.log("Fizz");
		} else if (count % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(count);
		}	
	}
}

let lim1 = "Enter the first limit:";
let lim2 = "Enter the second limit:";
let diviNum1 = "Enter the first divisible number:";
let diviNum2 = "Enter the second divisible number:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	lim1In = prompt(lim1 + "\n" + quit);
	if (lim1In == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	lim2In = prompt(lim2 + "\n" + quit);
	if (lim2In == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	diviNum1In = prompt(diviNum1 + "\n" + quit);
	if (diviNum1In == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	diviNum2In = prompt(diviNum2 + "\n" + quit);
	if (diviNum2In == "quit") {console.log("Quit!"); alert("Quit!"); break;}	
	printFizzBuzz(lim1In, lim2In, diviNum1In, diviNum2In); 
}

// Chessboard (EJ pg.59)
function createChessboard(char1, char2, size) {
	let pattern = "";
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			if ((x + y) % 2 == 0) {
				pattern += char1;
			} else {pattern += char2;}
		}
		pattern += "\n";
	}
	console.log(pattern);	
}

let character1 = "Enter the first character:";
let character2 = "Enter the second character:";
let sizeBoard = "Enter the size of chessboard:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	character1In = prompt(character1 + "\n" + quit);
	if (character1In == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	character2In = prompt(character2 + "\n" + quit);
	if (character2In == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	sizeBoardIn = prompt(sizeBoard + "\n" + quit);
	if (sizeBoardIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}		
	createChessboard(character1In, character2In, sizeBoardIn);
}

// Power (EJ pg.70)
function power(number, exponent) {
	let result = 1
	for (let count = 0; count < exponent; count++) {
		result *= number;
	}
	console.log(`${number}^${exponent} = ${result}`);
}

let baseNum = "Enter the base number:";
let exponentNum = "Enter the number of exponent:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	baseNumIn = prompt(baseNum + "\n" + quit);
	if (baseNumIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	exponentNumIn = prompt(exponentNum + "\n" + quit);
	if (exponentNumIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}	
	power(baseNumIn, exponentNumIn);
}

// Find Solution (EJ pg.80)
function findSolution(number) {
	function find(current, history) {
		if (number == current) {
			return history;
		} else if (number < current) {
			return null;
		} else {
			return find(current + 5, `${history} + 5)`) || 
			find(current * 3, `(${history} * 3)`); 
		}
	}
	return find(1, "1");
}

let targetNum = "Enter the target number:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	targetNumIn = prompt(targetNum + "\n" + quit);
	if (targetNumIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	console.log(findSolution(targetNumIn));
}

// Farm Inventory 
function zeroPad(number) {
	let string = String(number);
	while (string.length < 3) {
		string = "0" + string;
	}
	return string;
}

function farmInventory(cows, chickens, pigs) {
	if (cows > 1) {console.log(`${zeroPad(cows)} cows`)}
	else {console.log(`${zeroPad(cows)} cow`)}
	if (chickens > 1) {console.log(`${zeroPad(chickens)} chickens`)}
	else {console.log(`${zeroPad(cows)} chicken`)}
	if (pigs > 1) {console.log(`${zeroPad(pigs)} pigs`)}
	else {console.log(`${zeroPad(cows)} pig`)}			
}

let cowNum = "Enter the total number of cows:";
let chickNum = "Enter the total number of chickens:";
let pigNum = "Enter the total number of pigs:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	cowNumIn = prompt(cowNum + "\n" + quit);
	if (cowNumIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	chickNumIn = prompt(chickNum + "\n" + quit);
	if (chickNumIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	pigNumIn = prompt(pigNum + "\n" + quit);
	if (pigNumIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}		
	farmInventory(cowNumIn, chickNumIn, pigNumIn);
}
//Version 2:
function printZeroPaddedWithLabel(numbers, animals) {
	let numberStrings = [];
	for (let i = 0; i < numbers.length; i++) {
		let numberString = String(numbers[i]);
		numberStrings.push(numberString);
	}
	for (let i = 0; i < numberStrings.length; i++) {
		while (numberStrings[i].length < 3) {
			numberStrings[i] = "0" + numberStrings[i];
		}
	}
	for (let i = 0; i < numberStrings.length; i++) {
		console.log(`${animals[i]}: ${numberStrings[i]}`);
	}
}

let num = "Enter total number of animal:";
let animal = "Enter name of the animal:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	let numbers = [], animals = [];
	numIn = prompt(num + "\n" + quit);
	if (numIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	numbers.push(numIn);
	animalIn = prompt(animal + "\n" + quit);
	if (animalIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	animals.push(animalIn);	
	console.log(printZeroPaddedWithLabel(numbers, animals));
} //

// Recursion:
function determineEvenOdd(number) {
	if (number == 0) {return "Even";}
	else if (number == 1) {return "Odd";}
	else if (number < 0) {
		return number = determineEvenOdd(-number);
	}
	else {
		return number = determineEvenOdd(number - 2);
	}
}

let num = "Enter a number:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	numIn = prompt(num + "\n" + quit);
	if (numIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	console.log(`${numIn} is ${determineEvenOdd(numIn)}.`);
}

// Bean counting
function countChar(word, char) {
	let total = 0;
	for (let count = 0; count < word.length; count++) {
		if (word[count] == char) {
			total++;
		}
	}
	return total;
}

let string = "Enter the word where the character can be found:";
let character = "Enter the character:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	stringIn = prompt(string + "\n" + quit);
	if (stringIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	characterIn = prompt(character + "\n" + quit);
	if (characterIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	if (countChar(stringIn, characterIn) > 1) {
		console.log(`There are ${countChar(stringIn, characterIn)} "${characterIn}"s in "${stringIn}".`);
	} else {
		console.log(`There is ${countChar(stringIn, characterIn)} "${characterIn}" in "${stringIn}".`);
	}	
}

// Phone Purchase (You Don't Know JavaScript)
const TAX_RATE = 0.05;
const PHONE_PRICE = 2000000;
const ACCESSORY = 500000;

let bankBalance = "Enter the amount of your bank balance:";
let spendingThreshold = "Enter your spending threshold:";
let quit = "Enter 'quit' to end the program.";
let program = true;

function taxCalculation(nominal) {
	let tax = nominal * TAX_RATE;
	return nominal += tax;
}

function currecyFormat(value) {
	return(`Your total purchase is:\nRp. ${value}`);
}

while (program == true) {
	let totalPurchase = 0;
	bankBalanceIn = prompt(bankBalance + "\n" + quit);
	if (bankBalanceIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	spendingThresholdIn = prompt(spendingThreshold + "\n" + quit);
	if (spendingThresholdIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}	
	for (; totalPurchase < spendingThresholdIn;) {
		totalPurchase += PHONE_PRICE;
		if (totalPurchase < spendingThresholdIn) {
			totalPurchase += ACCESSORY;
		}
	}

	console.log(currecyFormat(taxCalculation(totalPurchase)));

	if (taxCalculation(totalPurchase) < bankBalanceIn) {
		console.log("You can afford this purchase.");
	} else {console.log("Sorry, you cannot afford this purchase.");}
}

// console.log(sum(range(1, 10))); (EJ pg. 8)
function range(firstNumber, lastNumber) {
	let array = [];
	for (; firstNumber <= lastNumber; firstNumber++) {
		array.push(firstNumber);
	}
	return array;
}

function sum(r) {
	let result = r[0];
	for (let number = 1; number < r.length; number++) {
		result += r[number];
	}
	return result;
}

let firstNum = "Enter the first number:";
let lastNum = "Enter the last number:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	firstNumIn = prompt(firstNum + "\n" + quit);
	if (firstNumIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	else {firstNumIn = Number(firstNumIn);}
	lastNumIn = prompt(lastNum + "\n" + quit);
	if (lastNumIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	else {lastNumIn = Number(lastNumIn);}
	console.log(sum(range(firstNumIn, lastNumIn)));	
}

// Factorial
function factorial(integer) {
	let result = 1;
	for (let count = integer; count > 0; count--) {
		result *= count;
	}
	return result;
}

let int = "Enter the integer:";
let quit = "Enter 'quit' to end the program.";
let program = true;

while (program == true) {
	intIn = prompt(int + "\n" + quit);
	if (intIn == "quit") {console.log("Quit!"); alert("Quit!"); break;}
	else {
		intIn = Number(intIn);
		console.log(factorial(intIn));
	}
} //

// Computing correlation (EJ pg. 106)
function phiCoefficient(table) {
	let result = ((table[0] * table[3]) - (table[1] * table[2])) / 
	Math.sqrt((table[0] + table[1]) * 
		(table[2] + table[3]) * 
		(table[0] + table[2]) * 
		(table[1] + table[3]));
	return result;
}

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

for (let event of journalEvents(JOURNAL)) {
	console.log(`${event}: ${phiCoefficient(tableFor(event, JOURNAL))}`);
}

for (let event of journalEvents(JOURNAL)) {
	let correlation = phiCoefficient(tableFor(event, JOURNAL));
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

// Prime & Composite Numbers
// 'For' loop version
function categorize(n) {
	let category;
	if (n == 0) return "undefined";
	else if (n <= 2) return "prime";
	else {
		for (let i = 2; i < n; i++) {
			let test = n % i;
			if (test == 0) return "composite";
			else category = "prime";
		}
	}
	return category;
}

function range(start, end, category) {
	let primes = [], composites = [];
	for (let i = start; i <= end; i++) {
		let test = categorize(i);
		if (test == "prime") primes.push(i);
		else if (test == "composite") composites.push(i);
	}
	if (category == "prime") return primes;
	else if (category == "composite") return composites;
	else return "undefined";
}

console.log(range(1, 10, "composite")); //

// Closure
const categorize = (n) => {
	let category;
	if (n == 0) return "undefined";
	else if (n <= 2) return "prime";
	else {
		for (let i = 2; i < n; i++) {
			let test = n % i;
			if (test == 0) return "composite";
			else category = "prime";
		}
	}
	return category;
}

const range = (start, end, category) => {
	let primes = [], composites = [];
	for (let i = start; i <= end; i++) {
		let test = categorize(i);
		if (test == "prime") primes.push(i);
		else if (test == "composite") composites.push(i);
	}
	if (category == "prime") return primes;
	else if (category == "composite") return composites;
	else return "undefined";
}

console.log(range(1, 10, "composite")); //

// A More Readable Version
function range(start, end) {
	let array = [];
	for (let i = start; i <= end; i++) {
		array.push(i);
	}
	return array;
}

function test(n) {
	let category;
	if (n == 0) return "undefined";
	else if (n <= 2) return "prime";
	else {
		for (let i = 2; i < n; i++) {
			if (n % i == 0) return "composite";
			else category = "prime";
		}		
	}
	return category;
}

function listNumbers(start, end, category) {
	let array = range(start, end), prime = [], composite = []; 
	for (let number of array) {
		if (test(number) == "prime") prime.push(number);
		else if (test(number) == "composite") composite.push(number);
	}
	if (category == "prime") return prime;
	else if (category == "composite") return composite;
	else return "undefined";
}

console.log(listNumbers(1, 10, "prime"));

// Identify Text
// → 61% Han, 22% Latin, 17% Cyrillic
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

console.log(textAnalysis('ᬅᬓ᭄ᬱᬭᬯ᭄ᬬᬜ᭄ᬚᬦ꧅ ꦟ꧀ꦢꦿ ꧅देवनागरी')); //

// Dominant writing direction
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
console.log(dominantDirection("𞤀𞤣𞤤𞤢𞤥 𞤆𞤵𞤤𞤢𞤪")); //

// PrimeComposite with Class
class Numbers {
	constructor(start, end) {
		this.start = start;
		this.end = end;
		this.range = function() {
			let arr = [];
			for (let i = this.start; i <= this.end; i++) {
				arr.push(i);
			}
			return arr;			
		}
		this.division = function(n) {
			let category;
			if (n == 0) return undefined;
			else if (n <= 2) return "prime";
			else {
				for (let i = 2; i < n; i++) {
					if (n % i == 0) return "composite";
					else category = "prime";
				}
			}
			return category;
		}
		this.category = function() {
			let prime = [], composite = [], obj = {};
			for (let n of this.range()) {
				if (this.division(n) == "prime") prime.push(n);
				else if (this.division(n) == "composite") composite.push(n);
			}
			obj["prime"] = prime;
			obj["composite"] = composite;
			return obj;			
		}
	}

	dividedAs() {
		return this.category();
	}
}

let numbers = new Numbers(1, 10);
numbers.dividedAs();

// My 1st Success in Making Matrix Kind of Class
class Numbers {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.range = [];

    for (let i = start; i <= end; i++) {
      this.range.push(i);
    }
  }

  get(int) {
    return this.range[int];
  }
}

class NumbersIterator {
  constructor(numbers) {
    this.i = 0;
    this.numbers = numbers;
  }

  next() {
    if (this.i == this.numbers.range.length) return {done: true};
    let value = {
      i: this.i,
      value: this.numbers.get(this.i)
    };
    this.i++;
    return {value, done: false};
  }
}

Numbers.prototype[Symbol.iterator] = function() {
  return new NumbersIterator(this);
}

let numbers = new Numbers(1, 10);
for (let {i, value} of numbers) {
  console.log(i, value);
}

// EXPERIMENT (Using for of loop for Iteration & next() method for Iteration)
class Numbers {
  constructor(start, end, exponent) {
    this.start = start;
    this.end = end;
    this.exponent = exponent;
    this.poweredNumbers = []; 
  }

  power() {
  	for (let base = this.start; base <= this.end; base++) {
  		let result = 1;
  		for (let i = 0; i < this.exponent; i++) {
  			result *= base;
  		}
  		this.poweredNumbers.push(result);
  	}
  	return this.poweredNumbers;
  }

  get(int) {
    return this.poweredNumbers[int];
  }
}

class NumbersIterator {
  constructor(numbers) {
    this.index = 0;
    this.numbers = numbers;
    this.n = numbers.start;
  }

  next() {
    if (this.index == this.numbers.poweredNumbers.length) return {done: true};
    let value = {
      number: this.n,
      value: this.numbers.get(this.index)
    };
    this.index++;
    this.n++
    return {value, done: false};
  }
}

Numbers.prototype[Symbol.iterator] = function() {
  return new NumbersIterator(this);
}

let numbers = new Numbers(1, 5, 2);
numbers.power();
for (let {number, value} of numbers) {
  console.log(number, value);
}

let integers = new Numbers(1, 5, 2);
integers.power();
let integersIterator = integers[Symbol.iterator]();
console.log(integersIterator.next());

// Removing Element in Array
function del(arr, value) {
  while (elearrment.includes(value)) {
    let index = arr.indexOf(value);
    arr = arr.slice(0, index).concat(arr.slice(index + 1));
  }
  return arr;
}

let group = [10, 20, 10];
del(group, 10);

// JournalAnalysis Extend (Chapter 4)
class JournalAnalysis {
  constructor(journal) {
    this.journal = journal;
    this.arr = [];
  }

  addEntry(events, squirrel) {
    this.journal.push({events, squirrel});
  }

  tableFor(event) {
    let table = [0, 0, 0, 0]; /* [(No wolf, No pizza), (No wolf, pizza), (wolf, No pizza), (wolf, pizza)] */
    for (let i = 0; i < this.journal.length; i++) {
      let entry = this.journal[i], index = 0;
      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
  }

  phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }

  journalEvents() {
    let events = [];
    for (let entry of this.journal) {
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
  }

  max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
}

class SymmetricAnalysis extends JournalAnalysis {
  constructor(journal) {
    super(journal);
  }

  correlatedEvents() {
    for (let event of super.journalEvents(this.journal)) {
      let correlation = super.phi(super.tableFor(event, this.journal)), 
      obj = {};
      if (correlation > 0.1 || correlation < -0.1) {
        obj[event] = correlation;
        this.arr.push(obj);
      }
    }
    let result;
    for (let i = 0; i < this.arr.length; i++) {
      if (super.max(Object.values(this.arr[i])[0])) result = Object.keys(this.arr[i])[0];
    }
    return `${result} may cause you to become squirrel.`;
  }
}

let symmetricAnalysis = new SymmetricAnalysis(JOURNAL);
console.log(symmetricAnalysis.correlatedEvents());
  
class Echo {
	constructor() {
		this.count = 0;
	}

	hello() {
		console.log("helloooo...");
	}
}

let e1 = new Echo(), e2 = new Echo(), x = 0;
while (x < 4) {
	e1.hello();
	e1.count++;
	if (x == 3) {
		e2.count++;
	}
	if (x > 0) {
		e2.count += e1.count;
	}
	x++;
}

console.log(e2.count);

class GuessGame {
	constructor() {
		this.number = () => {
			let n = Math.round(Math.random() * 10);
			if (n == 10) n--;
			return n;
		}
	}

	startGame() {
		console.log("I'm thinking of a number between 0 and 9...");
		let x = Math.round(Math.random() * 10);
		while(true) {
			let p1 = this.number();
			let p2 = this.number();
			let p3 = this.number();
			console.log(`Number to guess is ${x}.`);

			console.log(`I'm guessing ${p1}.`);
			console.log(`I'm guessing ${p2}.`);
			console.log(`I'm guessing ${p3}.`);

			console.log(`Player one guessed ${p1}.`);
			console.log(`Player two guessed ${p2}.`);
			console.log(`Player three guessed ${p3}.`);

			if ((p1 == x) || (p2 == x) || (p3 == x)) {
				console.log("We have a winner!");
				console.log(`Player one got it right? ${p1 == x}.`);
				console.log(`Player two got it right? ${p2 == x}.`);
				console.log(`Player three got it right? ${p3 == x}.`);
				console.log("Game is over.");
				break;
			} else {
				console.log("Players will have to try again.");
			}
		}
	}
}

let guessGame = new GuessGame();
guessGame.startGame();
