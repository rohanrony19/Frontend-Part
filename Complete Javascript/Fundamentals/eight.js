// setTimeout function : Hello World is printed after 2 sec
function greet(name){
    console.log(`Hello ${name}`);
}
setTimeout(greet,2000,"world")

// setInterval function : Stops interval after 5 iteration, repeats it for specified interval
let counter = 0;
function incrementCounter(){
    counter++;
    console.log(`counter: ${counter}`);
    if(counter >= 5){
        clearInterval(IntervalId);
    }
}
const IntervalId = setInterval(incrementCounter,1000);

//Call stack
function multiple(a,b){
    return a*b;
}
function square(n){
    return multiple(n,n)
}
function printSquared(n){
    const Squared = square(n)
    console.log(Squared);
}
printSquared(5)

//Async Callback
console.log("Hi");
setTimeout(function(){
    console.log("there");
},5000)
console.log('JSConfEU');

//ES6 feature
const person = {
    namee: 'John',
    great(){
        return `Hello, my name is ${this.namee}`;
    }
};
person.great()

//Arrow function
const Square = (num) => {
    return num*num
}
Square(4);

const Squaree = (num) => num*num
Squaree(5)

setTimeout(()=>{
    console.log('hii');
},2000)

// setInterval(()=>{
//     console.log('hello');
// },1000)

// for of and for in
const Heroin = ['Sunny leone','Nora','Samantha','Kathrina','Tammana']
for(const heroin of Heroin){
    console.log(heroin);
}

const personn = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    city: "Bangalore"
} 
for(const key in personn){
    console.log(key,":",personn[key]);
}

//for each
const fruits = ['Banana','Apple','Mango','Peach']
fruits.forEach(function(fruit,index){
    console.log(fruit,index);
})
fruits.forEach((fruit)=>{
    console.log(fruit);
})
