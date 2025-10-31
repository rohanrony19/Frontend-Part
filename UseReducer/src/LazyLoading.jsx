import { lazy, Suspense, useState } from "react"
// import User from "./USer"
const User = lazy(()=>import('./USer'))

export default function LazyLoading(){
    const [load,setLoad] = useState(false)
    return(
        <div>
            
            <h1>Lazy Loading</h1>
            {
                load?<Suspense fallback={<h3>loading...</h3>}><User/></Suspense>:null
            }
            <button onClick={()=>setLoad(true)}>Load User</button>
        </div>
    )
}