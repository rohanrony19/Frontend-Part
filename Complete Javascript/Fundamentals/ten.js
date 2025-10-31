// ES6 : Default parameter
function rollaDie(){
    return Math.floor(Math.random()*6)+1
}

//Spread Operator
const num1 = [1,2,3,4]
const num2 = [5,6,7,8,9]

const joinedArray = num1.concat(num2)
console.log(joinedArray);

const myName = 'Rony'
const joined = [...myName]
console.log(joined);

const user = {
    name: 'Rohan',
    age: 23
}
const updatedUser = {...user,city:'Bangalore'}
console.log(updatedUser);

const updatedUserNum = {...joinedArray,...updatedUser}
console.log(updatedUserNum);

//Rest Parameter
function sum(a,b,...number){
    let result = a+b;
    for(let num of number){
        result += num
    }
    return result
}
console.log(sum(1,2,3,4,5,6,7,8,9,10)); //55
console.log(sum(20,30)); //50

// Destructuring
const colors = ['red','green','yellow','pink','black']
const [color1,color2,color3] = colors
//      red,  green,  yellow
const[,,,color4] = colors // pink
const{4:color5}  = colors // black