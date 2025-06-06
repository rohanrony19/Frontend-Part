// Mathematical Operation

let num1 = 20;
let num2 = 10;
console.log( num1 + " + " + num2 + " = " + (num1+num2));
console.log( num1 + " - " + num2 + " = " + (num1-num2));
console.log( num1 + " * " + num2 + " = " + (num1*num2));
console.log( num1 + " / " + num2 + " = " + (num1/num2));
console.log( num1 + " % " + num2 + " = " + (num1%num2));

// Exponentiation Operator
console.log( num1 + " ** " + num2 + " = " + (num1**num2)); //20 power 10

// Math function
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.pow(2,4));
console.log(Math.floor(2.94444)); //2 concentrate on left side 
console.log(Math.floor(-2.95)); //-3 concentrate on left side
console.log(Math.ceil(2.22));  //3  concentrate on right side
console.log(Math.ceil(-2.99));  //-2  concentrate on right side
console.log(Math.round(2.44)); //2  closer side
console.log(Math.round(-2.46)); //-2 closer side
console.log(Math.random()); // random value btw 0 and 1

// convert string to number and reverse
let width = '8'
let height = '5'
let val = 12345
console.log( +width * +height);
console.log(parseInt(width * height));
console.log(val.toString());

// Comparision Operator and Logical operator with Conditional Statement: if, else if, else
// ==, != , <, <=,, >, >=     and     &&, ||, !
let Value1 = 500;
let Value2 = 600;
if(Value1 == Value2 || Value1 === Value2){
    console.log("Equal to");
}else if(Value1 != Value2 && Value1 !== Value2){
    }if(Value1 < Value2 || Value1 <= Value2){
    console.log(" Not Equal to And Less than or Less than Equal to");
}else if(Value1 > Value2 || Value1 >= Value2 ){
    console.log("Greater than or Greater than Equal to");
}else{
    console.log("Nothing");
}

// Conditional Statement: Switch
const drinks = 'Whisky';
switch(drinks){
    case 'Beer':
        console.log("Its Beer");
        break;
    case 'Whisky':
        console.log("Its Whisky");
        break;
    case 'Rum':
        console.log("Its Rum");
        break;
    case 'Vodka':
        console.log("Its Vodka");
        break;
    case 'Taquila':
        console.log("Its Taquila");
        break;
    case 'Brandy':
        console.log("Its Brandy");
        break;
    default:
        console.log("No Drinks today");
}
    
//  Ternary Operator
let username = 5 > 2 ? 'true' : 'false';
console.log(username);