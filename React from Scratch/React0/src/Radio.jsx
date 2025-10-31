import { useState } from "react"
import Loop from "./Loop";
import Color from "./Color";

export default function Radio(){
    const[gender,setGender] = useState('');
    const[city,setCity] = useState('Delhi')
    return(
        <div>
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} value={'male'} name="gender" checked={gender=='male'}/>
            <br/>
            <label htmlFor="female">Female</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} value={'female'} name="gender" checked={gender=='female'}/>
            <br/>
            <h2>Selected Gender: {gender}</h2>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Delhi"}>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Shimoga">Shimoga</option>
                <option value="Davangere">Davangere</option>
            </select>
            <h2>Selected City:{city}</h2>
            <hr/>
            <Loop/>
            <hr/>
            <Color/>
        </div>
    )
}