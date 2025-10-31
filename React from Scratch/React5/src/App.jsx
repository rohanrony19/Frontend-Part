import { Fragment, useActionState } from "react";
import Id from "./Id";
import Custom from "./CustomHook";

function App() {
const handleSubmit = async(previous,formData)=>{
  let name = formData.get('name');
  let password = formData.get('password');
  await new Promise(res=>setTimeout(res,2000))
  console.log("handleSubmit called",name,password);
  if(name && password){
    return{message:'Data Submitted',name,password}
  }else{
    return{error:'Failed to submit. Enter proper data',name,password}
  }
  
}
const[data,action,pending] = useActionState(handleSubmit,undefined)
console.log(data);

  return (
    <Fragment>
      <h1>useActionState</h1>
      <form action={action}>
        <input type="text" placeholder="enter name" name="name" /><br/>
        <input type="text" placeholder="enter password" name="password" /><br/>
        <button disabled={pending}>Submit</button>
        <br/>
      </form>
      {
        data?.error&&<span style={{color:'red'}}>{data?.error}</span>
      }
      {
        data?.message&&<span style={{color:'green'}}>{data?.message}</span>
      }
      <h3>Name:{data?.name}</h3>
      <h3>Password:{data?.password}</h3>
      <hr/>
      <Id/>
      <hr/>
      <Custom/>
    </Fragment>
  )
}

export default App
