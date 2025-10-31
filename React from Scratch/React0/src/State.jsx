import { useState } from "react"
import Props from "./Props";
// state let you to create and update data inside component or state is a container used to store data like variables
// it re-render components automatically so that data can be visible on UI
export default function State(){
    const[count,setCount] = useState(0);
    const[car,setCar] = useState('Lamorghini')
    const[swtch,setSwitch] = useState(false)
    function updateCar(){
        setCar('Dodge Challenger')
    }
    
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <h4>{car}</h4>
            <button onClick={updateCar}>Change Car</button>
            <h4>{swtch}</h4>
            <button onClick={()=>setSwitch(!swtch)}>Toggle</button>
            {
                swtch?<h4>ON</h4>:<h4>OFF</h4>
            }
            <hr/>
            
            <Props name="Rohan" age="23" place="Bangalore"/>
            
        </div>
    )
}