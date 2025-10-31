//Map
const months = ['Jan','Feb','March','Apr','May','Jun','Jul','Aug']
months.map((month)=>{
    console.log(month);
    return month.toUpperCase()
})
console.log(months);

const capitalMonths = months.map((month,index)=>{
    console.log(index,month);
    return month.toUpperCase()
})
console.log(capitalMonths);

//Filter
const filteredMonths = months.filter((month,index,array)=>{
    console.log(month);
    console.log(month.length<=5);
    return month.includes('M')
})
console.log(filteredMonths);

const students = [
    {
        name: 'Akash',
        age:21
    },
    {
        name: 'Adarsh',
        age: 17
    },
    {
        name: "Amith",
        age: 18
    }
]
const maturedStudent = students.filter((student)=>{
    return student.age >= 18
}).map((students)=>{
    return students.name
}).filter((students)=>{
    return students.includes('m')
})
console.log(maturedStudent);

//Reduce
const nums = [1,1,2,1,1,1]
nums.reduce((accumulator,currentValue,i)=>{
    console.log(i,currentValue);
    console.log(accumulator);
    return 8
})

const Numbers = [1,2,3,4,5];
const sum = Numbers.reduce((accumulat,current)=>accumulat+current,0)
console.log(sum);

// Array
// some function : checks whether 1 item is true they wont check for others
const evenNumbers = [2,4,6,8]
const result = evenNumbers.some((num)=>{
    return num>4
})
console.log(result); // true

// every function : checks every element
const evenNumber = [0,2,10,4,61,8]
const results = evenNumber.every((numm)=>{
    return numm % 2 == 0
})
console.log(results); // false