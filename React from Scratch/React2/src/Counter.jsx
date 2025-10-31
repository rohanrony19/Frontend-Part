import { useEffect } from "react";

export default function Counter({count,data}){
    const handleCount=()=>{
        console.log("handle called");
        
    }
    useEffect(()=>{
        handleCount();
        console.log("Mounting Phase only");
        
    },[])

    useEffect(()=>{
        console.log("Updating Phase only");
        
    },[count,data])

    useEffect(()=>{
        return()=>{
        console.log("Unmounting Phase only");
        } 
    },[])

    useEffect(()=>{
        console.log("Everything");
        
    })

    
    return(
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Value {data}</h1>
        </div>
    )
}