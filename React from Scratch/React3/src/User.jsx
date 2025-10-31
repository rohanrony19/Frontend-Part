import { useTransition } from "react";
import { useFormStatus } from "react-dom";

export default function User({displayname,name,getUser}){
    return(
        <div>
            <button onClick={()=>displayname(name)}>Display Name</button>
            <button onClick={()=>getUser()}>Get User</button>
        </div>
    )
}

export function FormStatus(){
    const handleSubmit=async()=>{
        await new Promise(res=>setTimeout(res,2000));
        console.log("Submit");
        
    }
    function CustomForm(){
        const {pending} = useFormStatus();
        console.log(pending);
    return(
        <div>
            <input type="text" placeholder="Enter Name"/><br/>
            <input type="text" placeholder="Enter Password"/><br/>
            <button disabled={pending}>{pending?'Submitting...':'Submitted'}</button>
        </div>
    )
}
return(
    <div>
        <h1>useFormStatus</h1>
        <form action={handleSubmit}>
            <CustomForm/>
        </form>
    </div>
)
}

export function Transition(){
    const[pending,startTransition]=useTransition();
    const handleButton=()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,5000))
        })
    }
    return(
        <div>
            <h1>UseTransition Hook</h1>
            {
                pending?
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null
            }
            <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    )
}