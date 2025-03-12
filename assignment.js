let age = 20;
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;

console.log("Age: ", age);
console.log("Birth Year: ", birthYear);

function f(x) {
  let k = x;
  console.log(k);
}
f(16);

let x = 12;
let y = 10;
console.log(x + y);
console.log(x - y);
console.log(x / y);

let str = "123";
let num = Number(str);
console.log(num);
str = String(num);
console.log(str);

let numCheck = 11;
if (numCheck % 2 === 1) {
  console.log("Odd");
} else {
  console.log("Even");
}

let checkAge = 66;
if (checkAge > 0 && checkAge < 13) {
  console.log("Child");
} else if (checkAge >= 13 && checkAge < 20) {
  console.log("Teenager");
} else if (checkAge >= 20 && checkAge < 45) {
  console.log("Adult");
} else {
  console.log("Senior");
}

let n = 11;
if (n > 0) {
  console.log("Positive");
} else if (n === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

let light = "Green";
switch (light) {
  case "Red":
    console.log("Stop");
    break;
  case "Yellow":
    console.log("Ready");
    break;
  case "Green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

 
let input = "";
while (input !== "stop") {
  input = prompt("Type 'stop' to exit:");
}

let i = 1;
do {
  console.log(5 * i);
  i++;
} while (i <= 10);


function greet() {
  let name = prompt("What's your name?");
  alert("Welcome, " + name);
}
greet();


function sum(a, b) {
  return a + b;
}
let s = sum(33, 3);
console.log(s);

function rMax(numbers) {
  return Math.max(...numbers);
}
let m = rMax([1, 22, 3, 4, -1, 3]);
console.log(m);


const greet = () => {
  let name = prompt("What's your name?");
  alert("Welcome, " + name);
};
greet();

const findLongString = (words) => words.find((word) => word.length > 5);
console.log(findLongString(["apple", "bana", "cat", "elephant"]));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sumArr = 0;
for (let num of arr) {
  sumArr += num;
}
console.log(sumArr);

let longest = "";
let names = ["ali", "abdullah", "ahmad", "industrialization"];
for (let name of names) {
  if (name.length > longest.length) {
    longest = name;
  }
}
console.log(longest);

const removeDuplicates = (numbers) => {
  let uniqueNumbers = new Set(numbers);
  return [...uniqueNumbers];
};
console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5, 6, 1]));
