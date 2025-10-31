import { useEffect, useState } from "react";
import "./App.css";
import UserList from "./UserList";
import { NavLink, Route, Routes } from "react-router";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";


function App() {
  
  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
      {/* <h1>Make Routes and Pages for Add User and User list UI</h1> */}
      
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<UserAdd/>}/>
        <Route path="/edit/:id" element={<UserEdit/>}/>

      </Routes>
    </div>
  )
}

export default App;
