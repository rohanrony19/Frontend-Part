import { Link, useParams } from "react-router";

export default function UserDetail() {
const ParamsData = useParams();
console.log(ParamsData.id)
  return (
    <div style={{ margin: "20" }}>
      <h1>User Detail</h1>
      <h2>User id is : {ParamsData.id}</h2>
      <h3><Link to="/users">Back</Link></h3>
    </div>
  );
}
