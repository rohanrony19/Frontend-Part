import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsersData(data.users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  return (
    <div>
      <h1>Fetch Data from API</h1>
      <ul className="user-list user-list-head">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>
      {usersData &&
        usersData.map((user) => (
          <ul className="user-list" key={user.id}>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))}
    </div>
  );
}

export default App;
