import UserProfile from "./userProfile"

function App() {

  return (
    <>
    <h1 className="heading">Style with css module in React js</h1>
      <div className={{display:"flex", flexWrap:"wrap"}}>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      <UserProfile/>
      </div>
    </>
  )
}

export default App
