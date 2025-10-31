// import './App.css'
import { Routes, Route, Navigate } from "react-router";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
function App() {
  return (
    <div>
      {/* <NavBar/> */}
        <Routes>

          <Route element={<NavBar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="user/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/users/list?" element={<UserList/>}/>/*optional segment */
            <Route path="/users/:id/:name?" element={<UserDetail/>}/>
          </Route>
          

          <Route path="/contact" element={<Contact/>}>
            <Route path="user">
            <Route index element={<Name/>}/> /*default... */
            <Route path="user/email" element={<Email/>}/>
            <Route path="user/numebrs" element={<Phone/>}/>
          </Route>
          </Route>

          <Route path="/*" element={<PageNotFound/>}/>
          {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
        </Routes>
      
    </div>
  );
}

export default App;
