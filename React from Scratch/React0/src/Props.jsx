export default function Props({name,age,place}){
let collegeDetails = ['IIT','NIT','MIT','IET']
    return(
        <div>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Place: {place}</h2>
        <College names={collegeDetails}>
        <h4 style={{color:"red"}}>Hiii</h4>
        </College>

        </div>
    )
}

export function College({names}){
    return(
        <div style={{color:"green",border:"5px solid green",width:"300px"}}>
            <h2>{names+''}</h2>
            <h1>Hello World</h1>
        </div>
    )
}