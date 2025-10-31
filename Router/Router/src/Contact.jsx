import { Link, NavLink, Outlet } from "react-router";

export default function Contact(){
    return<div className="college"style={{textAlign:"center"}}>
        <h1>Contact Details</h1>
        <Link to="/">Go back to Home</Link><br/>
        <NavLink className="link" to="">Name</NavLink>
        <NavLink className="link" to="user/email">Email</NavLink>
        <NavLink className="link" to="user/number">Phone No</NavLink>

        <Outlet/>
        
    </div>
}