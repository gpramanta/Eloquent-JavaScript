/* Chapter 2
Program Structure */

// Return Values
console.log(Math.max(9, 9.5));
// → 9.5
console.log(Math.min(8, 9) / 2);
// → 4

// Dispatching on a value with switch
switch (prompt("What is the weather like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
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