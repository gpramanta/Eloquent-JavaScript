function triangle(levels) {
    let str = "", arr = [];
    for (let i = 1; i <= levels; i++) {
        str += i;
        arr.push(str);
    }
    let result = "";
    for (let n of arr) {
        result += n;
        result += "\n";
    }
    return result;
}

console.log(triangle(5));

function beerSong(beerNum) {
    let word;
    while (beerNum > 0) {
        console.log(`${beerNum} ${word} of beer on the wall, ${beerNum} ${word} of beer.`);
        beerNum--;
        if (beerNum > 1) word = "bottles";
        else word = "bottle";
        console.log(`Take one down and pass it around, ${beerNum} ${word} of beer on the wall.`);
    }
}

beerSong(5);

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

function secondLine(data, separatedBy) {
    let str = String(data), sprSign = String(separatedBy);
    function indexOf() {
        let index;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == sprSign) index = i;
        }
        return index;
    }
    let result = "";
    for (let i = indexOf() + 1; i < str.length; i++) {
        result += str[i];
    }
    return result;
}


console.log(secondLine("Alice's House-Bob's House", "-"));

var x = 0;
while (x < 4) {
    console.log("a");
    if (x < 1) {
        console.log(" ");
    }
    console.log("noise");
    if (x > 1) {
        console.log("annoys");
        x = x + 1;
    }
    if (x == 1) {
    console.log("an");
    }
    if (x > 0) {
    console.log(" oyster");
    }
    console.log("");
    x = x + 2;
}


 