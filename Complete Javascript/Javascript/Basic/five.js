// Objects
const user = {
    firstName : 'Rohan',
    lastName : 'Prasad',
    age: 23,
    college: 'PESITM',
    address: {
        city: 'Shimoga',
        pincode: 577201,
        state: 'Karnataka'
    }
}

console.log(user.firstName);
console.log(user.address.city);
console.log(user.firstName + " " + user.lastName);
console.log(delete user.lastName);
user.middleName = 'N';
console.log(user);
Object.seal(user); // we can only update
Object.freeze(user); // we cannot do anything: add, update, delete
console.log('firstName' in user); // true

// function

function isEven(num){
    if(num % 2 == 0){
    console.log(true);
    }else{
        console.log(false);
    }
}
isEven(5);
isEven(2);

// Arrays and Array Methods

let Fruits = ["Apple", "Mango", "Peach", "Melons", "Strawberry" ,{isvargin : "true"}];
let values = [1,2,3,4,8,22,18,11]
console.log(Fruits[3]);
console.log(Fruits.length);
Fruits[3] = "Water Melons"
console.log(Fruits[Fruits.length] = 'Papaya');
console.log(Fruits[Fruits.length] = '{type: "Straight"}');
console.log(Fruits);
console.log(Fruits.pop());
console.log(Fruits);
console.log(Fruits.indexOf("Mango"))
console.log(Fruits.pop(4));
console.log(Fruits);

console.log(Fruits.shift()); // removes first element
console.log(Fruits.unshift("Apple")); // Adds element at starting
console.log(Fruits);
console.log(values.concat(Fruits));
console.log(Fruits.includes('Strawberry')); 
console.log(Fruits.reverse());
Fruits.shift();
console.log(Fruits);
values.sort()
console.log(values);

// ['Strawberry', 'Water Melons', 'Peach', 'Mango', 'Apple']
Fruits.slice(2,4); // starting index and ending index
// ['Strawberry', 'Water Melons'] = Rest of the deleted elements
console.log(Fruits);
// ['Peach', 'Mango', 'Apple'] = will print

// [1, 11, 18, 2, 22, 3, 4, 8]
values.splice(2,4,'Grapes'); // staring index to number of elements to remove and element to add
// [18, 2, 22, 3] = deleted
console.log(values)
// [1, 11, 4, 8]

console.log(values.concat(Fruits));
// [1, 11, Grapes, 4, 8, 'Peach', 'Mango', 'Apple']