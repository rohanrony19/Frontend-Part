import { Suspense, use } from "react";

const fetchData =()=>fetch('https://dummyjson.com/users').then((response)=>response.json());

const userResourse=fetchData();

export default function UseApi(){
    return(
        <div>
        <h1>use API in React js</h1>
        <Suspense fallback={<p>Loading...</p>}>
        <Users userResourse={userResourse}/>
        </Suspense>
        </div>
    )
}

const Users=({userResourse})=>{
    const userData = use(userResourse);
    console.log(userData.users);
    
    
    return(
        <div>
        <h1>Users list</h1>
        {
            userData?.users?.map((user)=>(
                <h1>{user.firstName}</h1>
            ))
        }
        </div>
    )
}