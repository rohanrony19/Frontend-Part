// Javascript Fundamentals 

// 1. Variables & Data Types
let name = "rony";
let age = 23;
let isStudent = true;
const PI = 3.14;
let Undef = undefined;
let sym = Symbol("unique");
let bigInt = 1234567890987654322214;

console.log(`My name is : ${name}, I am ${age} years old \n `,isStudent,PI,Undef,sym,bigInt);
console.log(parseInt('100adjf000'));

// 2. Basic Math Operations
let a = 10;
let b = 5;

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);

// 3. Conditions
let marks = 85;

if(marks >= 90){
    console.log("Grade A");
}else if(marks >= 75){
    console.log("Grade B");
}else{
    console.log("Grade C");
}

// 4.Loops
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// 5."Positive" if it's above 0
// "Negative" if it's below 0
// "Zero" if it's 0 

let num = -1;
if(num==0){
    console.log("Zero");
}else if(num < 0){
    console.log("Negatiive")
}else{
    console.log("Positive")
}