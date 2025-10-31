import { useEffect } from "react"
import User from './User'

const Counter =({count,data})=>{
    useEffect(()=>{
        console.log("mounting phase only")
    },[])

    useEffect(()=>{
        console.log("update phase only")
    },[count,data])

    useEffect(()=>{
        return()=>{
        console.log("unmounting phase only")
        }
    },[]) 

    return(
        <div>
            <h1>Counter Value : {count}</h1>
            <h1>Data Value:{data}</h1>
            <h4>Hello World</h4>
            <hr/>
            <User/>

        </div>
    )
}
export default Counter