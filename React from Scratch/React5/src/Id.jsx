import { useId } from "react";

export default function Id(){
    const name = useId();
    const password = useId();
    const email = useId();
    const skills = useId();

    return(
        <div>
            <h1>useId Hook</h1>
            <form action="">
                <label htmlFor={name}>Enter Name:</label>
                <input type="text" id={name} placeholder="enter name" />
                <br/>
                <label htmlFor={password}>Enter Password:</label>
                <input type="text" id={password} placeholder="enter password" />
                <br/>
                <label htmlFor={email}>Enter Email:</label>
                <input type="text" id={email} placeholder="enter email" />
                <br/>
                <label htmlFor={skills}>Enter Skills:</label>
                <input type="text" id={skills} placeholder="enter skills" />
                <br/>
            </form>
        </div>
    )
}