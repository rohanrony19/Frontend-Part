// Create an array of numbers. Print only those greater than 50.
const arr = [12,44,24,56,21,72,18,99,86,60]
for(let num of arr){
    if(num > 50){
        console.log(num);
    }
}

// Multi-Dimensional Array
const nameAge = [
    ['Rony',23,'Bangalore'],  
    ['Raji',24,'Sindanur'],    
    ['Spandy',25,'Chikmangalore'],
    ['Sania',26,'hydrabad']
]
console.log(nameAge[0][0]); // Rony
console.log(nameAge[0][2]); // Bangalore
console.log(nameAge[1][0]); // Raji
console.log(nameAge[3][0]) // Sania
console.log(nameAge[1][2]); // Sindanur

// Shallow Copy : it can be changed using original or shallowCopy
const original = {
    name: "Alice",
    details: {
        age: 25,
        city: 'switzerland'
    }
};
const ShallowCopy = original;
ShallowCopy.details.city = "Iceland"
console.log(ShallowCopy);
original.details.age = 26;
console.log(original);
const spreadOperator = {...original} // Spread Operator(...)
spreadOperator.details.city = "canada"
console.log(spreadOperator);


// Deep Copy using JSON method : it can't able to change the original object
const deepCopy = JSON.parse(JSON.stringify(original))
deepCopy.name = "Rony"
console.log(deepCopy); 
console.log(original);
