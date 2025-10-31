import { useActionState } from 'react'
import './App.css'

export default function Vali(){
    const handleLogin=(prevData,formData)=>{
        let name=formData.get('name')
        let password=formData.get('password')
        let regex = /^[A-Z0-9]+$/i;

        if(!name || name.length>5){
            return{error:'Name cannot be empty or Name should not contain more then 5 charcters',name,password}
        }else if(!regex.test(password)){
            return{error:'Password can contain only numbers and alphabets',name,password}
        }else{
            return{message:'Login done',name,password}
        }
        
    }
    const [data,action,pending]=useActionState(handleLogin)
   
    
    return(
        <div>
            <h1>Validation with useActionState in React</h1>
            {
              data?.message && <span style={{color:'green'}}>{data?.message}</span>
            }
            {
              data?.error && <span style={{color:'red'}}>{data?.error}</span>
            }
            <form action={action}>
                <input defaultValue={data?.name} type='text'name='name' placeholder='enter user name'/>
                <br/><br/>
                <input defaultValue={data?.password} type='text' name='password' placeholder='enter user password'/>
                <br/><br/>
                <button>Login</button>
            </form>
        </div>
    )
}