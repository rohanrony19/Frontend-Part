import { useState } from "react"
import CheckBox from "./CheckBox"

export default function Form(){
    const[name,setName] = useState()
    const[pass,setPass] = useState()
    const[email,setEmail] = useState()
    return(
        <div>
            <h1>Controlled Component</h1>
            <form action="" method="get">
                <label>Name:</label>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="enter name"/>
                <br/><br/>
                <label>Password:</label>
                <input type="password" value={pass} onChange={(event)=>setPass(event.target.value)} placeholder="enter password"/>
                <br/><br/>
                <label>Email:</label>
                <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter email"/>
                <br/><br/>
                </form>
                <button>Submit</button>
                <button onClick={()=>{setName('');setPass('');setEmail('')}}>Clear</button>
                <h4>{name}</h4>
                <h4>{pass}</h4>
                <h4>{email}</h4>
                <hr/>
                <CheckBox/>
            
        </div>
    )
}