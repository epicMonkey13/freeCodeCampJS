//using obj-s for lookups
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
result = lookup[val];
  return result;
}

console.log(phoneticLookup("bravo"));

//Testing Objects for Properties
function checkObj(obj, checkProp) {
 
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
//gets pony

//Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Eminem",
    "title": "The Eminem Show",
    "release_year": 2002,
    "formats": [
      "CD",
      "LP"
    ],
    "platinum": true
  }
];
console.log(myMusic[1].artist);

//Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);

//Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value]
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value)
  } else if (value === ""){
    delete records[id][prop]
  }
  return records;
}

const testRecords = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(testRecords);

//Iterate with JavaScript While Loops
const myArray = [];

let i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);

//Iterate with JavaScript For Loops
let myArray1 = [];
for (let i = 1; i < 6; i++) {
  myArray1.push(i);
}
console.log(myArray1);

//Iterate Odd Numbers With a For Loop
const myArray2 = [];

for(let i = 1; i < 10; i += 2){
  myArray2.push(i);
}
//Count Backwards With a For Loop
const myArrayX = [];

for (let i = 9; i > 0; i-=2) {
  myArrayX.push(i);
}
console.log(myArrayX);

//Iterate Through an Array with a For Loop
const myArrB = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArrB.length; i++) {
  total += myArrB[i];
}
console.log(total);

//Nesting For Loops
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

function multiplyAll(arr) {
  let product = 1;
for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr[i].length; j++){
   product = product * arr[i][j];
  }
}

  return product;
}
console.log(multiplyAll([[1,2], [3,4], [5, 6, 7]])); //should get 5040

//Iterate with JavaScript Do...While Loops
let arrZ = [];
var X = 10;
do {
  arrZ.push(X);
  X++;
} while (X <=10);
console.log(arrZ);
//should be equal to 10

//Replace Loops using Recursion
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n-1) * arr[n-1];
  }
} //example

function GulmiraTriesRecursion (arr, n) {
  if (n <= 0) {
    return 0;
  } else if (n > 0) {
    return GulmiraTriesRecursion(arr, n - 1) + arr[n-1];
  }
}
console.log(GulmiraTriesRecursion([2, 3, 4, 5], 3)); //should get 9

//Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
console.log(lookUpProfile("Kristian", "lastName")); //should get Vos

//Generate Random Fractions with JavaScript
function randomFraction() {
  let result = 0;
  while (result === 0) {
    result = Math.random();
  }
  return result;
}
console.log(randomFraction());

//Generate Random Whole Numbers with JavaScript
let randomNumber0to19 = Math.floor(Math.random() * 20);
function randomWholeNumber() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber());

//Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(1, 100));

//parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56"));

//parseInt Function with a Radix
function convertToInteger(str){
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));
//should get 19

//Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
  }
  
  console.log(checkEqual(1, 2));

  //Multiple Conditional (Ternary) Operators
  function checkSign(num) {
    return num > 0 ? "positive"
      : num < 0 ? "negative"
      : "zero";
  }
  console.log(checkSign(10));

  //Recursion to Create a Countdown
  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }
  console.log(countdown(10));

  //Recursion to Create a Range of Numbers
  function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      let numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
  console.log(rangeOfNumbers(6, 9));