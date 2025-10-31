import Reuse from "./Reuse"

function Loop(){
    const userData=[
        {
            name:'Rony',
            age:23,
            email:'rohan@gmail.com',
            id:1
        },
        {
            name:'Sudeep',
            age:24,
            email:'sudeep@gmail.com',
            id:2
        },
        {
            name:'Praveen',
            age:25,
            email:'praveen@gmail.com',
            id:3
        },
    ]
    return(
        <div>
            <h1>Loop in JSX with Map Function</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <h1>Reuse Component in Loop</h1>
                {
                    userData.map((user)=>(
                        <div key={user.id}>
                            <Reuse data={user}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Loop