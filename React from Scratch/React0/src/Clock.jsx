import { useEffect, useState } from "react";


function Clock({colorr}){
    const[time,setTime] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return(
        <div>
            <h1 style={{color:colorr,backgroundColor:'#000',width:'120px',padding:'10px',borderRadius:"5px"}}>{time}</h1>
        </div>
    )
}

export default Clock