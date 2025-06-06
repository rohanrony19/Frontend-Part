//  Functions, Arrays, and Objects

// 5. Functions
function greet(namee){
    var course = "Python";
    let places = "Shimoga"
    console.log("Hello " + namee + "!")
    // console.log(course);
    // console.log(places);
}
course = "Java" // var can be reinitialized
places = "Bangalore" // let cannot be reinitialized
console.log(course);
console.log(places);
greet("Rony")

// 6. Create a function to multiply two numbers
function multiple(a,b){
    console.log("Multiple of " + a + " and " + b + " = " + (a*b));
}
multiple(5,6)

// 7. Arrays
let fruits = ["Apple", "Mango", "Peach", "Melons", "Papaya", "Orange","Strawberry" ];

console.log(fruits[2]);
console.log("Length : " + fruits.length);

fruits.push("Grape"); // Add at end
console.log(fruits);

// 8. Create an array of your 3 favorite movies and print them.
let movies = ["After","Fifty Shades","Malang","Kabir Singh"];

console.log(movies);

movies.push("Wolf of the wall street")
console.log(movies);
movies.reverse(movies)
console.log(movies);
const fruitsandmovies = fruits.concat(movies);
console.log(fruitsandmovies);

// 9. Objects
let person = {
 // key : value pairs
    name: "Rony",
    age: 22,
    isStudent: true
};

console.log(person.name);
console.log(person["age"]);

// 10. Create an object for a car with properties like brand, model, and year.
let car = {
    brand: "Mercedes",
    model: "v6",
    year:2024
}
console.log(car);
console.log(`Brand: ${car.brand}`);
console.log(car.model);
console.log(car["year"]);