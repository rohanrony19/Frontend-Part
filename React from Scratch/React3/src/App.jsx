import { useRef, useState } from "react";
import ForwardRef from "./ForwardRef";

function App() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  const userRef = useState();
  const passRef = useState();

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "enter password";
    inputRef.current.value = "123";
  };
  const toggleHandler = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  const h1Handler = () => {
    h1Ref.current.style.color = "green";
  };

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    console.log(user, password);
  };

  const handleFormRef=(event)=>{
    event.preventDefault()
    const user = userRef.current.value
    const password = passRef.current.value
    console.log(user,password);
    
  }

  return (
    <div>
      <h1>useRef</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input ref={inputRef} type="text" placeholder="enter name" />
      <button onClick={inputHandler}>Focus on Input field</button>
      <h1 ref={h1Ref}>Code</h1>
      <button onClick={h1Handler}>Handler</button>
      
      <hr/>
      <h1>Untrolled Component with querySelector</h1>
      <form action="" method="post" onSubmit={handleForm}>
      <input type="text" id="user" placeholder="enter username"/>
      <br/>
      <input type="password" id="password" placeholder="enter password"/>
      <br/>
      <button>Submit</button>
      </form>

      <hr/>
      <h1>Untrolled Component with useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
      <input type="text" ref-setter={userRef} placeholder="enter username"/>
      <br/>
      <input type="password" ref-setter={passRef} placeholder="enter password"/>
      <br/>
      <button>Submit</button>
      </form>
      <hr/>
      <ForwardRef/>
    </div>
  );
}

export default App;
