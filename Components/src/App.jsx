import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [counter,setCounter] = useState(0)
  
  return (
    
    <div>
      <Header/>
      <h1>Code Step by Step :{counter}</h1>
      <h1>Hello, React 19</h1>
      <button onClick={()=>setCounter(counter+1)}>Increase Counter Val</button>
    </div>
  )
}

function fruit(){
  return 2*8
}

export default App
