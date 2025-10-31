import College from "./College"

export function User(){
    function callFunc(){
        alert("function called")
    }

    const fruit=()=> {
        alert("apple")
    }
    const fruits=(name)=>{
        alert(name)
    }
    return(
        <div style={{color:"blue",border:"5px solid green"}}>
            <h1 style={{color:"red"}}>CLick event</h1>
            <h2>{fruit}</h2>
            <button onClick={()=>fruits("Apple")}>Apple</button>
            <button onClick={()=>fruits("Banana")}>Banana</button>
            <College/>
        </div>
    )
}

// export function userDetail({name,age,email}){
//     return(
//         <div>
//             <h1>Name : {name}</h1>
//             <h1>Age: {age}</h1>
//             <h1>email :{email}</h1>
//         </div>
//     )
// }