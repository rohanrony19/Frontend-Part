export default function AddUser({setUser}){
    return (
        <div>
            <h1>Add User</h1>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="enter user name" />
        </div>
    )
}

export const Display=({user})=>{
    return(
        <div>
            <h1>{user}</h1>
        </div>
    )
}