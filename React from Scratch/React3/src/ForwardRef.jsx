import { useRef } from "react";
import UserInput from "./UserInput";
import User, { FormStatus, Transition } from "./User";

function ForwardRef(){
    const inputRef = useRef(null);
    const updateInput=()=>{
        inputRef.current.value=1000;
        inputRef.current.focus();
        inputRef.current.style.color="red";
    }

    const displayName = (name)=>{
        alert(name)
    }

    const getUser=()=>{
        alert("get user function called")
    }
    return(
        <div>
            <h1>Forward Ref</h1>
            <UserInput ref={inputRef}/>
            <button onClick={updateInput}>Update Input</button>
            <hr/>
            <h1>Call parent component function from child component</h1>
            <User displayName={displayName} name="anil" getUser={getUser}/>
            <User displayName={displayName} name="sam" getUser={getUser}/>
            <User displayName={displayName} name="peter" getUser={getUser}/>
            <User displayName={displayName} name="bruce" getUser={getUser}/>
            <hr/>
            <FormStatus/>
            <hr/>
            <Transition/>
            
        </div>
    )
}

export default ForwardRef