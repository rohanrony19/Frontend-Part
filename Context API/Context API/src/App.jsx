// import './App.css'

import { useState } from "react"
import College from "./College"
import {SubjectContext} from "./ContextData.jsx"

function App() {
  const [subject,setSubject] = useState('');
  return (
    <div style={{backgroundColor:"yellow" ,padding:10}}>
      <SubjectContext.Provider value={subject}>
      <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="Science">Science</option>
        <option value="English">English</option>
      </select>
      <h1>Context API</h1>
      <button onClick={()=>setSubject('')}>Clear Subject</button>

      <College/>
      
      </SubjectContext.Provider>
    </div>
  
  )
}

export default App
