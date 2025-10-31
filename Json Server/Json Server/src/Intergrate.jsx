import { useEffect, useState } from "react";
export default function Integrate(){

    const [userData,setUserData] = useState([])
    useEffect(()=>{
        getUserData();
    },[])

    const getUserData = async()=>{
        const url="http://localhost:4000/users";
        let resp = await fetch(url);
        resp = await resp.json();
        console.log(resp);
        setUserData(resp)
        
    }
    return(
        <div>
           
            <h1>Integrate JSON Server API and Loader</h1>
            
            {
                userData.map((user)=>(
                    <ul className="user-list">
                        <li>{user.name}</li>
                    </ul>
                ))
            }
        </div>
    )
}