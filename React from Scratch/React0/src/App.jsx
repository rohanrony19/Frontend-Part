import Form from "./Form";
import State from "./State";

function App() {
  const userName = "Rohan";
  const age = "";
  const x = 10;
  const y = 12;
  const place = "Bangalore";
  function handleClick() {
    alert("You clicked me");
  }

  function sum(a,b,op){
    if(op == '+'){
      return a+b;
    }else if(op == '-'){
      return a-b;
    }else if(op == '/'){
      return a/b
    }else if(op == '*'){
      return a*b
    }else{
      return 0;
    }
  }
  function Apple(){
    alert('Apple')
  }
  function Banana(){
    alert('Banana')
  }
  function Melon(){
    alert('Melon')
  }
  function Grapes(){
    alert('Grapes')
  }

    
    const userDetails = {
      name : 'Rony',
      email: 'rohan@gmail.com',
      number: '9353715968'
    }
  
    const userArray = ['rony','raji','sam','sonia']
    const path = 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630';

  
  return (
    <div>
      <div>
        <h1>Hello, Me Welcome to ReactJS</h1>
        <State />
        <h1 style={{ color: "red" }}>Red</h1>
        <h1>
          My name is {userName}, And Am {age ? age : x + y} year old, am from{" "}
          {place}
        </h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <hr/>
      <div>
        <h1>Object + Array</h1>
        <h1>{userDetails.email}</h1>
        <h1>Array: {userArray + ''}</h1>
        <img src={path} alt="" width='350px' height='200px' />
        <h1>sum : {sum(20,30,'*')}</h1>
      </div>
      <hr/>
      <div>
        <h1>onClick</h1>
        <button onClick={Apple}>Apple</button>
        <button onClick={Banana}>Banana</button>
        <button onClick={Melon}>Melon</button>
        <button onClick={Grapes}>Grapes</button>
      </div>
      <hr/>
      <Form/>
    </div>
  );
}

export default App;
