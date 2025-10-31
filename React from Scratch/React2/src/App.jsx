// import './App.css'

import { useState } from "react"
import Counter from "./Counter"
import UserProfile from "./UserProfie"
import StyledComp from "./StyledCompo"

function App() {
 const[count,setCount] = useState(0)
 const[data,setData] = useState(0)
 const[display,setDisplay] = useState(true)

  return (
    <div>
    <div>
      <h1>useEffect Hook</h1>
     
      <button onClick={()=>setCount(count+1)}>Counter: {count}</button>
      <button onClick={()=>setData(data+1)}>Data: {count}</button>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
       {
        display?<Counter count={count} data={data}/>:null
      }
      
    </div>
    <div>
      <h1 className="heading">Style with CSS Modules in ReactJS</h1>
      <div className={{display:'flex',flewWrap:'wrap'}}>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
      </div>
      <StyledComp/>
    </div>
    </div>
  )
}

export default App
