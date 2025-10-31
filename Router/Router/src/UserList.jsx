import { Link, Outlet } from "react-router";

export default function UserList() {
  const userData = [
    { id: 1, name: 'Rohan' },
    { id: 2, name: "Raji" },
    { id: 3, name: "Spandy" },
    { id: 4, name: "Sonia" },
    { id: 5, name: "Priya" },
    { id: 6, name: "Sonu" },
  ]
  return (
    
    <div style={{ margin: "20" }}>
      <h1>User List</h1>
      {
      userData.map((item) => (
        <div>
          <h4>
            <Link to={"/users/" + item.id}>{item.name}</Link>
          </h4>
        </div>
      ))
    }
     
      <h1>User List with name in url</h1>
      {
      userData.map((item) => (
        <div>
          <h4>
            <Link to={"/users/" + item.id + "/" + item.name }>{item.name}</Link>
          </h4>
        </div>
      ))
    }
      
    </div>
  )
}
