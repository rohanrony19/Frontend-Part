import { useState } from "react"
import UseToggle from "./UseToggle";
export default function Custom(){
    const[value,toggleValue] = UseToggle(true);
    const[data,setData] = UseToggle(true);
    return(
        <div>
            <button onClick={toggleValue}>Toggle Heading</button>
            <button onClick={()=>toggleValue(false)}>Hide Heading</button>
            <button onClick={()=>toggleValue(true)}>Show Heading</button>
            {
                value?<h1>custom hooks in Reactjs</h1>:null
            }
            <button onClick={setData}>Toggle Heading</button>
            <button onClick={()=>setData(false)}>Hide Heading</button>
            <button onClick={()=>setData(true)}>Show Heading</button>
            {
                data?<h1>Second Heading</h1>:null
            }
        </div>
    )
}