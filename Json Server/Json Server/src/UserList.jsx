import { useEffect, useState } from "react";
import Integrate from "./Intergrate";
import { useNavigate } from "react-router";


function UserList() {

  const [usersData, setUsersData] = useState([]);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
    setLoading(true);
  }, []);

  async function getUserData() {
    try {
        const url = "https://dummyjson.com/users";
      const response = await fetch(url);
      const data = await response.json();
      setUsersData(data.users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  const deleteUser=async(id)=>{
    console.log(id);
    let response = await fetch(url+"/"+id,{
        method:'delete'  
    })
    response = await response.json();
    if(response){
        alert("deleted");
        getUserData();
    } 
    
  }

  const editUser=(id)=>{
    navigate("/edit/"+id)
  }

  return (
    <div>
        <Integrate/>
      <h1>Fetch Data from API</h1>

      <ul className="user-list user-list-head">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
        <li>Action</li>
      </ul>
      
      {
        !loading?
      usersData &&
        usersData.map((user) => (
          <ul className="user-list" key={user.id}>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
            <li>
                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                <button onClick={()=>editUser(user.id)}>Edit</button>
            </li>
          </ul>
        ))
        :<h1>Data Loading...</h1>
        }
    </div>
  );
}

export default UserList;
