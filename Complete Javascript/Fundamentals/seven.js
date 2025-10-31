// Loops

// while loop
let num = 0;
while(num < 10){
    console.log(num + " Hii");
    num++;
}

// for loop
let val = 5;
for(let num = 0 ; num <= 10; num++){
   console.log(val + " * " + num + " = " + (val*num));
}

//do-while loop
let i = 0;
do{
    console.log(i);
    i++;
}while(i<=10)

// Functions
function introduceMe(username,age,profession,bestfriend,salary){
    console.log(`My name is ${username} and Am ${age} years old`);
    console.log(`I am ${profession}`);
    console.log(`My Bestfriend is ${bestfriend || 'Raji'}`);
    console.log(`Salary: ${salary}`);
}
introduceMe("Rony",23,"Software Developer","",50000)

//Important : Hoisting

// 1.Variable Hoisting
console.log(myVar); //undefined
var myVar = 10;
console.log(myVar); //10

// 2.Function Hoisting
myFunction(); // Hello World
function myFunction(){
    console.log("Hello World");
}

// 3.Function Expression
// myFunctionExpression();// error
var myFunctionExpression = function(){
    console.log("Hiii");
}
myFunctionExpression(); //Hiii

// 4. Class hoisting
// let myClass = new Myclass();// error
class Myclass{
    constructor(){
        console.log("My class initialization");
    }
}
let myClass = new Myclass();

// Scopes: 

// Global Scope : A variable declared outside a function
const carId = 1;
let carName = "Benz"
var model = "Mercedes"

function myfunction(){
    console.log(carId + " " + model + " " + carName);
}
myfunction()

// Local Scope : Variables declared within a JavaScript function
function car(){
    var Name = "Lamborgini";
    console.log(Name);
}
car()
// console.log(Name);  code here can NOT use carName

// Function Scope : Variables defined inside a function are not accessible (visible) from outside the function.
function student(){
    const id = 1;
    let studentName = "Raji"
    var college = "PESITM"
    console.log(studentName);
}
// console.log(college); code here can NOT use
student()

// Block Scope : Variables defined inside a function are not accessible (visible) from outside the function expect var keyword
{
    let x = 2;
}
// x can NOT be used here
{
    var y = 4;
}
console.log(y);
// x can be used here
{
    const z = 6;
}
// x can NOT be used here

// Lexical Scope : Lexical Scope the accessibility of variables and functions depending on their location in the source code
function outerFunction(){
    let outerVar = 'I am from outer function';
    function innerFunction(){
        console.log(outerVar); // Accessing outerVar from innerFunction
    }
    innerFunction();
}
outerFunction();

// variable shadowing
let a = 10;

function testScope() {
  let a = 20;
  console.log("Inside function:", a);
}

testScope();
console.log("Outside function:", a);
//output : Inside function: 20
//         Outside function: 10

// Higher order function : These are functions that take other functions as arguments or return them.
// function within a function is known as higher oredr function
function greet(name) {
  return "Hello " + name; // Hello Rony
}

function processUserInput(callback) {
  const name = "Rony";
  console.log(callback(name));
}

processUserInput(greet);

//Create a function calculate(a, b, operation) that takes 2 numbers and a function (operation) that can be add/subtract/multiply.
// Step 1: Define operations
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

// Step 2: Higher-order function
function calculate(a, b, operation) {
  return operation(a, b);
}

// Step 3: Using the calculate function
console.log(calculate(10, 5, add));       // Output: 15
console.log(calculate(10, 5, subtract));  // Output: 5
console.log(calculate(10, 5, multiply));  // Output: 50
