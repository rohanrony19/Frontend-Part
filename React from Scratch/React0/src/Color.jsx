import { useState } from "react"
import Clock from "./Clock"

export default function Color(){
    const[color,setColor] = useState('green')
    return(
        <div>
            <h1>Digital Clock</h1>
            <select onChange={(event)=>setColor(event.target.value)}>
                <option value={"red"}>Red</option>
                <option value={"blue"}>Blue</option>
                <option value={"pink"}>Pink</option>
                <option value={"black"}>Black</option>
            </select>
            <Clock colorr={color}/>
        </div>
    )
}