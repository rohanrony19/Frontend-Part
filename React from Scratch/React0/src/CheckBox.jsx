import { useState } from "react"
import Radio from "./Radio"

export default function CheckBox(){
    const[skills,setSkills] = useState([])
    const handleCheck=(event)=>{
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h1>CheckBox:Select your skills</h1>
            <label htmlFor="php">PHP</label>
            <input type="checkbox" onChange={handleCheck} id="php" value="Php" />
            <br/>
            <label htmlFor="java">Java</label>
            <input type="checkbox" onChange={handleCheck} id="java" value="Java"/>
            <br/>
            <label htmlFor="react">React</label>
            <input type="checkbox" onChange={handleCheck} id="react" value="React" />
            <br/>
            <h1>{skills.toString()}</h1>
            <hr/>
            <Radio/>
        </div>
    )
}