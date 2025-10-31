import { useState } from "react";
import AddUser, { Display } from "./User";
import Obj from "./Obj";

export default function Lifting(){
    const [user,setUser] = useState('');
    return(
        <div>
            <AddUser setUser={setUser}/>
            <Display user={user}/>
            <Obj/>
            <hr/>
        </div>
    )
}