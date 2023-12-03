// Methods
let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The rabbit says "${line}"`);
};

rabbit.speak("I'm alive.");

// Practice
let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The rabbit says, "${line}."`);
};

rabbit.speak("Hello world!"); //

// Practice 2
let number = {};
number.power = function(base, exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}
number.category = function(n) {
	let division;
	if (n == 0) return "undefined";
	else if (n <= 2) return "prime";
	else {
		for (let i = 2; i < n; i++) {
			if (n % i == 0) return "composite";
			else division = "prime";
		}		
	}
	return division;
}

number.power(10, 2);
number.category(number.power(10, 2)); //

function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");

// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
// → The hungry rabbit says 'I could use a carrot right now.'

// Practice
function speak(line) {
	console.log(`The president of ${this.country} says "${line}"`);
}
let presidentIndonesia = {country: "Indonesia", speak};
let presidentAmerica = {country: "America", speak};

presidentIndonesia.speak("Welcome to Bali!");
presidentAmerica.speak("It's an honor to meet you."); //

// Practice 2
function board(size) {
	let line = "";
	for (let column = 0; column < size; column++) {
		if (column % 2 == 0) {
			for (let i = 0; i < size; i++) {
				if (i % 2 == 0) line += this.char1;
				else line += this.char2;
			}			
		} else {
			for (let i = 0; i < size; i++) {
				if (i % 2 == 0) line += this.char2;
				else line += this.char1;
			}			
		}
		line += "\n";
	}
	return line;
}

let chessBoardA = {char1: "$", char2: "=", board};
let chessBoardB = {char1: "@", char2: "_", board};

console.log(chessBoardA.board(5));
console.log(chessBoardB.board(10));

board.call(chessBoardA, 5); //

/* Ralization
At this point I realized that a function within a method can pass a parameter without writting it on the parameter
bracket, as seen by passing char1 and char2. */

speak.call(hungryRabbit, "Burp!"); //

// Practice
speak.call(whiteRabbit, "Hop!"); //

function normalize() {
	console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]

// Practice
function power(base, exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}

function repeat(start, end) {
	let array = [];
	for (let i = start; i <= end; i++) {
		array.push(i);
	}
	return array;
}

function normalize() {
	console.log(this.numbers.map(n => power(n, 2)));
}

normalize.call({numbers: repeat(1, 5)});
// → [1, 4, 9, 16, 25] //

// Practice 2
function repeat(start, end) {
	let numbers = [];
	for (let i = start; i <= end; i++) {
		numbers.push(i);
	}
	return numbers;
}

function categorize(n) {
	let category;
	if (n == 0) return null;
	else if (n <= 2) return "prime";
	else {
		for (let i = 2; i < n; i++) {
			if (n % i == 0) return "composite";
			else category = "prime";
		}
	}
	return category;
}

function divide(start, end, div) {
	let prime = [], comp = [], arr = repeat(start, end);
	arr.forEach(n => {
		if (categorize(n) == "prime") prime.push(n);
		else if (categorize(n) == "composite") comp.push(n);
	})
	if (div == "prime") return prime;
	else if (div == "composite") return comp;
}

function power(base, exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}

function normalize() {
	console.log(this.division.map(n => power(n, this.expo)));
}

normalize.call({division: divide(1, 10, "prime"), expo: 2}); //

// Prototypes
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true

console.log(Object.getPrototypeOf(Object.prototype));
// → null

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true

console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true

let protoRabbit = {
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
}

killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

// Practice
let protoAnnouncement = {
	info(country) {
		console.log(`${this.band} will be performing in ${country}.`);
	}
}

performing = Object.create(protoAnnouncement);
performing.band = "Radiohead";
performing.info("Indonesia"); //

// Practice 2
let myCalculator = {
	power(exponent) {
		let result = 1;
		for (let i = 0; i < exponent; i++) {
			result *= this.base;
		}
		return result;
	}
}

let poweredNumber = Object.create(myCalculator);
poweredNumber.base = 10;
poweredNumber.power(2); //

// Classes
function makeRabbit(type) {
	let rabbit = Object.create(protoRabbit);
	rabbit.type = type;
	return rabbit;
}

// Practice
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

makeRabbit("Angry").speak("I'll crush you!");
// → The Angry rabbit says 'I'll crush you!' //

// Practice 2
let protoCalculator = {
	power(exponent) {
		let result = 1;
		for (let i = 0; i < exponent; i++) {
			result *= this.base;
		}
		return result;
	}
};

function baseNumber(base) {
	let poweredNum = Object.create(protoCalculator);
	poweredNum.base = base;
	return poweredNum;
}

console.log(baseNumber(10).power(2)); //

function Rabbit(type) {
	this.type = type;
}
Rabbit.prototype.speak = function(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

weirdRabbit.speak("Hello World!");

// Practice
function Base(number) {
	this.number = number;
}
Base.prototype.poweredTo = function(exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= this.number;
	}
	return result;
};

let myNumber = new Base(10);
myNumber.poweredTo(2); //

function Rabbit(type) {
	this.type = type;
}
Rabbit.prototype.speak = function(line) {
	console.log(`This ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("Hello World!");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// → true

// Practice
function Base(number) {
	this.number = number;
}
Base.prototype.poweredTo = function(exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= this.number;
	}
	return result;
}

let n = new Base(5);
n.poweredTo(2);

console.log(Object.getPrototypeOf(Base) == Function.prototype);
console.log(Object.getPrototypeOf(n) == Base.prototype); //

// Class notation
class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`This ${this.type} rabbit says '${line}'`);
	}
}

let killerRabbit = new Rabbit("killer");
let weirdRabbit = new Rabbit("weird");

killerRabbit.speak("Be careful not to choke on your aspiration director.");
weirdRabbit.speak("Not from a Jedi.");

// Practice
class Calculator {
	constructor(number) {
		this.number = number;
		this.result1;
		this.result2;
	}
	poweredTo(exponent) {
		let result = 1;
		for (let i = 0; i < exponent; i++) {
			result *= this.number;
		}
		return this.result1 = result;
	}
	categorizedAs() {
		let category;
		if (this.result1 == 0) return "undefined";
		else if (this.result1 <= 2) return "Prime";
		else {
			for (let i = 2; i < this.result1; i++) {
				if (this.result1 % i == 0) return "Composite";
				else category = "Prime";
			}
		}
		return this.result2 = category;
	}
}

let n = new Calculator(3);
n.poweredTo(2);
// → 9
n.categorizedAs();
// → 'Composite' //

let object = new class { getObject() { return "Hello"; } };
object.getObject();

// Overriding derived properties
class Rabbit {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`This ${this.type} rabbit says '${line}'.`);
	}
}

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("Hello");
let killerRabbit = new Rabbit("killer");
killerRabbit.speak("Rawrrr");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);

let blackRabbit = new Rabbit("black");
blackRabbit.speak("what's up.");
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

// Practice
class Calculator {
	constructor(number) {
		this.number = number;
	}
	poweredTo(exponent) {
		let result = 1;
		for (let i = 0; i < exponent; i++) {
			result *= this.number;
		}
		return result;
	}
}

let number = new Calculator(5);
number.poweredTo(2);
// → 25

Calculator.prototype.powered = number.poweredTo(2);
console.log(number.powered);
// → 25 //

console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1,2].toString());
// → 1,2

console.log(Object.prototype.toString.call([1,2]));
// → [object Array]

// Maps
let ages = {
	Boris: 39,
	Liang: 22,
	Julia: 62
}

console.log(`Julia is ${ages["Julia"]}.`);
console.log(`Is Jack's age known?`, "Jack" in ages);
// → Is Jack's age known? false
console.log(`is toString's age known?`, "toString" in ages);
// → Is toString's age known? true

console.log("toString" in Object.create(null));

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}.`);
console.log(`Is Jack's age known?`, ages.has("Jack"));
console.log(ages.has("toString"));

// Practice
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
		this.category = function(category) {
			let primes = [], composites = [];
			for (let n of this.range()) {
				if (this.division(n) == "prime") primes.push(n);
				else if (this.division(n) == "composite") composites.push(n);
			}
			if (category == "prime") return primes;
			else if (category == "composite") return composites;
			else return undefined;			
		}
	}
	dividedAs(item) {
		let obj = new Map();
		obj.set("Prime", this.category("prime"));
		obj.set("Composite", this.category("composite"));
		if (!item) return obj;
		else {
			if (item == "prime") return obj.get("Prime");
			else if (item == "composite") return obj.get("Composite");
			else return undefined;
		}
	}
}

let numbers = new Numbers(1, 10);
numbers.dividedAs();
// → Map(2) {'Prime' => Array(5), 'Composite' => Array(5)}
numbers.dividedAs("prime");
// → (5) [1, 2, 3, 5, 7]
numbers.dividedAs().has("Composite");
// → true
numbers.dividedAs("composite").includes(2);
// → false //

console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false

// Practice
function power(base, exponent) {
	let result = 1, obj = {};
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	obj[`${base}^${exponent}`] = result; 
	return obj;
}

console.log(power(5, 2).hasOwnProperty("5^2"));
console.log(power(5, 2).hasOwnProperty("toString")); //

// Polymorphism
class Rabbit {
	constructor(type) {
		this.type = type;
	}
};
let blackRabbit = new Rabbit("black");
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit

// Practice
class Board {
	constructor(char1, char2, length) {
		this.char1 = char1;
		this.char2 = char2;
		this.length = length;
	}
};
let chessBoard = new Board("@", "=", 5);
Board.prototype.toString = function() {
	let str = "";
	for (let column = 0; column < this.length; column++) {
		if (column % 2 == 0) {
			for (let i = 0; i < this.length; i++) {
				if (i % 2 == 0) str += this.char1; 
				else str += this.char2;
			}
		} else {
			for (let i = 0; i < this.length; i++) {
				if (i % 2 == 0) str += this.char2;
				else str += this.char1;
			}
		}
		str += "\n";
	}
	return str;
};

console.log(String(chessBoard)); //

// Symbols
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
class Rabbit {
	constructor(type) {
		this.type = type;
	}
}
let blackRabbit = new Rabbit("black");
Rabbit.prototype.toString = function() {
	return `a ${this.type} rabbit.`;
}
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

// Practice
class Dog {
	constructor(type) {
		this.type = type;
	}
}
let sym = Symbol("color");
let myDog = new Dog("Nukil");
Dog.prototype[sym] = 4;
console.log(myDog[sym]);
// → 4 //

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
	return `${this.length} cm of blue yarn`;
}
console.log([1,2].toString());
// → 1,2
console.log([1,2][toStringSymbol]());

// Practice
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

let numbers = new Numbers(1, 10), arrayToList;
Object.prototype[arrayToList] = function() {
  let list;
  for (let i = this.length - 1; i >= 0; i--) {
  	list = {value: this[i], rest: list};
  	if (list.rest == undefined) list.rest = null;
  }
  return list;
};

console.log(numbers.dividedAs()["prime"][arrayToList]()); //

const toStringSymbol = Symbol("toString");

let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());

// Practice
const poweredToSymbol = Symbol("poweredTo");

let integerObject = {
	[poweredToSymbol](base, exponent) {
		let result = 1;
		for (let i = 0; i < exponent; i++) {
			result *= base;
		}
		return result;
	}
};

console.log(integerObject[poweredToSymbol](5, 2)); //

// The iterator interface
let OkIterator = "OK"[Symbol.iterator]();
console.log(OkIterator.next());
// → {value: "O", done: false}
console.log(OkIterator.next());
// → {value: "K", done: false}
console.log(OkIterator.next());
// → {value: undefined, done: true}

// Practice
function range(start, end) {
	let arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

let NumbersIterator = range(1, 3)[Symbol.iterator]();
console.log(NumbersIterator.next());
// → {value: 1, done: false}
console.log(NumbersIterator.next());
// → {value: 2, done: false}
console.log(NumbersIterator.next());
// → {value: 3, done: false}
console.log(NumbersIterator.next());
// → {value: undefined, done: true} //

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}

// Short Explanation
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
  print() {		/* I put this code to show what happens within the class Matrix */
  	return this.content;
  }
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
matrix.print();
// → (4) ['value 0,0', 'value 1,0', 'value 0,1', 'value 1,1']
matrix.get(1, 1);
// → 'value 1,1'
matrix.set(1, 1, `Your password is 1,1.`);
matrix.content;
// → (4) ['value 0,0', 'value 1,0', 'value 0,1', 'Your password is 1,1.'] //

// Practice
class Matrix {
	constructor(day, month, name, element = (x, y) => undefined) {
		this.day = day;
		this.month = month;
		this.content = [];

		for (let y = 0; y < month; y++) {
			for (let x = 0; x < day; x++) {
				this.content[y * day + x] = name + element(x, y);
			}
		}
	}
	get(x, y) {
		return this.content[y * this.day + x];
	}
	set(x, y, value) {
		this.content[y * day + x] = value;
	}
	print() {
		let str = "Password suggestions: ";
		for (let pass of this.content) {
			if (pass != this.content.slice(-1)) str += pass + ", ";
			else str += pass;
		}
		return str;
	}
}

let matrix = new Matrix(2, 2, "Komang", (x, y) => `${x}${y}`);
matrix.print();
// → 'Password suggestions: Komang00, Komang10, Komang01, Komang11' //

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

// Practice
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
      exponent: this.numbers.exponent,
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

let numbers = new Numbers(0, 3, 2);
numbers.power();
for (let {number, exponent, value} of numbers) {
  console.log(`${number}^${exponent} = ${value}`);
}
// → 0^2 = 0
// → 1^2 = 1
// → 2^2 = 4
// → 3^2 = 9

let integers = new Numbers(0, 3, 2);
integers.power();
let integersIterator = integers[Symbol.iterator]();
console.log(integersIterator.next()); 
// → {value: {number: 0, exponent: 2, value: 0}, done: false} //

let iteratorObj = 'this string'[Symbol.iterator]();
iteratorObj;

// Getters, setters, and statics
let varryingSize = {
	get size() {
		return Math.floor(Math.random() * 100);
	}
};

console.log(varryingSize.size);
// → 35

// Practice
let number = {
	get powered() {
		let base = Math.floor(Math.random() * 10), 
		exponent = Math.floor(Math.random() * 10), 
		result = 1;
		for (let i = 0; i < exponent; i++) {
			result *= base;
		}
		return `${base}^${exponent} = ${result}`;
	}
};

console.log(number.powered);
// → 3^4 = 81

class Temperature {
	constructor(celcius) {
		this.celcius = celcius;
	}
	get fahrenheit() {
		return this.celcius * 1.8 + 32;
	}
	set fahrenheit(value) {
		this.celcius = (value - 32) / 1.8;
	}

	static fromFahrenheit(value) {
		return new Temperature((value - 32) / 1.8);
	}
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 71.6;
console.log(temp.celcius);
// → 21.999999999999996
Temperature.fromFahrenheit(100);
// → Temperature {celcius: 37.77777777777778}

// Practice
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 71.6;
console.log(temp.celsius);
Temperature.fromFahrenheit(71.6);

// Practice 2
class Temperature {
  constructor(degree) {
    this.celcius = degree;
    this.kelvin = degree;
    this.fahrenheit = degree;
  }
  set fromFahrenheit(value) {
    this.celcius = (value - 32) / 1.8;
    this.kelvin = (value - 32) / 1.8 + 273.15;
  }  
  set fromCelcius(value) {
    this.fahrenheit = (value * 1.8) + 32;
    this.kelvin = value + 273.15;
  }
  set fromKelvin(value) {
    this.celcius = value - 273.15;
    this.fahrenheit = (value - 273.15) * 1.8 + 32;
  }
}

let temp = new Temperature(0);
temp.fromFahrenheit = 71.6;
console.log(temp.celcius);
// → 21.999999999999996
console.log(temp.kelvin);
// → 295.15

temp.fromCelcius = 22;
console.log(temp.fahrenheit);
// → 71.6
console.log(temp.kelvin);
// → 295.15

temp.fromKelvin = 295.15;
console.log(temp.celcius);
// → 22
console.log(temp.fahrenheit);
// → 71.6 //

// Inheritance
class Matrix {
	constructor(width, height, element = (x, y) => undefined) {
		this.width = width;
		this.height = height;
		this.content = [];

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				this.content[y * width + x] = element(x, y);
			}
		}
	}

	get(x, y) {
		return this.content[y * this.width + x];
	}
	set(x, y, value) {
		this.content[y * this.width + x] = value;
	}
}

class SymmetricMatrix extends Matrix {
	constructor(size, element = (x, y) => undefined) {
		super(size, size, (x, y) => {
			if (x < y) return element(y, x);
			else return element(x, y);
		});
	}

	set(x, y, value) {
		super.set(x, y, value)
		if (x != y) {
			super.set(y, x, value);
		}
	}
}

let matrix = new SymmetricMatrix(5, (x, y) => `value ${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2

let symmetricMatrix = new SymmetricMatrix(2, (x, y) => `value ${x},${y}`);
symmetricMatrix.set(1, 1, "TEST");
symmetricMatrix;
// → SymmetricMatrix{width: 2, height: 2, content: ['value 0,0', 'value 1,0', 'value 1,0', 'TEST']}

// Practice
class Matrix {
	constructor(width, height, element = (x, y) => undefined) {
		this.width = width;
		this.height = height;
		this.content = [];

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				this.content[y * width + x] = element(x, y);
			}
		}
	}
	get(x, y) {
		return this.content[y * this.width + x];
	}
	set(x, y, value) {
		this.content[y * this.width + x] = value;
	}
}

class MatrixIterator {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}

	next() {
		if (this.y == this.matrix.height) return {done: true};
		let value = {
			x: this.x,
			y: this.y,
			value: this.matrix.get(this.x, this.y)
		};
		this.x++;
		if (this.x == this.matrix.width) {
			this.x = 0;
			this.y++;
		}
		return {value, done: false};		
	}
}

Matrix.prototype[Symbol.iterator] = function() {
	return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
	console.log(x, y, value);
}

class SymmetricMatrix extends Matrix{
	constructor(size, element = (x, y) => undefined) {
		super(size, size, (x, y) => {
			if (x < y) return element(y, x);
			else return element(x, y);
		});
	}

	set(x, y, value) {
		super.set(x, y, value);
		if (x != y) {
			super.set(y, x, value);
		}
	}
}

let symmetricMatrix = new SymmetricMatrix(3, (x, y) => `${x},${y}`);
symmetricMatrix.set(2, 1, "TEST");
symmetricMatrix;

// Practice 2
class Numbers {
  constructor(start, end) {
    this.range = [];
    for (let i = start; i <= end; i++) {
      this.range.push(i);
    }

    this.test = (n) => {
      let type;
      if (n == 0) return undefined;
      else if (n <= 2) return "prime";
      else {
        for (let i = 2; i < n; i++) {
          if (n % i == 0) return "composite";
          else type = "prime";
        }   
      }
      return type;    
    }

    this.division = (div) => {
      let primes = [], comps = [];
      for (let n of this.range) {
        if (this.test(n) == "prime") primes.push(n);
        else if (this.test(n) == "composite") comps.push(n);
      }
      if (div == "prime") return primes;
      else if (div == "composite") return comps;
      else return undefined;      
    }
  }

  dividedAs(item) {
    let obj = new Map();
    obj.set("Prime", this.division("prime"));
    obj.set("Composite", this.division("composite"));
    if (!item) return obj;
    else {
      if (item == "prime") return obj.get("Prime");
      else if (item == "composite") return obj.get("Composite");
      else return undefined;
    }
  }
}

class SymmetricNumbers extends Numbers{
  constructor(start, end, div) {
    super(start, end);
    this.arr = super.dividedAs(div);
  }

  makeList() {
    let list;
    for (let i = this.arr.length - 1; i >= 0; i--) {
      list = {value: this.arr[i], rest: list};
      if (list.rest == undefined) {list.rest = null}
    }
    return list;
  }
}

let symmetricNumbers = new SymmetricNumbers(1, 10, "composite");
symmetricNumbers.makeList();
/* → {value: 4, rest: {…}}
			rest: {value: 6, rest: {…}}
				rest: {value: 8, rest: {…}}
				etc. */

// The instanceof operator
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix());
// → true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false
console.log([1] instanceof Array);
// → true

// Practice
console.log(new SymmetricNumbers(1, 10) instanceof Numbers);
// → true
console.log({value: 1, rest: null} instanceof Object);
// → true

// A vector type
class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(vec) {
		vec["x"] += this.x;
		vec["y"] += this.y;
		return vec;
	}

	minus(vec) {
		this.x -= vec["x"];
		this.y -= vec["y"];
		return this;
	}

	get length() {
		let n = (this["x"] *= this["x"]) + (this["y"] *= this["y"]);
		return Math.sqrt(n);
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Groups (My Version)
class Group {
  constructor(element) {
    this.element = element;
  }

  add(value) {
    this.element[this.element.length] = value;
  }

  has(value) {
    if (this.element.includes(value)) return true;
    else return false;
  }

  delete(value) {
    while (this.element.includes(value)) {
      let index = this.element.indexOf(value);
      this.element = this.element.slice(0, index).concat(this.element.slice(index + 1));
    }
    return this.element;
  }

  static from(arr) {
    return new Group(arr);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Groups (Github's User Version)
class Group {
  constructor() {
    this.group = [];
  }
  add(item) {
    if (!this.group.includes(item)) {
      this.group.push(item);
    }
  }
  delete(item) {
    let index = this.group.indexOf(item);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }
  has(item) {
    return this.group.includes(item);
  }
  static from(a) {
    let g = new Group();
    for (let item of a) {
      g.add(item);
    }
    return g;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Iterable groups Github's User Version
class Group {
  constructor() {
    this.group = [];
  }

  add(item) {
    if (!this.group.includes(item)) {
      this.group.push(item);
    }
  }

  delete(item) {
    let index = this.group.indexOf(item);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }

  has(item) {
    return this.group.includes(item);
  }

  static from(a) {
    let g = new Group();
    for (let item of a) {
      g.add(item);
    }
    return g;
  }
  
  [Symbol.iterator]() {
    return new GroupIterator(this);
  };
}

class GroupIterator {
  constructor(o) {
    this.i = 0;
    this.group = o.group;
  }

  next() {
    if (this.i == this.group.length || this.i > 10) return {done: true};

    let value = this.group[this.i];
    this.i++;
    return {value, done: false};
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

// Borrowing a method (Github's User Version)
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map.hasOwnProperty("one"));

console.log(hasOwnProperty.call(map, 'one'));
// → true