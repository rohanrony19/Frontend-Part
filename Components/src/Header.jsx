import { User, } from "./User";

function Header(){
    const name = "rony";
    const userDetails={
        name:"Rohan",
        age:23,
        email:"rohan@gmail.com"
    }
    const userArray =['sam','peter','brace'];
    let x = 20
    let y = 10
    const path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcX2BwtNyYs3ZXBPDMZCPxXiHqO83tUy6Mug&s"
    function fruit(){
        return "Apple"
    }
    function sum(a,b){
        return a+b;
    }
    function operation(a,b,op){
        if(op == "+"){
            return a+b
        }else if(op == "-"){
            return a-b
        }else{
            return "No Value inserted"
        }
    }

    return(
        <div>
            <h1>JSX with curly braces</h1>
            <h1>{name?name:"user not found"}</h1>
            <h1>{x*y}</h1>
            <h1>{userDetails.email}</h1>
            <h1>{userArray[0]}</h1>
            <h1>{fruit()}</h1>
            <h1>{sum(50,20)}</h1>
            <h4>{operation(900,400,"-")}</h4>
            <img src={path}></img>
            <User/>
            <div>
            <h1>Props in reactjs</h1>
            {/* <userDetail name="Rohan" age="23" email="rony@gmail.com"/> */}
            </div>
        </div>
    )
}

export default Header;