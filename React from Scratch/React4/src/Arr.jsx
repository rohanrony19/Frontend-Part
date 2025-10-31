import { useState } from "react";

export default function Arr() {
  const [data, setData] = useState([
   'anil','sam','raj','peter'
  ])

  const[dataDetails,setDataDetails] = useState([
    {name:'anil',age:'29'},
    {name:'sam',age:'25'},
    {name:'raj',age:'26'},
  ])
  

  const handleUser = (name) => {
   data[data.length-1] = name;
   console.log(data);
   setData([...data])
  };

  const handleAge = (age) => {
   dataDetails[dataDetails.length-1].age = age;
   console.log(dataDetails);
   setDataDetails([...dataDetails])
   
  };

  return (
    <div>
      <h1>Updating Array in State</h1>
      <input
        type="text"
        placeholder="update last username"
        onChange={(e) => handleUser(e.target.value)}
      />
      {
        data.map((name,index)=>(
            <h3 key={index}>{name}</h3>
        ))
      }
      <input
        type="text"
        placeholder="update Age"
        onChange={(event) => handleAge(event.target.value)}
      />
      {
        dataDetails.map((item,index)=>(
            <h3 key={index}>{item.age}</h3>
        ))
      }
      
    </div>
  );
}
