import { useState } from 'react'
import Counter from './Counter.jsx'
import External from './External.jsx'
// import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState(10)
  const [display,setDisplay] = useState(true)

  return (
   <div>
      <h1 style={{color:"blue"}}>Inline Style using Reactjs</h1>
      {
         display?<Counter count={count} data={data}></Counter>:null
      }
      <button onClick={()=>setCount(count+1)}>Counter</button>
      <button onClick={()=>setData(data-1)}>Data</button>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      <External/>
   </div>
  )
}

export default App
