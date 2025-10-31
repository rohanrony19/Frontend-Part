import { useState } from "react";
import Clock from "./Clock";

function College() {
  const [fruit, setFruit] = useState("Apple");
  const [count, setCount] = useState(0);
  const [rCount, setRCount] = useState(10);
  const [Switch,setSwitch] = useState(true);
  const [color,setColor] = useState('green')

  const handleFunc = () => {
    setFruit("Banana");
  };
  return (
    <div>
      <h1>{fruit}</h1>
      <button onClick={handleFunc}>Change Fruit name</button>
      <hr/>
      <h1>Counter: {count}</h1>
      <h1>Reverse: {rCount}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setRCount(rCount - 1)}>remove</button>
      <button onClick={() => setSwitch(!Switch)}>switch</button>

      {
        Switch?<h1>ON</h1>:<h1>OFF</h1>
      }
       <hr/>
        <h1>Digital Clock</h1>
        <select onChange={(event)=>setColor(event.target.value)}>
            <option value={'red'}>Red</option>
            <option value={'blue'}>Blue</option>
            <option value={'orange'}>Orange</option>
            <option value={"green"}>Green</option>

        </select>
        <Clock color={color}></Clock>
      </div>
     
   
  );
}

export default College;
