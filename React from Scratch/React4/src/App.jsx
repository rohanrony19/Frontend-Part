import { useState } from "react"
import Lifting from "./Lifting";

function App() {
  const[users,setUsers]=useState([])
  const[user,setUser]=useState('');
  const handleAddUSers=()=>{
    setUsers([...users,user])
  }
  const total = users.length;
  const last = users[users.length-1]
  const unique = [...new Set(users)].length
  return (
    <div>
      <h1>Derived state in React js</h1>
      <h2>Total users:{total}</h2>
      <h2>Last user: {last}</h2>
      <h2>Total Unique users: {unique}</h2>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user"/>
      <button onClick={handleAddUSers}>Add users</button>
      {
        users.map((item,index)=>(
          <h4 key={index}>{item}</h4>
        ))
      }
      <hr/>
      <Lifting/>
    </div>
  )
}

export default App
